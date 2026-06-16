# CLAUDE.md - Fonte de Verdade: Website IPR Itapema

## 1. Visão Geral do Projeto
Este projeto consiste na criação de um website single-page premium para a **IPR Itapema** (Igreja Presbiteriana Renovada de Itapema), localizada em Itapema, SC. O design é baseado no site de referência `https://www.cornerstoneathens.cc/`, utilizando uma arquitetura moderna sob a stack **Next.js (App Router)**, **Tailwind CSS v4** e gerenciador **pnpm**.

---

## 2. Premissas de Negócio & Público-Alvo

### Público-Alvo
* **Visitantes da Igreja:** Pessoas locais ou turistas que visitam a cidade litorânea de Itapema e buscam uma comunidade cristã acolhedora.
* **Membros Ativos:** Membros da IPR Itapema que buscam canais rápidos de comunicação, agendas de cultos, ministérios e links para doação.

### Objetivos do Site
* **Acolhimento Digital:** Passar uma imagem moderna, calorosa e organizada logo no primeiro acesso.
* **Facilidade de Acesso:** Informar com clareza horários de cultos, localização física e transmissão online.
* **Captura Inteligente de Visitantes:** Substituir os cartões de papel ou o Google Forms tradicional por uma interface integrada, rápida e elegante.
* **Centralização de Links:** Reunir os canais oficiais da igreja (Instagram Principal, JC3 Jovens, Projeto Social Pelo Reino Pela Rua, Canal do YouTube).

---

## 3. Fluxo de Experiência do Visitante e Decisão (QR Code)
Um dos pilares operacionais do site é o acolhimento e registro de decisões durante o culto presencial:
1. **Distribuição do Cartão:** Durante o momento de recepção de visitantes no culto, a equipe entrega um cartão físico de boas-vindas ("Dízimo e Oferta" / "Qual foi sua Decisão?") contendo um QR Code.
2. **Escaneamento do QR Code:** O visitante escaneia o código com o celular, que abre diretamente o link `https://[dominio]/visitante`.
3. **Carregamento Ultra-rápido:** A página `/visitante` deve ser extremamente leve e otimizada (mobile-first), ideal para conexões móveis (4G/5G) instáveis ou congestionadas dentro do templo.
4. **Preenchimento dos Dados (idêntico ao panfleto físico):**
   * **Decisão Espiritual (Múltipla escolha / Checkboxes):**
     * Já sou evangélico e quero ser membro da IPRI
     * Reconciliar-me com Cristo
     * Aceitar Jesus Cristo como Salvador
     * Ser batizado em águas
     * (Opcional para visitantes padrão: "Apenas visitando / Conhecendo")
   * **Dados Pessoais:**
     * Nome
     * Data de nascimento (com máscara DD/MM/AAAA)
     * E-mail
     * Celular (com máscara de telefone `(99) 99999-9999`)
     * Endereço
   * **Autorização (LGPD - Explicitado no rodapé do formulário):**
     * *"Ao preencher e entregar esse formulário autorizo a Igreja Presbiteriana Renovada e/ou parte selecionada de uma membresia a entrar em contato comigo por telefone, e-mail ou WhatsApp por meio das informações fornecidas."*
5. **Envio Seguro:** Ao clicar em enviar, os dados são enviados para `/api/visitor` e salvos de forma assíncrona na planilha do Google Sheets via API.
6. **Tela de Sucesso/Retirada de Brinde:** Após o envio bem-sucedido, o site renderiza uma tela estilizada dizendo: *"Seja muito bem-vindo! Apresente esta tela na nossa recepção ao final do culto para retirar seu presente especial."*
7. **Retirada do Brinde:** O visitante exibe a tela de sucesso para os voluntários da recepção e recebe o brinde físico.

---

## 4. Diretrizes de Design & Sistema de Estilos
Seguindo a essência da Cornerstone mas adaptando-a à identidade costeira da IPR Itapema, adotamos o estilo **Premium Coastal Dark**:

### Paleta de Cores (Definida em CSS Variables)
* **Azul-Marinho/Petróleo Profundo (Base)**: Representa a profundidade do oceano e traz a sobriedade do tema escuro (ex: `rgba(10, 17, 26, 1)` a `rgba(15, 23, 42, 1)`).
* **Cinza-Chumbo (Secundário/Painéis)**: Utilizado para contrastar superfícies e separar seções (ex: `#1C2541` ou `#0f172a`).
* **Bege-Areia Quente (Destaque/Accent)**: Traz calor e refere-se à praia/areia, sendo a cor dos botões principais, links ativos e bordas em foco (ex: `#E0A96D` ou `#E6C280`).
* **Branco/Opaco (Tipografia & Elementos)**: Branco puro (`#FFFFFF`) para títulos destacados e branco semitransparente (`rgba(255, 255, 255, 0.75)`) para textos de leitura.

