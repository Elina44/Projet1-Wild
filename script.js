console.log("connecte");

//pour faire apparaître le menu burger qd on clique dessus
//on sélectionne et stocke les éléments nécessaires

const icon = document.querySelector(".fa-bars");
//console.log(icon);

const list = document.querySelector(".nav-list-mobile");
//console.log(list);

//On soumet ces 2 éléments à une action
icon.addEventListener("click", function(){
    //quand on clique sur l'icône on veut que =>fonction
    list.classList.toggle("list-visible");
    //on rappelle la classe pour qu'il s'affiche
})