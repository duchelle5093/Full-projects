
let listeButton = document.querySelectorAll('.touches button')
let lastReturn = document.querySelector('#screen .last')
let newReturn = document.querySelector('#screen .new')

let firstNumber = null
let newNumber = null
let calculator = '+'

listeButton.forEach(button => {
    button.addEventListener('click', ()=> {
        let value = button.innerText
        switch(value){
            case((value.match(/[0-9]/) || {}).input):
                //add number in last number
                newNumber = newNumber !== null ? newNumber + value:value
                break
            case'.':
                newNumber =newNumber !== null ? newNumber + value: '0.'
                break
            case '±':
                newNumber = -1*newNumber
                break
            case '%':
                newNumber = 0.01*newNumber
                break
            case((value.match(/[\+|\-|\*|\/]/) || {}).input):
                if(newNumber){
                    if(firstNumber){
                        applyCalculator()
                    }
                    calculator = value
                    firstNumber = newNumber
                    newNumber = null
                }
                break
            case '=':
                applyCalculator()
                firstNumber = null
                break
            case 'AC':
                firstNumber = null
                newNumber = null
                calculator = '+'
                break
            }
            reloadScreen()
    })
})


const applyCalculator = function(){
    switch(calculator){
        case '+':
            newNumber = Number(firstNumber) + Number(newNumber)
            break
        case '-':
            newNumber = Number(firstNumber) - Number(newNumber)
            break
        case '*':
            newNumber = Number(firstNumber) * Number(newNumber)
            break
        case '/':
            newNumber = Number(firstNumber) / Number(newNumber)
            break
    }
}


const reloadScreen = function(){
    lastReturn.innerText = firstNumber !== null ? firstNumber + '' +calculator: ''
    newReturn.innerText= newNumber !== null ? newNumber: ''

    
}
