// src/components/steps/CommentStep.tsx
"use client";
import { useState } from "react";

export default function CommentStep({
  question,
  onSubmit,
  onSkip,
}: {
  question: string;
  onSubmit: (comment: string) => void;
  onSkip: () => void;
}) {
  const [comment, setComment] = useState("");

  return (
    <div className="space-y-4">
      <p className="font-medium text-gray-800">{question}</p>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Campo opcional"
        rows={4}
        className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:border-purple-500 focus:outline-none"
      />
      <div className="flex justify-end gap-3">
        <button onClick={onSkip} className="rounded-lg border px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
          Agora não
        </button>
        <button
          onClick={() => onSubmit(comment)}
          className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}