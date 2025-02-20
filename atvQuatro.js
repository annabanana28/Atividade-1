var teclado = require("prompt-sync")();
var grausfahrenheit = parseInt(teclado("Digite a temperatura em graus fahrenheit"));
var celsius = (grausfahrenheit - 32) * (5 / 9);
console.log("A temperatura transformada em celsius possui o valor de ".concat(celsius));
