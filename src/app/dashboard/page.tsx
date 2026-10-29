import LogoutButton from "@/components/LogoutButton"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

export default async function Page() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header do Dashboard */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800">
          <div>
            <span className="badge badge-primary font-bold text-xs uppercase px-3 py-1">
              Sessão Autenticada
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
              Olá, {session.user?.name || "Usuário"}! 👋
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Conectado como <strong className="text-primary">{session.user?.email}</strong>
            </p>
          </div>
          <div>
            <LogoutButton />
          </div>
        </div>

        {/* Métricas e Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 space-y-2">
            <div className="text-xs font-bold uppercase text-gray-500">Status da Autenticação</div>
            <div className="text-2xl font-black text-green-600 flex items-center gap-2">
              <span>●</span> Ativa / Válida
            </div>
            <p className="text-xs text-gray-400">NextAuth Credentials Token (JWT)</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 space-y-2">
            <div className="text-xs font-bold uppercase text-gray-500">Perfil Ativo</div>
            <div className="text-2xl font-black text-gray-900 dark:text-white">
              {session.user?.name?.includes("Admin") ? "Admin Master" : (session.user?.name?.includes("Gerente") ? "Gerente" : "Operador")}
            </div>
            <p className="text-xs text-gray-400">Acesso via login rápido em 1 clique</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 space-y-2">
            <div className="text-xs font-bold uppercase text-gray-500">Ambiente de Execução</div>
            <div className="text-2xl font-black text-primary">
              Next.js 14
            </div>
            <p className="text-xs text-gray-400">Pronto para Docker e Produção</p>
          </div>
        </div>

        {/* Card Informativo */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            🚀 Como funciona o NextAuth Credentials
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Esta aplicação demonstra a implementação de autenticação stateless baseada em tokens JWT.
            Ao realizar login com as credenciais ou pelos atalhos em 1 clique, o servidor valida a requisição,
            emite o cookie de sessão seguro e disponibiliza os dados do usuário tanto via Server Components
            (<code className="bg-gray-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-xs font-mono">getServerSession</code>)
            quanto no client-side via React hooks.
          </p>
        </div>
      </div>
    </div>
  )
}
