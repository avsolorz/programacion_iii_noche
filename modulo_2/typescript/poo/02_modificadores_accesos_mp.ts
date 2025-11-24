class Curso {
    public titulo: string;
    private docente: string;
    protected codigo: string = 'CURS-001';

    constructor(titulo: string, docente: string) {
        this.titulo = titulo;
        this.docente = docente;
    }

    getDocente(): string {
        return this.docente;
    }

    getCodigo(): string {
        return this.codigo;
    }
}

const cursoProgramacion = new Curso("Programación Web", "Ing. Sandra Torres");
console.log("Título:", cursoProgramacion.titulo);
console.log("Docente:", cursoProgramacion.getDocente());
console.log("Código:", cursoProgramacion.getCodigo());
