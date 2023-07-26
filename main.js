alert("Bienvenido a Peliculas-On-Line")
let nombre = prompt("Ingrese nombre");

let apellido = prompt("Ingrese apellido");

let edad = prompt("Ingrese edad");


let DNI = prompt("Ingrese DNI");


const usuario = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    DNI: DNI
}

console.log(usuario.nombre);
console.log(usuario.apellido);
console.log(usuario.edad);
console.log(usuario.DNI);

const miArray = [nombre]

miArray.push('sea bienvenido');

console.log(miArray.length);
alert(miArray);

const Nombre = [nombre]
const Apellido = [apellido]
const Edad = [edad]
const Dni = [DNI]

const Usuario = Nombre.concat(Apellido,Edad,Dni);
console.log(Usuario);

let numero = prompt ("Ingresar telefono, para caso de emergencia");

if (numero == ""){
    alert("No se puede continuar");
}
else{
    alert(" Puede continuar");
}

 
var menu="Menu\n";
menu+="1. El Club de los 5: 4500$\n";
menu+="2. La Naranja Mecanica: 4000$\n";
menu+="3. The Warriors: 5000$\n";
menu+="4. Basketball Diaries: 3600$\n";
menu+="5. Sleepers: 3000$\n";
menu+="Ingrese una opcion\n\n";


var code=0;


 do{

    cod=parseInt(prompt(menu));

   switch(cod){
    

case 1: console.log("El Club de los 5<br>");
break;

case 2: console.log("La Naranja Mecanica<br>");
break;

case 3: console.log("The Warriors<br>");
break;

case 4: console.log("Basketball Diaries<br>");
break;

case 5: console.log("Sleepers<br>");
break;

default: alert("el codigo no existe!<br>");
}
   }while(cod!=cod);

let cantidad = prompt("Ingrese precio y se le mostrara sus variables en copias");
for(let i = 1; i <= 10; i++){
let resultado = cantidad*i;
alert(cantidad + "X" + i +" = " + resultado);
}
const peliculas = [
    {nombre: 'El Club de los 5'},

    {nombre: 'La Naranja Mecanica'},
    
    {nombre: 'The Warriors'},

    {nombre: 'Basketball Diaries'},
    
    {nombre: 'Sleepers'},
    
]

let verificar=prompt("Verifique su pelicula, ingrese el nombre de la misma de nuevo");
console.log ( peliculas.some ((el) => el.nombre == "El Club de los 5" ));
console.log ( peliculas.some ((el) => el.nombre == "La Naranja Mecanica" ));
console.log ( peliculas.some ((el) => el.nombre == "The Warriors" ));
console.log ( peliculas.some ((el) => el.nombre == "Basketball Diaries" ));
console.log ( peliculas.some ((el) => el.nombre == "Sleepers" ));










