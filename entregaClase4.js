let precioBruto = prompt("Cuál es el monto a pagar?")


function precioBase(primerTotal){
let precioBrutoCalc;
while(isNaN(primerTotal)){
    primerTotal = prompt("Debe ingresar un precio");
    }
if(primerTotal){
    pago = true
}else{    
    pago =false}
if(pago){
    cuotas = prompt("¿Desea pagar en cuotas?")   
}while(cuotas != "Sí" && cuotas != "No"){
    cuotas = prompt("ingrese una opción válida")}
if(cuotas == "Sí"){
    operacion = true
    if(operacion){
        cuotasOperacion = prompt("¿Cuántas cuotas? (Máximo 24)")
        }while(isNaN(cuotasOperacion)){
            cuotasOperacion = prompt("Ingrese una cuota válida (Máximo 24)")
            }
            while(cuotasOperacion>24){
                cuotasOperacion = prompt("Ingrese una cuota válida (Máximo 24)")
                }
        if(cuotasOperacion <=24){
            finalCuotas = true
        }else{
            finalCuotas = false
        }
        if(finalCuotas)
            document.write(Text= "Tu cuenta será de " + cuotasOperacion + " cuotas de " + primerTotal/cuotasOperacion + " soles cada una ");
}else{
    document.write("Tu cuenta es de " + primerTotal)
    operacion = false
}

return precioBrutoCalc;
}

let precioBruto2 = precioBase(precioBruto)

/*Objeto cliente*/


class Cliente{
    constructor(nom, dni, tarjeta) {
        (this.nom = nom),
        (this.dni = dni),
        (this.tarjeta = tarjeta)
    }


}
let nomP = prompt("Inserte su nombre:")
let dniP = prompt("Inserte su DNI");
while(isNaN(dniP)){
    dniP = prompt("Ingrese un DNI válido")
    }
    while(dniP>99999999){
        dniP = prompt("Ingrese un DNI válido")
        } 
let tarjeta = prompt("Inserte el número de su tarjeta")
while(isNaN(tarjeta)){
    dniP = prompt("Ingrese una tarjeta de crédito válida")
    }

const usuario = new Cliente(nomP, dniP, tarjeta)

console.log (usuario);

for (let atributos in usuario){
    console.log(usuario[atributos]);
}

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