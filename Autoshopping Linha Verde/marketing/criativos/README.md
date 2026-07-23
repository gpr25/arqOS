# Criativos — Autoshopping Linha Verde

Repositório de peças de mídia paga (Meta + Google). **Todo criativo novo entra aqui**, nunca na raiz da pasta da empresa.

## Estrutura

```
marketing/criativos/
├── README.md                          → esta convenção
├── AAAA-MM_<nome-do-lote>/            → um lote = uma entrega do designer
│   ├── 4x5/                           → 1080x1350 — feed Meta (formato primário)
│   ├── 9x16/                          → 1080x1920 — Stories/Reels
│   ├── 1x1/                           → 1080x1080 — só se o lote tiver
│   └── editaveis/                     → .psd/.ai originais
└── analises/
    └── AAAA-MM-DD_analise-lote-<lote>.md
```

**Por que lote → formato, e não lote → objetivo:** o formato é imutável (o arquivo nasce 4x5 e morre 4x5); o objetivo pode mudar quando a peça é remanejada de ad set. Objetivo vive no nome do arquivo, que é barato de renomear.

## Nomenclatura

```
AAAA-MM_NN_<objetivo>_<angulo>_<formato>.png
```

| Campo | Regra | Exemplo |
|---|---|---|
| `AAAA-MM` | mês do lote (não da veiculação) | `2026-07` |
| `NN` | número da peça dentro do lote, 2 dígitos | `03` |
| `objetivo` | destino Meta pela **regra dos três destinos** (Seção 4 do arquivo mestre) | `recon` · `site` · `lojista` |
| `angulo` | tema/segmento em kebab-case, sem acento | `suv-sedan-seguranca-filhos` |
| `formato` | `4x5` · `9x16` · `1x1`. Omitido no `.psd` (é a fonte dos dois). | `4x5` |

Exemplo: `2026-07_03_site_suv-sedan-seguranca-filhos_4x5.png`

**Objetivos válidos** (espelham o roteamento de criativo já definido para a conta):

| Slug | Destino Meta | Quando |
|---|---|---|
| `recon` | Reconhecimento (geo broad) | marca/institucional Autoshopping |
| `site` | Ofertas Site MOF/BOF | oferta de veículo ou categoria → página filtrada de estoque |
| `lojista` | Lojistas (Engajamento/CTWA) | conteúdo institucional de um lojista específico |

Se a peça for do Google (Display/Demand Gen), usar `gads` como objetivo e anotar no lote.

## Como adicionar um lote novo

1. Criar `AAAA-MM_<nome-do-lote>/` com as subpastas de formato que o lote tiver.
2. Jogar os arquivos crus dentro. **Não precisa renomear na mão** — pedir a análise e a renomeação em conversa.
3. Rodar o agente `analisador-criativos` **antes de subir qualquer peça**. A análise vai para `analises/`.
4. Nenhuma peça sobe sem passar pela Camada 0 do agente (erros objetivos: ortografia, safe zone, marca de terceiros, política de plataforma).

## Especificações de formato (Meta)

| Formato | Dimensão | Safe zone |
|---|---|---|
| Feed 4:5 | 1080x1350 | margem interna de ~60px em todos os lados |
| Stories/Reels 9:16 | 1080x1920 | **topo 250px e base 340px são cobertos pela UI** — nada de CTA, selo ou texto essencial ali |

A base de 340px em Stories é o erro mais recorrente do lote de julho/26 — conferir sempre.

## Histórico de lotes

| Lote | Peças | Formatos | Análise | Status |
|---|---|---|---|---|
| `2026-07_estaticos-jul-ago` | 7 conceitos | 4x5 + 9x16 + psd | [2026-07-22](analises/2026-07-22_analise-lote-2026-07.md) | 🔴 3 bloqueios antes de subir |
