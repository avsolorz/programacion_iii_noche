abstract class PersonalAcademico {
    abstract trabajar(): void;

    ingresar(): void {
        console.log("El personal ha ingresado a la institución.");
    }
}

class Docente extends PersonalAcademico {
    trabajar(): void {
        console.log("El docente está impartiendo su clase.");
    }
}

const profesor = new Docente();
profesor.trabajar();
profesor.ingresar();
