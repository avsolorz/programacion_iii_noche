console.log("CONDICIONALES - SISTEMA ACADEM-IA");

console.log("CONDICIONAL IF");

let temperaturaAula = 45;

if (temperaturaAula > 30) {
    console.log("⚠ Alerta: El aula está muy caliente. Activar ventilación.");
}


console.log("CONDICIONAL IF ELSE");

const claveIngreso = "academia2025";

if (claveIngreso == "academia2025") {
    console.log("✔ Acceso autorizado: Bienvenido al portal de Academ-IA.");
} else {
    console.log("✖ Acceso denegado: Credenciales incorrectas.");
}


console.log("CONDICIONALES ANIDADOS");

const edadEstudiante = 19;
const tieneRequisitos = true;

if (edadEstudiante > 18) {
    if (tieneRequisitos == true) {
        console.log("✔ Puede inscribirse en el Curso Avanzado.");
    } else {
        console.log("⚠ No cumple con los requisitos del curso.");
    }
} else {
    console.log("✖ Debe tener al menos 18 años para este curso.");
}


console.log("CONDICIONAL SWITCH");

const diaSemana = "Lunes";

switch (diaSemana) {
    case "Lunes":
    case "Martes":
    case "Miércoles":
    case "Jueves":
    case "Viernes":
        console.log("📚 Hoy hay clases en el Instituto Academ-IA.");
        break;
    case "Sábado":
    case "Domingo":
        console.log("😄 Día de descanso. No hay actividades académicas.");
        break;
    default:
        console.log("❓ Día no válido.");
}
