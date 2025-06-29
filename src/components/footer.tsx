import { Home, BarChart3, Camera, Settings, LogIn } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-preto text-cinza p-5 w-screen">
      <section className="flex flex-col md:flex-row md:justify-between gap-7 my-7 ">
        <div className="flex flex-col gap-5 md:flex-1/3">
          <h3 className="text-amarelo-sec font-bold text-lg">CID Manager</h3>
          <p>
            Sistema inteligente de gerenciamento para o robô agricultor CID.
            Monitore, controle e otimize suas operações agrícolas com tecnologia
            de ponta.
          </p>
          <div className="flex gap-5">
            <span
              className="w-8 h-8 bg-amarelo-base text-white flex items-center
            justify-center rounded-full"
            >
              C
            </span>
            <span
              className="w-8 h-8 bg-amarelo-sec text-white flex items-center
            justify-center rounded-full"
            >
              I
            </span>
            <span
              className="w-8 h-8 bg-amarelo-terc text-white flex items-center
            justify-center rounded-full"
            >
              D
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-white text-lg mb-2">Navegação</h3>
          <Link
            href={"/home"}
            className="flex gap-2 items-center hover:cursor-pointer
             hover:text-amarelo-sec w-32"
          >
            <Home width={20} />
            Home
          </Link>
          <Link
            href={"/dashboard"}
            className="flex gap-2 items-center hover:cursor-pointer
             hover:text-amarelo-sec w-32"
          >
            <BarChart3 width={20} />
            Dashboard
          </Link>
          <Link
            href={"/galeria"}
            className="flex gap-2 items-center hover:cursor-pointer
             hover:text-amarelo-sec w-32"
          >
            <Camera width={20} />
            Galeria
          </Link>
          <Link
            href={"/controle"}
            className="flex gap-2 items-center hover:cursor-pointer
             hover:text-amarelo-sec w-32"
          >
            <Settings width={20} />
            Controle
          </Link>
          <Link
            href={"/"}
            className="flex gap-2 items-center hover:cursor-pointer 
            hover:text-amarelo-sec w-32"
          >
            <LogIn width={20} />
            Entrar
          </Link>
        </div>
        <div className=" ">
          <h3 className="font-bold text-lg text-white mb-2">Suporte</h3>
          <div className="flex flex-col gap-1">
            <p>
              Status do Sistema: <span className="text-verde">Online</span>
            </p>
            <p>Versão: v1.0.0</p>
            <p>
              Última Atualização: <span>Hoje</span>
            </p>
            <h4 className="text-amarelo-sec font-medium">
              Robô CID Status:{" "}
              <span className="text-verde font-normal">Operacional</span>
            </h4>
          </div>
        </div>
      </section>
      <div
        className=" text-sm flex gap-2 flex-col lg:flex-row lg:justify-between text-center
       py-7 border-t-1 border-cinza"
      >
        <p>&copy; 2025 CID Manager. Todos os direitos reservados</p>
        <p>Desenvolvido para o projeto de Tecnologias Web 2</p>
      </div>
    </footer>
  );
}
