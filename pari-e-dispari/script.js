const sceltaPOD = prompt(`Scegli pari o dispari`).toLowerCase();
if (sceltaPOD !== `pari` && sceltaPOD !== `dispari`) {
    alert('Attenzione! Scrivi pari o dispari')
    console.log('Gioco interrotto') }
    else {
    console.log(sceltaPOD);


    const numGC = parseInt(prompt(`Inserisci un numero da 1 a 5`))
    const numPC = numrdmPC()

    function numrdmPC() {
    let num = Math.floor(Math.random() * 5) + 1;
    return num;
    }

    console.log(`Il numero scelto dal giocatore è ${numGC}`)
    console.log(`Il numero scelto dalla CPU è ${numPC}`)

    const sommaTot = sumNum()

    function sumNum() {
    const sum = numGC + numPC;
    if (sum % 2 === 0) {
        console.log(`La somma dei numeri è ${sum}, numero pari`)
        } else {
        console.log(`La somma dei numeri è ${sum}, numero dispari`)
        }
        return sum
    }

    const risultato = ePari(sommaTot)

    function ePari(sommaTot) {
        console.log("Il numero è pari?")
        let pari;
        if (sommaTot % 2 === 0) {
            pari = true;
        } else {
            pari = false;
        } 

        return pari
    }

    console.log(risultato)


    if ((risultato && sceltaPOD === 'pari') || (!risultato && sceltaPOD === 'dispari')) {
        console.log("Hai vinto") }
        else {
            console.log("Hai perso")
        }

    
}



// console.log(sceltaPOD);


// const numGC = parseInt(prompt(`Inserisci un numero da 1 a 5`))
// const numPC = numrdmPC()

// function numrdmPC() {
//     let num = Math.floor(Math.random() * 5) + 1;
//     return num;
// }

// console.log(`Il numero scelto dal giocatore è ${numGC}`)
// console.log(`Il numero scelto dalla CPU è ${numPC}`)

// const sommaTot = sumNum()

// function sumNum() {
//    const sum = numGC + numPC;
//    if (sum % 2 === 0) {
//     console.log(`La somma dei numeri è ${sum}, numero pari`)
//     } else {
//     console.log(`La somma dei numeri è ${sum}, numero dispari`)
//     }
//     return sum
// }

// const risultato = ePari(sommaTot)

// function ePari(sommaTot) {
//     console.log("Il numero è pari?")
//     let pari;
//     if (sommaTot % 2 === 0) {
//         pari = true;
//     } else {
//         pari = false;
//     } 

//     return pari
// }

// console.log(risultato)


// if ((risultato && sceltaPOD === 'pari') || (!risultato && sceltaPOD === 'dispari')) {
//     console.log("Hai vinto") }
//     else {
//         console.log("Hai perso")
//     }
