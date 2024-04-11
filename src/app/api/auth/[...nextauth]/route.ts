import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    pages: {
        signIn: "/"
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {

                console.log("Credentials", credentials)

                if (!credentials) {
                    return null
                }

                if (credentials.email === "gabriel@email.com" && credentials.password === "123") {
                    return {
                        id: "1",
                        name: "Gabriel Matheus",
                        email: "gabriel@email.com",
                    }
                }
                return null
            }
        })
    ]
})

export { handler as GET, handler as POST }