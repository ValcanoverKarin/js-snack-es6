//1. Creare un array di oggetti di squadre di calcio. 
//   Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
//   Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
//2. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
//3. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e 
//4. stampiamo tutto in console

//1a. creo un array di oggetti, ogni oggetto descriverà il nome di una squadra di calcio mentre i punti fatti e i falli subiti sono settati a 0
const squadre = [
    {
        //squadra 0
        'nome' : 'Ascoli',
        'punti_fatti' : 0,
        'falli_subiti' : 0
    },
    {
        //squadra 1
        'nome' : 'Reggiana',
        'punti_fatti' : 0,
        'falli_subiti' : 0
    },
    {
        //squadra 2
        'nome' : 'Cosenza',
        'punti_fatti' : 0,
        'falli_subiti' : 0
    },
    {
        //squadra 3
        'nome' : 'Pordenone',
        'punti_fatti' : 0,
        'falli_subiti' : 0
    }
];
//console.log(squadre);

//3a. creo un array vuoto 
const arraySquadra = [];

//2a. creo un ciclo for per assegnare dei numeri random al posto degli 0 nei punti fatti e falli subiti
for ( let i = 0; i < squadre.length; i++ ) {
    let thisSquadra = squadre[i]; 

    //2b. assegno un numero random a punti fatti 
    thisSquadra.punti_fatti = getRandomInteger(1, 80);
    //2c. e assegno un numero random anche ai falli subiti 
    thisSquadra.falli_subiti = getRandomInteger(1, 100);

    //3b utilizzo destructuring per ricavare le variabili dell'oggetto thisSquadra (in questo caso il nome e i falli subiti)
    let {nome, falli_subiti} = thisSquadra;
    //3c. creo un nuovo oggetto che contiene i nomi e i falli subiti
    const nuovaSquadra = {
        nome,
        falli_subiti
    };
    //3d. aggiungo ogni nuovo oggetto all' array vuoto
    arraySquadra.push(nuovaSquadra);
}
//4a. stampo i due array in console 
console.log(squadre);
console.log(arraySquadra);


// Funzione getRandomInteger
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}