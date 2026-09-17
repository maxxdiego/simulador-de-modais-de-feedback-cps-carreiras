// src/data/evaluationConfigs.ts
import { GraduationCap, Compass, Monitor, Map, Mic } from "lucide-react";
import { EvaluationConfig, Rating } from "@/types/modal";

export const courseConfig: EvaluationConfig = {
  id: "curso",
  title: "Avaliação de Curso",
  subtitle: "Exibido após a conclusão de um curso",
  icon: GraduationCap,
  image: "/images/curso.png",
  generalQuestion: "De forma geral, como você avalia este curso?",
  hasConfirmStep: true,
  resolveDetail: (rating: Rating) => {
    const negativeOptions = [
      "Explicação difícil", "Faltaram exemplos", "Faltou aplicação prática",
      "Conteúdo desorganizado", "Ritmo difícil de acompanhar", "Informação demais",
      "Muito básico para mim", "Muito avançado para mim", "Pouco útil para mim",
      "Não era o que esperava", "Duração longa", "Áudio ou imagem ruins",
    ];
    const positiveOptions = [
      "Explicação clara", "Bons exemplos", "Boa aplicação prática",
      "Conteúdo bem organizado", "Ritmo fácil de acompanhar", "Quantidade de conteúdo adequada",
      "Nível adequado para mim", "Conteúdo útil para mim", "Aprendi algo novo",
      "Era o que esperava", "Duração adequada", "Áudio e imagem bons",
    ];

    if (rating <= 2) {
      return {
        question: "O que poderia ter sido melhor neste curso?",
        options: [...negativeOptions, "Outro"],
      };
    }
    if (rating === 3) {
      return {
        question: "Conte um pouco mais sobre sua avaliação.",
        options: [...negativeOptions, ...positiveOptions, "Outro"],
      };
    }
    return {
      question: "O que mais contribuiu para a sua avaliação?",
      options: [...positiveOptions, "Outro"],
    };
  },
  commentQuestion:
    "Conte um pouco mais sobre sua avaliação. Sua resposta nos ajuda a entender o que podemos melhorar.",
};

export const trilhaConfig: EvaluationConfig = {
  id: "trilha",
  title: "Avaliação de Trilha",
  subtitle: "Exibido após a conclusão de uma trilha",
  icon: Compass,
  image: "/images/trilha.png",
  generalQuestion: "De forma geral, como você avalia esta trilha?",
  hasConfirmStep: true,
  resolveDetail: (rating: Rating) => {
    const negativeOptions = [
      "Faltou aprofundamento",
      "Conteúdos repetitivos",
      "Trilha extensa",
      "Não era o que esperava",
    ];
    const positiveOptions = [
      "Conteúdos bem relacionados",
      "Boa sequência dos conteúdos",
      "Conteúdos úteis",
      "Nível adequado para mim",
    ];

    if (rating <= 2) {
      return {
        question: "Conte um pouco mais sobre sua avaliação.",
        options: [...negativeOptions, "Outro"],
      };
    }
    if (rating === 3) {
      return {
        question: "Conte um pouco mais sobre sua avaliação.",
        options: [...negativeOptions, ...positiveOptions, "Outro"],
      };
    }
    return {
      question: "Conte um pouco mais sobre sua avaliação.",
      options: [...positiveOptions, "Outro"],
    };
  },
  commentQuestion:
    "Conte um pouco mais sobre sua avaliação. Sua resposta nos ajuda a entender o que podemos melhorar.",
};

export const platformConfig: EvaluationConfig = {
  id: "plataforma",
  title: "Avaliação da Plataforma",
  subtitle: "Experiência geral de uso do ambiente",
  icon: Monitor,
  image: "/images/home.png",
  generalQuestion: "Como foi sua experiência ao usar a plataforma CPS Carreiras?",
  hasConfirmStep: true,
  resolveDetail: (rating: Rating) => {
    const negativeOptions = ["Tive dificuldade para encontrar algo", "Tive problema técnico"];
    const positiveOptions = [
      "Foi fácil encontrar o que eu precisava",
      "Foi fácil utilizar os recursos",
      "As páginas funcionaram bem",
    ];

    if (rating <= 2) {
      return {
        question: "O que você percebeu ao utilizar a plataforma?",
        options: [...negativeOptions, "Outro"],
      };
    }
    if (rating === 3) {
      return {
        question: "O que você percebeu ao utilizar a plataforma?",
        options: [...negativeOptions, ...positiveOptions, "Outro"],
      };
    }
    return {
      question: "O que você percebeu ao utilizar a plataforma?",
      options: [...positiveOptions, "Outro"],
    };
  },
  commentQuestion: "O que você gostaria de encontrar na CPS Carreiras e ainda não encontrou?",
};

