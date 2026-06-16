import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validação básica dos dados obrigatórios
    if (!data.nome || !data.celular || !data.dataNascimento) {
      return NextResponse.json(
        { status: "error", message: "Nome, Celular e Data de Nascimento são campos obrigatórios." },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;

    // Fallback amigável caso a variável não esteja definida em desenvolvimento
    if (!scriptUrl) {
      console.warn(
        "----------------- CONFIGURAÇÃO PENDENTE -----------------\n" +
        "A variável de ambiente GOOGLE_SHEETS_SCRIPT_URL não está configurada em .env.local.\n" +
        "Dados recebidos (simulação de sucesso ativa):\n" +
        JSON.stringify(data, null, 2) + "\n" +
        "---------------------------------------------------------"
      );
      
      // Retorna sucesso simulado em desenvolvimento
      return NextResponse.json({ status: "success", simulated: true });
    }

    // Encaminha os dados de forma segura ao Google Sheets via Google Apps Script
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // Adiciona um timeout razoável para evitar travamento da requisição
      signal: AbortSignal.timeout(10000), 
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Google Script retornou erro HTTP ${response.status}: ${errorText}`);
    }

    const result = await response.json();
    
    if (result.status !== "success") {
      throw new Error(result.message || "O script do Google planilhas recusou a inserção.");
    }

    return NextResponse.json({ status: "success" });
  } catch (error) {
    const err = error instanceof Error ? error : new Error("Erro desconhecido");
    console.error("Erro na API Route (/api/visitor):", err);
    return NextResponse.json(
      { status: "error", message: err.message || "Erro interno ao processar cadastro de visitante." },
      { status: 500 }
    );
  }
}
export const runtime = "nodejs"; // Garante execução no ambiente Node.js padrão
