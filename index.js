let secretDigits;
let playerDigits;

// to run 'ENTER' key 'CHECK' button

let formSubmit = document.getElementById('guess')
formSubmit.onkeydown = function(e) {

    if(e.keyCode == 13) {
        e.preventDefault() 
        guessClick()       
    }
}

 // SECRET NUMBER
function get4digitNumber() {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
   
    let fourDigitsNumber = []
    for (let i = 0; i < 4; i++) {
        let randomNumber = numbers[Math.floor(Math.random() * numbers.length)]
        fourDigitsNumber.push(randomNumber)
        numbers = numbers.filter(item => item !== randomNumber)
    }

    return fourDigitsNumber
}

secretDigits = get4digitNumber()
function onLoad(){
    //secretDigits = get4digitNumber()
}
console.log("🚀 ~ file: index.js ~ line 24 ~ secretDigits", secretDigits)


let secretNumberWrap = document.getElementById('secretNumber')

secretNumberWrap.innerHTML = 'SECRET NUMBER IS : ' + secretDigits.join('')



function restart() {

    location.reload()

}





function guessClick() {

    guess(document.getElementById('guess').value) //guess(1234)

}



function guess(number) {

    let bulls = 0
    let cows = 0
    let resultWrap = document.getElementById('result');
    let bullsWrap = document.getElementById('bulls');
    let cowsWrap = document.getElementById('cows')



    // USER GUESS

    let userNumber = number
    //prompt('Enter Your Guess: ')
    if (userNumber.length !== 4) {
        return console.log('Enter a 4-Digit Number!!!')
    }


    var userArray = String(userNumber).split("").map((num) => {
        return Number(num)
    })


    // ARRAY OF 2 DATAS

    playerDigits = userArray    



    // CHECK SECRET NUMBERS INCLUDES ANY DIGIT OR NOT
    let counter = 0

    for (let i = 0; i < playerDigits.length; i++) {
        if (secretDigits.includes(playerDigits[i])) {
            counter++
        }
    }

    if (counter === 0) {
        console.log('Not even 1 matches')
    }

    // GET BULLS AND COWS

    for (let i = 0; i < 4; i++) {

        if (playerDigits.includes(secretDigits[i]) && secretDigits[i] === playerDigits[i]) {
            bulls++

        } else if (playerDigits.includes(secretDigits[i]) && secretDigits[i] !== playerDigits[i]) {
            cows++
        }
    }


    //secretDigits = +secretDigits.join('')
    console.log("secretDigits : ", secretDigits)
    //playerDigits = +playerDigits.join('')
    console.log("playerDigits : ", playerDigits)


    if (secretDigits.join('') == playerDigits.join('')) {
        resultWrap.innerHTML = 'YOU MADE IT!!!'
        console.log("you did well")
    } else {
        resultWrap.innerHTML = "YOU FAILED !!! TRY AGAIN !!!"
        console.log('YOU FAILED')
        document.getElementById("myForm").reset();
        document.getElementById('guess').placeholder = 'TRY HARDER!!!'

    }

    bullsWrap.innerHTML = "Bulls = " + bulls;
    cowsWrap.innerHTML = "Cows = " + cows

    console.log('BULLS: ', bulls)
    console.log('COWS: ', cows)


}



