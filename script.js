const botao = document.querySelector ("button");
const titulo = document.querySelector ("h1");

botao.addEventListener("click",function(){
    alert("obrigada");
    titulo.textContent = "Obrigado pelo clique!";
    titulo.classList.add("destaque");
})
