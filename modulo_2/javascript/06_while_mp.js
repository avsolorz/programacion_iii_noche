console.log("CICLOS O BUCLES - ACADEM-IA");

console.log("WHILE");

let estudiante = 1;
while (estudiante <= 3) {
    console.log("Estudiante registrado:", estudiante);
    estudiante++;
}

let notas = [3, 4, -2, 4, 5];
let indiceNota = 0;

while (notas[indiceNota] > 0) {
    console.log("Nota válida:", notas[indiceNota]);
    indiceNota++;
}

let id = 1;

while (id < 10) {
    if (id % 2 !== 0) {
        console.log("ID impar detectado:", id);
    }
    id++;
}

let registro = 5;

do {
    console.log("Iteración administrativa:", registro);
    registro++;
} while (registro < 5);

let contador = 1;
let sumaNotas = 0;

do {
    sumaNotas += contador;
    contador++;
} while (contador <= 5);

console.log("La suma total de calificaciones es:", sumaNotas);

let cuentaRegresiva = 10;

do {
    console.log("Tiempo restante:", cuentaRegresiva);
    cuentaRegresiva--;
} while (cuentaRegresiva >= 0);


let curso = 6;
let multiplicador = 1;

do {
    let resultado = curso * multiplicador;
    console.log(`${curso} x ${multiplicador} = ${resultado}`);
    multiplicador++;
} while (multiplicador <= 10);
