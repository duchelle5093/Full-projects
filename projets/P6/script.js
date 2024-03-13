let nb1 = document.querySelector('.nb1')
let nb2 = document.querySelector('.nb2')
let op = document.querySelector('.op')
let message = document.querySelector('.message')
let score = document.querySelector('.score')
let link = document.querySelector('.link')
let section = document.querySelector('section')
let compteur = 0

//nombres aleatoires debut du jeu

random1 = Math.random()*11 << 0
random2 = Math.random()*11 << 0

//inserer les nombres au hazard dans la variable nb1

nb1.innerHTML= random1
nb2.innerHTML= random2 

//fonction de verification

function verifier(){
    //recuperer le resultat entré par le joueur
    let res = document.querySelector('.res').value
    if(random1 + random2 == res){
        message.style.background = "green"
        message.innerHTML = "Correcte."
        //creer d'autres nombres aléatoires  
        random1 = Math.random()*11 << 0
        random2 = Math.random()*11 << 0
        nb1.innerHTML= random1
        nb2.innerHTML= random2  
        compteur = compteur+1

    }else{
        message.style.background= "red"
        message.innerHTML = "Vous avez perdu"
        section.innerHTML = ""
        score.innerHTML = `<span>${compteur}</span></br> score`
        link.style.display = "block"
    }
}

