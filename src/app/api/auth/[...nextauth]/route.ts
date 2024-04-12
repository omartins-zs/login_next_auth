import { NextApiHandler } from 'next';
import GitHubProvider from 'next-auth/providers/github';
import NextAuth, { NextAuthOptions } from 'next-auth';

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),

    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
            return Promise.resolve('http://localhost:3000/dashboard')
        },
    },
    debug: true,
});

export { handler as GET, handler as POST }