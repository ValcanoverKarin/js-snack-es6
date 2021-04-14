//1. Creare un array di oggetti: 
//   Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
//2. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal Snack

//1a. creo un array di oggetti, ogni oggetto descriverà il nome e il peso di una bici
const biciclette = [
    {
        //bicicletta 0
        'nome': 'Bianchini',
        'peso': 5
    },
    {
        //bicicletta 1
        'nome': 'Olmo',
        'peso': 12
    },
    {
        //bicicletta 2
        'nome': 'Venom',
        'peso': 6
    },
    {
        //bicicletta 3
        'nome': 'Trek',
        'peso': 8
    }
]

//2a. imposto la bicicletta piu leggera come oggetto vuoto
let biciclettaPiuLeggera = biciclette[0];