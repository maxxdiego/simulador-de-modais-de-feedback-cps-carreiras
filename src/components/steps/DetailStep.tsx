// src/components/steps/DetailStep.tsx
"use client";
import { useState } from "react";

export default function DetailStep({
  question,
  options,
  onSubmit,
  onSkip,
}: {
  question: string;
  options: string[];
  onSubmit: (selected: string[], outroText?: string) => void;
  onSkip?: () => void;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const [outroText, setOutroText] = useState("");

  const toggle = (opt: string) => {
    setSelected((prev) => (prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]));
  };

  const isOutroSelected = selected.includes("Outro");

  return (
    <div className="space-y-4">
      <p className="font-medium text-gray-800">{question}</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((opt) => (
          <label
            key={opt}
            className={`flex cursor-pointer items-center gap-2 rounded-lg border p-2 text-sm
              ${selected.includes(opt) ? "border-purple-500 bg-purple-50" : "border-gray-200"}`}
          >
            <input
              type="checkbox"
              checked={selected.includes(opt)}
              onChange={() => toggle(opt)}
              className="accent-purple-600"
            />
            {opt}
          </label>
        ))}
      </div>

      {isOutroSelected && (
        <input
          type="text"
          value={outroText}
          onChange={(e) => setOutroText(e.target.value)}
          placeholder="Digite aqui..."
          maxLength={80}
          className="w-full rounded-lg border border-gray-200 p-2 text-sm focus:border-purple-500 focus:outline-none"
        />
      )}

      <div className="flex items-center justify-between pt-2">
        {onSkip && (
          <button
            onClick={onSkip}
            className="rounded-lg border px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
          >
            Pular
          </button>
        )}
        <button
          onClick={() => onSubmit(selected, isOutroSelected ? outroText : undefined)}
          className="ml-auto rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}