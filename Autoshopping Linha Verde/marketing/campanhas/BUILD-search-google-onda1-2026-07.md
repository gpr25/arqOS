# BUILD DEFINITIVO — GOOGLE SEARCH · LANÇAMENTO · AUTOSHOPPING LINHA VERDE

> **v3 · 23/07/2026 · campanhas montadas + conversão no ar. Falta robots.txt e ativar — ver §7.**
> Decisões e raciocínio em [ANALISE-search-google-validacao-2026-07-23.md](ANALISE-search-google-validacao-2026-07-23.md).
> **Decisões travadas com Gabriel (23/07):** verba Aquisição ~R$450/dia · lançar já em Maximizar
> Cliques · conversão nova construída em paralelo (não reusar nada da gestão antiga) · Financiamento
> fora · Modelo adiado (largar por carroceria) · SUV é prioridade · copy premium (ticket 120–150k).

---

## 0. CONFIG GLOBAL (aplicar em TODA campanha)

| Config | Valor |
|---|---|
| Tipo | **Rede de Pesquisa** apenas |
| Rede | **Parceiros de pesquisa: OFF** · **Display expansion: OFF** |
| Local | **Curitiba + RMC** · segmentação **"Presença: pessoas que estão ou frequentam"** |
| Ajuste de lance | **+25% em Curitiba** (adicionar "Curitiba, Paraná" como local separado das cidades da RMC) |
| Idioma | Português |
| Lance | **Maximizar Cliques**, **sem CPC máximo** (vigiar CPC — teto só entra se inflar, com dado) |
| Conversão | **Não anexar meta agora.** Bidding é por clique. A conversão nova (do zero) entra depois e vira a primária da conta — §6 |
| Sufixo de URL | `utm_source=google&utm_medium=cpc&utm_campaign=inst` (Institucional) / `...=aquisicao` (Aquisição) |
| Status ao criar | **PAUSADA** |

**Cidades da RMC:** São José dos Pinhais, Colombo, Pinhais, Araucária, Almirante Tamandaré, Campo
Largo, Piraquara, Fazenda Rio Grande, Quatro Barras, Campina Grande do Sul. *(Ou raio de 40 km +
Curitiba cidade com +25%.)*

**Correspondência (regra do lançamento):** **Frase** como base + **Exata** nos termos-topo.
**Nada de Ampla.** Regra de ouro da verba: **nunca afrouxar match pra forçar gasto** — se não gastar,
é teto de demanda, não fracasso.

**Medição no lançamento (sem conversão ainda):** cliques · CPC · CTR · **qualidade dos termos de
busca** · sessões GA4 (utm_source=google). Número de *lead* limpo só quando a conversão nova (§6) subir.

---

## 1. `[Search] Institucional` — ~R$26/dia (~R$800/mês)

> Papel: defender a marca + conquistar concorrente. **Habilita matar a PMax.**

### Grupo 1.1 — Marca (defesa) · destino `https://autoshoplinhaverde.com.br/m`
```
[autoshopping linha verde]
[auto shopping linha verde]
"autoshopping linha verde"
"auto shopping linha verde"
"autoshop linha verde"
"linha verde seminovos"
"linha verde veículos"
"linha verde carros"
```

### Grupo 1.2 — Conquesting · destino `https://autoshoplinhaverde.com.br/m`
⚠️ **Nunca citar o concorrente no texto do anúncio** (marca de terceiro). Verba baixa, Frase, vigiar.
```
"auto shopping curitiba"
"autoshopping curitiba"
"rotta 8 veículos"
"roggia automóveis"
"máximo veículos curitiba"
"autoban veículos"
"prime veículos curitiba"
"belloscar"
"localiza seminovos curitiba"
"webmotors curitiba"
```

### RSA Institucional (grupo Marca) — fixar "Autoshopping Linha Verde" na posição 1
Títulos:
```
Autoshopping Linha Verde
Site Oficial | Linha Verde
+1.000 Seminovos em Curitiba
23 Lojas num Só Lugar
Seminovos com Procedência
Veja o Estoque Online
Curitiba e Região
Agende sua Visita Hoje
Estoque Renovado Todo Dia
SUVs, Sedãs e Picapes
```
Descrições:
```
Mais de 1.000 seminovos com procedência em 23 lojas. Veja o estoque e fale no WhatsApp.
23 lojas, um só endereço. O maior giro de seminovos de Curitiba. Agende sua visita.
Estoque renovado todos os dias, em um só lugar em Curitiba. Confira agora.
Sua troca avaliada na hora e financiamento facilitado. Visite o Linha Verde.
```
**Grupo Conquesting:** usar o **banco genérico** do Aquisição (§2), **sem citar concorrente**.

