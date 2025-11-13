#!/bin/bash
echo "=== Diagnóstico do .env.local ==="
echo ""
echo "1. Arquivo existe?"
if [ -f .env.local ]; then
  echo "   ✓ Sim"
else
  echo "   ✗ Não"
  exit 1
fi

echo ""
echo "2. Conteúdo do arquivo:"
cat .env.local

echo ""
echo "3. Linha com VITE_OPENAI_API_KEY:"
grep "^VITE_OPENAI_API_KEY=" .env.local || echo "   ✗ Não encontrada"

echo ""
echo "4. Valor da chave (primeiros 10 chars):"
KEY=$(grep "^VITE_OPENAI_API_KEY=" .env.local | cut -d'=' -f2-)
if [ -n "$KEY" ]; then
  echo "   ${KEY:0:10}... (tamanho: ${#KEY} chars)"
  if [ "$KEY" = "your_openai_api_key_here" ]; then
    echo "   ⚠️ Ainda com valor padrão!"
  elif [[ "$KEY" == sk-* ]]; then
    echo "   ✓ Formato parece correto"
  else
    echo "   ⚠️ Formato pode estar incorreto (deveria começar com sk-)"
  fi
else
  echo "   ✗ Vazio"
fi

echo ""
echo "5. Servidor rodando?"
if lsof -ti:8080 > /dev/null 2>&1; then
  echo "   ✓ Sim (porta 8080)"
  echo "   ⚠️ Lembre-se: reinicie após mudar o .env.local!"
else
  echo "   ✗ Não"
fi
