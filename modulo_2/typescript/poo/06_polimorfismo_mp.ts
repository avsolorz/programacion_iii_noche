import { Aula } from "./05_herencia.ts";

class LaboratorioQuimica extends Aula {
    capacidadEstudiantes: number;

    setCapacidad(cap: number): void {
        this.capacidadEstudiantes = cap;
    }

    getCapacidad(): number {
        return this.capacidadEstudiantes;
    }
}

const labQuimica = new LaboratorioQuimica("Lab. Química");
labQuimica.setCapacidad(40);
console.log("Capacidad:", labQuimica.getCapacidad(), "estudiantes");
labQuimica.usarAula();
