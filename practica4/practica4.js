var verduras = prompt("¿tenés verduras?","si-no")
var polloCarne= prompt("¿tenés pollo o carne?", "pollo-carne")
var agua= prompt("¿tenés agua?","si-no")
var condimentos = prompt("¿tenés condimentos?","si-no")


if (verduras== "si" && agua== "si" && condimentos== "si"){
document.write(`
    <p style = "white-space: pre";>    
        Ingredientes de tu sopa: 
        Verduras:${verduras}
        Pollo o carne: ${polloCarne}
        condimentos:${condimentos}
 
    </p>
`)
}
else if (verduras== "si" && agua== "si" && condimentos== "no"){
    var cuboCaldo = prompt("¿tenés un cubo de caldo?","si-no")
    if (verduras=="si" && agua=="si" && cuboCaldo=="si"){
        document.write(`
         <p style = "white-space: pre";>    
            Ingredientes de tu sopa: 
            Verduras:${verduras}
            Pollo o carne: ${polloCarne}
            Condimentos:${condimentos}
            Cubo de caldo: ${cuboCaldo}
     
        </p>
        `)}
        
        
    }
else{
    document.write(`
         <p style = "white-space: pre";>    
          No hay ingredientes suficientes para la sopa
        </p>`)
}