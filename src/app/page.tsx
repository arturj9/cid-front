"use client";
import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";


export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (usuario === "admin@gmail.com" && senha === "1234") {
      setErro("");
      router.push("/home");
    } else {
      setErro("Usuário ou senha inválidos.");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <Image
            src="/logo/logo_CID.png" 
            alt="Logo CID"
            width={80}
            height={80}
            className="mb-4"
            priority
          />
          <h2 className="text-3xl font-bold text-gray-900">CID Manager</h2>
          <p className="mt-2 text-gray-600">Sistema de Gerenciamento do Robô Agricultor</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium leading-none" htmlFor="login-email">
                E-mail
              </label>
              <input
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                id="login-email"
                placeholder="seu@email.com"
                required
                value={usuario}
                onChange={e => setUsuario(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium leading-none" htmlFor="login-password">
                Senha
              </label>
              <input
                type="password"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                id="login-password"
                placeholder="••••••••"
                required
                value={senha}
                onChange={e => setSenha(e.target.value)}
              />
            </div>
            {erro && (
              <div className="text-red-600 text-sm text-center">{erro}</div>
            )}
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-yellow-500 hover:bg-yellow-600 text-white"
              type="submit"
            >
              Entrar
            </button>
            <div className="text-center">
              <a
                href="/recuperar-senha"
                className="text-sm text-yellow-600 hover:text-yellow-500"
              >
                Esqueceu sua senha?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}