---

## 2. `[Search] Aquisição` — ~R$450/dia (~R$13,5k/mês) · 6 grupos

> Orçamento único de campanha; os 6 grupos dividem. **SUV é o grupo-dinheiro** (maioria do estoque):
> se o Genérico começar a canibalizar a verba do SUV, **separar SUV em campanha própria.**
> Copy: **procedência, qualidade, variedade — nunca "barato".**

### 2.1 Genérico Local · `.../m`
```
[seminovos curitiba]
[carros usados curitiba]
"seminovos curitiba"
"seminovos em curitiba"
"carros seminovos curitiba"
"carro seminovo curitiba"
"carros usados curitiba"
"comprar carro curitiba"
"loja de carros curitiba"
"revenda de carros curitiba"
```

### 2.2 SUV ⭐ · `.../m/carroceria/suv`
```
[suv seminovo curitiba]
"suv seminovo curitiba"
"suv seminova curitiba"
"suv usada curitiba"
"suv usado curitiba"
"comprar suv curitiba"
"suv seminova"
```

### 2.3 Sedan · `.../m/carroceria/sedan`
```
[sedan seminovo curitiba]
"sedan seminovo curitiba"
"sedan usado curitiba"
"carro sedan curitiba"
"comprar sedan curitiba"
```

### 2.4 Hatch · `.../m/carroceria/hatch`
```
[hatch seminovo curitiba]
"hatch seminovo curitiba"
"hatch usado curitiba"
"carro hatch curitiba"
"comprar hatch curitiba"
```

### 2.5 Picape (Caminhonete) · `.../m/carroceria/caminhonete`
```
[caminhonete usada curitiba]
"caminhonete usada curitiba"
"caminhonete seminova curitiba"
"picape usada curitiba"
"picape seminova curitiba"
"comprar caminhonete curitiba"
```

### 2.6 Eletrificados / BYD · `.../m/combustivel/El%C3%A9trico`
**URL a nível de keyword para híbrido:** `.../m/combustivel/H%C3%8DBRIDO`
```
"carro elétrico curitiba"            → elétrico
"carro elétrico seminovo"            → elétrico
"comprar carro elétrico curitiba"    → elétrico
"byd curitiba"                       → elétrico
"byd seminovo curitiba"              → elétrico
"carro híbrido curitiba"             → HÍBRIDO (URL de keyword)
"carro híbrido seminovo"             → HÍBRIDO (URL de keyword)
"comprar carro híbrido curitiba"     → HÍBRIDO (URL de keyword)
```

### RSA Aquisição — banco compartilhado + específico por grupo

**Banco (títulos, usar em todos):**
```
Autoshopping Linha Verde
+1.000 Seminovos em Curitiba
23 Lojas num Só Lugar
Seminovos com Procedência
Financiamento Facilitado
Sua Troca Vale Mais Aqui
Estoque Renovado Todo Dia
Curitiba e Região
Agende sua Visita Hoje
Fale com a Loja no WhatsApp
```

**Títulos específicos por grupo (somar ao banco → ~15):**
| Grupo | Títulos específicos |
|---|---|
| Genérico | `Carros Seminovos em Curitiba` · `O Carro Certo pra Você` · `Maior Giro de Seminovos` · `Qualidade e Procedência` · `Ver Estoque Completo` |
| SUV ⭐ | `SUVs Seminovas em Curitiba` · `SUVs de Todas as Marcas` · `Compre sua SUV Seminova` · `SUV Revisada e Garantida` · `SUV com Procedência` |
| Sedan | `Sedans Seminovos Curitiba` · `Sedans de Todas as Marcas` · `Compre seu Sedan` · `Sedan Revisado e Garantido` · `Sedan com Procedência` |
| Hatch | `Hatchs Seminovos Curitiba` · `Hatch pra Cidade` · `Compre seu Hatch` · `Hatch Revisado e Garantido` · `Hatch de Todas as Marcas` |
| Picape | `Caminhonetes Seminovas` · `Picape com Procedência` · `Picapes de Todas as Marcas` · `Compre sua Caminhonete` · `Picape Revisada e Garantida` |
| Eletrificados | `Carros Elétricos Curitiba` · `Elétricos e Híbridos` · `BYD e Muito Mais` · `Seminovos Eletrificados` · `O Futuro em Curitiba` |

