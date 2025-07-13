import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu, Home, BarChart3, Camera, Settings, User } from "lucide-react";
import Link from "next/link";

export function MySheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu color="white" />
      </SheetTrigger>
      <SheetContent className="bg-amarelo-base">
        <SheetHeader>
          <SheetTitle>CID Manager</SheetTitle>
          <SheetDescription
            className="my-10 flex flex-col gap-7 mx-auto
            w-36 items-start"
          >
            <Link
              prefetch
              href={"/home"}
              className="flex gap-3 items-center justify-center text-white 
          rounded-sm p-1 text-lg  "
            >
              <Home width={30} />
              Home
            </Link>

            <Link
              prefetch
              href={"/dashboard"}
              className="flex gap-3 items-center justify-center text-white 
          rounded-sm p-1 text-lg  "
            >
              <BarChart3 width={30} />
              Dashboard
            </Link>
            <Link
              prefetch
              href={"/galeria"}
              className="flex gap-3 items-center justify-center text-white 
          rounded-sm p-1 text-lg  "
            >
              <Camera width={30} />
              Galeria
            </Link>
            <Link
              prefetch
              href={"/controle"}
              className="flex gap-3 items-center justify-center text-white 
          rounded-sm p-1 text-lg  "
            >
              <Settings width={30} />
              Controle
            </Link>
            <Link
              prefetch
              href={"/perfil"}
              className="flex gap-3 items-center justify-center text-white 
          rounded-sm p-1 text-lg  "
            >
              <User width={30} />
              Perfil
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