### Tipografia
* **Tipografia Única (Títulos e Corpo)**: `Montserrat` do Google Fonts para passar solidez, elegância, dinamismo e consistência visual moderna em todas as seções e telas.

### Efeitos Glassmorphic (Efeito de Vidro)
* Cartões, menus e formulários devem parecer flutuar sobre o fundo escuro com:
  * `backdrop-filter: blur(12px) saturate(180%)`
  * `background-color: rgba(255, 255, 255, 0.03)`
  * `border: 1px solid rgba(255, 255, 255, 0.08)`
  * Gradientes radiais sutis no hover para dar profundidade física aos elementos.

---

## 5. Estrutura da Página Única (Single Page)
A rota principal `/` conterá as seguintes seções dispostas de forma contínua e interativa:
1. **Header (Cabeçalho Flutuante):** Fixado no topo com transparência, logo elegante, menu de âncoras (`#home`, `#essencia`, `#cultos`, `#ministerios`, `#projetos`, `#contribuir`, `#localizacao`) e botão de destaque para a rota `/visitante`.
2. **Hero Section:** Banner cinematográfico de introdução com imagens/vídeos que transmitam acolhimento, título elegante e botões de conversão ("Assista ao vivo" e "Quero Visitar").
3. **Nossa Essência:** Seção assimétrica detalhando o coração da igreja (Amor a Deus e ao próximo).
4. **Cultos e Horários:** Card com os horários de quarta (20h) e domingo (19h).
5. **JC3 Jovens e Ministérios:** Apresentação em blocos translúcidos dos ministérios com botões linkados ao Instagram JC3 (`@jc3jovens`), Kids e outros.
6. **Pelo Reino Pela Rua:** Seção com apelo emocional e imagens do projeto social da igreja, linkando ao Instagram `@peloreinopelarua`.
7. **Mídia/Mensagens:** Integração visual ou link direto para o canal de YouTube da igreja (`@ipritapema6081`) para assistir cultos ao vivo e pregações gravadas.
8. **Dízimos e Ofertas (Doação):** 
   * Versículo em destaque: *"Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria. 2 Coríntios 9:7"*
   * Chave PIX (CNPJ): `76.357.144/0001-61`
   * Nome do Favorecido: `IGREJA PRESBITERIANA RENOVADA DE ITAPEMA`
   * Instruções de contribuição e QR Code PIX gerado estaticamente/simulado.
9. **Localização e Contato:** Mapa integrado, link do Google Maps da igreja (`https://maps.app.goo.gl/qZ4hUEk9t1Dq1PaU8`) e endereço físico.
10. **Footer (Rodapé):** Links institucionais rápidos, redes sociais e direitos autorais.

---

## 6. Integração Técnica com Google Sheets
Para salvar os dados do formulário sem expor credenciais do Google Cloud Console no cliente, utilizaremos uma rota de API do Next.js combinada a um script Web App.

### Arquitetura do Fluxo de Dados:
```
[Formulário Cliente: /visitante]
            │ (POST dados do formulário)
            ▼
[Next.js API Route: /api/visitor]
            │ (POST seguro com chave .env)
            ▼
[Google Apps Script Web App URL]
            │ (Grava nova linha)
            ▼
[Planilha Google Sheets Privada]
```

### Script do Google Apps Script (para ser copiado na Planilha):
```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Adiciona uma linha com os dados recebidos e o carimbo de data/hora
    sheet.appendRow([
      new Date(), 
      data.nome, 
      data.dataNascimento, 
      data.email,
      data.celular, 
      data.endereco,
      data.decisao // Ex: "Aceitar Jesus Cristo como Salvador, Ser batizado em águas"
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Configurações de Ambiente (`.env.local`):
* `GOOGLE_SHEETS_SCRIPT_URL`: URL do Web App gerada no painel de implantação do Google Apps Script.

---

## 7. Comandos de Operação
* **Desenvolvimento**: `pnpm dev`
* **Build de Produção**: `pnpm build`
* **Linter**: `pnpm lint`

## 8. Não-Objetivos
* Autenticação de usuários/membros no site.
* Sistema de upload de fotos por parte dos usuários.
* Painel administrativo dinâmico integrado a banco de dados relacional.