**Descrições (usar 4 por grupo):**
```
Mais de 1.000 seminovos com procedência em 23 lojas. Encontre o seu e fale no WhatsApp.
Financiamento facilitado e sua troca avaliada na hora. Visite o Linha Verde.
Procedência, revisão e o maior estoque da região. Agende sua visita em Curitiba.
23 lojas, um só endereço. O carro certo, com qualidade e sem rodar a cidade.
```
*(Eletrificados: trocar a 3ª por "Elétricos e híbridos com procedência em Curitiba. Confira o estoque.")*

---

## 3. RECURSOS (assets)

**Sitelinks (4):** Ver Estoque Completo `/m` · SUVs Seminovas `/m/carroceria/suv` ·
Sedans `/m/carroceria/sedan` · Elétricos e Híbridos `/m/combustivel/El%C3%A9trico`

**Callouts:** `23 lojas num só lugar` · `+1.000 veículos` · `Procedência garantida` ·
`Financiamento facilitado` · `Sua troca vale mais` · `Estoque renovado diariamente`

**Snippet estruturado** — cabeçalho "Tipos": `SUV, Sedã, Hatch, Picape, Elétrico, Híbrido`

**Chamada (call):** NÃO adicionar (direcionar pro site/form → WhatsApp da loja).

---

## 4. NEGATIVAS (lista compartilhada "NEG - Autoshopping Base", aplicar nas 2 campanhas)
```
peças, peça, autopeças, acessórios, conserto, oficina, mecânica, mecânico, retífica, funilaria,
pintura, aluguel, alugar, locação, locadora, aluga-se, concurso, emprego, vaga, salário, curso,
cnh, autoescola, tabela fipe, fipe, valor fipe, jogos, jogo, gta, forza, miniatura, miniaturas,
hot wheels, controle remoto, rebaixado, adesivo, som automotivo, insulfilm, seguro auto, ipva,
detran, licenciamento, multa, leilão, leilao, sucata, batido, sinistro, salvado, capotado,
documentação, dpvat, grátis, gratis, download, pdf, significado, wallpaper, papel de parede,
desenho, colorir
```
**Só na Aquisição (marketplaces navegacionais):** `olx, mercado livre, mercadolivre, webmotors, icarros, napista, usadosbr`
**NÃO negativar:** `0km` (há novos no estoque), nomes de marca/modelo, `financiamento`.

---

## 5. VERBA
| Campanha | Dia | Mês |
|---|---|---|
| Institucional | ~R$26 | ~R$800 |
| Aquisição | ~R$450 | ~R$13.500 |
| **Total lançamento** | **~R$476** | **~R$14.300** |
| Reserva do budget Google | — | ~R$7.700 (escala conforme CPC/termos) |

---

## 6. ✅ CONVERSÃO NOVA — **CONCLUÍDA 23/07/2026, 16:54**

**Objetivo (atingido):** ações de conversão **limpas, do zero**, sem nada da gestão antiga.
**Correção (23/07 · Gabriel):** a **PRIMÁRIA é o FORMULÁRIO do site** (lead quente). WhatsApp conta,
mas **secundária** (peso menor). Medidas **separadas**. Só a primária otimiza; a secundária é observação.

### 6.1 — ✅ Duas ações de conversão criadas (IDs reais)

| Ação | Categoria | Papel | ID de conversão | Rótulo |
|---|---|---|---|---|
| `Lead - Formulário Site` | Enviar formulário de lead | **PRIMÁRIA** | `988689617` | `w2iFCMbErdUcENHpuNcD` |
| `Contato - WhatsApp` | Contato | **Secundária** | `988689617` | `kELSCMnErdUcENHpuNcD` |

Contagem: **Uma** · Valor: **mesmo valor para todas as conversões** (valor dinâmico não é necessário
para lead; entra só na migração pro lance por valor — §6.4).

### 6.2 — ✅ GTM · container `GTM-KVLGK4D` · **Versão 169** publicada 23/07 16:54

Container **já estava instalado no site** — feito **100% no GTM, sem depender da Revenda Mais**.
Fonte do setup versionada: [gtm-import-conversoes-KVLGK4D.json](gtm-import-conversoes-KVLGK4D.json)
(export importável: Admin → Importar contêiner → *Mesclar em novo espaço de trabalho*).

