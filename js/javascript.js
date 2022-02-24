const wrapper = document.querySelector('#wrapper')
const openCards = [];
const numberCards = 16;
let number = 0;
let pairs = 0
let action = false;

//Aufgabe 2: dynamisches befüllen von openCards mit [1,1,2,2,3,3,4,4... 8,8]
for (let index = 1; index <= numberCards/2 ; index++) {
    openCards.push(index);
    openCards.push(index);
}
console.log(openCards);

function shuffle(Array){
    Array.sort(() => Math.random() - 0.25);
}
shuffle(openCards);
console.log(openCards);

for (let index = 1; index <= 16; index++) {

    const div = document.createElement('div');
    div.style.width = "175px";
    div.style.height = "175px";
    div.setAttribute('class', 'div')
    div.setAttribute('id', ('div' + index))
    div.style.backgroundColor = "cyan";
    div.style.display = "flex";
    div.innerText = openCards[index - 1]
    div.style.justifyContent = "center";
    div.style.padding = "8px";
    div.style.margin = "10px";
    wrapper.appendChild(div);

    div.addEventListener('click', function(e) {
        Reveal(div)
    })
}

let firstchecked;
let secondchecked;

function Reveal(div){
    if(div.id == 'checked' || action)
    return
    if(number == 0){
        div.style.backgroundColor="cyan"
        number++
        firstchecked = div
        x = firstchecked.id
        firstchecked.classList.add("color")
        firstchecked.setAttribute('id', 'checked')
    }
    else if(number == 1) {
        div.style.backgroundColor="cyan"
        secondchecked = div
        y = secondchecked.id
        secondchecked.classList.add("color")
        secondchecked.setAttribute('id', 'checked')
        IsMatch()
    }
}

function IsMatch() {
    if(firstchecked.innerText === secondchecked.innerText){
        IsAMatch()
    }
    else{
        NotAMatch()
    }
}

function NotAMatch(){
    action = true
    firstchecked.style.backgroundColor= "red"
    secondchecked.style.backgroundColor= "red"

    setTimeout(() => {
        firstchecked.style.backgroundColor="cyan"
        secondchecked.style.backgroundColor="cyan"
        firstchecked.classList.add("color2")
        secondchecked.classList.add("color2")
        action = false;
    }, 1500)

    let x;
    let y;

    number = 0
    firstchecked.setAttribute('id', x)
    secondchecked.setAttribute('id', y)
}

function IsAMatch() {
    number = 0
    pairs++
    firstchecked.style.backgroundColor="green"
    secondchecked.style.backgroundColor="green"
    firstchecked.classList.add("color")
        secondchecked.classList.add("color")
    if(pairs == 8) {
        EndOfGame()
    }
}

function EndOfGame(){
    action = true;
    alert("Congratulations, you have found all 8 Pairs! Well done!")
}