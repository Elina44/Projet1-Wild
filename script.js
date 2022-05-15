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




//JS pour la page 5 : on veut à la validation du formulaire que la tâche soit récupérer et affichée dans la page
const form = document.getElementById("form"); // pour sélectionner ce qui est rentré dans l'input
//console.log(form);
const todo = document.getElementById("todo");
//console.log(todo);

//Je récupère la valeur de l'input
form.addEventListener("submit", function(e){
    e.preventDefault(); //j'empêche la page de se raffraîchir par défaut
    console.log("bouton cliqué");
    const todoValue = todo.value;//je récupère la valeur de l'input
    console.log(todoValue);



//En fonction de ce qui va être rempli, on va créer une DIV avec une partie paragraphe où on aura la liste, un bouton pour supp et un bouton pour valider
//Création de l'élément, on fait un template string donc avec back-ticks et on rappelle notre fonction
//button class = à chaque création d item, un nveau bouton est créé
    let item = '
                <div class="item">
                <p>${todoValue}</p>
                <button class="btn-delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
                <button class="btn-archive">
                    <i class="fas fa-check-circule"></i>
                </button>
                </div>
                '
            

    const listItems = document.querySelector('.list-items');
    console.log(listItems);

    //Je place item dans listItem
    listItems.innerHTML += item; //+= c'est pour concaténer afin de ne pas remplacer la 1è valeur par la 2èsaisie. Il faut que tout s'ajoute


    //Manip pour rayer la tâche par l'utilisateur
    //Au clic sur l'icône supprimer la tâche est retirée de la page
    //Je sélectionne et je stocke l'icône supprimer
    const btnDelete = document.querySelectorAll('.btn-delete');
    //console.log(btnDelete);

    //Au clic sur l'icône, la tâche est supprimée
    btnDelete.forEach(i => {
    consolelog('btn-delete');
        i.addEventListener('click'), function(){
        console.log(`btn-delete cliqué`);
        };
    //Pour réinitialiser le formulaire
    form.requestFullscreen();
    });//fermeture de btnDelete.forEach
});//fermeture de form.addEventListener

//Au clic
i.addEventListener('click', function(){
    console.log('btn-delete cliqué');
    //j'enlève l'élément parent
    i.parentElement.remove();
});

//Au clic sur l'icône archiver, la tâche est rayée
form.addEventListener('submit', function(e) {
    e.preventDefault(); //j'empêche la page de se raffraîchir par défaut
    console.log("bouton cliqué");
    const todoValue = todo.value;//je récupère la valeur de l'input
    console.log(todoValue);
//et je sélectionne tous les btn-archve existants dans la page
const btnArchive = document.querySelectorAll('.btn-archive');
    console.log(btnArchive);
});

//et pour rayer la tâche, on rappelle où on veut rayer
btnArchive.forEach(i => {
    console.log('btn-archive');
});

//On créé une boucle pour que chaque bouton archive déclenche l'action au clic
btnArchive.forEach(i=> {
    console.log('btn-archive');
    i.addEventListener('click', function(){
        //Je cible l'élément parent de i
        const parent = i.parentElement;
        //J'agis sur la DIV parent (class item)
        parent.classList.toggle('done');
    });
});






//fin pour la page5