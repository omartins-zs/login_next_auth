"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      className="btn btn-error btn-outline font-bold shadow-sm"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Encerrar Sessão 🚪
    </button>
  );
}
