console.log("OPERADORES ARITMÉTICOS EN JAVASCRIPT - INSTITUTO ACADEM-IA");

const notaParcial = 70;
const notaTarea = 5;

const sumaNotas = notaParcial + notaTarea;
console.log(`${notaParcial} + ${notaTarea} = ${sumaNotas}`);

const restaNotas = notaParcial - notaTarea;
console.log(`${notaParcial} - ${notaTarea} = ${restaNotas}`);

const multiplicacionNotas = notaParcial * notaTarea;
console.log(`${notaParcial} * ${notaTarea} = ${multiplicacionNotas}`);

const divisionNotas = notaParcial / notaTarea;
console.log(`${notaParcial} / ${notaTarea} = ${divisionNotas}`);

const moduloNotas = notaParcial % notaTarea;
console.log(`${notaParcial} % ${notaTarea} = ${moduloNotas}`);

const potenciaNotas = notaParcial ** notaTarea;
console.log(`${notaParcial} ** ${notaTarea} = ${potenciaNotas}`);


console.log("OPERADORES DE COMPARACIÓN - SISTEMA DE NOTAS");

const notaIngresada = "64"; 
const notaReal = 64;        

console.log(`Igualdad Débil: ${notaIngresada} == ${notaReal} = ${notaIngresada == notaReal}`);
console.log(`Igualdad Estricta: ${notaIngresada} === ${notaReal} = ${notaIngresada === notaReal}`);
console.log(`Desigualdad Débil: ${notaIngresada} != ${notaReal} = ${notaIngresada != notaReal}`);
console.log(`Desigualdad Estricta: ${notaIngresada} !== ${notaReal} = ${notaIngresada !== notaReal}`);
console.log(`Mayor que: ${notaIngresada} > ${notaReal} = ${notaIngresada > notaReal}`);
console.log(`Menor que: ${notaIngresada} < ${notaReal} = ${notaIngresada < notaReal}`);
console.log(`Mayor o Igual: ${notaIngresada} >= ${notaReal} = ${notaIngresada >= notaReal}`);
console.log(`Menor o Igual: ${notaIngresada} <= ${notaReal} = ${notaIngresada <= notaReal}`);


console.log("OPERADORES LÓGICOS - REGLAS DE APROBACIÓN");

const notaMinimaAprobacion = 64;
const notaMaxima = 100;

console.log(
    `AND (notaIngresada >= notaReal && notaIngresada <= notaMaxima) = ${
        notaIngresada >= notaReal && notaIngresada <= notaMaxima
    }`
);

console.log(
    `OR (notaIngresada == notaReal || notaIngresada <= notaMaxima) = ${
        notaIngresada == notaReal || notaIngresada <= notaMaxima
    }`
);

console.log(`! (notaIngresada == notaReal) = ${!(notaIngresada == notaReal)}`);

console.log(`${notaIngresada != notaReal && notaIngresada >= notaMinimaAprobacion}`);
console.log(`${notaIngresada > notaReal && notaIngresada === notaReal}`);
console.log(`${notaIngresada != notaReal || notaIngresada >= notaMinimaAprobacion}`);
console.log(`${notaIngresada > notaReal || notaIngresada !== notaReal}`);

console.log(`${!(notaIngresada != notaReal || notaIngresada >= notaMinimaAprobacion)}`);
