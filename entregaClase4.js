
/*Array de Helados*/

const helados = []


function myFunction() {
    helados.push("Vainilla");
  document.getElementById("demo").innerHTML = helados;
}

function myFunction1() {
    helados.push("Pistaccio");
    document.getElementById("demo").innerHTML = helados;
  }

  function myFunction2() {
    helados.push("Luccia");
    document.getElementById("demo").innerHTML = helados;
  }

  function myFunction3() {
    helados.push("Cheesecake");
    document.getElementById("demo").innerHTML = helados;
  }

  function myFunction4() {
    helados.push("Chocolate");
    document.getElementById("demo").innerHTML = helados;
  }
  function myFunction5() {
    helados.push("Frutos del Bosque");
    document.getElementById("demo").innerHTML = helados;
  }
  function myFunction6() {
    helados.push("Oreo");
    document.getElementById("demo").innerHTML = helados;
  }

  function myFunction7() {
    helados.push("Queso helado");
    document.getElementById("demo").innerHTML = helados;
  }

  function myFunction8() {
    helados.push("Cielo Azúl");
    document.getElementById("demo").innerHTML = helados;
  }

  function myFunction9() {
    helados.push("Cookie Monster");
    document.getElementById("demo").innerHTML = helados;
  }

  function myFunction10() {
    helados.push("Lúcuma");
    document.getElementById("demo").innerHTML = helados;
  }

  function myFunction11() {
    helados.push("Fresa");
    document.getElementById("demo").innerHTML = helados;
  }

  function myFunction12() {
    helados.push("Mango");
    document.getElementById("demo").innerHTML = helados;
  }

  function myFunction13() {
    helados.push("Red Velvet");
    document.getElementById("demo").innerHTML = helados;
  }

  function myFunction14() {
    helados.push("Morocha");
    document.getElementById("demo").innerHTML = helados;
  }

  function myFunction15() {
    helados.push("Castaña");
    document.getElementById("demo").innerHTML = helados;
  }
  console.log(helados)

  let precioProductos = (helados.length*35)
  console.log(precioProductos)

  /*Array Snacks*/

  const snacks = []


function ByFunction() {
    snacks.push("Galleta");
  document.getElementById("demon").innerHTML = snacks;
}

function ByFunction1() {
    snacks.push("Brownie");
    document.getElementById("demon").innerHTML = snacks;
  }

  function ByFunction2() {
    snacks.push("Alfajor");
    document.getElementById("demon").innerHTML = snacks;
  }

  function ByFunction3() {
    snacks.push("Brownie");
    document.getElementById("demon").innerHTML = snacks;
  }

  console.log(snacks)

  let precioProductos1 = (snacks.length*35)
  console.log(precioProductos1)

  /*Boton DOM*/

  function cambio1() {
    let cambiar = document.getElementsByClassName("pedidosStart");
    cambiar[0].style = "color:green"
    cambiar[0].innerText = "Nuevo Pedido!"
  }

  function cambio2() {
    let cambiar2 = document.getElementById("demo")
    cambiar2.style.cssText = "color:brown ; font-size:2rem"
  }

  function cambio3() {
    let cambiar3 = document.getElementById("demon")
    cambiar3.style.cssText = "color:brown ; font-size:2rem"
  }

  /*Cambios al dom a través de un evento con fórmula*/
  let textInputElement = document.getElementById('textInput');
  textInputElement.addEventListener('keyup', function(){
      
    let valorH = textInputElement.value;
    while(isNaN(valorH)){
      valorH = prompt("Ingrese una cantidad")
      }while(valorH>30){
          valorH = prompt("No hacemos ventas mayores a 30 litros")
          }        
    console.log('Su nuevo total es de "' + valorH*35 + ' soles"');
    
  }
  );

const nerv = []
function calcVal() {
    nerv.push("Su nuevo total es de " + textInputElement.value*35 + " soles");
    document.getElementById("demure").innerHTML = nerv;
}

/*Integrando JSON con storage*/
function store(){ 
  let brand = document.getElementById('carBrand').value;
  let price = document.getElementById('carPrice').value;
  let key = document.getElementById('key').value;
  const car = {
      "Helado": brand,
      "Litros": price,
  }

  window.localStorage.setItem(key,JSON.stringify(car));  
 
}

function retrieveRecords(){
  let key = document.getElementById('retrieveKey').value; 
  console.log("retrive records");
  let records = window.localStorage.getItem(key); 
  let paragraph = document.createElement("p");
  let infor = document.createTextNode(records);
  paragraph.appendChild(infor);
  let element = document.getElementById("retrieve");
  element.appendChild(paragraph);
}
function removal(){
  var elem = document.getElementById("retrieve");
  elem.parentNode.removeChild(elem)();
  }

function clearStorage(){
  localStorage.clear()
  console.log("clear records");
}

window.onload =function(){
  document.getElementById("Form").onsubmit = store
  document.getElementById("clearButton").onclick = clearStorage
 
  document.getElementById("retrieveButton").onclick = retrieveRecords
}