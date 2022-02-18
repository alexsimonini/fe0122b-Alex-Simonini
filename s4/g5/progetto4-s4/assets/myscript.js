function prendiDato(pippo){
    let display = document.getElementById('display')
    let numero = pippo.id
    let attuaValore = display.value;
    
        display.value += numero

   
}

function resetCalcolatrice(){
    let display = document.getElementById('display').value = '';
}


function totale(){
    let display = document.getElementById('display')
    display.value = eval(display.value);
}

