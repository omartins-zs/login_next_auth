# 💻 Como Executar Localmente (Host)

Instruções para configurar e executar a aplicação **Login NextAuth** diretamente na sua máquina física sem o Docker.

---

## 🖥️ Ambiente de referência (máquina de desenvolvimento)

| Item | Especificação |
|---|---|
| **Sistema Operacional** | Windows 11 Pro 64-bit |
| **Shell** | PowerShell 7 / Windows Terminal |
| **Node.js** | v20.x ou superior |
| **Gerenciador de Pacotes** | npm 10.x |
| **Porta da Aplicação** | `3000` |

---

## 📋 Pré-requisitos

1. **Node.js 20+** instalado no host (`node -v`).
2. **npm** instalado (`npm -v`).

---

## 🔧 Passo a Passo

### 1. Configurar o Arquivo .env
Copie o template:
```bash
cp .env.example .env
```
Certifique-se de que o bloco `# LOCAL` está ativo no arquivo `.env`:
```ini
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="eA0q4oR7e4e1aQvQfG5VnjP8t2vG9FfC4hH8tI7L7M"
```

### 2. Instalar as Dependências
```bash
npm install
```

### 3. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```

### 4. Acessar a Aplicação
Abra seu navegador em:
- **Login:** [http://localhost:3000](http://localhost:3000)
- **Dashboard Protegido:** [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

Para credenciais de login e testes em 1 clique, consulte [`docs/ACESSOS_TESTES.md`](file:///C:/Projetos/login_next_auth/docs/ACESSOS_TESTES.md).
