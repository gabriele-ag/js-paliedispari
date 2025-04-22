const sceltaPOD = prompt(`Scegli pari o dispari`).toLowerCase();
console.log(sceltaPOD);
const numGC = parseInt(prompt(`Inserisci un numero da 1 a 5`))
const numPC = (numrdmPC())

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

console.log(sommaTot)

if (sceltaPOD === 0 && sommaTot % 2 === 0) {
     console.log("Hai vinto, il numero è pari") 
}   else if (sceltaPOD === 0 && sommaTot % 2 !== 0) {
    console.log("Hai vinto, il numero è dispari")
} else {
    console.log(`Hai perso, il numero non è ${sceltaPOD}`)
}
