# 📤 PASSO 2: UPLOAD DAS SEÇÕES V3.0

## ✅ **Objetivo:** Fazer upload das 6 seções Premium Master V3.0 no Shopify Admin

---

## 📋 **CHECKLIST DESTE PASSO:**
- [ ] Seção 1: Navbar uploaded
- [ ] Seção 2: Hero uploaded
- [ ] Seção 3: Categories uploaded
- [ ] Seção 4: Products uploaded
- [ ] Seção 5: Testimonials uploaded
- [ ] Seção 6: Footer uploaded

---

## 🎯 **ANTES DE COMEÇAR:**

**Onde estão os arquivos?**
```
📁 Local: C:\Users\andre\OneDrive\Área de Trabalho\shopify\sections\

📦 Ou use o ZIP: premium-master-v3-complete-20251008-1320.zip
```

**Método de Upload:**
- ✅ **Método 1:** Copy/Paste (recomendado) ← Vamos usar este
- ⚠️ **Método 2:** Shopify CLI (avançado)

---

## 🚀 **SEÇÃO 1 DE 6: NAVBAR**

### **2.1.1 - Abrir o Arquivo Local**

**Windows Explorer:**
```
1. Navegue até: C:\Users\andre\OneDrive\Área de Trabalho\shopify\sections
2. Encontre: premium-master-navbar-v3.liquid
3. Clique direito → Open with → Notepad (ou VS Code)
4. Selecione TODO o conteúdo (Ctrl+A)
5. Copie (Ctrl+C)
```

### **2.1.2 - Criar Nova Seção no Shopify**

**No Shopify Admin (Editor de Código):**
```
1. Certifique-se de estar em: Actions → Edit code
2. No painel esquerdo, localize a pasta: "Sections"
3. Clique no botão: "Add a new section"
4. Nome do arquivo: premium-master-navbar-v3
   (SEM a extensão .liquid, o Shopify adiciona automaticamente)
5. Clique: "Done" ou "Create section"
```

### **2.1.3 - Colar o Código**

```
1. O editor abrirá com template vazio
2. DELETE todo o conteúdo padrão (se houver)
3. Cole o código copiado (Ctrl+V)
4. Clique: "Save" (canto superior direito)
5. Aguarde: "Saved" aparecer
```

**✅ Confirmação:**
```
Você deve ver:
   - Arquivo "premium-master-navbar-v3.liquid" na lista de Sections
   - Código com {% schema %} no final
   - Mensagem "Saved" confirmada
```

---

## 🚀 **SEÇÃO 2 DE 6: HERO**

### **2.2.1 - Abrir Arquivo**
```
Arquivo: premium-master-hero-v3.liquid
Local: sections\premium-master-hero-v3.liquid
Ação: Ctrl+A → Ctrl+C (copiar tudo)
```

### **2.2.2 - Criar no Shopify**
```
1. Sections → Add a new section
2. Nome: premium-master-hero-v3
3. Done
```

### **2.2.3 - Colar e Salvar**
```
1. Delete conteúdo padrão
2. Ctrl+V (colar)
3. Save
4. Aguarde "Saved"
```

**✅ 2 de 6 concluídas!**

---

## 🚀 **SEÇÃO 3 DE 6: CATEGORIES**

### **2.3.1 - Abrir Arquivo**
```
Arquivo: premium-master-categories-v3.liquid
Local: sections\premium-master-categories-v3.liquid
Ação: Ctrl+A → Ctrl+C
```

### **2.3.2 - Criar no Shopify**
```
1. Sections → Add a new section
2. Nome: premium-master-categories-v3
3. Done
```

### **2.3.3 - Colar e Salvar**
```
1. Delete padrão
2. Ctrl+V
3. Save
4. Aguarde "Saved"
```

**✅ 3 de 6 concluídas!**

---

## 🚀 **SEÇÃO 4 DE 6: PRODUCTS**

### **2.4.1 - Abrir Arquivo**
```
Arquivo: premium-master-products-v3.liquid
Local: sections\premium-master-products-v3.liquid
Ação: Ctrl+A → Ctrl+C
```

### **2.4.2 - Criar no Shopify**
```
1. Sections → Add a new section
2. Nome: premium-master-products-v3
3. Done
```

### **2.4.3 - Colar e Salvar**
```
1. Delete padrão
2. Ctrl+V
3. Save
4. Aguarde "Saved"
```

**✅ 4 de 6 concluídas!**

---

## 🚀 **SEÇÃO 5 DE 6: TESTIMONIALS**

### **2.5.1 - Abrir Arquivo**
```
Arquivo: premium-master-testimonials-v3.liquid
Local: sections\premium-master-testimonials-v3.liquid
Ação: Ctrl+A → Ctrl+C
```

### **2.5.2 - Criar no Shopify**
```
1. Sections → Add a new section
2. Nome: premium-master-testimonials-v3
3. Done
```

### **2.5.3 - Colar e Salvar**
```
1. Delete padrão
2. Ctrl+V
3. Save
4. Aguarde "Saved"
```

**✅ 5 de 6 concluídas!**

---

## 🚀 **SEÇÃO 6 DE 6: FOOTER**

### **2.6.1 - Abrir Arquivo**
```
Arquivo: premium-master-footer-v3.liquid
Local: sections\premium-master-footer-v3.liquid
Ação: Ctrl+A → Ctrl+C
```

