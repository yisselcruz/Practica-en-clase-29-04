var valorEth = 13.5400
var valorUsd = 39685.40
var cantidadBitcoin = prompt("¿Cuantos BTC querés cambiar?", "cantidad BTC")
var usdEth = prompt ("¿querés USD o ETH?" , "Escribir en mayusculas")
var totalEth = cantidadBitcoin * valorEth
var totalUsd = cantidadBitcoin * valorUsd

if (usdEth == "USD"){
    document.write (`

    <h4> El total en USD es: ${totalUsd} </h4>

`)}
else if(usdEth == "ETH"){
    document.write(`
    <h4> El total en ETH es: ${totalEth} </h4>
    
    `)
}
else{
    document.write(`
    <h4> Has escrito mal la divisa </h4>
    
    `)
}