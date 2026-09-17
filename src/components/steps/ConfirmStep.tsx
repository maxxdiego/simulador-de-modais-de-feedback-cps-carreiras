// src/components/steps/ConfirmStep.tsx
export default function ConfirmStep({
    onContinue,
    onSkip,
  }: {
    onContinue: () => void;
    onSkip: () => void;
  }) {
    return (
      <div className="space-y-4 text-center">
        <p className="font-medium text-gray-800">Conte um pouco mais sobre sua avaliação.</p>
        <p className="text-sm text-gray-500">Sua resposta nos ajuda a entender o que podemos melhorar.</p>
        <div className="flex justify-center gap-3 pt-2">
          <button onClick={onSkip} className="rounded-lg border px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
            Agora não
          </button>
          <button onClick={onContinue} className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700">
            Continuar
          </button>
        </div>
      </div>
    );
  }