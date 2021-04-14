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
        'puntifatti' : 0,
        'fallisubiti' : 0
    },
    {
        //squadra 1
        'nome' : 'Reggiana',
        'puntifatti' : 0,
        'fallisubiti' : 0
    },
    {
        //squadra 2
        'nome' : 'Cosenza',
        'puntifatti' : 0,
        'fallisubiti' : 0
    },
    {
        //squadra 3
        'nome' : 'Pordenone',
        'puntifatti' : 0,
        'fallisubiti' : 0
    }
];
//console.log(squadre);