**8 itens adicionados** (nada existente foi alterado ou excluído):

| Item | Tipo | Dispara em |
|---|---|---|
| `Vinculador de conversoes` | Conversion Linker | All Pages - PV |
| `HTML - alert lead ok` | HTML personalizado | All Pages - PV |
| `GAds Conv - Formulario` | Conversão Google Ads (primária) | CE - lead_form_ok |
| `GAds Conv - WhatsApp` | Conversão Google Ads (secundária) | Click - WhatsApp |
| `All Pages - PV` | Acionador (pageview) | — |
| `CE - lead_form_ok` | Acionador (evento personalizado) | — |
| `Click - WhatsApp` | Acionador (clique em link, regex de URL — ver JSON) | — |
| `Click URL` + `Click Element` | Variáveis integradas | — |

**Método do formulário** — o site **não tem página de obrigado**: o sucesso é um **`alert()` nativo**
("Seu contato foi enviado com sucesso"). Solução: a tag `HTML - alert lead ok` sobrescreve
`window.alert`; se a mensagem contém "enviado com sucesso" → `dataLayer.push({event:'lead_form_ok'})`.
Só dispara no **sucesso real** (não em erro de validação) → **sem over-count**.

**WhatsApp:** o botão é link real (`api.whatsapp.com/send?phone=...`) — confirmado no Preview,
o gatilho de *Apenas Links* pega.

### 6.3 — ✅ Validação (GTM Preview, 23/07)

- `GAds Conv - Formulario` **disparou 1×** no evento `lead_form_ok` → o override do alert funciona.
- `GAds Conv - WhatsApp` **disparou 1×** no clique do botão.
- Google Ads: as duas ações em **"Conversões pendentes"** (normal — aguardando o 1º lead real;
  viram "Ativa"/gravando quando entrar tráfego).

### 6.4 — Pendências (NÃO bloqueiam lançamento)

1. ⏳ Confirmar "gravando conversões" no Ads depois do 1º tráfego real.
2. ⏳ Espelhar os 2 eventos no **GA4** (`G-GFJJMBLKH4`) como eventos-chave — trilha paralela.
3. ⏳ **Limpeza do legado** (passada separada, com lista na mão): tags de Universal Analytics
   (morta — Google desligou), Conversion Linker duplicado, ~50 ações de conversão velhas no Ads.
   ⚠️ **Não apagar às cegas as tags `WhatsApp Loja - X`** — é rastreio por lojista, que é o nó
   central da conta. Decidir *manter vs. reconstruir limpo*.
4. ⏳ **Smart Bidding** (Maximizar Conversões/tCPA) só com conversão validada + volume. Na migração,
   reavaliar o modelo **duas primárias com valores diferentes** (form vale mais que WhatsApp) +
   Maximizar Valor de Conversão — é a forma correta de pesar as duas.

> **Alertas do Google Ads a ignorar por ora:** meta *Contato* = "Configuração incorreta" (tem 0 ações
> primárias, porque WhatsApp é secundário **de propósito**) e meta *Formulário* = "Requer atenção".
> Ambos são ruído do legado. Não bloqueiam: as campanhas rodam em **Maximizar Cliques**, que não usa
> conversão para dar lance.

---

## 7. ORDEM DE EXECUÇÃO — STATUS 23/07/2026

1. ✅ **Lista de negativas** (Biblioteca compartilhada) — §4.
2. ✅ **Campanha Institucional** (PAUSADA) → config §0 → 2 grupos → keywords → RSAs → negativas.
3. ✅ **Campanha Aquisição** (PAUSADA) → config §0 → 6 grupos → keywords → URL de keyword no
   híbrido → RSAs → negativas.
4. ⏳ **Assets** (§3) — podem entrar depois na interface web; não bloqueiam.
5. ✅ **Conversão nova + GTM** (§6) — Versão 169 publicada 23/07 16:54.
6. 🔴 **URL de destino BLOQUEADA — anúncios REPROVADOS.** Dois problemas independentes. **Trava o lançamento.**
7. ⏳ **Revisão final** → ativar Institucional → pausar PMax → ativar Aquisição.

### 🔴 Destino bloqueado — DOIS problemas, não um (diagnóstico 23/07)

