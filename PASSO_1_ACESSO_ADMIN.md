# 🔐 PASSO 1: ACESSO AO SHOPIFY ADMIN

## ✅ **Objetivo:** Acessar o painel administrativo e preparar o ambiente

---

## 📋 **CHECKLIST DESTE PASSO:**
- [ ] Acessar Shopify Admin
- [ ] Verificar permissões
- [ ] Criar backup do tema atual
- [ ] Confirmar ambiente pronto

---

## 🚀 **INSTRUÇÕES:**

### **1.1 - Abra o Shopify Admin**

**URL:** `https://garciabuilder.myshopify.com/admin`

```
📱 Faça login com:
   - Email da conta
   - Senha
   - (Autenticação 2FA se ativada)
```

**✅ Você deve ver:**
- Dashboard principal
- Menu lateral com opções
- Barra superior com nome da loja

---

### **1.2 - Verifique suas Permissões**

```
Você precisa ter:
   ✅ Acesso a "Online Store"
   ✅ Permissão para editar temas
   ✅ Permissão para adicionar seções
```

**Como verificar:**
1. Olhe no menu lateral esquerdo
2. Procure por "Online Store"
3. Se estiver visível → ✅ Você tem acesso!

---

### **1.3 - Acesse a Área de Temas**

**Navegação:**
```
Menu Lateral → Online Store → Themes
```

**✅ Você deve ver:**
- Tema atual (ativo) com badge "Current theme"
- Possíveis temas inativos
- Botão "Add theme" ou "Customize"

---

### **1.4 - IMPORTANTE: Criar Backup**

🚨 **NUNCA pule este passo!** 🚨

**Por que fazer backup?**
- Segurança caso algo dê errado
- Possibilidade de reverter mudanças
- Tranquilidade durante testes

**Como criar backup:**

```
1. No tema ATIVO (Current theme)
2. Clique no botão "Actions" (3 pontinhos ...)
3. Selecione: "Duplicate"
4. Aguarde a duplicação (10-20 segundos)
5. O tema duplicado aparecerá abaixo
```

**Renomeie o backup:**
```
1. No tema duplicado, clique "Actions"
2. Selecione: "Rename"
3. Nome sugerido: "Backup - 08 OUT 2025"
4. Save
```

**✅ Agora você tem:**
- ✅ Tema original ativo
- ✅ Backup completo (caso precise reverter)

---

### **1.5 - Verificar Editor de Código**

**Teste o acesso ao editor:**

```
1. Tema ATIVO → Actions
2. Selecione: "Edit code"
3. Aguarde carregar (5-10 segundos)
```

**✅ Você deve ver:**
- Painel esquerdo: estrutura de pastas
  - Layout
  - Templates
  - Sections ← **IMPORTANTE**
  - Snippets
  - Assets
  - Config
  - Locales
- Painel direito: editor de código

**Pastas que vamos usar:**
- 📁 **Sections** ← Aqui vão as 6 seções V3.0
- 📁 **Templates** ← Aqui vai o page.premium-master.json

---

## 🎯 **RESULTADO ESPERADO:**

Após este passo, você deve ter:

```
✅ Acesso confirmado ao Shopify Admin
✅ Permissões verificadas
✅ Backup do tema criado
✅ Editor de código acessível
✅ Ambiente seguro para trabalhar
```

---

## 🆘 **PROBLEMAS COMUNS:**

### **Problema: "Online Store" não aparece no menu**
```
❌ Causa: Conta sem permissões de administrador

✅ Solução:
   1. Verifique se é conta owner da loja
   2. Se for colaborador, peça ao owner para:
      - Settings → Users and permissions
      - Seu usuário → Edit permissions
      - Marcar: "Themes" e "Online store pages"
```

### **Problema: Não consigo duplicar tema**
```
❌ Causa: Limite de temas atingido (alguns planos têm limite)

✅ Solução:
   1. Delete temas antigos não utilizados
   2. Ou: anote a versão atual do tema como backup
   3. Continue com cuidado extra
```

### **Problema: Editor de código não carrega**
```
❌ Causa: Conexão lenta ou cache

✅ Solução:
   1. Limpe cache do navegador (Ctrl+Shift+Del)
   2. Tente em modo anônimo
   3. Use Chrome ou Firefox (recomendado)
   4. Verifique conexão de internet
```

---

## 📸 **EVIDÊNCIA DE CONCLUSÃO:**

Tire um screenshot mostrando:
- ✅ Tema atual ativo
- ✅ Tema backup criado abaixo
- ✅ Editor de código aberto (pasta Sections visível)

**Salve como:** `evidencia-passo-1.png`

---

## ➡️ **PRÓXIMO PASSO:**

Quando concluir este passo:

```
✅ Backup criado
✅ Editor acessível
✅ Pronto para upload

→ Avance para: PASSO_2_UPLOAD_SECOES.md
```

---

## 💡 **DICA PRO:**

```
🌐 Mantenha 2 abas abertas:

ABA 1: Editor de código
   (Para upload das seções)

ABA 2: Theme customizer
   (Para configurar depois)
```

---

## ⏱️ **TEMPO ESTIMADO:** 5-10 minutos

**Pronto? Vamos ao Passo 2! 🚀**
