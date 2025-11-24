class Aula {
    public nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    usarAula(): void {
        console.log(`El aula ${this.nombre} está siendo utilizada.`);
    }
}

class Laboratorio extends Aula {}

const labInformatica = new Laboratorio("Laboratorio de Informática");
labInformatica.usarAula();
