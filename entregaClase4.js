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
}else{
    alert("Tu cuenta es de " + primerTotal)
    operacion = false
}
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
    document.write(Text= "Tu cuenta será de " + cuotasOperacion + " cuotas de" + primerTotal/cuotasOperacion + " soles cada una");
return precioBrutoCalc;
}

let precioBruto2 = precioBase(precioBruto);