var operazioneCliccata = false

function prendiDato (valore) {
    if (valore == '+' || valore == '-' || valore == '/' || valore == '*'){
        if (operazioneCliccata == false) {
            document.getElementById('display').value += valore;
            operazioneCliccata = true;
        }
    }
    if (Number.isInteger(valore) || valore =='.') {
        document.getElementById ('display').value += valore;
    }
}

function resetCalcolatrice(){
    let display = document.getElementById('display').value = '';
    operazioneCliccata = false
}


function totale(){
    let display = document.getElementById('display')
    display.value = eval(display.value);
    operazioneCliccata = false
}