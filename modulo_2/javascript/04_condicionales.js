console.log("CONDICIONALES");
console.log("CONDICIONAL IF");
let temperatura=45;
if (temperatura>30){
    console.log("Hace calor");
}

console.log("CONDICIONAL IF ELSE");
const password="password123";
if(password=="password123"){
    console.log("Usuario Logueado")
}else{
    console.log("Usuario No Autorizado")
}


console.log("CONDICIONAL ANIDADOS");
const edad=19;
const tieneLicencia=true;
if (edad>18){
    if(tieneLicencia==true){
        console.log("Puede Conducir");
    }else{
        console.log("Necesita Licencia");
    }
}else{
    console.log("Es menor de edad");
}

console.log("CONDICIONAL SWITCH");
const dia = "Lunes";
switch(dia){
    case "Lunes":
    case "Martes":
    case "Miercoles":
    case "Jueves":
    case "Viernes":
        console.log("Dia laboral");
        break;
    case "Sabado":
    case "Domingo":
        console.log("Dia no laboral");
        break;
    default:
        console.log("Dia no valido");
}