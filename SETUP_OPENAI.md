# Configuração da API OpenAI para o IaBot AEBES

## Passo a Passo

### 1. Obter a API Key da OpenAI

1. Acesse: https://platform.openai.com/api-keys
2. Faça login na sua conta OpenAI
3. Clique em "Create new secret key"
4. Copie a chave gerada (ela só será mostrada uma vez!)

### 2. Configurar o arquivo .env.local

1. No diretório raiz do projeto, você encontrará um arquivo `.env.local`
2. Abra o arquivo `.env.local` em um editor de texto
3. Substitua `your_openai_api_key_here` pela sua API Key real:

```env
VITE_OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Importante:**
- Não compartilhe sua API Key publicamente
- O arquivo `.env.local` já está no `.gitignore` e não será commitado
- A variável DEVE começar com `VITE_` para funcionar no Vite

### 3. Reiniciar o servidor de desenvolvimento

Após adicionar a API Key, você precisa reiniciar o servidor:

```bash
# Pare o servidor (Ctrl+C)
# E inicie novamente:
npm run dev
# ou
bun dev
```

### 4. Testar o ChatBot

1. Acesse o dashboard
2. Clique no botão "IaBot AEBES" no cabeçalho
3. Ou navegue para a aba "IaBot" nas tabs
4. Digite uma mensagem e envie

## Solução de Problemas

### Erro: "API Key não configurada"
- Verifique se o arquivo `.env.local` existe na raiz do projeto
- Verifique se a variável começa com `VITE_OPENAI_API_KEY`
- Reinicie o servidor após adicionar a chave

### Erro: "Invalid API Key"
- Verifique se copiou a chave corretamente (sem espaços extras)
- Certifique-se de que a chave não expirou
- Verifique se tem créditos na sua conta OpenAI

### Erro de CORS
- A API da OpenAI permite chamadas diretas do navegador
- Se houver problemas, pode ser necessário criar um proxy backend

## Nota de Segurança

⚠️ **Atenção**: Esta implementação expõe a API Key no frontend. Para produção, recomenda-se:

1. Criar um backend proxy que faça as chamadas à OpenAI
2. Armazenar a API Key apenas no servidor
3. O frontend chama o backend, que chama a OpenAI

Para desenvolvimento e testes, a implementação atual funciona perfeitamente.

