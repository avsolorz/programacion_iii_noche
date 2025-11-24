class Estudiante {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentar(): void {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años. ¡Estudio en la Academia!`);
    }
}

const estudiantePedro = new Estudiante('Pedro Molina', 15);
console.log('Nombre:', estudiantePedro.nombre);
console.log('Edad:', estudiantePedro.edad);
estudiantePedro.presentar();
