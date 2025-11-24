console.log("CICLOS O BUCLES - ACADEM-IA");

console.log("FOR OF");

const estudiantes = ["María", "Carlos", "Lucía", "Javier"];

for (const estudiante of estudiantes) {
    console.log("Bienvenido/a al Instituto, ", estudiante);
}


const instituto = "AcademIA";

for (const letra of instituto) {
    console.log("Letra: ", letra);
}


let calificaciones = [85, 92, 78, 95, 88];
let mayorNota = 0;

for (const nota of calificaciones) {
    if (nota > mayorNota) mayorNota = nota;
}

console.log("La calificación más alta es:", mayorNota);


const estudianteInfo = {
    nombre: "Valeria",
    apellido: "Santos",
    curso: "Programación Web"
};

for (const clave in estudianteInfo) {
    console.log("Campo:", clave, " → ", estudianteInfo[clave]);
}

const libroBiblioteca = {
    titulo: "Introducción a JavaScript",
    autor: "Academ-IA Editorial",
    categoria: "Programación"
};

let totalCampos = 0;

for (const clave in libroBiblioteca) {
    totalCampos++;
}

console.log("Total de campos del libro:", totalCampos);
