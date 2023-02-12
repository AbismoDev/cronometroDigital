let cronometro = document.getElementById('cronometro')
let horasTempo = 0;
let minutosTempo = 0;
let segundosTempo = 0;

function maisUm(){
    segundosTempo ++
    if(segundosTempo == 60){            
        segundosTempo = 0
        minutosTempo++
        if(minutosTempo == 60){                
            minutosTempo = 0
            horasTempo++
        }
    }    
    cronometro.innerHTML = `${horasTempo} : ${minutosTempo} : ${segundosTempo}`
}

function resetados(){
    segundosTempo = 0
    minutosTempo = 0
    horasTempo = 0
    cronometro.innerHTML = '0 : 0 : 0'
}

export {maisUm, resetados}