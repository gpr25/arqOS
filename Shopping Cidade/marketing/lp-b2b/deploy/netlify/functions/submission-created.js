// submission-created.js
// O Netlify dispara esta função AUTOMATICAMENTE toda vez que o formulário
// da LP recebe um envio (nome da função reservado: "submission-created").
//
// Ela pega o lead e manda para a API do CV CRM (Construtor de Vendas).
// Se as variáveis de ambiente do CVCRM ainda NÃO estiverem configuradas,
// a função apenas registra o lead no log e sai sem erro — ou seja, a LP
// pode ir ao ar hoje e os leads já ficam salvos no painel do Netlify;
// quando você configurar o CVCRM, o encaminhamento passa a acontecer sozinho.
//
// Variáveis de ambiente a configurar no Netlify (Site settings > Environment variables):
//   CVCRM_SUBDOMINIO  -> ex: "shoppingcidade" (o pedaço antes de .cvcrm.com.br)
//   CVCRM_EMAIL       -> e-mail do usuário que gerou o token
//   CVCRM_TOKEN       -> token gerado no CVCRM (NUNCA colocar aqui no código)
//   CVCRM_ORIGEM      -> código de origem de 2 letras (ex: "SI"); opcional, padrão "SI"

exports.handler = async (event) => {
  try {
    const payload = JSON.parse(event.body || '{}').payload || {};
    const d = payload.data || {};

    const sub = process.env.CVCRM_SUBDOMINIO;
    const email = process.env.CVCRM_EMAIL;
    const token = process.env.CVCRM_TOKEN;
    const origem = process.env.CVCRM_ORIGEM || 'SI';

    // Sem credenciais: não faz nada (lead segue salvo no Netlify Forms).
    if (!sub || !email || !token) {
      console.log('CVCRM ainda nao configurado. Lead recebido:', d.nome, d.whatsapp);
      return { statusCode: 200, body: 'ok (sem cvcrm)' };
    }

    // Só os campos documentados da API do CVCRM.
    // Os campos de qualificação (segmento, momento, tempo, site) continuam
    // 100% disponíveis no painel do Netlify Forms e na notificação por e-mail.
    const body = {
      nome: d.nome || 'Sem nome',
      telefone: String(d.whatsapp || '').replace(/\D/g, ''),
      telefone_ddi: '+55',
      origem: origem,
      modulo: 'LP Locacao B2B',
      permitir_alteracao: true,
    };

    const resp = await fetch(`https://${sub}.cvcrm.com.br/api/v1/comercial/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        email: email,
        token: token,
      },
      body: JSON.stringify(body),
    });

    const txt = await resp.text();
    if (!resp.ok) {
      console.error('CVCRM respondeu erro', resp.status, txt);
      // Não devolvemos erro para não "perder" o lead: ele já está no Netlify.
      return { statusCode: 200, body: 'cvcrm falhou, lead salvo no netlify' };
    }

    console.log('Lead enviado ao CVCRM com sucesso:', resp.status);
    return { statusCode: 200, body: 'ok' };
  } catch (e) {
    console.error('Erro na funcao submission-created:', e);
    return { statusCode: 200, body: 'erro tratado' };
  }
};
