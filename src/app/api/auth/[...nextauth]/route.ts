import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const DEMO_USERS = [
  {
    id: "1",
    name: "Administrador Geral",
    email: "admin@authdemo.com",
    role: "Admin",
  },
  {
    id: "2",
    name: "Gerente de Operações",
    email: "gerente@authdemo.com",
    role: "Gerente",
  },
  {
    id: "3",
    name: "Operador de Atendimento",
    email: "operador@authdemo.com",
    role: "Operador",
  },
  {
    id: "4",
    name: "Gabriel Matheus",
    email: "gabriel@email.com",
    role: "Admin",
  },
]

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || "dummy_nextauth_secret_for_development_and_build",
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const email = credentials.email.trim().toLowerCase()
        const password = credentials.password

        // Verifica perfil demo com Password@123 ou 123 (retrocompatibilidade)
        const user = DEMO_USERS.find(
          (u) =>
            u.email.toLowerCase() === email &&
            (password === "Password@123" || password === "123")
        )

        if (user) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          }
        }

        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id as string
      }
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
