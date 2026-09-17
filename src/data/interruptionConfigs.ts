// src/data/interruptionConfigs.ts
import { PauseCircle } from "lucide-react";
import { InterruptionConfig } from "@/types/modal";

export const courseTrilhaInterruption: InterruptionConfig = {
  id: "interrupcao-curso-trilha",
  title: "Interrupção de Curso/Trilha",
  subtitle: "Exibido quando a atividade fica sem conclusão",
  icon: PauseCircle,
  image: "/images/curso.png",
  question: "Notamos que esta atividade ficou sem conclusão. Qual foi o principal motivo?",
  reasons: [
    "Vou continuar depois", "Não tinha tempo para concluir naquele momento",
    "Levou mais tempo do que eu esperava", "Tive dificuldade com o conteúdo",
    "Não era o que eu esperava", "Tive um problema no áudio ou vídeo",
    "Tive um problema na plataforma", "Outro",
  ],
};

export const mapaInterruption: InterruptionConfig = {
  id: "interrupcao-mapa",
  title: "Interrupção do Mapa de Carreiras",
  subtitle: "Exibido quando o Mapa fica sem conclusão",
  icon: PauseCircle,
  image: "/images/mapa-de-carreiras.png",
  question: "Notamos que o Mapa de Carreiras ficou sem conclusão. Qual foi o principal motivo?",
  reasons: [
    "Vou continuar depois", "Não tinha tempo para concluir naquele momento",
    "Levou mais tempo do que eu esperava", "Tive dificuldade para entender as perguntas",
    "Tive dificuldade para escolher as respostas", "Perdi o interesse",
    "Tive um problema na plataforma", "Outro",
  ],
};

export const simuladorInterruption: InterruptionConfig = {
  id: "interrupcao-simulador",
  title: "Interrupção do Simulador de Entrevistas",
  subtitle: "Exibido quando a simulação fica sem conclusão",
  icon: PauseCircle,
  image: "/images/simulador-de-entrevistas.png",
  question: "Notamos que a simulação ficou sem conclusão. Qual foi o principal motivo?",
  reasons: [
    "Vou continuar depois", "Não tinha tempo para concluir naquele momento",
    "Levou mais tempo do que eu esperava", "Tive dificuldade para responder",
    "Não entendi algumas perguntas", "Não me senti à vontade para continuar",
    "Perdi o interesse", "Tive problema com áudio ou vídeo",
    "Tive um problema na plataforma", "Outro",
  ],
};

export const interruptionConfigs = [
  courseTrilhaInterruption, mapaInterruption, simuladorInterruption,
];