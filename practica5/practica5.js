var cantidadPerros = prompt("ingrese cantidad de perros que vas a pasear" , "cantidadPerros")
var cantidadGatos = prompt("ingrese cantidad de gatos que vas a pasear" , "cantidadGatos")
var cantidadMascotas = Number(cantidadPerros) + Number(cantidadGatos) 

if (cantidadMascotas <= 3 ){
    document.write(`
    <p style = "white-space: pre";>
    Tenés para pasear:
    Perros: ${cantidadPerros}
    Gatos: ${cantidadGatos}

    `)

}

