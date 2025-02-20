import { JsxEmit } from "typescript";

let teclado = require(`prompt-sync`) ();
let grauscelsius:number = parseInt(teclado(`Digite a temperatura em graus celsius`));

let Fahrenheit: number = (grauscelsius) * (9/5) + 32 ;

console.log(`A temperatura transformada em Fahrenheit possui o valor de ${Fahrenheit}`);