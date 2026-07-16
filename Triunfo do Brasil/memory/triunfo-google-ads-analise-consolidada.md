# Triunfo do Brasil — Análise Consolidada de Google Ads
**Plataforma:** Google Ads | **Fase:** Diagnóstico e validação | **Data:** 30/06/2026

> Conta herdada, sem estrutura clara, rastreamento não confiável. Todo número de plataforma entra com ressalva. A análise abaixo trabalha com o que existe na conta hoje e no histórico de 12 meses. Plano de ação está em nível de HIPÓTESE de correção, a ser confirmado na montagem da estrutura nova.

---

## 1. Veredito

A conta não funciona hoje, e o problema é estrutural, não falta de otimização. O histórico tem dois pontos que já converteram (campanhas hoje pausadas por política), mas tudo que está no ar está quebrado ou parado. A única coisa aproveitável é a lista de palavras-chave e o aprendizado de que termos de sourcing em inglês geram busca real. O resto precisa ser reconstruído, não ajustado.

A decisão técnica é reconstruir a operação para a Fase 1, não otimizar o que existe.

---

## 2. O que já entendemos (fato, dos dados)

**A conta está praticamente parada.** Em junho/2026 só a `[PESQUISA] [INTERNACIONAL]` está ativa, e quase não entregou: 2 impressões, 0 clique, R$0 gasto, 0 conversão. As 2 impressões caíram na Rede de Display, não na busca. Todas as outras campanhas estão pausadas.

**As pausas são por política.** As três campanhas pausadas trazem "limitada pela política" / "anúncios reprovados" / "grupos de recursos reprovados". Bate com a categoria sensível (ingrediente farmacêutico). É um bloqueio central da conta.

**A campanha ativa é a pior do histórico.** Últimos 12 meses:

| Campanha | Status | Custo | Conv. | Custo/conv. |
|---|---|---|---|---|
| `[PESQUISA] [INTERNACIONAL]` (ativa) | Ativada | R$20.411 | 6 | R$3.401,98 |
| `Pesquisa - Exterior` | Pausada (política) | R$15.514 | 1.018 | R$15,24 |
| `[PMax] [Exterior]` | Pausada (política) | R$18.292 | 1.369 | R$13,36 |

A campanha que ficou ativa gastou mais e converteu 6 vezes em um ano. As que convertiam foram pausadas. Em maio/2026 essa ativa gastou R$2.435, gerou 2.639 cliques e registrou zero conversão.

**A conversão `Formulário` não é confiável como métrica.** Configuração: evento manual, origem Site, criada em 27/03/2025, atribuição baseada em dados, janela de clique 90 dias, contagem "uma conversão".
- Atribuição baseada em dados precisa de volume (referência Google: ~50 conv/mês) para funcionar. Com 6 conversões em 12 meses, não tem como atribuir de forma confiável.
- Sendo evento manual e sem acesso ao GTM/gtag, não há como confirmar se dispara no envio do formulário ou no carregamento da página.
- Consequência para a análise: CPL e contagem de conversão desta conta não são utilizáveis como verdade. Confirma a ressalva do projeto na origem.

**As palavras-chave estão corretas.** As 21 keywords são termos de sourcing em inglês alinhados ao público (ex.: yerba mate extract, mate leaf extract, botanical extract powder). Algumas marcadas "Limitado: baixa qualidade" e uma "raramente exibido", mas a intenção mirada está certa. O problema não são elas.

**AI Max está ligada.** O relatório traz "Correspondências expandidas da AI Max" e "Correspondências de páginas de destino da AI Max". Broad manual está desativado, mas a AI Max faz expansão automática de termos e de landing pages. Em conta sem sinal de conversão, isso expande no escuro.

**A landing é a página de catálogo.** Todo o tráfego vai para `triunfodobrasil.com/en/produtos/`, vitrine de produto, não landing de captura com formulário focado. Derruba taxa de conversão independente de tag.

---

## 3. Configuração da campanha ativa: problemas confirmados

Respostas diretas aos pontos de checagem do projeto, todos sobre a `[PESQUISA] [INTERNACIONAL]`:

