var numero_de_cliques = 0;

var botao = document.getElementById("botao");

botao.addEventListener("click", function(){
    numero_de_cliques+=1;
    document.getElementById("numero").innerHTML= "Quantidade de cliques: " +  numero_de_cliques;  
})
