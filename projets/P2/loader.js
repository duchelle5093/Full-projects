
const loader = document.querySelector('.loader')


window.addEventListener('load', () =>{
    loader.classList.add('fondu')
    loader.addEventListener('transitionend', () =>{
        document.body.removeChild('loader')
    })
})
