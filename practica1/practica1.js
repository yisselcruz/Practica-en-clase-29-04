var usuarioIn = prompt("ingrese el ususario:" , "ingrese usuario");
var contrasenaIn = prompt("ingrese su contrasena" , "contrasena");
var usuario = "yissel";
var contrasena = 123456;

var imgsi = "https://inhispania.com/wp-content/uploads/2021/05/1-300x226.jpg"
var imgno = "https://previews.123rf.com/images/anatolymas/anatolymas1607/anatolymas160700007/62128577-peque%C3%B1a-persona-3d-que-se-coloca-en-actitud-triste-al-lado-de-la-palabra-no-3d-imagen-fondo-blanco-.jpg?fj=1"

if (usuarioIn == usuario && contrasenaIn == contrasena) { 
    document.write(`
        <img src = ${imgsi} alt= "imagen"> </img>
    `);
}
else {
    document.write(`
        <img src = ${imgno} alt= "gg"></img>
    `)
}
