// src/app/page.tsx
"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import EvaluationModal from "@/components/EvaluationModal";
import InterruptionModal from "@/components/InterruptionModal";
import { evaluationConfigs } from "@/data/evaluationConfigs";
import { interruptionConfigs } from "@/data/interruptionConfigs";

export default function Home() {
  const [activeEvaluation, setActiveEvaluation] = useState<string | null>(null);
  const [activeInterruption, setActiveInterruption] = useState<string | null>(null);

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-4xl p-8">
        <h1 className="mb-1 text-2xl font-bold text-gray-900">Simulador de Modais de Feedback</h1>
        <p className="mb-8 text-gray-500">Escolha um modal para simular o fluxo de interação.</p>

        <h2 className="mb-3 text-lg font-semibold text-purple-700">Avaliações</h2>
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {evaluationConfigs.map((cfg) => (
            <button
              key={cfg.id}
              onClick={() => setActiveEvaluation(cfg.id)}
              className="rounded-xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:border-purple-400 hover:shadow-md"
            >
              <cfg.icon className="h-7 w-7 text-purple-600" />
              <p className="mt-2 font-semibold text-gray-800">{cfg.title}</p>
              <p className="text-sm text-gray-500">{cfg.subtitle}</p>
            </button>
          ))}
        </div>

        <h2 className="mb-3 text-lg font-semibold text-purple-700">Interrupções</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {interruptionConfigs.map((cfg) => (
            <button
              key={cfg.id}
              onClick={() => setActiveInterruption(cfg.id)}
              className="rounded-xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:border-purple-400 hover:shadow-md"
            >
              <cfg.icon className="h-7 w-7 text-purple-600" />
              <p className="mt-2 font-semibold text-gray-800">{cfg.title}</p>
              <p className="text-sm text-gray-500">{cfg.subtitle}</p>
            </button>
          ))}
        </div>

        {activeEvaluation && (
          <EvaluationModal
            config={evaluationConfigs.find((c) => c.id === activeEvaluation)!}
            onClose={() => setActiveEvaluation(null)}
          />
        )}

        {activeInterruption && (
          <InterruptionModal
            config={interruptionConfigs.find((c) => c.id === activeInterruption)!}
            onClose={() => setActiveInterruption(null)}
          />
        )}
      </main>
    </>
  );
}