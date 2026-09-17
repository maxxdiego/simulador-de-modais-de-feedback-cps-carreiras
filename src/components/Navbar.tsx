// src/components/Navbar.tsx
"use client";
import Image from "next/image";
import { Menu, Sun, UserCircle2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-purple-700 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button className="rounded-md p-1 hover:bg-white/10">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <div className="text-center">
          <h1 className="text-lg font-bold tracking-wide">CARREIRAS</h1>
          <p className="text-xs text-white/80">Superintendência de Carreiras</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded-full p-1 hover:bg-white/10">
            <Sun className="h-5 w-5" />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
            <UserCircle2 className="h-6 w-6 text-purple-600" />
          </button>
        </div>
      </div>
    </header>
  );
}