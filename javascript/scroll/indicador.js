import { secoes, indicadorScroll } from "./ui.js";

// Clique no "role para baixo" do hero: desce direto pra primeira seção
// abaixo do main (que é só a apresentação breve, não conta como seção)
export function initIndicadorScroll() {
  if (!indicadorScroll) return;

  indicadorScroll.addEventListener("click", () => {
    secoes[0]?.scrollIntoView({ behavior: "smooth" });
  });
}
