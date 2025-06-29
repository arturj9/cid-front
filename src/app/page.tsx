"use client";
import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Exemplo de validação simples
    if (usuario === "admin" && senha === "1234") {
      setErro("");
      router.push("/home"); // Redireciona para a página home
    } else {
      setErro("Usuário ou senha inválidos.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm flex flex-col gap-6"
      >
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">Login</h1>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="usuario">
            Usuário
          </label>
          <input
            id="usuario"
            type="text"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={usuario}
            onChange={e => setUsuario(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="senha">
            Senha
          </label>
          <input
            id="senha"
            type="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
          />
          <div className="text-right mt-1">
            <a
              href="/recuperar-senha"
              className="text-sm text-yellow-600 hover:underline"
            >
              Esqueceu a senha?
            </a>
          </div>
        </div>
        {erro && <div className="text-red-600 text-sm text-center">{erro}</div>}
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded transition-colors"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}