function saludarEstudiante(): string {
    return "¡Bienvenido a la Academia!";
}
console.log(saludarEstudiante());

function obtenerNumeroCursos(): number {
    return 5 + 3;
}
console.log("Cursos disponibles: " + obtenerNumeroCursos());

function calcularPromedio(nota1: number, nota2: number): number {
    return nota1 + nota2;
}
console.log("La suma de las notas 10 y 15 es: " + calcularPromedio(10, 15));

function promedioFinal(notaBase: number, recuperacion?: number): number {
    return notaBase + (recuperacion ? recuperacion : 15);
}
console.log("Promedio final (sin recuperación):", promedioFinal(9));
console.log("Promedio final (con recuperación):", promedioFinal(25, 14));

const calcularMatricula = (valorCurso: number, descuento?: number): number => {
    return valorCurso - (descuento || 20);
}
console.log("Matrícula con descuento por defecto:", calcularMatricula(300));
console.log("Matrícula con descuento aplicado:", calcularMatricula(500, 40));

function mostrarAviso(mensaje: string): void {
    console.log("AVISO DEL SISTEMA: " + mensaje);
}
mostrarAviso("La inscripción al curso ya está disponible.");
