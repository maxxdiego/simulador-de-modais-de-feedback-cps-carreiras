// src/components/EvaluationModal.tsx
"use client";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import ModalShell from "./ModalShell";
import RatingFaces from "./RatingFaces";
import ConfirmStep from "./steps/ConfirmStep";
import DetailStep from "./steps/DetailStep";
import CommentStep from "./steps/CommentStep";
import { EvaluationConfig, Rating } from "@/types/modal";

type Step = "rating" | "detail" | "confirm" | "comment" | "done";

export default function EvaluationModal({
  config,
  onClose,
}: {
  config: EvaluationConfig;
  onClose: () => void;
}) {
  const [step, setStep] = useState<Step>("rating");
  const [rating, setRating] = useState<Rating | null>(null);

  const handleRating = (r: Rating) => {
    setRating(r);
    const detail = config.resolveDetail(r);
    setStep(detail ? "detail" : config.hasConfirmStep ? "confirm" : "comment");
  };

  // No fluxo com etapa de confirmação (Curso/Trilha), fechar o modal
  // durante o detalhamento é tratado como feedback concluído.
  const handleModalClose = () => {
    if (config.hasConfirmStep && step === "detail") {
      setStep("done");
    } else {
      onClose();
    }
  };

  return (
    <ModalShell
      icon={config.icon}
      title={config.title}
      subtitle={config.subtitle}
      backgroundImage={config.image}
      onClose={handleModalClose}
    >
      {step === "rating" && (
        <div className="space-y-4">
          <p className="font-medium text-gray-800">{config.generalQuestion}</p>
          <RatingFaces value={rating} onSelect={handleRating} />
        </div>
      )}

      {step === "detail" && rating && (
        <DetailStep
          question={config.resolveDetail(rating)!.question}
          options={config.resolveDetail(rating)!.options}
          onSubmit={() =>
            setStep(config.hasConfirmStep ? "confirm" : "comment")
          }
          onSkip={config.hasConfirmStep ? () => setStep("done") : undefined}
        />
      )}

      {step === "confirm" && (
        <ConfirmStep
          onContinue={() => setStep("comment")}
          onSkip={() => setStep("done")}
        />
      )}

      {step === "comment" && (
        <CommentStep
          question={config.commentQuestion}
          onSubmit={() => setStep("done")}
          onSkip={() => setStep("done")}
        />
      )}

      {step === "done" && (
        <div className="space-y-3 text-center">
          <CheckCircle2 className="mx-auto h-10 w-10 text-purple-600" />
          <p className="font-medium text-gray-800">
            Obrigado pelo seu feedback!
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
