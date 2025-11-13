# 🚀 Solução Rápida - Configurar API Key

## ⚠️ Problema Identificado

O arquivo `.env.local` ainda contém `your_openai_api_key_here` mesmo após você ter tentado adicionar a chave.

## ✅ Solução em 3 Passos

### Opção 1: Usar o Script Automático (Recomendado)

```bash
./configurar-api-key.sh
```

O script vai:
1. Pedir sua API Key (ela será ocultada ao digitar)
2. Substituir automaticamente no arquivo
3. Criar um backup

### Opção 2: Editar Manualmente

1. **Abra o arquivo:**
   ```bash
   # No VS Code/Cursor:
   code .env.local
   
   # Ou no terminal:
   nano .env.local
   ```

2. **Encontre esta linha:**
   ```
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```

3. **Substitua por:**
   ```
   VITE_OPENAI_API_KEY=sk-proj-SUA-CHAVE-AQUI
   ```
   (Cole sua chave real no lugar de `sk-proj-SUA-CHAVE-AQUI`)

4. **SALVE o arquivo:**
   - VS Code/Cursor: `Ctrl+S` (Windows/Linux) ou `Cmd+S` (Mac)
   - Nano: `Ctrl+O`, Enter, `Ctrl+X`
   - Vim: `:wq`

5. **Verifique se foi salvo:**
   ```bash
   cat .env.local | grep VITE_OPENAI_API_KEY
   ```
   Deve mostrar sua chave (começando com `sk-`)

### Passo 3: Reiniciar o Servidor

⚠️ **CRUCIAL:** O Vite só carrega variáveis de ambiente na inicialização!

```bash
# 1. Pare o servidor atual
#    (Pressione Ctrl+C no terminal onde está rodando)

# 2. Aguarde 2-3 segundos

# 3. Inicie novamente
npm run dev
# ou
bun dev
```

## 🧪 Testar se Funcionou

Após reiniciar o servidor:

```bash
node test-openai-api.js
```

Se funcionar, você verá:
```
✅ API funcionando corretamente!
```

## ❓ Problemas Comuns

### "Ainda mostra your_openai_api_key_here"
- ✅ Certifique-se de que **salvou** o arquivo
- ✅ Verifique se está editando o arquivo correto (na raiz do projeto)
- ✅ Execute: `cat .env.local` para ver o conteúdo atual

### "API Key não encontrada" mesmo após configurar
- ✅ **Reinicie o servidor** (isso é obrigatório!)
- ✅ Verifique se a variável começa com `VITE_`
- ✅ Verifique se não há espaços ao redor do `=`

### "Invalid API Key"
- ✅ Verifique se copiou a chave completa
- ✅ Verifique se não há espaços extras
- ✅ Verifique se tem créditos na conta OpenAI

## 📍 Localização do Arquivo

O arquivo deve estar em:
```
/Users/marcelogarbini/Projects/Dashboard de Clima Organizacional/.env.local
```

## 🔍 Verificação Rápida

Execute este comando para ver o status atual:
```bash
./verificar-env.sh
```

