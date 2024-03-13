let copyBtn = document.getElementById('copy')

function getPassword(){
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let passworLength = 16
    let password = ""

    //générer le mot de passe
    for(let i = 0; i<passworLength; i++){
        let randomNumber = Math.floor(Math.random()*chars.length)

        password += chars.substring(randomNumber , randomNumber+1) 
    }
    
    document.getElementById('password').value = password
    
    //changer le style du bouton copier 
    copyBtn.style.background='#6c757d'
    copyBtn.style.color='#fff'

}

//copier le mot de passe 
function copyMdp(){
    let inputPassword = document.getElementById('password')

    //vérifier la longueur du mot de passe 
    if(inputPassword.value.length == 16){
        //copier le mot de passe
        inputPassword.select()
        document.execCommand("copy")

        //changer le style du bouton copier
        copyBtn.style.background='transparent'
        copyBtn.style.color='#000'

        //afficher une alerte
        alert('Mot de passe copié ! ')

    }else{
        alert('veuillez generer un mot de passe')
    }

}
