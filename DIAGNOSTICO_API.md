# 🔍 Diagnóstico de Problemas com API Key

## Problema Identificado

O arquivo `.env.local` ainda contém o valor padrão `your_openai_api_key_here`, mesmo após você ter adicionado a chave.

## Possíveis Causas e Soluções

### 1. Arquivo não foi salvo corretamente

**Sintomas:**
- Você editou o arquivo mas as mudanças não aparecem

**Solução:**
1. Abra o arquivo `.env.local` no editor
2. Certifique-se de que a linha está assim (sem espaços ao redor do `=`):
   ```
   VITE_OPENAI_API_KEY=sk-sua-chave-aqui
   ```
3. **Salve o arquivo** (Ctrl+S ou Cmd+S)
4. Verifique se foi salvo corretamente

### 2. Editando o arquivo errado

**Sintomas:**
- Você editou um arquivo mas não é o `.env.local` na raiz do projeto

**Solução:**
1. Certifique-se de que está editando o arquivo na raiz do projeto:
   ```
   /Users/marcelogarbini/Projects/Dashboard de Clima Organizacional/.env.local
   ```
2. Não edite `.env.local.example` ou outros arquivos `.env`

### 3. Servidor não foi reiniciado

**Sintomas:**
- Você adicionou a chave mas o servidor ainda está usando a antiga

**Solução:**
1. **Pare o servidor** completamente (Ctrl+C)
2. **Aguarde alguns segundos**
3. **Inicie novamente:**
   ```bash
   npm run dev
   # ou
   bun dev
   ```

### 4. Problemas de formatação

**Sintomas:**
- A chave tem espaços, quebras de linha ou aspas extras

**Solução:**
O arquivo deve estar exatamente assim:
```env
VITE_OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**NÃO use:**
- ❌ `VITE_OPENAI_API_KEY = sk-...` (espaços ao redor do =)
- ❌ `VITE_OPENAI_API_KEY="sk-..."` (aspas)
- ❌ `VITE_OPENAI_API_KEY='sk-...'` (aspas simples)
- ❌ Quebras de linha na chave

### 5. Múltiplas definições

**Sintomas:**
- Há mais de uma linha com `VITE_OPENAI_API_KEY`

**Solução:**
1. Abra o arquivo `.env.local`
2. Certifique-se de que há apenas **UMA** linha com `VITE_OPENAI_API_KEY`
3. Remova duplicatas

## 🔧 Passo a Passo para Corrigir

### Passo 1: Verificar o arquivo
```bash
cat .env.local
```

### Passo 2: Editar corretamente
Abra o arquivo e certifique-se de que está assim:
```env
# OpenAI API Configuration
# Adicione sua API Key da OpenAI abaixo
# Você pode obter uma API Key em: https://platform.openai.com/api-keys
VITE_OPENAI_API_KEY=sk-proj-SUA-CHAVE-AQUI
```

### Passo 3: Salvar o arquivo
- **VS Code/Cursor:** Ctrl+S (Windows/Linux) ou Cmd+S (Mac)
- **Nano:** Ctrl+O, Enter, Ctrl+X
- **Vim:** :wq

### Passo 4: Verificar se foi salvo
```bash
grep "VITE_OPENAI_API_KEY" .env.local
```
Deve mostrar algo como: `VITE_OPENAI_API_KEY=sk-proj-...`

### Passo 5: Reiniciar o servidor
```bash
# Pare o servidor (Ctrl+C)
# Aguarde 2-3 segundos
# Inicie novamente
npm run dev
```

### Passo 6: Testar
```bash
node test-openai-api.js
```

## 🧪 Teste Rápido

Execute este comando para verificar se a chave está sendo lida:
```bash
node -e "import('fs').then(fs => fs.readFileSync('.env.local', 'utf8').split('\n').filter(l => l.startsWith('VITE_OPENAI_API_KEY')).forEach(l => console.log('Encontrado:', l.substring(0, 30) + '...')))"
```

## 📝 Checklist

- [ ] Arquivo `.env.local` existe na raiz do projeto
- [ ] Linha `VITE_OPENAI_API_KEY=sk-...` está presente
- [ ] Não há espaços ao redor do `=`
- [ ] Não há aspas na chave
- [ ] Arquivo foi salvo
- [ ] Servidor foi reiniciado após adicionar a chave
- [ ] Teste executado com sucesso

## 🆘 Se Nada Funcionar

1. **Crie um novo arquivo:**
   ```bash
   echo "VITE_OPENAI_API_KEY=sk-sua-chave-aqui" > .env.local
   ```

2. **Verifique permissões:**
   ```bash
   ls -la .env.local
   ```

3. **Teste manualmente:**
   ```bash
   node test-openai-api.js
   ```

## 💡 Dica Importante

O Vite **só carrega variáveis de ambiente na inicialização**. Se você adicionar a chave enquanto o servidor está rodando, ela **não será carregada** até você reiniciar o servidor.

