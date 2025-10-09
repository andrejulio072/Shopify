# 🚀 GUIA COMPLETO: Upload Manual via Shopify Admin

## 🎯 **Método Definitivo - Funciona 100%**

Já que o Shopify CLI está com restrições, vamos fazer upload diretamente pelo navegador.

---

## 📤 **PASSO A PASSO COMPLETO:**

### **ETAPA 1: Acessar Shopify Admin**

1. **Abra seu navegador** (Chrome recomendado)
2. **Acesse:**
   ```
   https://garciabuilder.myshopify.com/admin
   ```
3. **Faça login** (se necessário)

---

### **ETAPA 2: Ir para Editor de Código**

1. **Menu lateral esquerdo** → "Online Store"
2. **Clique em:** "Themes"
3. **Tema ATUAL (ativo)** → Botão **"Actions"** (3 pontinhos ...)
4. **Selecione:** "Edit code"
5. **Aguarde carregar** (5-10 segundos)

Você verá a estrutura de pastas:
```
📁 Layout
📁 Templates
📁 Sections ← VAMOS USAR!
📁 Snippets
📁 Assets
📁 Config
📁 Locales
```

---

### **ETAPA 3: Upload Seção por Seção**

Vou te guiar nas **6 seções**, uma por vez!

---

## 🔝 **SEÇÃO 1/6: NAVBAR**

### **A) Preparar arquivo local:**

1. Abra o Windows Explorer
2. Navegue até:
   ```
   C:\Users\andre\OneDrive\Área de Trabalho\shopify\sections
   ```
3. Encontre: **premium-master-navbar-v3.liquid**
4. **Clique direito** → "Abrir com" → **Notepad**
5. **Ctrl+A** (selecionar tudo)
6. **Ctrl+C** (copiar)

### **B) Criar no Shopify:**

1. **No Editor de Código**, clique na pasta **"Sections"**
2. Clique no botão: **"Add a new section"**
3. **Nome do arquivo:**
   ```
   premium-master-navbar-v3
   ```
   ⚠️ SEM ".liquid" no final!

4. **Se aparecer opção de template:**
   - Selecione: "Blank template" ou "Custom liquid"
   - Se não aparecer, qualquer opção funciona

5. **Clique:** "Done" ou "Create section"

### **C) Colar código:**

1. **Editor abrirá** (pode ter código padrão)
2. **DELETE TODO o conteúdo** (Ctrl+A, Delete)
3. **Cole o código** copiado (Ctrl+V)
4. **Verifique:**
   - Primeira linha: `<!-- ... -->`
   - Última linha: `{% endschema %}`
5. **Clique:** "Save" (botão verde, canto superior direito)
6. **Aguarde:** "Saved ✓" aparecer

✅ **NAVBAR COMPLETA! (1/6)**

---

## 🎯 **SEÇÃO 2/6: HERO**

### **A) Preparar arquivo:**
```
Arquivo: premium-master-hero-v3.liquid
Localização: C:\Users\andre\OneDrive\Área de Trabalho\shopify\sections
Ação: Abrir → Ctrl+A → Ctrl+C
```

### **B) Criar no Shopify:**
```
Sections → Add a new section
Nome: premium-master-hero-v3
Template: Blank
Create
```

### **C) Colar:**
```
Delete conteúdo padrão → Ctrl+V → Save
```

✅ **HERO COMPLETA! (2/6)**

---

## 🎨 **SEÇÃO 3/6: CATEGORIES**

### **A) Preparar arquivo:**
```
Arquivo: premium-master-categories-v3.liquid
Ação: Abrir → Ctrl+A → Ctrl+C
```

### **B) Criar no Shopify:**
```
Sections → Add a new section
Nome: premium-master-categories-v3
Create
```

### **C) Colar:**
```
Delete tudo → Ctrl+V → Save
```

✅ **CATEGORIES COMPLETA! (3/6)**

---

## 🛍️ **SEÇÃO 4/6: PRODUCTS**

### **A) Preparar arquivo:**
```
Arquivo: premium-master-products-v3.liquid
Ação: Abrir → Ctrl+A → Ctrl+C
```

### **B) Criar no Shopify:**
```
Sections → Add a new section
Nome: premium-master-products-v3
Create
```

### **C) Colar:**
```
Delete tudo → Ctrl+V → Save
```

✅ **PRODUCTS COMPLETA! (4/6)**

---

## ⭐ **SEÇÃO 5/6: TESTIMONIALS**

### **A) Preparar arquivo:**
```
Arquivo: premium-master-testimonials-v3.liquid
Ação: Abrir → Ctrl+A → Ctrl+C
```

### **B) Criar no Shopify:**
```
Sections → Add a new section
Nome: premium-master-testimonials-v3
Create
```

### **C) Colar:**
```
Delete tudo → Ctrl+V → Save
```

✅ **TESTIMONIALS COMPLETA! (5/6)**

---

## 🔚 **SEÇÃO 6/6: FOOTER**

### **A) Preparar arquivo:**
```
Arquivo: premium-master-footer-v3.liquid
Ação: Abrir → Ctrl+A → Ctrl+C
```

### **B) Criar no Shopify:**
```
Sections → Add a new section
Nome: premium-master-footer-v3
Create
```

### **C) Colar:**
```
Delete tudo → Ctrl+V → Save
```

✅ **FOOTER COMPLETA! (6/6)**

---

## 🎉 **VERIFICAÇÃO FINAL:**

Na pasta "Sections", você deve ver:

```
📁 Sections/
   ├── ... (seções antigas)
   ├── premium-master-navbar-v3.liquid       ✅
   ├── premium-master-hero-v3.liquid         ✅
   ├── premium-master-categories-v3.liquid   ✅
   ├── premium-master-products-v3.liquid     ✅
   ├── premium-master-testimonials-v3.liquid ✅
   └── premium-master-footer-v3.liquid       ✅
```

---

## ➡️ **PRÓXIMO PASSO:**

Após fazer upload das 6 seções, vamos criar o **TEMPLATE**!

---

## ⏱️ **TEMPO ESTIMADO:**

- Upload de 1 seção: ~2 minutos
- Total das 6 seções: ~12-15 minutos

---

## 🆘 **PROBLEMAS COMUNS:**

### **"Section name already exists"**
- Já existe seção com esse nome
- Delete a antiga primeiro ou use nome diferente

### **Código não salva**
- Verifique se copiou TODO o conteúdo (deve ter {% endschema %} no final)
- Tente recarregar página e fazer novamente

### **Editor lento**
- Normal para arquivos grandes
- Aguarde 30-60 segundos após colar
- Não clique Save múltiplas vezes

---

**🚀 Comece pela Navbar e vá fazendo uma por uma!**

**Me avise quando concluir cada seção!**
