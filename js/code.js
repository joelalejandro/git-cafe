var inputNombreCo = document.getElementById("nombreCo");
var selectRubro = document.getElementById("rubro");
var imputDomicilio = document.getElementById("domicilio");
var imputInicioAc = document.getElementById("inicio-act");
var alertaMensaje =document.getElementById("mensaje")
var cantidadComercio = "";
var mostrarResul = document.getElementById("resultado")
var comercioGastron =  "";
var promedioAnosInc = "";


var ingresos=[];

function Ingreso(nombre, rubro, domicilio, inicioAc){
  this.nombre = nombre;
  this.rubro = rubro;
  this.domicilio = domicilio;
  this.inicioAc = parseInt(inicioAc);
}

function agregarNegocio(){
  var nombre = inputNombreCo.value;
  var rubro = selectRubro.value;
  var domicilio = imputDomicilio.value;
  var inicioAc = imputInicioAc.value;

  var ingreso = new Ingreso(nombre, rubro, domicilio, inicioAc)

  ingresos.push(ingreso);

  inputNombreCo.value = "";
  selectRubro.value = "";
  imputDomicilio.value ="";
  imputInicioAc.value = "";

  //validaciones---------------
  alertaMensaje.innerText=""; 
  alertaMensaje.style.visibility = "hidden";
  var mensaje = "";

  if(nombre ==""){
     mensaje = mensaje + "Ingresar nombre.\n";
    }
  if(domicilio==""){
    mensaje = mensaje + "Ingresar Domicilio.\n";
  }
  if(rubro=="0"){
    mensaje = mensaje + "seleccione un Rubro.\n"
  }
  if(inicioAc==""){
    mensaje = mensaje + "Ingresar Fecha de Inicio De Actividades.\n";
  }
  if(mensaje != "") {
    alertaMensaje.innerText=mensaje; 
    alertaMensaje.style.visibility = "visible";
    return false;
  }
//cantidad de comercios ingresados 
  cantidadComercio ++; 
//cantidad de comercios gastronomicos

  if(rubro =="gastronomia"){
    comercioGastron ++;
  }
//promedio de años de inicio de actividades 
 
  var sumaanios = 0 ;

  for(i = 0; i<=ingresos.length; i++){
    sumaanios=sumaanios + ingresos[i].inicioAc;
  }
  promedioAnosInc= sumaanios / ingresos.length; 

  ingresos.push(ingreso);

  inputNombreCo.value = "";
  selectRubro.value = "";
  imputDomicilio.value ="";
  imputInicioAc.value = "";
}

function mostrarNegocio(){
  

  mostrarResul.innerText = "";
  mostrarResul.visibility="hidden";
  var codigoHtml =  "<table><tr><th>Comercio gastronomico</th><th>Promedio Año Inc</th><th>Cantidad de Comercios</th><th>Comercio mas Antiguo</th></tr>";;
  ingresos.forEach(function(ingreso) {
    codigoHtml += "<tr><td>" + comercioGastron+ "</td><td>" + promedioAnosInc + "</td><td>"+ cantidadComercio 
    + "</td><td>" +   + "</td></tr></table>";
  });
    mostrarResul.innerHTML = codigoHtml;

}




