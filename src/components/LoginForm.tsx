"use client";

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation";

export default function LoginForm() {

    const searchParams = useSearchParams()

    const error = searchParams.get("error")

    async function login(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const data = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        console.log("Dados do formulário:", data)

        try {

            const res = await signIn("credentials", {
                ...data, callbackUrl: "/dashboard"
            })

            console.log("Resposta", res)

        } catch (error) {
            console.log("error", error)
        }
    }
    return (
        <form onSubmit={login} className="bg-white p-12 rounded-lg w-96 max-w-full flex justify-center items-center flex-col gap-3">

            <h2 className="font-blod text-xl mb-4">Faça seu Login</h2>

            <input type="text" placeholder="Email" name="email" className="input input-primary w-full" />
            <input type="password" placeholder="Senha" name="password" className="input input-primary w-full" />

            <button className="btn btn-primary w-full">Login</button>
            {error == "CredentialsSignin" && (
                <div className="text-red-600">Erro no login</div>
            )}
        </form>
    );
}
