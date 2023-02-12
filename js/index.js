import {maisUm, resetados} from "./funcoes/incrementacao.js";

let intervalo;

let iniciar = document.getElementById('iniciarContagem')
iniciar.addEventListener('click', function iniciarContagem(){    
    intervalo = setInterval(maisUm, 1000) 
} )

let parar = document.getElementById('pararContagem')
parar.addEventListener('click', function pararContagem(){
    clearInterval(intervalo)
})

let resetar = document.getElementById('resetarContagem')
resetar.addEventListener('click', function resetarContagem(){
    clearInterval(intervalo)
    resetados()
})