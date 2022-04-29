
var numero1 = prompt( "ingresa tu primer numero" , "escribe un numero")
var numero2 = prompt( "ingresa tu segundo numero" , "escribe un numero")
var numero3 = prompt( "ingresa tu tercer numero" , "escribe un numero")

if (numero1 == numero2 && numero1 == numero3){
    document.write(`
    <img src = "https://img.freepik.com/vector-gratis/ilustracion-horizontal-bolas-loteria-realista_1284-59691.jpg?w=1380&t=st=1651241818~exp=1651242418~hmac=2f8a30b40ca8460615e3ce5f582dde22045663912ff4503bf28abe18105972c6" alt = "imagenBingo"> 
     `)
 }
else if (numero1 == numero2 || numero1 == numero3){
     document.write(`
     <img src = "https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2022-03/pelota.jpg?itok=o9lmxZMS" alt = "imagenPelota">
     
     `)
    }
else if (numero1 == numero2 || numero2 == numero3){
     document.write(`
     <img src = "https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2022-03/pelota.jpg?itok=o9lmxZMS" alt = "imagenPelota">
     
     `)
    }   
 else {
     document.write(`
     <img src = "https://gastronomiaycia.republica.com/wp-content/uploads/2011/07/clasificacion_helados.jpg" alt = "imagenHelado">
     `)
 }
 


