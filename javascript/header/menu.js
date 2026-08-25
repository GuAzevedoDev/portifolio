import { hamburgerInput, nav } from "./ui.js";

// Abre/fecha o menu de navegação ao clicar no hamburger
export function initMenu() {
  hamburgerInput.addEventListener("click", () => {
    if (hamburgerInput.checked) {
      nav.classList.add("ativo");
    } else {
      nav.classList.remove("ativo");
    }
  });
}
