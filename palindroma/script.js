const parola = prompt("Scegli una parola");
// parola = 'etnagigante';
console.log(parola)

if (isPalindroma(parola)) {
    console.log('la parola è palindroma');
} else {
    console.warn('la parola non è palindroma');
}

function isPalindroma(parola) {
    let result = true;
    for (let i = 0; i < parola.length && result; i++ ) {
        const lettera = parola[i]
        console.log(i, lettera, parola.length - 1 - i, parola[parola.length - 1 - i])

        if (lettera !== parola[parola.length - 1 - i]) {
            result = false;
        }
    }
    return result;
}

