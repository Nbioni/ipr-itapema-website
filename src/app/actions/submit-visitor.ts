"use server";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

// Variáveis de ambiente validadas
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
// Precisamos garantir que as quebras de linha sejam interpretadas corretamente na chave privada
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

export async function submitVisitor(formData: FormData) {
  try {
    // 1. Verificação Honeypot (Anti-spam)
    // Se um robô preencher este campo, nós ignoramos a requisição retornando sucesso falso.
    const honeypot = formData.get("bot_field");
    if (honeypot) {
      console.warn("Honeypot acionado! Bloqueando possível bot de spam.");
      return { success: true }; // Retornamos true para enganar o bot, mas não salvamos.
    }

    // 2. Extrair dados do formulário correspondentes a page.tsx
    const nome = formData.get("nome") as string;
    const dataNascimento = formData.get("dataNascimento") as string;
    const celular = formData.get("celular") as string;
    const email = (formData.get("email") as string) || "Não informado";
    const endereco = (formData.get("endereco") as string) || "Não informado";
    const decisao = (formData.get("decisao") as string) || "Nenhuma decisão marcada";
    const consentimento = formData.get("consentimento") === "true";

    // Validações básicas de segurança
    if (!nome || !celular || !dataNascimento) {
      return { success: false, error: "Nome, Nascimento e Celular são obrigatórios." };
    }

    if (!consentimento) {
      return { success: false, error: "Você precisa aceitar os termos de contato." };
    }

    if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
      console.error("Faltam as variáveis de ambiente do Google Sheets.");
      return { success: false, error: "Erro interno do servidor (Credenciais ausentes)." };
    }

    // 3. Inicializar a Autenticação do Google
    const serviceAccountAuth = new JWT({
      email: GOOGLE_CLIENT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth);

    // 4. Carregar informações da planilha
    await doc.loadInfo();
    
    // Pegamos a primeira aba (Sheet) da sua planilha
    const sheet = doc.sheetsByIndex[0];

    // Verifica e cria os cabeçalhos caso a planilha esteja totalmente vazia
    try {
      await sheet.loadHeaderRow();
    } catch (e) {
      await sheet.setHeaderRow([
        "Data",
        "Nome",
        "Nascimento",
        "Celular",
        "Email",
        "Endereço",
        "Decisão"
      ]);
    }

    // Formatar data atual no fuso do Brasil
    const dataAtual = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });

    // 5. Adicionar a linha
    // A: Data | B: Nome | C: Nascimento | D: Celular | E: Email | F: Endereço | G: Decisão
    await sheet.addRow([
      dataAtual,
      nome,
      dataNascimento,
      celular,
      email,
      endereco,
      decisao,
    ]);

    return { success: true };
  } catch (error) {
    console.error("Erro ao salvar visitante no Google Sheets:", error);
    return { 
      success: false, 
      error: "Não foi possível salvar seus dados no momento. Tente novamente mais tarde." 
    };
  }
}
