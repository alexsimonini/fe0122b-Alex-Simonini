var bottone = document.querySelector('#btn');
var p = document.querySelector('#par');
//console.log(Math.floor(Math.random()*(100-1)+1))
bottone.addEventListener('click', function () {
    alert((Math.floor(Math.random() * (100 - 1) + 1)));
    p.innerHTML('ciao');
});
