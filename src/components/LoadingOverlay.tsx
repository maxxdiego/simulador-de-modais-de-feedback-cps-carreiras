// src/components/LoadingOverlay.tsx
"use client";
import { Loader2 } from "lucide-react";

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-black/40">
      <Loader2 className="h-10 w-10 animate-spin text-white" />
      <p className="text-sm font-medium text-white">Carregando...</p>
    </div>
  );
}