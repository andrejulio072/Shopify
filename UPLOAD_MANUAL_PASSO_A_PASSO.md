# 🚀 UPLOAD MANUAL DAS SEÇÕES V3.0 - PASSO A PASSO

## ⚠️ **POR QUE MANUAL?**

**GitHub Sync é UNIDIRECIONAL:**
```
✅ Shopify → GitHub (funciona)
❌ GitHub → Shopify (NÃO funciona!)
```

**Shopify CLI bloqueado:**
```
❌ "You are not authorized to use the CLI"
❌ Tentativas de login falharam
❌ shopify theme push: bloqueado
```

**SOLUÇÃO:** Upload manual via Shopify Admin (navegador)

---

## 📋 **CHECKLIST - 6 SEÇÕES PARA UPLOAD**

```
[ ] 1. premium-master-navbar-v3.liquid (695 linhas)
[ ] 2. premium-master-hero-v3.liquid (850 linhas)
[ ] 3. premium-master-categories-v3.liquid (920 linhas)
[ ] 4. premium-master-products-v3.liquid (800 linhas)
[ ] 5. premium-master-testimonials-v3.liquid (750 linhas)
[ ] 6. premium-master-footer-v3.liquid (672 linhas)
```

---

## 🎯 **PASSO 1: ACESSAR O CODE EDITOR**

### 1.1. Abrir Shopify Admin:
```
https://garciabuilder.myshopify.com/admin/themes
```

### 1.2. Encontrar seu tema ativo:
- Procure o tema com badge **"Current theme"**
- OU o tema conectado ao GitHub

### 1.3. Abrir Code Editor:
```
Clique em: Actions → Edit code
```

Você verá a estrutura de pastas à esquerda:
```
Layout/
Templates/
Sections/ ← AQUI!
Snippets/
Assets/
Config/
Locales/
```

---

## 🎯 **PASSO 2: UPLOAD DA PRIMEIRA SEÇÃO (EXEMPLO)**

### 2.1. **Abrir arquivo LOCAL:**

**No VS Code**, abra:
```
C:\Users\andre\OneDrive\Área de Trabalho\shopify\sections\premium-master-navbar-v3.liquid
```

### 2.2. **Selecionar TODO o conteúdo:**
```
Ctrl + A (selecionar tudo)
Ctrl + C (copiar)
```

### 2.3. **No Shopify Admin:**

Clique na pasta **"Sections"** (lado esquerdo)

Clique em: **"Add a new section"**

### 2.4. **Nomear a seção:**
```
Nome: premium-master-navbar-v3
```

⚠️ **IMPORTANTE:**
- NÃO adicione `.liquid` no nome
- Shopify adiciona automaticamente

### 2.5. **Colar o código:**

Na área de texto vazia:
```
Ctrl + V (colar)
```

### 2.6. **Salvar:**
```
Clique em: "Save" (canto superior direito)
```

✅ **PRIMEIRA SEÇÃO CONCLUÍDA!**

---

## 🎯 **PASSO 3: REPETIR PARA AS OUTRAS 5 SEÇÕES**

### **Seção 2: Hero**
```
Arquivo: sections/premium-master-hero-v3.liquid
Nome no Shopify: premium-master-hero-v3
```

### **Seção 3: Categories**
```
Arquivo: sections/premium-master-categories-v3.liquid
Nome no Shopify: premium-master-categories-v3
```

### **Seção 4: Products**
```
Arquivo: sections/premium-master-products-v3.liquid
Nome no Shopify: premium-master-products-v3
```

### **Seção 5: Testimonials**
```
Arquivo: sections/premium-master-testimonials-v3.liquid
Nome no Shopify: premium-master-testimonials-v3
```

### **Seção 6: Footer**
```
Arquivo: sections/premium-master-footer-v3.liquid
Nome no Shopify: premium-master-footer-v3
```

---

## ⏱️ **TEMPO ESTIMADO**

```
Seção 1: 3-4 minutos (primeira vez)
Seções 2-6: 2 minutos cada
Total: 15-20 minutos
```

---

## ✅ **PASSO 4: VERIFICAR SE FUNCIONOU**

### 4.1. **Ir para o Customizer:**
```
Shopify Admin → Online Store → Themes
Clique em: "Customize" (tema ativo)
```

### 4.2. **Testar adicionar seção:**
```
Clique em: "Add section"
Busque: "Premium Master"
```

### 4.3. **Resultado esperado:**
```
✅ Premium Master Navbar V3
✅ Premium Master Hero V3
✅ Premium Master Categories V3
✅ Premium Master Products V3
✅ Premium Master Testimonials V3
✅ Premium Master Footer V3
```

---

## 🎨 **PASSO 5: CRIAR PÁGINA DE TESTE**

### 5.1. **Criar página nova:**
```
Shopify Admin → Online Store → Pages
Clique em: "Add page"
```

### 5.2. **Configurar:**
```
Título: Premium Master Demo
Template: Default template
```

### 5.3. **Adicionar as 6 seções:**
```
No Customizer:
1. Navbar V3
2. Hero V3
3. Categories V3
4. Products V3
5. Testimonials V3
6. Footer V3
```

### 5.4. **Salvar e Visualizar!**

---

## 🚨 **PROBLEMAS COMUNS**

### ❌ **Erro: "Section name already exists"**
**Solução:**
- Seção já existe no Shopify
- Opção 1: Deletar a existente primeiro
- Opção 2: Usar nome diferente (ex: `premium-master-navbar-v3-new`)

### ❌ **Erro: "Liquid syntax error"**
**Solução:**
- Verifique se copiou TODO o código (Ctrl+A)
- Não deixe caracteres estranhos no início/fim
- Copie novamente do VS Code

### ❌ **Erro: "Schema validation failed"**
**Solução:**
- Verifique se o arquivo termina com `{% endschema %}`
- Não corte o código no meio

---

## 📞 **LINKS RÁPIDOS**

- **Shopify Admin:** https://garciabuilder.myshopify.com/admin
- **Temas:** https://garciabuilder.myshopify.com/admin/themes
- **Edit Code:** https://garciabuilder.myshopify.com/admin/themes/current/editor

---

## 🎯 **RESUMO RÁPIDO**

```
1. Abrir: Shopify Admin → Themes → Edit code
2. Pasta: Sections → Add a new section
3. Nome: premium-master-navbar-v3
4. Copiar/Colar código do VS Code
5. Save
6. Repetir para as outras 5 seções
7. Testar no Customizer
8. Criar página de demonstração
9. Publicar! 🚀
```

---

**Boa sorte!** 💪

Qualquer dúvida, consulte os logs do Shopify Admin para ver se há erros de validação.
