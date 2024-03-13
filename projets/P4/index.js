const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');

const choixPossible = document.querySelectorAll('button');

let choixUtilisateur 
let resultat
let choixOrdinateur


//evenement 'click' sur les button
choixPossible.forEach(choixPossible => choixPossible.addEventListener('click', (e)=> {
   
    //recuperation de l'ID du bouton cliqué
    choixUtilisateur= e.target.id;
    
    //on ajoute l'image qui correspond au choix 
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png">`
    
    generer_choix_ordinateur()
    verification()

}))


//fonction pour generer le choix del'ordinateur 

function generer_choix_ordinateur(){
    random = Math.floor(Math.random() *3) +1 //générer des nombres compris entre 1 et 3
    if(random === 1){
        choixOrdinateur = "pierre"
    }
    if(random === 2){
        choixOrdinateur = "papier"
    }
    if(random === 3){
        choixOrdinateur = "ciseaux"
    }
  //on ajoute l'image qui correspond au choix
    contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png">`
}

//fonction pour verifier si le joueur à gagne ou pas 

function verification(){
    if(choixUtilisateur==choixUtilisateur){
        resultat= "Egalité !" ;
    }
    //cas ou le joueur perd
    if(choixUtilisateur == "pierre" && choixOrdinateur == "papier"){
        resultat = "Perdu !"
    }
    if(choixUtilisateur == "papier" && choixOrdinateur == "ciseaux"){
        resultat = "Perdu !"
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre"){
        resultat = "Perdu !"
    }

    //cas ou le jouer gagne 
    if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux"){
        resultat = "Gagné !"
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "papier"){
        resultat = "Gagné  !"
    }
    if(choixUtilisateur == "papier" && choixOrdinateur == "pierre"){
        resultat = "Gagné !"
    }
    contenantResultat.innerHTML = resultat;
}