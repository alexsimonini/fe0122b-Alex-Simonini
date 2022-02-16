var anziano = ('età'>= 65);

function Pensione(){
    if ('età' >= 65) {
        window.alert ('Vai in pensione');
    }
    else {
        window.alert ('Sei giovane');
    }
}


//funzione freccia

/*function pensionato(){
    return 'Ciao, mi godo la pensione';
} */

pensionato = () => {return 'Ciao, mi godo la pensione'}
    (pensionato);


    //funzione dentro una funzione 

    function operazioni(){
        var num = 12;
        function divisione(){
            console.log(num / 2);
        }
        return divisione();
    }

    //operatori

    var numero1 = 4;
    var numero2 = 6;   
    var numero3 = 9;

    numero1 > numero2  //false
    numero3 < numero1  //false
    numero1 <= numero3  //true

