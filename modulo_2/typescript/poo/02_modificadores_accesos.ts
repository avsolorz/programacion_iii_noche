class Libro{
    public titulo: string;
    private autor: string;
    protected cota: '1234567'
    constructor(titulo: string, autor: number){
        this.titulo = titulo;
        this.autor = autor;
    }
    getAutor(): string{
        return this.autor;
    
    }
    getCota(): String {
        return this.cota;
    }
    
}

const LibroHistoriaQuito = new Libro('Historia de Quito', 'Pedro Perez');
console.log('Titulo', LibroHistoriaQuito.titulo);
console.log('Autor', LibroHistoriaQuito.getAutor());
console.log('Cota', LibroHistoriaQuito.getCota());