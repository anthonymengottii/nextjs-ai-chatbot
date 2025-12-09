export const DEFAULT_CHAT_MODEL: string = "chat-model";

export type ChatModel = {
  id: string;
  name: string;
  description: string;
};

export const chatModels: ChatModel[] = [
  {
    id: "chat-model",
    name: "Cupula IA",
    description: "Modelo multimodal avançado com capacidades de visão e texto",
  },
  {
    id: "chat-model-reasoning",
    name: "Cupula IA Reasoning",
    description:
      "Usa raciocínio avançado em cadeia para problemas complexos",
  },
];