| Ponto | Situação | Veredito |
|---|---|---|
| Conversão configurada faz sentido | Evento manual + atribuição por dados em 6 conv/ano | Não confiável |
| Evento dispara no lugar certo | Não verificável sem acesso ao site | Inconclusivo, mas irrelevante para o veredito atual |
| País correto | EUA, Alemanha, Canadá, França + Coreia do Sul e Japão num só campaign | Errado, e inclui países que a fase quer cortar |
| Idioma correto | "English, Alemão e mais 4" | Errado. Deveria ser só inglês |
| Leitura por país | Tudo num único campaign, sem split | Impossível ler EUA vs Alemanha isolado |
| Rede | Pesquisa + Parceiros + Display numa campanha de Search | Errado |
| PMax x Search competindo | PMax pausadas hoje | Sem conflito vivo agora |
| Verba pulverizada | Um campaign mirando 6+ países | Sim, contraria a fase |
| Broad sem controle | Broad manual off, mas AI Max expande sozinha | Expansão sem controle por outra via |
| Lance | Maximizar conversões sobre ação que registra ~0 conv | Sem sinal para otimizar |
| Landing | Página de catálogo, não de captura | Errado para lead |

---

## 4. O que funciona x o que não funciona

| Item | Veredito |
|---|---|
| Lista de palavras-chave (inglês, sourcing) | Funciona. Aproveitável |
| Termos pausados que convertiam (histórico) | Funcionavam, mas reprovados por política |
| Conversão `Formulário` (evento manual + DDA em 6 conv) | Não confiável. Inutilizável para medir |
| Campanha ativa `[PESQUISA][INTERNACIONAL]` | Não funciona. R$20k/ano, 6 conv, hoje parada |
| Rede (Display + Partners numa Search) | Errado |
| AI Max ligada sem sinal de conversão | Errado para esta fase |
| Idioma (inglês + alemão + 4) | Errado |
| Países num só campaign, sem split | Errado, impede leitura por país |
| Landing = catálogo, não captura | Errado para lead |

---

## 5. O que está inconclusivo

Itens que não mudam o veredito atual, mas pesam na montagem da estrutura nova:
- Disparo real do evento `Formulário` (envio x load). Resolver na fase de correção, com acesso ao site.
- Termos de pesquisa reais: sem dado, porque não houve entrega relevante em junho.
- O que exatamente as campanhas pausadas contavam como conversão (pode ser a mesma meta inflada).

---

## 6. Plano de ação por urgência (HIPÓTESES de correção)

> Hipóteses a confirmar na montagem da estrutura. A lógica é parar o gasto improdutivo, limpar a leitura e subir uma base mínima que gere dado real no mercado primário.

| Prioridade | Ação | Razão | Métrica de validação |
|---|---|---|---|
| Corrigir agora | Pausar ou reestruturar a `[PESQUISA] [INTERNACIONAL]` | Gasta sem converter; R$20k/ano por 6 conv | Gasto cessa sem perda de lead real |
| Corrigir agora | Desligar Display e Parceiros de pesquisa | Sujam intenção e leitura | Rede passa a "Apenas Pesquisa" |
| Corrigir agora | Desligar AI Max nesta fase | Expande no escuro sem sinal de conversão | Expansão automática zerada |
| Investigar antes de mexer | Definir conversão única e confiável de lead | Atual é inutilizável | Uma ação primária, lead real |
| Investigar antes de mexer | Decidir landing de captura no lugar do catálogo | Catálogo não converte lead | LP com formulário que cai no CRM |
| Medir 7 a 14 dias | Subir Search nova: só EUA, inglês, só Pesquisa, AI Max off, conversão de lead validada | Gera dado limpo no mercado primário | Volume de busca, CPC, taxa de conversão da LP, CPL |
| Não mexer ainda | Coreia do Sul, Japão e demais secundários | Pulverização contraria a fase | Aguardar decisão de verba (Opção A) da gestão |
| Não mexer ainda | Reativar campanhas pausadas | Bloqueio de política não resolvido | Só após compliance e estrutura nova |

---

## 7. Próximo passo

Montar a estrutura da Fase 1 a partir do veredito acima: Search, mercado primário EUA, inglês, apenas Rede de Pesquisa, AI Max desligada, conversão única de lead, landing de captura, verba concentrada (Opção A do diagnóstico). Itens de rastreamento e compliance entram como pré-requisito antes de subir tráfego, não como bloqueio da análise.

---

*Base: relatórios de campanha (jun/2026, mai/2026, 12 meses), relatório de palavras-chave, relatório de página de destino, telas de configuração e de conversão da conta. Dados apresentados com ressalva até auditoria de rastreamento e retorno do CRM.*
