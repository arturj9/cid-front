"use client";

import { LogOut } from "lucide-react";
import Link from "next/link";
import { MyDialogDemo } from "@/components/myDialog";
import { MyButtonDemo } from "@/components/myButton";
import { useEffect, useState } from "react";
import { getUser, User } from "@/services/api/users";
import { logout } from "@/services/api/auth";

export default function Perfil() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <div className=" flex items-center gap-7 justify-center flex-col p-7">
      <section
        className="bg-slate-100 px-5 py-3 rounded-lg flex
      justify-between min-w-lg shadow-lg"
      >
        <div className="flex gap-5 items-center">
          <div className="bg-slate-300 w-20 h-20 rounded-full object-cover flex justify-center items-center">
            <img className="rounded-full " src="https://wallpapers.com/images/high/best-profile-pictures-gzz6bnaf4yygvrnw.webp" alt="Perfil" />
          </div>
          <div>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <MyDialogDemo />
          <MyButtonDemo title="Alterar foto" />
        </div>
      </section>

      <section
        className="bg-slate-100 px-5 py-3 rounded-lg flex justify-between 
      shadow-lg min-w-lg"
      >
        <div className="flex gap-5 items-center">
          <div className="bg-slate-300 w-20 h-20 rounded-full object-cover flex justify-center items-center">
            <img className="rounded-full" src="https://cdn.pixabay.com/photo/2024/01/25/20/12/robot-8532613_1280.png" alt="Robo" />
          </div>
          <div>
            <h2>Modelo CID</h2>
            <p>#135795</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-5">
          <span className="bg-verde/10 text-sm px-2 py-1 text-verde rounded-lg">
            Ativo
          </span>
          <Link href={"/controle"}>Ver controles</Link>
        </div>
      </section>

      <Link
        href={"/"}
        onClick={() => {
          logout();
        }}
        className="bg-slate-200 flex gap-5 hover:cursor-pointer px-7 py-4 rounded-full
        transition-all duration-300 hover:px-10"
      >
        Sair <LogOut />
      </Link>
    </div>
  );
}
