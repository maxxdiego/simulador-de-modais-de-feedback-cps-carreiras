// src/components/InterruptionModal.tsx
"use client";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import ModalShell from "./ModalShell";
import { InterruptionConfig } from "@/types/modal";

export default function InterruptionModal({
  config,
  onClose,
}: {
  config: InterruptionConfig;
  onClose: () => void;
}) {
  const [reason, setReason] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [done, setDone] = useState(false);

  return (
    <ModalShell
      icon={config.icon}
      title={config.title}
      subtitle={config.subtitle}
      backgroundImage={config.image}
      onClose={onClose}
    >
      {!done ? (
        <div className="space-y-4">
          <p className="font-medium text-gray-800">{config.question}</p>
          <div className="space-y-2">
            {config.reasons.map((r) => (
              <label
                key={r}
                className={`flex cursor-pointer items-center gap-2 rounded-lg border p-2 text-sm
                  ${
                    reason === r
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200"
                  }`}
              >
                <input
                  type="radio"
                  name="reason"
                  checked={reason === r}
                  onChange={() => setReason(r)}
                  className="accent-purple-600"
                />
                {r}
              </label>
            ))}
          </div>
          <p className="text-sm font-medium text-gray-700">
            Quer acrescentar algo?
          </p>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            placeholder="Campo opcional"
            className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:border-purple-500 focus:outline-none"
          />
          <div className="flex justify-end">
            <button
              disabled={!reason}
              onClick={() => setDone(true)}
              className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
            >
              Enviar
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3 text-center">
          <CheckCircle2 className="mx-auto h-10 w-10 text-purple-600" />
          <p className="font-medium text-gray-800">
            Obrigado! Isso nos ajuda a entender melhor a sua experiência.
          </p>
          <button
            onClick={onClose}
            className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700"
          >
            Fechar
          </button>
        </div>
      )}
    </ModalShell>
  );
}
