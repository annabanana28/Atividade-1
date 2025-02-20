let teclado = require(`prompt-sync`) ();

let grausfahrenheit:number = parseInt(teclado(`Digite a temperatura em graus fahrenheit`));
let celsius:number = (grausfahrenheit - 32) * (5/9) ;


console.log(`A temperatura transformada em celsius possui o valor de ${celsius}`);
