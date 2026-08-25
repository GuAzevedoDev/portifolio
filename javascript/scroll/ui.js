// Qualquer bloco marcado com "secao" é um alvo possível pro clique no
// indicador de scroll (o main fica de fora, é só a apresentação breve do
// hero) — começa em "sobre" e segue pelas próximas seções quando forem criadas
export const secoes = Array.from(document.querySelectorAll(".secao"));

// Botão de "role para baixo" exibido no hero
export const indicadorScroll = document.querySelector(".scroll-indicador");
