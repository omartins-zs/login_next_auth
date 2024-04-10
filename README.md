
## 🔮 **Frameworks e Libs**

- [NextAuth.js (Authentication for Next.js)](https://next-auth.js.org/)
- [daisyUI](https://daisyui.com/)


## Comandos 👨‍💻💻  <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/>
```bash

# Criar um novo aplicativo Next.js com next-auth
$ npm create next-app login_next_auth

# Acessar o diretório do projeto
$ cd login_next_auth/

# Instalar o pacote next-auth
$ npm install next-auth

# Instalar o pacote daisyUI
$ npm i -D daisyui@latest

```

###  Em seguida, adicione daisyUI aos seus arquivos tailwind.config.js:
```bash
module.exports = {
  //...
  plugins: [require("daisyui")],
}
```


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
