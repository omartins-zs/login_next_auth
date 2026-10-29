# 🔑 Acessos, Credenciais e Roteiro de Testes

Guia consolidado de rotas, portas, credenciais dos seeders e validação do projeto **Login NextAuth (Credentials)**.

---

## 🌐 URLs dos Serviços

| Serviço | Ambiente Docker | Ambiente Local (Host) | Descrição |
|---|---|---|---|
| **Tela de Login** | [http://localhost:8080](http://localhost:8080) | [http://localhost:3000](http://localhost:3000) | Formulário de credenciais e botões em 1 clique |
| **Dashboard Protegido** | [http://localhost:8080/dashboard](http://localhost:8080/dashboard) | [http://localhost:3000/dashboard](http://localhost:3000/dashboard) | Painel protegido com validação de sessão e dados do usuário |
| **Health Check** | [http://localhost:8080/api/health](http://localhost:8080/api/health) | [http://localhost:3000/api/health](http://localhost:3000/api/health) | Diagnóstico da aplicação e status do NextAuth |

---

## 👥 Credenciais dos Usuários de Teste (Seeders)

Todos os usuários contam com botões de **login rápido em 1 clique** na tela inicial `/`:

| Perfil | Nome | E-mail | Senha | Permissões |
|---|---|---|---|---|
| **Admin** | Administrador Geral | `admin@authdemo.com` | `Password@123` | Acesso total e gerenciamento |
| **Gerente** | Gerente de Operações | `gerente@authdemo.com` | `Password@123` | Supervisão de operações |
| **Operador** | Operador de Atendimento | `operador@authdemo.com` | `Password@123` | Atendimento ao cliente |
| **Dev (Legado)** | Gabriel Matheus | `gabriel@email.com` | `123` | Conta original de desenvolvimento |

---

## 🧪 Roteiro de Validação e Testes Ponta a Ponta

### 1. Teste de Health Check
Verifique a saúde da aplicação via cURL ou navegador:
```bash
curl http://localhost:8080/api/health
```
Resposta esperada:
```json
{
  "status": "ok",
  "app": "login_next_auth",
  "framework": "Next.js 14",
  "authProvider": "NextAuth.js v4 (Credentials)",
  "timestamp": "2026-10-28T22:30:00.000Z"
}
```

### 2. Teste de Login em 1 Clique
1. Acesse [http://localhost:8080](http://localhost:8080).
2. Na seção **Ou Login Rápido (1 Clique)**, clique em **Administrador Geral**.
3. O sistema autenticará imediatamente e redirecionará para `/dashboard`.
4. Observe os dados do usuário e status da sessão exibidos no painel.

### 3. Teste de Proteção de Rotas
1. Tente acessar [http://localhost:8080/dashboard](http://localhost:8080/dashboard) em uma janela anônima sem autenticação.
2. O sistema redirecionará automaticamente para a tela de login `/`.

### 4. Teste de Logout
1. No dashboard, clique no botão **Encerrar Sessão 🚪**.
2. A sessão JWT e cookies serão removidos e você retornará à tela `/`.
