//1. Creare un array di oggetti: 
//   Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
//2. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal Snack

//1a. creo un array di oggetti, ogni oggetto descriverà il nome e il peso di una bici
const biciclette = [
    {
        //bicicletta 0
        'nome': 'Bianchini',
        'peso': 7
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

//2b. creo un ciclo for 
for ( let i = 0; i < biciclette.length; i++ ) {
    let thisBicicletta = biciclette[i];
    //2c. per trovare quale delle biciclette nell array (biciclette) è la piu leggera 
    if ( thisBicicletta.peso < biciclettaPiuLeggera.peso ) {
        biciclettaPiuLeggera = thisBicicletta;
    }
}
console.log(biciclettaPiuLeggera);

//2c. utilizzo destructuring per ricavare le variabili dell'oggetto biciclettaPiuLeggera (in questo caso il nome e il peso)
const { nome, peso } = biciclettaPiuLeggera;
//console.log(nome);
//console.log(peso);

//2d. uso template literal per stampare il nome e il peso della bicicletta piu leggera
const caratteristicheBiciclettaPiuLeggera = `
    <ul>
        <li>Nome: ${nome}</li>
        <li>Peso: ${peso}</li>
    </ul>
`;

//2e. Stampo le caratteristiche della bicicletta piu leggera
document.getElementById('bicicletta_leggera').innerHTML = caratteristicheBiciclettaPiuLeggera;
