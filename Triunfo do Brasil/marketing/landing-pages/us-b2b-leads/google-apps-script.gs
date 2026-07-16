/**
 * Triunfo — US B2B Lead Gen LP — Google Sheets webhook
 *
 * Setup: Extensions -> Apps Script (from inside the target Google Sheet),
 * paste this file's content, then Deploy -> New deployment -> Web app.
 * Full step-by-step in README.md.
 */

var SHEET_NAME = "Leads"; // change to match the tab name in your template

function doPost(e) {
  var p = e.parameter;

  // Basic server-side honeypot check — mirrors the client-side one, since
  // a bot could POST directly to this URL and skip the page entirely.
  if (p["company-website"]) {
    return ContentService.createTextOutput(JSON.stringify({ result: "ignored" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

  var country = p["Country"] === "Other" ? (p["Country (Other)"] || "Other") : (p["Country"] || "");

  // Column order must match the header row in the "Leads" tab:
  // Timestamp | Full Name | Company Name | Business Email | Country |
  // Product Interest | Message | UTM Source | UTM Medium | UTM Campaign |
  // UTM Term | UTM Content | GCLID | FBCLID | Referrer
  sheet.appendRow([
    new Date(),
    p["Full Name"] || "",
    p["Company Name"] || "",
    p["Business Email"] || "",
    country,
    p["Product Interest"] || "",
    p["Message"] || "",
    p["UTM Source"] || "",
    p["UTM Medium"] || "",
    p["UTM Campaign"] || "",
    p["UTM Term"] || "",
    p["UTM Content"] || "",
    p["GCLID"] || "",
    p["FBCLID"] || "",
    p["Referrer"] || ""
  ]);

  // Relay a server-side Meta "Lead" event (Conversions API). Deduplicated
  // against the browser Pixel via the shared event_id. Wrapped so any CAPI
  // failure never affects the lead being saved above.
  try {
    sendMetaCapi(p);
  } catch (capiErr) {
    // swallow — the Sheet row is the source of truth
  }

  return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Meta Conversions API (CAPI) — sends a server-side "Lead" event.
 *
 * Configure once via Project Settings -> Script properties:
 *   META_CAPI_TOKEN  = the Conversions API access token (keep it here, never
 *                      in the landing-page code or the repo)
 *   META_DATASET_ID  = 903988453820396
 *
 * If either property is missing, this no-ops silently, so the lead pipeline
 * keeps working even before CAPI is configured.
 */
function sendMetaCapi(p) {
  var props = PropertiesService.getScriptProperties();
  var token = props.getProperty("META_CAPI_TOKEN");
  var datasetId = props.getProperty("META_DATASET_ID");
  if (!token || !datasetId) { return; }         // not configured yet
  if (!p["meta_event_id"]) { return; }          // no id to dedup against — skip

  var fullName = (p["Full Name"] || "").trim();
  var firstName = "", lastName = "";
  if (fullName) {
    var parts = fullName.split(/\s+/);
    firstName = parts.shift();
    lastName = parts.join(" ");
  }

  var userData = {};
  if (p["Business Email"]) { userData.em = [sha256(p["Business Email"])]; }
  if (firstName) { userData.fn = [sha256(firstName)]; }
  if (lastName) { userData.ln = [sha256(lastName)]; }
  if (p["fbp"]) { userData.fbp = p["fbp"]; }
  if (p["fbc"]) { userData.fbc = p["fbc"]; }
  if (p["client_user_agent"]) { userData.client_user_agent = p["client_user_agent"]; }

  var event = {
    event_name: "Lead",
    event_time: Math.floor(Date.now() / 1000),
    event_id: p["meta_event_id"],
    action_source: "website",
    event_source_url: p["event_source_url"] || "",
    user_data: userData,
    custom_data: {
      content_name: "RFQ - US B2B Landing Page",
      content_category: p["Product Interest"] || ""
    }
  };

  var body = { data: [event] };

  // Optional: while testing, set the script property META_TEST_EVENT_CODE to
  // the code shown in Events Manager -> Test events. Server events then show up
  // live in that tab. REMOVE the property for production so events count
  // normally instead of being flagged as test traffic.
  var testCode = props.getProperty("META_TEST_EVENT_CODE");
  if (testCode) { body.test_event_code = testCode; }

  var url = "https://graph.facebook.com/v21.0/" + datasetId +
            "/events?access_token=" + encodeURIComponent(token);

  UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(body),
    muteHttpExceptions: true
  });
}

/** SHA-256 hex of a normalized (trimmed, lowercased) value — Meta's required
 *  format for PII in user_data (email, first/last name). */
function sha256(value) {
  if (!value) { return null; }
  var norm = String(value).trim().toLowerCase();
  var bytes = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256, norm, Utilities.Charset.UTF_8);
  return bytes.map(function (b) {
    var v = (b < 0 ? b + 256 : b).toString(16);
    return v.length === 1 ? "0" + v : v;
  }).join("");
}
