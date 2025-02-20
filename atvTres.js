"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var teclado = require("prompt-sync")();
var grauscelsius = parseInt(teclado("Digite a temperatura em graus celsius"));
var Fahrenheit = (grauscelsius) * (9 / 5) + 32;
console.log("A temperatura transformada em Fahrenheit possui o valor de ".concat(Fahrenheit));
