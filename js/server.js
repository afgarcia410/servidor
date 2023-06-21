const express = require('express');
const bodyparser = require('body-parser');
const cors = require("cors");
require('dotenv').config()
var path = require('path');
const app = express();
app.use(bodyparser.json());
app.use(cors());

var boton=document.getElementById("button");
var numeros = [1,2,3,4,5,6,7,8,9,10];
var numeroElegido = Math.floor(Math.random() * numeros.length);
boton.addEventListener("click", ()=>{
    var input=document.getElementById("inputNumber");
    var valor = input.value;
    if(valor > 10 || valor < 0){
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

app.get('/', (req, res) => {
    //res.send('¡Servidor Node.js funcionando!');
    let a ={
      name: 'hola'
    }
     res.send(a);
     //res.sendStatus(a);
  });
//   app.get('/js/index.js', (req, res) => {
//     //res.send('¡Servidor Node.js funcionando!');
//     res.sendFile(path.join(__dirname, 'index.js'));
//   });
const PORT = process.env.PORT || 3001;
var server = app.listen(PORT, () => {
    console.log(`Server running on port 3001`)
})

