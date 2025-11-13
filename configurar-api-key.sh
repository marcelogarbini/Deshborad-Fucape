#!/bin/bash

echo "🔧 Configurador de API Key da OpenAI"
echo "======================================"
echo ""

# Verificar se o arquivo existe
if [ ! -f .env.local ]; then
  echo "❌ Arquivo .env.local não encontrado!"
  exit 1
fi

# Mostrar conteúdo atual
echo "📄 Conteúdo atual do .env.local:"
echo "-----------------------------------"
cat .env.local
echo ""
echo "-----------------------------------"
echo ""

# Verificar se já tem uma chave configurada
if grep -q "^VITE_OPENAI_API_KEY=sk-" .env.local; then
  echo "✅ Parece que você já tem uma API Key configurada!"
  echo ""
  read -p "Deseja substituir? (s/N): " resposta
  if [[ ! "$resposta" =~ ^[Ss]$ ]]; then
    echo "Operação cancelada."
    exit 0
  fi
fi

# Solicitar a API Key
echo "Por favor, cole sua API Key da OpenAI:"
echo "(A chave deve começar com 'sk-' e será ocultada ao digitar)"
echo ""
read -s API_KEY

# Validar formato básico
if [ -z "$API_KEY" ]; then
  echo "❌ API Key não pode estar vazia!"
  exit 1
fi

if [[ ! "$API_KEY" == sk-* ]]; then
  echo "⚠️  Aviso: A API Key normalmente começa com 'sk-'. Continuando mesmo assim..."
fi

# Criar backup
cp .env.local .env.local.backup
echo "✅ Backup criado: .env.local.backup"

# Substituir a linha
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS
  sed -i '' "s|^VITE_OPENAI_API_KEY=.*|VITE_OPENAI_API_KEY=$API_KEY|" .env.local
else
  # Linux
  sed -i "s|^VITE_OPENAI_API_KEY=.*|VITE_OPENAI_API_KEY=$API_KEY|" .env.local
fi

echo "✅ API Key configurada!"
echo ""
echo "📝 Verificação:"
grep "^VITE_OPENAI_API_KEY=" .env.local | sed 's/\(sk-[^=]*\)=.*/\1=***HIDDEN***/'
echo ""
echo "⚠️  IMPORTANTE: Reinicie o servidor para que as mudanças tenham efeito!"
echo "   1. Pare o servidor (Ctrl+C)"
echo "   2. Execute: npm run dev (ou bun dev)"
echo ""