export const mapaConfig: EvaluationConfig = {
  id: "mapa",
  title: "Mapa de Carreiras",
  subtitle: "Exibido após a apresentação do resultado",
  icon: Map,
  image: "/images/mapa-de-carreiras.png",
  generalQuestion: "De forma geral, como você avalia sua experiência com o Mapa de Carreiras?",
  hasConfirmStep: true,
  resolveDetail: (rating: Rating) => {
    const negativeOptions = [
      "Perguntas difíceis de entender", "Difícil escolher as respostas",
      "Não me identifiquei com o resultado", "Resultado difícil de entender",
      "Não me ajudou a refletir sobre possibilidades profissionais",
      "Não ficou claro o que fazer depois", "Recomendações pouco úteis para mim",
      "Levou mais tempo do que eu esperava",
    ];
    const positiveOptions = [
      "Perguntas fáceis de entender", "Foi fácil escolher as respostas",
      "Me identifiquei com o resultado", "Resultado fácil de entender",
      "Me ajudou a refletir sobre possibilidades profissionais",
      "Ficou claro como continuar explorando", "Recomendações úteis para mim",
      "Tempo adequado",
    ];

    if (rating <= 2) {
      return {
        question: "O que poderia ter sido melhor na sua experiência com o Mapa de Carreiras?",
        options: [...negativeOptions, "Outro"],
      };
    }
    if (rating === 3) {
      return {
        question: "Conte um pouco mais sobre sua avaliação.",
        options: [...negativeOptions, ...positiveOptions, "Outro"],
      };
    }
    return {
      question: "O que mais contribuiu para sua avaliação?",
      options: [...positiveOptions, "Outro"],
    };
  },
  commentQuestion:
    "Conte um pouco mais sobre sua avaliação. Sua resposta nos ajuda a entender o que podemos melhorar.",
};

export const simuladorConfig: EvaluationConfig = {
  id: "simulador",
  title: "Simulador de Entrevistas",
  subtitle: "Exibido após o feedback final da simulação",
  icon: Mic,
  image: "/images/simulador-de-entrevistas.png",
  generalQuestion: "De forma geral, como você avalia sua experiência com o Simulador de Entrevistas?",
  hasConfirmStep: true,
  resolveDetail: (rating: Rating) => {
    const negativeOptions = [
      "Perguntas difíceis de entender", "Perguntas pouco adequadas à situação",
      "Simulação pouco próxima de uma entrevista", "Tive dificuldade para responder",
      "Feedback difícil de entender", "Feedback pouco útil para mim",
      "Não consegui perceber o que fiz bem", "Não ficou claro o que posso melhorar",
      "Simulação muito longa", "Tive problema com áudio ou vídeo",
    ];
    const positiveOptions = [
      "Perguntas fáceis de entender", "Perguntas adequadas à situação",
      "Simulação próxima de uma entrevista", "Consegui praticar minhas respostas",
      "Feedback fácil de entender", "Feedback útil para mim",
      "Consegui perceber o que fiz bem", "Ficou claro o que posso melhorar",
      "Tempo adequado", "Áudio e vídeo funcionaram bem",
    ];

    if (rating <= 2) {
      return {
        question: "O que poderia ter sido melhor na sua experiência com o Simulador de Entrevistas?",
        options: [...negativeOptions, "Outro"],
      };
    }
    if (rating === 3) {
      return {
        question: "Conte um pouco mais sobre sua avaliação.",
        options: [...negativeOptions, ...positiveOptions, "Outro"],
      };
    }
    return {
      question: "O que mais contribuiu para sua avaliação?",
      options: [...positiveOptions, "Outro"],
    };
  },
  commentQuestion:
    "Conte um pouco mais sobre sua avaliação. Sua resposta nos ajuda a entender o que podemos melhorar.",
};

export const evaluationConfigs = [
  courseConfig, trilhaConfig, platformConfig, mapaConfig, simuladorConfig,
];