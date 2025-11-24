class UsuarioAcademia {
    private password: string = "academia123";
    public username: string;

    constructor(username: string) {
        this.username = username;
    }

    autenticar(password: string): boolean {
        return password === this.password;
    }
}

const usuario = new UsuarioAcademia("victoria.s");
const login = usuario.autenticar("academia123");

if (login) {
    console.log("Usuario", usuario.username, "autenticado correctamente.");
} else {
    console.log("Error de autenticación");
}
