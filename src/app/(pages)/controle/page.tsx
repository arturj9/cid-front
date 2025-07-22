"use client";
import { setMeasurement } from "@/services/api/measurement";
import { setSystemStatus } from "@/services/api/system-status";
import { generateRandomMeasurement } from "@/services/generate/measurement";
import { generateRandomSystemStatus } from "@/services/generate/status";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Controle() {
  const [status, setStatus] = useState<"Parado" | "Em execução" | "Pausado">(
    "Parado"
  );
  const [setor, setSetor] = useState("A-1");
  const [log, setLog] = useState<string[]>([
    "[14:30:25] Sistema iniciado",
    "[14:30:30] Robô CID conectado",
  ]);

  function handleIniciar() {
    setStatus("Em execução");
    setLog((prev) => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] Iniciado`,
    ]);
  }

  function handlePausar() {
    setStatus("Pausado");
    setLog((prev) => [...prev, `[${new Date().toLocaleTimeString()}] Pausado`]);
  }

  // function handleParar() {
  //   setStatus("Parado");
  //   setLog((prev) => [...prev, `[${new Date().toLocaleTimeString()}] Parado`]);
  // }

  function handleRetornarBase() {
    setSetor("Base");
    setLog((prev) => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] Retornando à base`,
    ]);
  }

  function handleSetor(s: string) {
    setSetor(s);
    setLog((prev) => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] Setor alterado para ${s}`,
    ]);
  }

  async function handleColetar() {
    setLog((prev) => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] Coletar Dados`,
    ]);
    await setSystemStatus(generateRandomSystemStatus())
    await setMeasurement(generateRandomMeasurement())
    toast.success("Dados coletados com sucesso.")
  }

  function handleFoto() {
    setLog((prev) => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] Capturar Foto`,
    ]);
  }

  function handleEmergencia() {
    setStatus("Parado");
    setLog((prev) => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] PARADA DE EMERGÊNCIA!`,
    ]);
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-7 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Controle do Robô CID
          </h1>
          <p className="text-gray-600 mt-2">
            Painel de comando e controle remoto
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Status e Controles
            </h3>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-700 font-medium">Status Atual:</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  {status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Setor Atual:</span>
                <span className="font-semibold text-gray-900">{setor}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3">
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 flex-1 bg-green-600 hover:bg-green-700"
                  onClick={handleIniciar}
                  disabled={status === "Em execução"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play h-4 w-4 mr-2"
                  >
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                  Iniciar
                </button>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 flex-1 bg-yellow-600 hover:bg-yellow-700"
                  onClick={handlePausar}
                  disabled={status !== "Em execução"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-pause h-4 w-4 mr-2"
                  >
                    <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                    <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                  </svg>
                  Pausar
                </button>
              </div>
              {/* <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-gray-600 hover:bg-gray-700"
                onClick={handleParar}
                disabled={status === "Parado"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-rotate-ccw h-4 w-4 mr-2"
                >
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                  <path d="M3 3v5h5"></path>
                </svg>
                Parar
              </button> */}
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-blue-600 hover:bg-blue-700"
                onClick={handleRetornarBase}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-house h-4 w-4 mr-2"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                Retornar à Base
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Navegação
            </h3>
            <div className="mb-4">
              <p className="text-gray-600 text-sm mb-3">
                Selecione um setor para onde enviar o robô CID:
              </p>
              <div className="grid grid-cols-3 gap-2">
                {["A-1", "A-2", "A-3", "B-1", "B-2", "B-3"].map((s) => (
                  <button
                    key={s}
                    className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 ${
                      setor === s
                        ? "bg-yellow-500 text-white"
                        : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                    }`}
                    onClick={() => handleSetor(s)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin h-4 w-4 mr-1"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="border-t pt-4">
              <h4 className="font-medium text-gray-900 mb-3">
                Comandos Especiais
              </h4>
              <div className="space-y-2">
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-indigo-600 hover:bg-indigo-700"
                  onClick={handleColetar}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-zap h-4 w-4 mr-2"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                  Coletar Dados
                </button>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-purple-600 hover:bg-purple-700"
                  onClick={handleFoto}
                >
                  Capturar Foto
                </button>
              </div>
            </div>
          </div>
        </div>
        <section className="mt-8" id="parada-emergencia">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-triangle-alert h-6 w-6 text-red-600 mr-2"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
              <h3 className="text-lg font-semibold text-red-900">
                Parada de Emergência
              </h3>
            </div>
            <p className="text-red-700 mb-4">
              Use apenas em situações de emergência. Este comando interrompe
              imediatamente todas as operações do robô.
            </p>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6"
              onClick={handleEmergencia}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-triangle-alert h-5 w-5 mr-2"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
              PARADA DE EMERGÊNCIA
            </button>
          </div>
        </section>
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Log de Comandos
          </h3>
          <div className="bg-gray-50 rounded-lg p-4 h-32 overflow-y-auto">
            <div className="space-y-1 text-sm text-gray-600">
              {log.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
