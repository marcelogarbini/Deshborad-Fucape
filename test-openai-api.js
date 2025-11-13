/**
 * Script de teste para verificar se a API da OpenAI está funcionando
 * Execute: node test-openai-api.js
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ler o arquivo .env.local
let apiKey = null;
try {
  const envFile = readFileSync(join(__dirname, '.env.local'), 'utf-8');
  const match = envFile.match(/^VITE_OPENAI_API_KEY=(.+)$/m);
  if (match) {
    apiKey = match[1].trim();
  }
} catch (error) {
  console.error('❌ Erro ao ler .env.local:', error.message);
  process.exit(1);
}

// Validar API Key
if (!apiKey || apiKey === 'your_openai_api_key_here') {
  console.error('❌ API Key não configurada!');
  console.log('\nPor favor:');
  console.log('1. Abra o arquivo .env.local');
  console.log('2. Substitua "your_openai_api_key_here" pela sua API Key real');
  console.log('3. Execute este script novamente\n');
  process.exit(1);
}

if (!apiKey.startsWith('sk-')) {
  console.error('❌ Formato de API Key inválido!');
  console.log('A chave deve começar com "sk-"\n');
  process.exit(1);
}

console.log('✓ API Key encontrada');
console.log(`✓ Tamanho: ${apiKey.length} caracteres`);
console.log(`✓ Formato: ${apiKey.substring(0, 7)}...\n`);

// Testar a API
console.log('🔄 Testando conexão com a API da OpenAI...\n');

try {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'Você é um assistente de teste. Responda apenas "OK" se receber esta mensagem.',
        },
        {
          role: 'user',
          content: 'Teste de conexão',
        },
      ],
      max_tokens: 10,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('❌ Erro na API:');
    console.error(`   Status: ${response.status} ${response.statusText}`);
    if (errorData.error) {
      console.error(`   Mensagem: ${errorData.error.message}`);
      if (errorData.error.type) {
        console.error(`   Tipo: ${errorData.error.type}`);
      }
    }
    process.exit(1);
  }

  const data = await response.json();
  const content = data.choices[0]?.message?.content || 'Sem resposta';

  console.log('✅ API funcionando corretamente!');
  console.log(`   Resposta: ${content}`);
  console.log(`   Modelo usado: ${data.model}`);
  console.log(`   Tokens usados: ${data.usage?.total_tokens || 'N/A'}\n`);
  console.log('🎉 Tudo pronto! O ChatBot deve funcionar agora.\n');

} catch (error) {
  console.error('❌ Erro ao testar a API:');
  console.error(`   ${error.message}\n`);
  
  if (error.message.includes('fetch')) {
    console.log('💡 Dica: Verifique sua conexão com a internet\n');
  }
  
  process.exit(1);
}

