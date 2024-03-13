let myInput = document.getElementById('psw')
let letter = document.getElementById('letter')
let capital = document.getElementById('capital')
let number = document.getElementById('number')
let length = document.getElementById('length')
let oeil = document.querySelector('i')






//Afficher la boite de message lorsque l'utilisateur clique sur le champ du mot de passe 
myInput.onfocus= function(){
    document.getElementById('message').style.display='block'
}


//Masquer la boite de message lorsque l'utilisateur clique en dehors du champs du mot de passe 
myInput.onblur= function(){
    document.getElementById('message').style.display='none'
}


//lorsque l'utilisateur commmence à taper quelque chose dans le champs mot dep passe
myInput.onkeyup= function(){
   //afficher l'oeil lorsque l'utilisateur appuie sur une touche du clavier 
    oeil.style.display='block'
    
    myInput.type = 'password'
    
    oeil.classList.remove('active')
   
    if(myInput.value === ''){
        oeil.style.display= 'none'
    }
    
     //valider les lettres minuscules 
    let lowerCaseLetters = /[a-z]/g

    if(myInput.value.match(lowerCaseLetters)){
        letter.classList.remove('invalid')
        letter.classList.add('valid')
    }else{
        letter.classList.remove('valid')
        letter.classList.add('invalid')
    }
    
    //valider les lettres majusculesmyInput.type === 'password'
    let upperCaseLetters = /[A-Z]/g

    if(myInput.value.match(upperCaseLetters)){
        capital.classList.remove('invalid')
        capital.classList.add('valid')
    }else{
        capital.classList.remove('valid')
        capital.classList.add('invalid')
    }

    //valider les nombres
    let numbers = /[0-9]/g

    if(myInput.value.match(numbers)){
        number.classList.remove('invalid')
        number.classList.add('valid')
    }else{
        number.classList.remove('valid')
        number.classList.add('invalid')
    }

    //valider la longueur

    if(myInput.value.length >= 8){
        length.classList.remove('invalid')
        length.classList.add('valid')
    }else{
        length.classList.remove('valid')
        length.classList.add('invalid')
    }
}


//personnaliser l'oeil
function yeux(){
    if(myInput.type === 'password'){
        myInput.type = 'text'
        oeil.classList.add('active')
    }
    else if(myInput.type === 'text'){
        myInput.type = 'password'
        oeil.classList.remove('active')
    }
}

