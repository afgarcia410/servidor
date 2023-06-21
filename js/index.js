//Ponerlo en otro lado
var boton=document.getElementById("button");
var numeros = [1,2,3,4,5,6,7,8,9,10];
var numeroElegido = Math.floor(Math.random() * numeros.length);
boton.addEventListener("click", ()=>{
    var input=document.getElementById("inputNumber");
    var valor = input.value;
    if(valor > 10 || valor <= 0){
        console.log("Inserte un número más grande o más pequeño");
    }else{
        if(numeroElegido<valor){
        console.log("Más pequeño.");
        } else if(numeroElegido>valor){
        console.log("Más grande.");
        } else {
            console.log("Has acertado.");
            console.log(numeroElegido);
        }
    }
});
async function logJSONData() {
    const response = await fetch("http://localhost:3001/");
    //console.log(response.json());
    const jsonData = await response.json();
    console.log(jsonData);
}
logJSONData();