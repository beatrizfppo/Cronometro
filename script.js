//-----------
let segundos = 0;
let intervalo = null;

const display = document.getElementById("display")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

btn1.addEventListener("click", iniciar);
btn2.addEventListener("click", pausar);
btn3.addEventListener("click", reset);

function iniciar(){
    if(intervalo) return // evita q existam multiplos intervalos

    intervalo = setInterval(() => { //guarda em intervalo o passar de 1s ou 1000 milisegundos
        segundos++
        atualizaDisplay();
    },1000);
}

function pausar(){
    clearInterval(intervalo);
    intervalo = null
}

function reset(){
    pausar();
    segundos = 0;
    atualizaDisplay();
}

function formatarTempo (segundosTotais){
    const min = Math.floor(segundosTotais/600);
    const seg = segundosTotais % 60;
    return `${String(min).padStart(2,'0')}:${String(seg).padStart(2,'0')}`
}

function atualizaDisplay(){
    display.textContent = formatarTempo(segundos)
}