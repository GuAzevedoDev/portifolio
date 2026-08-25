import { janelaMac, botaoFechar, botaoMinimizar, botaoMaximizar } from "./ui.js";

// Semáforos da janela reagindo como numa janela de verdade — a seção não
// pode sumir de fato, então o vermelho só balança (tipo app com alteração
// não salva); amarelo minimiza/restaura o conteúdo; verde amplia a janela
export function initJanelaMac() {
  if (!janelaMac) return;

  botaoFechar?.addEventListener("click", () => {
    janelaMac.classList.remove("balancando");
    void janelaMac.offsetWidth; // força reiniciar a animação em cliques seguidos
    janelaMac.classList.add("balancando");
  });

  janelaMac.addEventListener("animationend", () => {
    janelaMac.classList.remove("balancando");
  });

  botaoMinimizar?.addEventListener("click", () => {
    janelaMac.classList.toggle("minimizada");
  });

  botaoMaximizar?.addEventListener("click", () => {
    janelaMac.classList.toggle("maximizada");
  });
}
