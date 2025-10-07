# 🧩 Access Control CP — Sistema de Login e Cadastro

Projeto desenvolvido como parte da **avaliação CP4** da disciplina de Front-End, utilizando **React + TypeScript + Vite**, **TailwindCSS** e **JSON Server** como backend local.

---

## 👨‍💻 Participantes

- **Pedro Ferreira** — RM 565824
- **Gabriel Bebé** — RM 562012

---

## 🚀 Tecnologias Utilizadas

- React + TypeScript
- Vite
- TailwindCSS
- React Hook Form
- React Router DOM
- JSON Server

---

## ⚙️ Como Rodar o Projeto

1. **Instalar as dependências**
   npm install

2. **Rodar o backend**
   npm rum backend
   Porta http://localhost:3000
3. **Rodar o frontend**
   npm run dev
   Porta http://localhost:5173

---

## 💾 JSON do projeto
    Esta no arquivo db.json.
    {
        "usuarios": [
            { "id": 1, "nome": "Pedro Ferreira", "nomeUsuario": "pg_565824", "email": "pedro@email.com" },
            { "id": 2, "nome": "Gabriel Bebé", "nomeUsuario": "gb_562012", "email": "gabriel@email.com" }
        ]
    }

---

## 📜 Tipagem de Usuário
    
```tsx
    export type Usuario = {
    id: number;
    nome: string;
    nomeUsuario: string;
    email: string;
    };
```

---

## Rotas Principais

```tsx
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./routes/Login";
import Cadastro from "./routes/Cadastro";

const router = createBrowserRouter([
{ path: "/", element: <App /> },
{ path: "/login", element: <Login /> },
{ path: "/cadastro", element: <Cadastro /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
<StrictMode>
<RouterProvider router={router} />
</StrictMode>
);

```

## 🧠 Explicação Técnica

 - React Hook Form foi usado para lidar com validações de forma simples e performática.

 - fetch acessa o db.json via JSON Server.

 - As validações impedem usuários duplicados e emails repetidos.

 - O projeto utiliza sessionStorage para simular login persistente.