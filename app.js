let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados= []
let sorteosPosibles = [1]
let numMaximo= [10]

function generarNumeroSecreto(){
  let numeroGenerado= Math.floor (Math.random()*numMaximo)+1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  // si ya sorteamos todos los numeros
  if (listaNumerosSorteados.length==sorteosPosibles){
asignarTextoElemento ("p", "ya se sortearon todoso los numeros posibles")
  } else
  //si el numero generado esta en la lista

  if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();    
  } else {listaNumerosSorteados.push(numeroGenerado);
  return numeroGenerado;
}
}

function verificarIntento() {
  let numeroDeUsuario = parseInt (document.getElementById ("valorUsuario").value);
  
  if (numeroSecreto===numeroDeUsuario)
  {
    asignarTextoElemento ("p", `acertaste el número en  ${intentos} ${(intentos===1) ? "vez" : "veces"}`);
  document.getElementById ("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario>numeroSecreto) { asignarTextoElemento ("p",
  "el numero secreto es menor")
  } else {
    asignarTextoElemento ("p", "el numero secreto es mayor")
    }
    intentos++;
    limpiarCaja();
    console.log (numeroSecreto)
}

  return;
  
}

function limpiarCaja (){
  document.getElementById("valorUsuario").value= "";
}
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto; 
return;
}

function condicionesIniciales() {
asignarTextoElemento("h1", "juego de evan 2.0"); 
asignarTextoElemento("p", ` ahora escoge un numero del 1 al ${numMaximo} puedes jugar ${sorteosPosibles} ${(sorteosPosibles==1) ? "vez" : "veces"}  `);
numeroSecreto = generarNumeroSecreto();
intentos =1;
console.log(numeroSecreto)
  
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales ()
  document.querySelector("#reiniciar")
.setAttribute("disabled", "true");
}

condicionesIniciales();

