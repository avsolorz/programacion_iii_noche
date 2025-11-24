abstract class MatriculaBase {
    private valor: number = 0;
    abstract procesar(): void;

    modificarValor(cantidad: number): void {
        this.valor = cantidad;
    }

    obtenerValor(): number {
        return this.valor;
    }
}

class MatriculaRegular extends MatriculaBase {
    procesar(): void {
        console.log("Procesando matrícula regular.");
    }
}

class MatriculaBecada extends MatriculaBase {
    procesar(): void {
        console.log("Procesando matrícula becada.");
    }
}

const matricula1 = new MatriculaRegular();
matricula1.modificarValor(150);
matricula1.procesar();
console.log("Valor Matrícula:", matricula1.obtenerValor());
