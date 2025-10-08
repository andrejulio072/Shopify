# 📄 PASSO 3: UPLOAD DO TEMPLATE

## ✅ **Objetivo:** Criar o template page.premium-master.json que usa todas as 6 seções V3.0

---

## 📋 **CHECKLIST DESTE PASSO:**

- [ ] Abrir arquivo template local
- [ ] Criar novo template no Shopify
- [ ] Colar configuração JSON
- [ ] Salvar e verificar

---

## 🎯 **O QUE É UM TEMPLATE?**

```
Template = Estrutura da Página

Define:
   ✅ Quais seções aparecem
   ✅ Em que ordem
   ✅ Configurações padrão de cada seção
   ✅ Conteúdo inicial (textos, imagens placeholders)
```

**Nosso template inclui:**
- Navbar (topo fixo)
- Hero (banner principal)
- Categories (grid de categorias)
- Products (produtos em destaque)
- Testimonials (reviews de clientes)
- Footer (rodapé com links e newsletter)

---

## 🚀 **PASSO A PASSO:**

### **3.1 - Abrir Arquivo Template Local**

**No Windows Explorer:**

```powershell
Caminho: C:\Users\andre\OneDrive\Área de Trabalho\shopify\templates
Arquivo: page.premium-master.json
```

**Abrir com:**
- Notepad
- Visual Studio Code (recomendado)
- Ou qualquer editor de texto

**Selecionar tudo:**
- Ctrl+A (selecionar todo conteúdo)
- Ctrl+C (copiar)

---

### **3.2 - Acessar Área de Templates no Shopify**

**No Shopify Admin (Editor de Código):**

```
1. Certifique-se de estar em: Actions → Edit code
2. No painel esquerdo, localize a pasta: "Templates"
3. Clique no botão: "Add a new template"
```

**Configurar novo template:**

```
Template type: page
   ↓
Based on: JSON
   ↓
Template name: premium-master
   ↓
Clique: "Create template"
```

**⚠️ IMPORTANTE:**
- Nome EXATO: `premium-master` (sem "page." na frente)
- Tipo: `page` (não product, collection, etc)
- Base: `JSON` (não Liquid)

---

### **3.3 - Colar Configuração JSON**

**No editor que abrir:**

```
1. Você verá um JSON template básico:
   {
     "sections": {},
     "order": []
   }

2. DELETE todo esse conteúdo padrão

3. Cole o conteúdo copiado (Ctrl+V)

4. Você deve ver um JSON completo com:
   - "sections": { ... 6 seções ... }
   - "order": [ ... sequência das seções ... ]
```

---

### **3.4 - Verificar Estrutura JSON**

**O JSON deve ter esta estrutura:**

```json
{
  "sections": {
    "navbar": {
      "type": "premium-master-navbar-v3",
      "settings": { ... }
    },
    "hero": {
      "type": "premium-master-hero-v3",
      "settings": { ... }
    },
    "categories": {
      "type": "premium-master-categories-v3",
      "settings": { ... },
      "blocks": { ... }
    },
    "products": {
      "type": "premium-master-products-v3",
      "settings": { ... }
    },
    "testimonials": {
      "type": "premium-master-testimonials-v3",
      "settings": { ... },
      "blocks": { ... }
    },
    "footer": {
      "type": "premium-master-footer-v3",
      "settings": { ... }
    }
  },
  "order": [
    "navbar",
    "hero",
    "categories",
    "products",
    "testimonials",
    "footer"
  ]
}
```

**✅ Pontos de verificação:**
- 6 seções dentro de "sections": {}
- Cada seção tem "type" e "settings"
- "order" array tem 6 itens na sequência correta
- JSON válido (sem erros de vírgula, chaves, etc)

---

### **3.5 - Salvar Template**

```
1. Clique no botão "Save" (canto superior direito)
2. Aguarde a mensagem "Saved" aparecer
3. Verifique se não apareceu nenhum erro
```

**✅ Sucesso:**
```
- Mensagem "Saved" confirmada
- Nenhum erro de sintaxe JSON
- Template aparece na lista: page.premium-master.json
```

---

## ✅ **VERIFICAÇÃO FINAL:**

**No painel esquerdo, pasta "Templates", você deve ver:**

```
📁 Templates/
   ├── page.json (default)
   ├── page.premium-master.json ← ✅ NOVO!
   ├── product.json
   └── ... (outros templates)
```

---

## 🔍 **VALIDAÇÃO DETALHADA:**

### **Abra o template criado e confira:**

**1. Navbar Section:**
```json
"navbar": {
  "type": "premium-master-navbar-v3",
  "settings": {
    "announcement_text": "🔥 FRETE GRÁTIS...",
    "show_announcement": true,
    ...
  }
}
```

