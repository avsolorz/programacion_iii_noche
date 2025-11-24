interface Estudiante {
    id: number;
    nombre: string;
    correo: string;
}

const estudiante1: Estudiante = {
    id: 1,
    nombre: "María López",
    correo: "maria.lopez@academia.edu"
};

console.log(estudiante1);
console.log("Nombre del estudiante:", estudiante1.nombre);

interface Curso {
    id: number;
    nombre: string;
    costo?: number; 
}

const curso1: Curso = {
    id: 1,
    nombre: "Introducción a Programación",
    costo: 120
};

const curso2: Curso = {
    id: 2,
    nombre: "Matemáticas Básicas"
};

console.log(curso1);
console.log(curso2);
