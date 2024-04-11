import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({
            token
        }) {
            console.log("Token", token)
            return token
        },
        async session({
            token, session
        }) {
            console.log("Session", session)
            return session
        },
        async redirect({ url, baseUrl }) {
            // return baseUrl
            return Promise.resolve('http://localhost:3000/dashboard')
        },
    },
    // debug: true,
});

export { handler as GET, handler as POST }
