console.log("VARIABLES");

var saludo1 = "¡Bienvenido al Instituto Academ-IA!";
var saludo2 = "Este mensaje proviene de una variable del sistema";
console.log(saludo1);

console.log(saludo1 + " - " + saludo2);
console.log(`${saludo1} ${saludo2} - Cursos disponibles: ${4 + 5}`);

let numeroEstudiantes = 24;
const capacidadAula = 45;
console.log("Número de estudiantes:", numeroEstudiantes, " | Capacidad del aula:", capacidadAula);

console.log("TIPOS DE DATOS");


var nombreDocente = "Profesora Andrea";
console.log("String:", typeof(nombreDocente));


var totalCursos = 12;
console.log("Tipo Numérico:", typeof(totalCursos));


var plataformaActiva = true;
console.log("Tipo Booleano:", typeof(plataformaActiva));


var moduloNuevo = undefined;
console.log("Tipo Indefinido:", typeof(moduloNuevo));

var aulaAsignada = null;
console.log("Tipo Nulo:", typeof(aulaAsignada));

var identificador = Symbol("ID_AcademIA");
console.log("Tipo Símbolo:", typeof(identificador));

var numeroMatricula = 202520250125n;
console.log("Tipo BigInt:", typeof(numeroMatricula));

const estudiante = {
    nombre: "María López",
    edad: 17,
    curso: "Programación Web"
};

console.log("Estudiante:", estudiante);
console.log("Edad del estudiante:", estudiante.edad);
console.log("Nombre del estudiante:", estudiante.nombre);
