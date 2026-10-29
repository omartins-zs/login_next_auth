"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [email, setEmail] = useState("admin@authdemo.com");
  const [password, setPassword] = useState("Password@123");
  const [loading, setLoading] = useState(false);
  const [loadingDemo, setLoadingDemo] = useState<string | null>(null);

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/dashboard",
      });
    } catch (err) {
      console.error("Erro no login:", err);
      setLoading(false);
    }
  }

  async function quickLogin(demoEmail: string, demoPassword = "Password@123") {
    setLoadingDemo(demoEmail);
    try {
      await signIn("credentials", {
        email: demoEmail,
        password: demoPassword,
        callbackUrl: "/dashboard",
      });
    } catch (err) {
      console.error("Erro no login rápido:", err);
      setLoadingDemo(null);
    }
  }

  return (
    <div className="bg-white dark:bg-zinc-900 p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-100 dark:border-zinc-800 space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary font-black text-xl mb-1">
          🔐
        </div>
        <h2 className="font-extrabold text-2xl text-gray-900 dark:text-white">
          Acesse sua Conta
        </h2>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Autenticação segura via NextAuth Credentials
        </p>
      </div>

      {error === "CredentialsSignin" && (
        <div className="p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 rounded-lg text-center font-medium">
          E-mail ou senha incorretos. Tente novamente!
        </div>
      )}

      <form onSubmit={login} className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-400 mb-1">
            E-mail
          </label>
          <input
            type="email"
            placeholder="seu.email@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered input-primary w-full bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-600 dark:text-gray-400 mb-1">
            Senha
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered input-primary w-full bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full font-bold shadow-md text-white"
          disabled={loading || !!loadingDemo}
        >
          {loading ? "Entrando..." : "Entrar com Credenciais"}
        </button>
      </form>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200 dark:border-zinc-800" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white dark:bg-zinc-900 px-3 text-gray-500 font-bold">
            Ou Login Rápido (1 Clique)
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <button
          type="button"
          onClick={() => quickLogin("admin@authdemo.com")}
          disabled={loading || !!loadingDemo}
          className="w-full flex items-center justify-between p-3 border border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition text-left"
        >
          <div className="flex items-center space-x-3">
            <span className="text-xl">👑</span>
            <div>
              <div className="font-bold text-sm text-gray-900 dark:text-white">
                Administrador Geral
              </div>
              <div className="text-[11px] text-gray-500">admin@authdemo.com</div>
            </div>
          </div>
          <span className="badge badge-error text-white font-bold text-xs">
            Admin
          </span>
        </button>

        <button
          type="button"
          onClick={() => quickLogin("gerente@authdemo.com")}
          disabled={loading || !!loadingDemo}
          className="w-full flex items-center justify-between p-3 border border-blue-200 dark:border-blue-900/50 hover:bg-blue-50 dark:hover:bg-blue-950/20 rounded-xl transition text-left"
        >
          <div className="flex items-center space-x-3">
            <span className="text-xl">💼</span>
            <div>
              <div className="font-bold text-sm text-gray-900 dark:text-white">
                Gerente de Operações
              </div>
              <div className="text-[11px] text-gray-500">gerente@authdemo.com</div>
            </div>
          </div>
          <span className="badge badge-info text-white font-bold text-xs">
            Gerente
          </span>
        </button>

        <button
          type="button"
          onClick={() => quickLogin("operador@authdemo.com")}
          disabled={loading || !!loadingDemo}
          className="w-full flex items-center justify-between p-3 border border-green-200 dark:border-green-900/50 hover:bg-green-50 dark:hover:bg-green-950/20 rounded-xl transition text-left"
        >
          <div className="flex items-center space-x-3">
            <span className="text-xl">🎧</span>
            <div>
              <div className="font-bold text-sm text-gray-900 dark:text-white">
                Operador de Atendimento
              </div>
              <div className="text-[11px] text-gray-500">operador@authdemo.com</div>
            </div>
          </div>
          <span className="badge badge-success text-white font-bold text-xs">
            Operador
          </span>
        </button>
      </div>
    </div>
  );
}
