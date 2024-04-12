"use client"

import { signIn } from "next-auth/react";
import Image from "next/image";

export function LoginBtnGit() {
    return (
        <button onClick={() => signIn("github")} className="flex gap-2 items-center border bg-slate-300 text-slate-900 border-neutral-900 p-2 rounded-md">
            <Image src="/github_icon.png" alt="" width={32} height={32} />
            Entrar com Github
        </button>
    );
}