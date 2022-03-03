// STRUTTURA
// CREAZIONE STRUTTURA
let side = '500px'
let levelInp = document.querySelector('#level')
let campo = document.querySelector('.campo')
campo.style.maxWidth = '500px'
let play = document.querySelector('.play')
let replay = document.querySelector('.replay')
// levels
let levels = [100, 81, 49]
play.addEventListener('click', selectLev)
replay.addEventListener('click', cancel)
// selezione livello e generazione
function selectLev() {
    cancel();
    if (levelInp.value == 'firstLevel') {
        generazione(levels[0]);
    } else if (levelInp.value == 'secondLevel') {
        generazione(levels[1]);
    } else  if (levelInp.value == 'thirdLevel') {
        generazione(levels[2]);
    } else {
        alert('Seleziona un livello')
    }
};
// reset
function cancel () {
    campo.innerHTML = ''
    replay.classList.add('d-none')
};
// contenuto generato
function generazione (level) {
    let dim = 100 / Math.sqrt(level)
    for (let i = 1; i <= level; i++) {
        let box = document.createElement('div')
        replay.classList.remove('d-none')
        box.className = "box d-flex p-1 justify-content-center align-items-center bg-light"
        box.classList.add(`box-${i}`)
        box.style.border = '1px solid black'
        box.style.width = dim + '%'
        box.addEventListener('click',changeColor)
        box.innerHTML = i;
        campo.append(box)
    }
};
let looserNumbers = []
function changeColor() {
    for (let i = 0; i < looserNumbers.length; i++) {
        const element = looserNumbers[i];
        if ((this.innerHTML + '' == element + '')) {
            this.classList.add('bg-danger')
            this.classList.remove('bg-light')
        } else {
            this.classList.add('bg-secondary')
            this.classList.remove('bg-light')
        }   
    }
};
while (looserNumbers.length < 16) { 
let random = Math.floor(Math.random() * 100) + 1;
if (!(looserNumbers.includes(random))) {
    looserNumbers.push(random);
}};

