// src/components/InterruptionModal.tsx
"use client";
import { useState } from "react";
import ModalShell from "./ModalShell";
import { InterruptionConfig } from "@/types/modal";

export default function InterruptionModal({
  config,
  onClose,
}: {
  config: InterruptionConfig;
  onClose: () => void;
}) {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [outroText, setOutroText] = useState("");

  const isOutroSelected = selectedReason === "Outro";

  const handleSubmit = () => {
    // Protótipo: aqui entraria o envio real do feedback de interrupção.
    onClose();
  };

  return (
    <ModalShell
      icon={config.icon}
      title={config.title}
      subtitle={config.subtitle}
      backgroundImage={config.image}
      onClose={onClose}
    >
      <div className="space-y-4">
        <p className="font-medium text-gray-800">{config.question}</p>

        <div className="flex flex-col gap-2">
          {config.reasons.map((reason) => (
            <label
              key={reason}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border p-2 text-sm
                ${selectedReason === reason ? "border-purple-500 bg-purple-50" : "border-gray-200"}`}
            >
              <input
                type="radio"
                name="interruption-reason"
                checked={selectedReason === reason}
                onChange={() => setSelectedReason(reason)}
                className="accent-purple-600"
              />
              {reason}
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

        <div className="flex justify-end pt-2">
          <button
            onClick={handleSubmit}
            disabled={!selectedReason}
            className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Enviar
          </button>
        </div>
      </div>
    </ModalShell>
  );
}