> ⚠️ **Correção de registro:** este item foi dado como "resolvido" mais cedo em 23/07. **Estava
> errado.** O teste inicial usou user-agent de desktop e pegou **cache do CloudFront** — não
> reproduzia a condição real do rastreador do Google. O Google reportou **HTTP 403** e os anúncios
> foram **reprovados** ("não pode ser veiculado").

**Problema A — `robots.txt` bloqueia `/multipla` (real, resolvido com `/m`).**
O `robots.txt` tem bloco próprio de `AdsBot-Google` com `Disallow: /busca` e `Disallow: /multipla`.
A Revenda Mais **não vai liberar** (crawlers disparavam URLs facetadas inexistentes tipo
`/multipla/98sd98sjds98dsAAAAA8888`, +80% da infra) e ofereceu a rota alias **`/m`**.
Validado: `/m` retorna 200 sem redirect, conteúdo idêntico, **`GTM-KVLGK4D` e `dataLayer` ativos**,
e não é bloqueado (robots casa por **prefixo**; `/m` não começa com `/multipla`).
➡️ **Manter `/m`.** É necessário — mas **não é suficiente.**

**Problema B — 🔴 WAF/CloudFront devolve 403 por VOLUME de requisições (a causa da reprovação).**
O site está atrás de **AWS CloudFront** (`X-Amz-Cf-Pop: GRU3-P1`). Teste em 23/07: após algumas
dezenas de requisições, **o IP inteiro passou a receber 403** — em `/m`, em `/multipla`, na **home**
e **no próprio `/robots.txt`** (`X-Cache: Error from cloudfront`).

- É bloqueio **por taxa/IP**, não por caminho → **trocar a URL não resolve.**
- É consequência direta da mitigação que a Revenda Mais aplicou contra o abuso de crawler:
  o limite é cego e **pega o rastreador de anúncios do Google junto**.
- 🔴 **403 no `/robots.txt` é o pior sintoma:** quando o Google não consegue ler o `robots.txt`,
  ele trata o **site inteiro** como bloqueado → daí o "Destino não rastreável" aparecer **junto**
  com o "Destino que não funciona".

**🔑 Páginas de carro específico não precisam de mudança de URL.** Ficam em
`/carros/Marca/Modelo/Versao/....html` — fora de `/multipla`, sem regra no `robots.txt`.
Mas **também caem no 403** do Problema B, porque o bloqueio é por IP.

**O que pedir à Revenda Mais (Problema B):**

1. **Isentar do rate limit os rastreadores verificados do Google** — `AdsBot-Google` e
   `AdsBot-Google-Mobile` (são os que validam landing page de anúncio).
2. Faixas de IP oficiais e públicas do Google (270 prefixos, atualizadas diariamente):
   `https://developers.google.com/static/crawling/ipranges/special-crawlers.json`
   Em AWS WAF: criar um **IP set** com esses prefixos e uma regra **Allow acima** da regra de rate
   limit. Alternativa nativa: AWS Managed Rules **Bot Control**, categoria de **bot verificado**.
3. **`/robots.txt` nunca pode retornar 403** — precisa ser sempre servido, mesmo sob rate limit.

*(`/busca` → `/b` não nos interessa: não usamos essa rota.)*

**PMax:** Gabriel decidiu **pausar sem esperar** (23/07) — ver §8.

---

## 8. PÓS-LANÇAMENTO

- **Escala:** subir verba conforme CPC estável e sem termo lixo no top-20. Sem gate rígido semanal —
  o teto é demanda; se só gastar inflando CPC, aí entra teto de CPC (dado, não chute).
- **PMax:** **pausar** — decisão de Gabriel em 23/07. A regra dos 7 dias em paralelo **não se aplica**
  aqui: ela protege a troca de uma campanha que *funciona*, e a PMax herdada não entrega nada nem tem
  dono na gestão. Institucional cobre a defesa de marca.
- **Legado (`[L3FT]`, Display etc.):** derrubar com aval da gestão — mesma lógica acima (regra dos
  7 dias só vale pro que está performando).
- **Grupo Modelo:** a maior brecha (modelo+local). Confirmar a URL de listagem por modelo
  (`/carros/Marca/Modelo/`?) e a lista de estoque — próxima onda.
- **Smart Bidding:** só com a conversão nova (§6) validada + volume. Na virada, reavaliar o modelo de
  **duas primárias com valores diferentes** (§6.4).
