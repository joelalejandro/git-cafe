var inputNombreCo = document.getElementById("nombreCo");
var selectRubro = document.getElementById("rubro");
var imputTelefono = document.getElementById("telefono");
var imputInicioAc = document.getElementById("inicio-act");
var alertaMensaje =document.getElementById("mensajes")
var cantidadComercio = "";
var mostrarResul = document.getElementById("resultado")
var comercioGastron =  "";
var promedioAnosInc = "";


var ingresos=[];

function Ingreso(nombre, rubro, telefono, inicioAc){
  this.nombre = nombre;
  this.rubro = rubro;
  this.telefono = telefono;
  this.inicioAc = parseInt(inicioAc);
}

function agregarNegocio(){
  var nombre = inputNombreCo.value;
  var rubro = selectRubro.value;
  var telefono = imputTelefono.value;
  var inicioAc = imputInicioAc.value;

  var ingreso = new Ingreso(nombre, rubro, telefono, inicioAc)

  ingresos.push(ingreso);

  inputNombreCo.value = "";
  selectRubro.value = "";
  imputTelefono.value ="";
  imputInicioAc.value = "";

  //validaciones---------------
  alertaMensaje.innerText=""; 
  alertaMensaje.style.visibility = "hidden";
  

  if(nombre ==""||telefono==""||rubro=="0"||inicioAc==""){
     var mensaje ="*Ingresar todos los campos";
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




