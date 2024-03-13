

let addTodoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


addTodoButton.onclick = function () {
    // on verifie si l'input n'es pas vide
    if (inputField.value != "") {
       let paragraph = document.createElement('p')

      //inserer du contenu de l'input dans le paragraphe
      paragraph.innerText = inputField.value;

    //   sytliser le paragraphe
    paragraph.classList.add("paragraph_style")


      //inserer du paragrapahe dans la TodoContainer 
    
    toDoContainer.appendChild(paragraph)


    //vider l'input une fois que le paragraphe est ajouté
    inputField.value = "";
    
    paragraph.onclick = function() {
        paragraph.classList.add("paragraph_click")
        
    }

    //supprimer la tache en double cliquant dessus
    paragraph.ondblclick = function() {
         toDoContainer.removeChild(paragraph);
        
    }

    }
    
}



