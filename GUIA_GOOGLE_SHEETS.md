# Guia de Configuração: Integração com Google Sheets

Este documento explica como configurar o acesso de "Conta de Serviço" (Service Account) no Google Cloud para permitir que a plataforma do site IPR Itapema escreva dados em uma planilha do Google Sheets de forma segura e gratuita, sem expor links públicos.

---

## 1. Criando o Projeto no Google Cloud

1. Acesse o **[Google Cloud Console](https://console.cloud.google.com/)** e faça login com a conta do Google da Igreja (ou a conta oficial que será a dona da integração).
2. No menu superior (ao lado do logo do Google Cloud), clique no seletor de projetos e depois em **NOVO PROJETO**.
3. Dê um nome reconhecível (ex: `ipr-itapema-website`) e clique em **Criar**.
4. Aguarde alguns segundos. Uma notificação aparecerá confirmando a criação. Clique para **Selecionar o Projeto**.

## 2. Ativando a API do Google Sheets

1. No menu lateral esquerdo, vá em **APIs e Serviços > Biblioteca**.
2. Na barra de pesquisa, digite **Google Sheets API**.
3. Clique no resultado "Google Sheets API" e, em seguida, clique no botão azul **Ativar**.

## 3. Criando o Robô (Conta de Serviço)

Para que o site consiga escrever na planilha sem usar uma conta de usuário real, precisamos criar um "Robô" (Service Account).

1. Volte ao menu lateral esquerdo e vá em **APIs e Serviços > Credenciais**.
2. No topo da tela, clique em **+ CRIAR CREDENCIAIS** e selecione a opção **Conta de Serviço**.
3. **Etapa 1:** Dê um nome para a conta (ex: `site-ipr-bot`). O ID será gerado automaticamente embaixo. Clique em **Criar e Continuar**.
4. **Etapas 2 e 3:** Não é necessário preencher nada. Apenas clique em **Concluir**.

## 4. Gerando a Chave de Acesso (JSON)

1. Você voltará para a tela de Credenciais. Na parte inferior, na lista "Contas de serviço", você verá a conta que acabou de criar. O email dela terá o formato: `site-ipr-bot@nome-do-projeto.iam.gserviceaccount.com`.
2. **Copie este email.** Você precisará dele logo a seguir.
3. Clique no email na lista para abrir as configurações desta conta de serviço.
4. Vá até a aba **CHAVES** (no topo).
5. Clique em **Adicionar Chave > Criar nova chave**.
6. Escolha o formato **JSON** e clique em Criar.
7. O arquivo `.json` contendo as credenciais de segurança será baixado para o seu computador.

## 5. Dando Permissão na Planilha do Google

1. Crie ou abra a planilha do Google Sheets onde você deseja que os formulários do site sejam salvos.
2. Certifique-se de que a primeira linha (Linha 1) contém os cabeçalhos das colunas (Ex: Data, Nome, Nascimento, Celular, Email, Endereço, Decisão).
3. No canto superior direito, clique em **Compartilhar**.
4. No campo de email, cole o **email da Conta de Serviço** que você copiou no passo 4.2.
5. Certifique-se de que a permissão ao lado está como **Editor**.
6. Desmarque a opção "Notificar pessoas" (pois é um robô) e clique em **Compartilhar**.
7. Na barra de endereço do navegador, copie o **ID da Planilha**. O ID é o código gigante que fica entre `/d/` e `/edit`. 
   - Exemplo: `https://docs.google.com/spreadsheets/d/AQUI_FICA_O_ID_GIGANTE/edit`

## 6. Configurando as Variáveis no Site

Abra o arquivo `.json` baixado (você pode abri-lo no VSCode ou no Bloco de Notas) e copie os dados para o arquivo `.env.local` na raiz do projeto do site:

```env
# O email da conta de serviço (encontrado em "client_email" no JSON)
GOOGLE_CLIENT_EMAIL="seu-robo@projeto.iam.gserviceaccount.com"

# A chave privada (encontrada em "private_key" no JSON).
# IMPORTANTE: Copie exatamente como está no arquivo, mantendo as aspas "" 
# e incluindo os blocos -----BEGIN PRIVATE KEY----- e -----END PRIVATE KEY----- e os \n
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEv...chave...aqui...\n-----END PRIVATE KEY-----\n"

# O ID da planilha que você copiou da URL no passo 5.7
GOOGLE_SHEET_ID="ID-da-planilha-aqui"
```

## Importante sobre a Segurança
- **NUNCA** faça commit do arquivo `.env.local` no GitHub.
- **NUNCA** compartilhe a sua planilha como "Qualquer um com o link pode editar". Apenas a Conta de Serviço (o email do robô) e os administradores humanos devem ter acesso à planilha.