**2. Hero Section:**
```json
"hero": {
  "type": "premium-master-hero-v3",
  "settings": {
    "badge_text": "Coleção 2025",
    "heading": "TRANSFORME SEU",
    "heading_highlight": "CORPO E MENTE",
    ...
  }
}
```

**3. Categories Section:**
```json
"categories": {
  "type": "premium-master-categories-v3",
  "settings": { ... },
  "blocks": {
    "category_1": { ... },
    "category_2": { ... },
    ... (6 categorias total)
  }
}
```

**4. Products Section:**
```json
"products": {
  "type": "premium-master-products-v3",
  "settings": {
    "collection": "",
    "products_to_show": 6,
    ...
  }
}
```

**5. Testimonials Section:**
```json
"testimonials": {
  "type": "premium-master-testimonials-v3",
  "settings": { ... },
  "blocks": {
    "testimonial_1": { ... },
    "testimonial_2": { ... },
    ... (6 reviews total)
  }
}
```

**6. Footer Section:**
```json
"footer": {
  "type": "premium-master-footer-v3",
  "settings": {
    "newsletter_heading": "Junte-se ao Movimento",
    ...
  }
}
```

---

## 🆘 **PROBLEMAS COMUNS:**

### **Problema: "Invalid JSON" ao salvar**

```
❌ Causa: Erro de sintaxe no JSON

✅ Solução:
   1. Copie o JSON novamente do arquivo original
   2. Certifique-se de copiar TODO o conteúdo
   3. Use validator: jsonlint.com
   4. Verifique:
      - Todas as chaves têm fechamento { }
      - Todas as aspas fechadas corretamente
      - Vírgulas entre itens (mas NÃO após último item)
```

### **Problema: "Section type not found"**

```
❌ Causa: Seções V3.0 não foram uploaded (Passo 2)

✅ Solução:
   1. Volte ao Passo 2
   2. Verifique se TODAS as 6 seções foram uploaded:
      - premium-master-navbar-v3.liquid ✅
      - premium-master-hero-v3.liquid ✅
      - premium-master-categories-v3.liquid ✅
      - premium-master-products-v3.liquid ✅
      - premium-master-testimonials-v3.liquid ✅
      - premium-master-footer-v3.liquid ✅
   3. Nomes devem estar EXATOS (com v3 no final)
   4. Tente salvar o template novamente
```

### **Problema: Template criado mas não aparece na lista de templates**

```
❌ Causa: Tipo errado ou nome inválido

✅ Solução:
   1. Delete o template criado
   2. Crie novamente com:
      - Template type: page (não Page!)
      - Template name: premium-master (lowercase, sem espaços)
   3. Salve novamente
```

### **Problema: JSON muito longo, editor trava**

```
❌ Causa: JSON grande + conexão lenta

✅ Solução:
   1. Aguarde 30-60 segundos após colar
   2. NÃO clique em Save múltiplas vezes
   3. Se travar >2min:
      - Recarregue a página
      - Tente novamente
      - Ou use Shopify CLI (shopify theme push)
```

---

## 💡 **DICAS PRO:**

### **Dica 1: Validar JSON antes de colar**

```
1. Acesse: https://jsonlint.com/
2. Cole seu JSON
3. Clique "Validate JSON"
4. Se aparecer "Valid JSON", pode colar no Shopify!
```

### **Dica 2: Backup do Template**

```
Após criar com sucesso:
   1. Copie o JSON completo
   2. Salve em arquivo local: template-backup.json
   3. Útil caso precise recriar depois
```

### **Dica 3: Editar Configurações depois**

```
Você NÃO precisa editar o JSON diretamente!

Depois de criar a página (Passo 4), você pode:
   - Usar o Theme Customizer (visual editor)
   - Editar textos, imagens, cores
   - Arrastar seções
   - Tudo pela interface gráfica!
```

---

## 📸 **EVIDÊNCIA DE CONCLUSÃO:**

Tire um screenshot mostrando:
- ✅ Pasta "Templates" expandida
- ✅ Arquivo "page.premium-master.json" visível
- ✅ JSON aberto no editor (mostrando estrutura)
- ✅ Mensagem "Saved" confirmada

**Salve como:** `evidencia-passo-3.png`

---

## ➡️ **PRÓXIMO PASSO:**

Template criado? ✅

```
→ Avance para: PASSO_4_CRIAR_PAGINA.md
   (Criar página usando o template premium-master)
```

---

## ⏱️ **TEMPO ESTIMADO:** 5-8 minutos

**Template no ar! Vamos criar a página agora! 🚀**
