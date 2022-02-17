var x = 'Java Script è veramente difficile';   //stringa

console.log(x);

console.log(x.toLowerCase(1));  //trasforma riga in minuscolo
console.log(x.toUpperCase(2));  //trasforma riga in maiuscolo


//array
var nomi = [
    'Giovanni',
    'Mario',
    'Lucia',
    'Luca',
    'Giorgia'
]

let varSlice = nomi.slice(2,3);   //estrae l'elemonto o gli elementi indicati dai parametri (nuovo array)
console.log(varSlice);

let varShift = nomi.shift();   //seleziona ed elimina il primo elemento
console.log(varShift);

let varUnshift = nomi.unshift('Marco');   //aggiunge nuovo elemento in prima posizione
console.log(varUnshift);

let variabilePop = nomi.pop();   //estrae ultimo elemento
console.log(variabilePop);

let variabilePush = nomi.push('Luisa');   //aggiunge elemento alla lista
console.log(variabilePush);