fetch('Abbigliamento.json')
    .then(response => response.json())
    .then(vestiti => {


        vestiti.forEach(item => {

            let vestito = new Vestiti(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo)
            vestito.getsaldocapo();
            vestito.getacquistocapo();

            console.log(vestito);
            console.log(vestito.getsaldocapo());
            console.log(vestito.getacquistocapo());

        })


    })

    class Vestiti {
        id : number;
        codprod : number;
        collezione : string;
        capo : string;
        modello : number;
        quantita : number;
        colore : string;
        prezzoivaesclusa : number;
        prezzoivainclusa : number;
        disponibile : string;
        saldo : number;

        constructor(id:number, codprod:number, collezione: string, capo:string, modello:number, quantita:number, colore:string, prezzoivaesclusa:number, prezzoivainclusa:number, disponibile:string, saldo:number){

                this.id = id;
                this.codprod = codprod;
                this.collezione = collezione;
                this.capo = capo;
                this.modello = modello;
                this.quantita = quantita;
                this.colore = colore;
                this.prezzoivaesclusa = prezzoivaesclusa;
                this.prezzoivainclusa = prezzoivainclusa;
                this.disponibile = disponibile;
                this.saldo = saldo;


        }

        getsaldocapo():number{
            return (this.prezzoivaesclusa * this.saldo) / 100;
        }
    
        getacquistocapo():number{
            return (this.getsaldocapo() + this.prezzoivainclusa)
        }


    }


    

    

    let giacca = new Vestiti (6, 6488, 'inverno', 'giacca', 6754, 3, 'grigio', 45, 54.9, 'negozio', 10)

    let sneakers = new Vestiti (7, 6978, 'estate', 'scarpe', 2254, 5, 'nero', 50, 62, 'negozio', 19)

    let costume = new Vestiti (8, 9768, 'estate', 'costume', 6884, 7, 'giallo', 20, 24.4, 'negozio', 5)

    console.log(giacca);
    console.log(sneakers);
    console.log(costume);

