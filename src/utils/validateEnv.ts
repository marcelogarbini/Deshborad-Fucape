/**
 * Valida se a API Key da OpenAI está configurada corretamente
 */
export const validateOpenAIKey = (): { isValid: boolean; message: string } => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!apiKey) {
    return {
      isValid: false,
      message: "API Key não encontrada. Verifique se o arquivo .env.local existe e contém VITE_OPENAI_API_KEY",
    };
  }

  if (apiKey === "your_openai_api_key_here") {
    return {
      isValid: false,
      message: "API Key não configurada. Por favor, substitua 'your_openai_api_key_here' pela sua chave real no arquivo .env.local",
    };
  }

  if (!apiKey.startsWith("sk-")) {
    return {
      isValid: false,
      message: "Formato de API Key inválido. A chave da OpenAI deve começar com 'sk-'",
    };
  }

  if (apiKey.length < 20) {
    return {
      isValid: false,
      message: "API Key muito curta. Verifique se copiou a chave completa",
    };
  }

  return {
    isValid: true,
    message: "API Key configurada corretamente",
  };
};

