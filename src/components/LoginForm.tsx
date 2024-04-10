"use client";

import { signIn } from "next-auth/react"

export default function LoginForm() {
    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        console.log(e)

        const data = {
            email: formData.get("email"),
            senha: formData.get("password")
        };

        signIn("credentials", {
            ...data, callbackUrl: "./dashboard"
        })

        console.log(data)
    }
    return (
        <form onSubmit={login} className="bg-white p-12 rounded-lg w-96 max-w-full flex justify-center items-center flex-col gap-3">

            <h2 className="font-blod text-xl mb-4">Faça seu Login</h2>

            <input type="text" placeholder="Email" name="email" className="input input-primary w-full" />
            <input type="password" placeholder="Senha" name="password" className="input input-primary w-full" />

            <button className="btn btn-primary w-full">Login</button>
        </form>
    );
}
