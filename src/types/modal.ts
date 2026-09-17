// src/types/modal.ts
import { LucideIcon } from "lucide-react";

export type Rating = 1 | 2 | 3 | 4 | 5;

export interface DetailStepConfig {
  question: string;
  options: string[];
}

export interface EvaluationConfig {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  image: string;
  generalQuestion: string;
  hasConfirmStep: boolean;
  resolveDetail: (rating: Rating) => DetailStepConfig | null;
  commentQuestion: string;
}

export interface InterruptionConfig {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  image: string;
  question: string;
  reasons: string[];
}