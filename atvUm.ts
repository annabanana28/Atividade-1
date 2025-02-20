let teclado = require(`prompt-sync`)();

console.log (`--------------`);
console.log (`-Calculo media-`);
console.log (`---------------`);


let n1: number = parseInt(teclado(`Digite o numero N1: `));
let n2: number = parseInt(teclado(`Digite o numero N2: `));
let n3: number = parseInt(teclado(`Digite o numero N3: `));
let n4: number = parseInt(teclado(`Digite o numeoro N4: `));
let n5: number = parseInt(teclado(`Digite o numero N5: `));
let n6: number = parseInt(teclado(`Digite o numeoro N6: `));
let n7: number = parseInt(teclado(`Digite o numero N7: `));
let n8: number = parseInt(teclado(`Digite o numero N8: `));
let n9: number = parseInt(teclado(`Digite o numero N9: `));
let n10:number = parseInt(teclado(`DIgite o numero N10: `)); 

let media: number = (n1+n2+n3+n4+n5+n6+n7+n8+n9+n10) /10;

console.log(`A media é ${media}`);