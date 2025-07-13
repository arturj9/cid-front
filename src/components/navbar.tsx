import Image from "next/image";
import { MySheet } from "./mySheet";
import { Home, BarChart3, Camera, Settings, User } from "lucide-react";
import Link from "next/link";
export function NavBar() {
  return (
    <div>
      <nav
        className="bg-gradient-to-r from-amarelo-base to-amarelo-terc flex justify-between
       px-10 md:px-16 md:h-20 h-14 items-center shadow-xl "
      >
        <Link href={"/home"} prefetch className="w-12 h-12 relative">
          <Image src="/logo/logo_CID.png" color="white" alt="logo CID" fill />
        </Link>
        <div className="md:hidden">
          <MySheet />
        </div>
        <div className=" h-12 md:h-16 md:flex items-center gap-4 hidden">
          <Link
            prefetch
            href={"/home"}
            className="flex gap-2 items-center justify-center min-w-20 text-white 
          rounded-sm p-1 text-sm md:text-lg hover:bg-laranja/75 transition-all duration-200"
          >
            <Home width={20} />
            Home
          </Link>
          <Link
            prefetch
            href={"/dashboard"}
            className="flex gap-2 items-center justify-center min-w-20 text-white 
          rounded-sm p-1 text-sm md:text-lg hover:bg-laranja/75 transition-all duration-200"
          >
            <BarChart3 width={20} />
            Dashboard
          </Link>
          <Link
            prefetch
            href={"/galeria"}
            className="flex gap-2 items-center justify-center min-w-20 text-white 
          rounded-sm p-1 text-sm md:text-lg hover:bg-laranja/75 transition-all duration-200"
          >
            <Camera width={20} />
            Galeria
          </Link>
          <Link
            prefetch
            href={"/controle"}
            className="flex gap-2 items-center justify-center min-w-20 text-white 
          rounded-sm p-1 text-sm md:text-lg hover:bg-laranja/75 transition-all duration-200"
          >
            <Settings width={20} />
            Controle
          </Link>
          <Link
            prefetch
            href={"/perfil"}
            className="flex gap-2 items-center justify-center bg-laranja w-10 h-10 text-white 
          rounded-full p-1 text-sm md:text-lg hover:bg-laranja/75 transition-all duration-200"
          >
            <User width={20} />
          </Link>
        </div>
      </nav>
    </div>
  );
}
