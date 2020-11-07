var arreglo = new Array();
var n=0;


function runScript(e) {
    //Comprueba si apreta enter//
    if (e.keyCode == 13) {
        //alert("apretaste enter");
        document.getElementById("boton").click();
        //return false;
    }
}


//FUNCION AGREGAR FILA//
function add (){
  var dato = document.getElementById("tarea").value;

  //compruebo que el input no este vacio//
  if (dato!=""){
    arreglo.push(dato);
    document.getElementById("tarea").value="";
    document.getElementById("tarea").focus();
    dibujarTabla(dato);
  }
  else {
    alert("Por favor ingrese como minimo 1 letra!");
    document.getElementById("tarea").focus();
  }
  
}


//FUNCION ELIMINAR FILA//
function eliminarFila(t,p){
  arreglo.splice( p ,1);
  //alert(t.value);
  var td = t.parentNode;
  var tr = td.parentNode;
  var table = tr.parentNode;
  table.removeChild(tr);
}


//FUNCION DE TAREA COMPLETADA//
function estaCheckeado(valor){
  var checkeado = document.getElementById("check"+valor.value).checked;
  //alert (checkeado);

  var texto = document.getElementById('completed'+valor.value);
  var texto2 = document.getElementById('dato'+valor.value);

  //compruebo si esta checkeada la tarea//
  if (checkeado){
    
    texto.innerHTML= "Completado ";
    texto.style.textDecoration = 'line-through';
    texto2.style.textDecoration = 'line-through';
  }

  else {
    texto.innerHTML= "";
    texto2.style.textDecoration = 'none';
  }
}


//FUNCION PARA INSERTAR EN LA TABLA LA TAREA//
function dibujarTabla(dato){
  document.getElementById("tabla").insertRow(0).innerHTML = "<td><input type='checkbox' value='"+n+"' id='check"+n+"' onclick='estaCheckeado(this)' class='checkk'></td><td><span id='completed"+n+"'></span><span id='dato"+n+"'>"+dato+"</span></td><td> <button onclick='eliminarFila(this,"+n+")' value="+n+" class='eliminar'><img src='img/trash.png' alt='x' class='icon' /></button></td>";
  n=n+1;
}