### **2.6.2 - Criar no Shopify**
```
1. Sections → Add a new section
2. Nome: premium-master-footer-v3
3. Done
```

### **2.6.3 - Colar e Salvar**
```
1. Delete padrão
2. Ctrl+V
3. Save
4. Aguarde "Saved"
```

**✅ 6 de 6 concluídas! 🎉**

---

## ✅ **VERIFICAÇÃO FINAL:**

**No painel esquerdo, pasta "Sections", você deve ver:**

```
📁 Sections/
   ├── ... (outras seções existentes)
   ├── premium-master-navbar-v3.liquid       ← ✅
   ├── premium-master-hero-v3.liquid         ← ✅
   ├── premium-master-categories-v3.liquid   ← ✅
   ├── premium-master-products-v3.liquid     ← ✅
   ├── premium-master-testimonials-v3.liquid ← ✅
   └── premium-master-footer-v3.liquid       ← ✅
```

---

## 🔍 **VALIDAÇÃO RÁPIDA:**

**Para cada seção, verifique:**

### **Navbar (695 linhas)**
```
✅ Começa com: <style>
✅ Tem: .pm-navbar-v3
✅ Termina com: {% endschema %}
✅ Schema tem: "name": "PM Navbar V3"
```

### **Hero (800 linhas)**
```
✅ Começa com: <style>
✅ Tem: .pm-hero-v3
✅ Termina com: {% endschema %}
✅ Schema tem: "name": "PM Hero V3"
```

### **Categories (920 linhas)**
```
✅ Começa com: <style>
✅ Tem: .pm-categories-v3
✅ Termina com: {% endschema %}
✅ Schema tem: "name": "PM Categories V3"
```

### **Products (800 linhas)**
```
✅ Começa com: <style>
✅ Tem: .pm-products-v3
✅ Termina com: {% endschema %}
✅ Schema tem: "name": "PM Products V3"
```

### **Testimonials (750 linhas)**
```
✅ Começa com: <style>
✅ Tem: .pm-testimonials-v3
✅ Termina com: {% endschema %}
✅ Schema tem: "name": "PM Testimonials V3"
```

### **Footer (700 linhas)**
```
✅ Começa com: <style>
✅ Tem: .pm-footer-v3
✅ Termina com: {% endschema %}
✅ Schema tem: "name": "PM Footer V3"
```

---

## 🆘 **PROBLEMAS COMUNS:**

### **Problema: "Section name already exists"**
```
❌ Causa: Já existe seção com esse nome

✅ Solução:
   OPÇÃO A: Delete a seção antiga primeiro
      1. Encontre a seção antiga
      2. Clique nos 3 pontinhos
      3. Delete
      4. Tente criar novamente

   OPÇÃO B: Use nome diferente
      - premium-master-navbar-v3-new
      - (depois pode renomear a antiga)
```

### **Problema: Código não salva / erro ao salvar**
```
❌ Causa: Erro de sintaxe Liquid

✅ Solução:
   1. Verifique se copiou TODO o arquivo
   2. Confirme que {% endschema %} está no final
   3. Não pode ter caracteres especiais no início/fim
   4. Se persistir, tente copiar novamente do arquivo original
```

### **Problema: Seção aparece mas "Invalid JSON in schema"**
```
❌ Causa: Schema JSON mal formatado

✅ Solução:
   1. Role até o final do arquivo ({% schema %})
   2. Verifique se tem:
      - {% schema %}
      - { ... JSON aqui ... }
      - {% endschema %}
   3. JSON deve estar entre as tags schema
```

### **Problema: Upload muito lento**
```
❌ Causa: Conexão lenta ou arquivo muito grande

✅ Solução:
   1. Aguarde pacientemente (pode demorar 30-60 seg)
   2. NÃO clique em "Save" múltiplas vezes
   3. Se travar >2min, recarregue página e tente novamente
```

---

## 💡 **DICAS PRO:**

### **Dica 1: Atalhos de Teclado**
```
Ctrl+A = Selecionar tudo
Ctrl+C = Copiar
Ctrl+V = Colar
Ctrl+S = Salvar (funciona no Shopify editor!)
Ctrl+F = Buscar no código
```

### **Dica 2: Verificação Rápida**
```
Após colar, use Ctrl+F e busque por:
   "{% schema %}"

Se encontrar, o arquivo está completo! ✅
```

### **Dica 3: Upload em Lote (Avançado)**
```
Se você tem Shopify CLI instalado:
   shopify theme push -d

Isso faz upload de TODAS as seções de uma vez!
(Mas o método manual é mais seguro para iniciantes)
```

---

## 📸 **EVIDÊNCIA DE CONCLUSÃO:**

Tire um screenshot mostrando:
- ✅ Pasta "Sections" expandida
- ✅ Todas as 6 seções V3.0 visíveis na lista
- ✅ Mensagem "Saved" ou timestamp recente

**Salve como:** `evidencia-passo-2.png`

---

## ➡️ **PRÓXIMO PASSO:**

Seções uploaded? ✅

```
→ Avance para: PASSO_3_UPLOAD_TEMPLATE.md
   (Criar o template page.premium-master.json)
```

---

## ⏱️ **TEMPO ESTIMADO:** 15-20 minutos

**6 seções no Shopify! Vamos criar o template agora! 🚀**
