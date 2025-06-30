import Image from "next/image";
import { MySheet } from "./mySheet";
import { Home, BarChart3, Camera, Settings, LogOut } from "lucide-react";
import Link from "next/link";
export function NavBar() {
  return (
    <div>
      <nav
        className="bg-gradient-to-r from-amarelo-base to-amarelo-terc flex justify-between
       px-10 md:px-16 md:h-16 h-12 items-center shadow-xl "
      >
        <div className="w-14 h-14 relative">
          <Image src="/logo/logo_CID_r.png" color="white" alt="logo CID" fill />
        </div>
        <div className="md:hidden">
          <MySheet />
        </div>
        <div className=" h-10 md:flex items-center gap-4 hidden">
          <Link
            href={"/home"}
            className="flex gap-2 items-center justify-center min-w-20 text-white 
          rounded-sm p-1 text-sm hover:bg-laranja/75 transition-all duration-200"
          >
            <Home width={20} />
            Home
          </Link>
          <Link
            href={"/dashboard"}
            className="flex gap-2 items-center justify-center min-w-20 text-white 
          rounded-sm p-1 text-sm hover:bg-laranja/75 transition-all duration-200"
          >
            <BarChart3 width={20} />
            Dashboard
          </Link>
          <Link
            href={"/galeria"}
            className="flex gap-2 items-center justify-center min-w-20 text-white 
          rounded-sm p-1 text-sm hover:bg-laranja/75 transition-all duration-200"
          >
            <Camera width={20} />
            Galeria
          </Link>
          <Link
            href={"/controle"}
            className="flex gap-2 items-center justify-center min-w-20 text-white 
          rounded-sm p-1 text-sm hover:bg-laranja/75 transition-all duration-200"
          >
            <Settings width={20} />
            Controle
          </Link>
          <Link
            href={"/"}
            className="flex gap-2 items-center justify-center min-w-20 text-white 
          rounded-sm p-1 text-sm hover:bg-laranja/75 transition-all duration-200"
          >
            <LogOut width={20} />
            Sair
          </Link>
        </div>
      </nav>
    </div>
  );
}
