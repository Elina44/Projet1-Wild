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

//Essai mise en place de la galerie page2

//Je sélectionne les petites photos et les stocke dans un tableau
const smallPictures = document.querySelectorAll(".small");
console.log(smallPictures);//Je sélectionne l'image grand format et la stocke
const fullPicture = document.getElementById("pivoine");smallPictures.forEach((item) => {
    item.addEventListener("click", function(){
        let imgSource = item.getAttribute("src");
        fullPicture.setAttribute("src", imgSource);
    });
});