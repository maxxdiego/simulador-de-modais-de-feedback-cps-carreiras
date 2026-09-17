// src/components/ModalShell.tsx
"use client";
import { ReactNode } from "react";
import { X, LucideIcon } from "lucide-react";

interface ModalShellProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  onClose: () => void;
  footer?: ReactNode;
  backgroundImage?: string;
  children: ReactNode;
}

export default function ModalShell({
  icon: Icon,
  title,
  subtitle,
  onClose,
  footer,
  backgroundImage,
  children,
}: ModalShellProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {backgroundImage && (
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center blur-[3px]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between bg-gradient-to-r from-purple-700 to-purple-600 p-5 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-tight">{title}</h2>
              <p className="text-sm text-white/80">{subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-6">{children}</div>

        {footer && (
          <div className="flex items-center justify-between gap-3 border-t p-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}