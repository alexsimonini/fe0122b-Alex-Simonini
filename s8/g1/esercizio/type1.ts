//Gioco realizzato in console

let utente1: number = Math.floor(Math.random()*(100-1)+1);
let utente2: number = Math.floor(Math.random()*(100-1)+1);

console.log(utente1)
console.log(utente2)

let computer: number = Math.floor(Math.random()*(100-1)+1);

console.log(computer)

let risultato1 = Math.abs(computer - utente1);
let risultato2 = Math.abs(computer - utente2);

if (risultato1 > risultato2 && risultato2 !=0){
    console.log('utente2 per poco!')

} else if (risultato1 < risultato2 && risultato1 !=0) {
    console.log('utente1 per poco!')
} else if(utente1 == utente2){
    console.log('che fantasia! avete scelto lo stesso numero')
} else if( utente1 == computer){
    console.log('utente1 hai indovinato')
} else if( utente2 == computer){
    console.log('utente2 hai indovinato')
}