let  perso = document.querySelector(".perso") ;
let  obstacles = document.querySelector('.obstacles');


  function sauter (){
   //function pour faire sauter le personnage
     if(perso.classList!= 'animation'){
        perso.classList.add('animation')
     }
     setTimeout(function() {
        perso.classList.remove('animation')   
     } , 500)
  }

//verifier si l'obstacle touche le personnage 

let verification = setInterval(function(){
    let persoTop = parseInt( window.getComputedStyle(perso).getPropertyValue('top'))
    let obstacleLeft = parseInt( window.getComputedStyle(obstacles).getPropertyValue('left'))
    
    if(obstacleLeft<20 && obstacleLeft>0 && persoTop>=130){
      obstacles.style.annimation = 'none';
      alert('vous avez perdu')
    }

   }, 1)


