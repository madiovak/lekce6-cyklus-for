// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10');
/*
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
*/

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}


// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu
console.log('Druhý příklad - rozdíl mezi <= a <');
/*
for (let j = 0; j < 11; j++) {
    console.log(j);
}
*/


let j = 0;
while (j < 11) {
    console.log(j);
    j++;
}

// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');
/*
for (let k = 10; k >= 0; k--) {
    console.log(k);
}
*/

let k = 10;
while (k >= 0) {
    console.log(k);
    k--;
}