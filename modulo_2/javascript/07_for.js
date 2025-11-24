console.log("CICLOS O BUCLES");
console.log("FOR OF");
const nombres=["José", "Juan", "Pedro", "Simon"];
for (const nombre of nombres){
    console.log("Holiii", nombre);
}


const nombre ="Francisco";
for (const letra of nombre){
    console.log("letraaa: ", letra);
}

numeros = [3,8,9,5,1];
mayor= 0 ;
for (const numero of numeros){
    if (numero>mayor) mayor=numero;
}
console.log("el mayor es: ", mayor);

const persona = {
    nombre: "Anakin",
    apellido: "Skywalker",
    profesion: "Jedi"
}
for (const clave in persona){
    console.log("clave", clave, ": ", persona[clave]);
}


const libro = {
    titulo: "It",
    autor: "Stephen King",
    categoria: "Terror"
}
suma_claves = 0;
for (const clave in libro){
    suma_claves++;
}
console.log(suma_claves);