"use client";
import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";
import { setCookie } from "cookies-next/client";
import { login } from "@/services/api/auth";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Preencha todos os campos.");
      return;
    }
    setLoading(true);
    try {
      const res = await login({ email, password });
      if (!res.token) {
        toast.error("Email ou senha inválidos.");
        setLoading(false);
        return;
      }
      setCookie("token", res.token, {
        maxAge: 60 * 60 * 24 * 1, // 1 day
        path: "/",
        sameSite: "lax",
      });
      toast.success("Login realizado com sucesso!");
      router.push("/home");
    } catch (err) {
      console.log(err);
      toast.error("Email ou senha inválidos.");
      setLoading(false);
    }
    setLoading(false);
  };

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
          <p className="mt-2 text-gray-600">
            Sistema de Gerenciamento do Robô Agricultor
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label
                className="text-sm font-medium leading-none"
                htmlFor="login-email"
              >
                E-mail
              </label>
              <input
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                id="login-email"
                placeholder="seu@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
              className="text-sm font-medium leading-none"
              htmlFor="login-password"
              >
              Senha
              </label>
              <div className="relative">
              <input
                type={loading ? "password" : (password && (showPassword ? "text" : "password"))}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 pr-10"
                id="login-password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95m3.25-2.568A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.965 9.965 0 01-4.293 5.032M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                </svg>
                )}
              </button>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-yellow-500 hover:bg-yellow-600 text-white"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
