// Mensagem no console ao carregar a página
window.onload = function() {
  console.log("Portfólio carregado com sucesso!");
};

// Exemplo: alerta quando o usuário clica em um link de projeto
const linksProjetos = document.querySelectorAll(".card a");
linksProjetos.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Projeto ainda não publicado no GitHub!");
  });
});
