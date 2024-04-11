"use client"

import { signIn } from "next-auth/react";
import Image from "next/image";

export function LoginBtn() {
  return (
    <button onClick={() => signIn("google")} className="flex gap-2 items-center border border-neutral-900 p-2 rounded-md">
      <Image src="/g-icon.png" alt="" width={32} height={32} />
      Login com Google
    </button>
  );
}
