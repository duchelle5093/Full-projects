let bouton = document.querySelectorAll('button');
let main = document.querySelector('.middle');
let sidebar = document.querySelector('.sidebar')
let btn = document.querySelector('#btn')

window.onload = function(){
   left.classList.add('transition-left')
   right.classList.add('transition-right')

}

for (let i = 1; i < bouton.length; i++) {
function get(){bouton[i].addEventListener("click",function(){
   main.innerHTML =  `<iframe src="./projets/${bouton[i].id}/index.html" frameborder="0"></iframe>`
   sidebar.classList.remove('active')

      })
   }
   get();
}

//sidebar

btn.onclick = function(){
     sidebar.classList.toggle('active')
}
let left = document.querySelector('.left')
let right = document.querySelector('.right')



