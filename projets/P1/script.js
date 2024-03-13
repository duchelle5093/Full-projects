// déclaration des variables 
let sp, t, btn_start, btn_stop, ms, s, mn, h;

//fonction d'initialisation des variables au chargement de la page 
window.onload=function() { //window ici est un objet et onload est une methode de cet objet
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('Start');
    btn_stop = document.getElementById('stop');
    t;
    ms=0, s=0, mn=0, h=0;
}

// fonction de mise en place du compteur 

function update_chrono() {
    ms+=1
    if (ms==10) {
        ms=1;
        s+=1;
    }
    if (s==60) {
        s=0;
        mn+=1;
    }
    if (mn==60) {
        mn=0;
        h+=1;
    }

    //insertion des valeurs dans les span
    sp[0].innerHTML= h +"h";
    sp[1].innerHTML= mn +"min";
    sp[2].innerHTML= s +"s";
    sp[3].innerHTML= ms +"ms";
}

//mise en place de la fonction du bouton start
function start() {
    t = setInterval(update_chrono, 100);
    btn_start.disabled = true;
}

//mise en place de la fonction du bouton stop
function stop() {
    clearInterval(t);
    btn_start.disabled = false;
    
}
//mise en place de la fonction du bouton reset
function reset() {
    clearInterval(t);
    btn_start.disabled= false;
    ms=0, s=0, mn=0, h=0;

 //insertion des nouvelles valeurs dans les span   
    sp[0].innerHTML= h +"h";
    sp[1].innerHTML= mn +"min";
    sp[2].innerHTML= s +"s";
    sp[3].innerHTML= ms +"ms";
}



    