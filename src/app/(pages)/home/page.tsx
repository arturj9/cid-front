import { Container } from "@/components/container";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Camera,
  Settings,
  Shield,
  Zap,
  Leaf,
} from "lucide-react";

export default function Home() {
  return (
    <main className="">
      {/* Seção banner */}
      <section className="bg-amarelo-base/10 px-5 py-12 flex flex-col gap-5 text-center">
        <h1 className="font-bold text-3xl">CID Manager</h1>
        <p className="text-black/70">
          Sistema inteligente de gerenciamento para o robô agricultor CID.
          Monitore, controle e otimize suas operações agrícolas com tecnologia
          de ponta.
        </p>

        <Link
          href={"/dashboard"}
          className="flex gap-2 py-2 px-4 hover:gap-4 transition-all duration-500 hover:cursor-pointer
             hover:bg-amarelo-sec items-center justify-center bg-amarelo-terc rounded-xl
               mx-auto mt-5 text-white text-lg font-semibold"
        >
          Acessar Dashboard <ArrowRight />
        </Link>
      </section>
      {/* Container com a seção dos Cards */}
      <Container>
        <section className="p-5">
          <div className="py-7 text-center">
            <h2 className="font-bold text-2xl">Funcionalidades do Sistema</h2>
            <p className="py-7">
              Tudo que você precisa para gerenciar seu robô agricultor de forma
              eficiente
            </p>
          </div>

          {/* ################################################ */}
          {/* SEÇÃO DOS CARDS */}

          <section className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href={"/dashboard"}
              className="bg-azul/30 rounded-md shadow-md p-7 flex justify-center
            items-center flex-col gap-2 text-center hover:cursor-pointer"
            >
              <div
                className="w-16 h-16 rounded-full bg-azul flex justify-center 
              items-center"
              >
                <BarChart3 color="white" />
              </div>
              <h3 className="font-semibold py-3 text-lg">
                Dashboard Inteligente
              </h3>
              <p className="text-black/70 pb-3">
                Visualize dados em tempo real de temperatura, umidade do solo e
                do ar com gráficos interativos.
              </p>
            </Link>
            <Link
              href={"/galeria"}
              className="bg-verde/30 rounded-md shadow-md p-7 flex justify-center
            items-center flex-col gap-2 text-center hover:cursor-pointer"
            >
              <div
                className="w-16 h-16 rounded-full bg-verde flex justify-center 
              items-center"
              >
                <Camera color="white" />
              </div>
              <h3 className="font-semibold py-3 text-lg">Galeria de Imagens</h3>
              <p className="text-black/70 pb-3">
                Acesse e organize todas as fotos coletadas pelo robô CID nos
                diferentes setores da plantação.
              </p>
            </Link>
            <Link
              href={"/controle"}
              className="bg-roxo/30 rounded-md shadow-md p-7 flex justify-center
            items-center flex-col gap-2 text-center hover:cursor-pointer"
            >
              <div
                className="w-16 h-16 rounded-full bg-roxo flex justify-center 
              items-center"
              >
                <Settings color="white" />
              </div>
              <h3 className="font-semibold py-3 text-lg">Controle Remoto</h3>
              <p className="text-black/70 pb-3">
                Controle completamente o robô CID, enviando comandos e definindo
                rotas de navegação.
              </p>
            </Link>
            <Link
              href={"/controle#parada-emergencia"}
              className="bg-vermelho/30 rounded-md shadow-md p-7 flex justify-center
            items-center flex-col gap-2 text-center hover:cursor-pointer"
            >
              <div
                className="w-16 h-16 rounded-full bg-vermelho flex justify-center 
              items-center"
              >
                <Shield color="white" />
              </div>
              <h3 className="font-semibold py-3 text-lg">Sistema Seguro</h3>
              <p className="text-black/70 pb-3">
                Autenticação robusta e controles de segurança para proteger suas
                operações agrícolas.
              </p>
            </Link>
            <Link
              href={"/dashboard#status-cid"}
              className="bg-laranja/30 rounded-md shadow-md p-7 flex justify-center
            items-center flex-col gap-2 text-center hover:cursor-pointer"
            >
              <div
                className="w-16 h-16 rounded-full bg-laranja flex justify-center 
              items-center"
              >
                <Zap color="white" />
              </div>
              <h3 className="font-semibold py-3 text-lg">Tempo Real</h3>
              <p className="text-black/70 pb-3">
                Monitoramento em tempo real com atualizações automáticas do
                status e localização do robô.
              </p>
            </Link>
            <Link
              href={"/galeria"}
              className="bg-amarelo-base/30 rounded-md shadow-md p-7 flex justify-center
            items-center flex-col gap-2 text-center hover:cursor-pointer"
            >
              <div
                className="w-16 h-16 rounded-full bg-amarelo-base flex justify-center 
              items-center"
              >
                <Leaf color="white" />
              </div>
              <h3 className="font-semibold py-3 text-lg">
                Agricultura Inteligente
              </h3>
              <p className="text-black/70 pb-3">
                Otimize suas plantações com dados precisos e análises detalhadas
                dos cultivos.
              </p>
            </Link>
          </section>
        </section>
      </Container>
      {/* Seção de chamada */}
      <section
        className="bg-gradient-to-l from-amarelo-base to-amarelo-sec text-white
      p-5 text-center py-15 my-7 shadow-xl"
      >
        <h3 className="font-bold text-xl mb-7 md:text-2xl lg:text-3xl">
          Pronto para revolucionar sua agricultura?
        </h3>
        <p className="my-7 md:w-2/3 mx-auto">
          Comece a usar o CID Manager hoje mesmo e transforme a forma como você
          gerencia suas plantações.
        </p>
        <div
          className="md:flex md:w-[480px] md:justify-around md:items-center 
        md:mx-auto gap-2"
        >
          <Link
            href={"/galeria"}
            className="flex gap-2 py-2 hover:gap-4 transition-all duration-500 hover:cursor-pointer
             hover:bg-white items-center justify-center bg-background rounded-xl
              px-4 mx-auto mt-5 text-laranja text-lg font-semibold shadow-md md:flex-1/2"
          >
            Ver registros <ArrowRight />
          </Link>

          <Link
            href={"/controle"}
            className="flex py-2 transition-all duration-500 hover:cursor-pointer
             hover:bg-background/25 items-center justify-center bg-background/15 rounded-xl
              px-4 mx-auto mt-5 text-white text-lg font-semibold shadow-md 
              border-1 border-laranja md:flex-1/2"
          >
            Ver Controles
          </Link>
        </div>
      </section>
    </main>
  );
}
