//TOMAMOS LOS DATOS DE LA BASE DE DATOS
var key = localStorage.getItem('KEY').toString();
console.log(key);
var datos;
var carro = document.getElementById("H1_7");
var año;
var modelo = document.getElementById("DIV_16");
var trim = document.getElementById("DIV_20");
var colorexterior = document.getElementById("DIV_31");
var colorinterior = document.getElementById("DIV_39");
var foto = document.getElementById("DIV_52");

var baseDeDatos = firebase.database().ref('CLIENTES/' + key + '/datos');
baseDeDatos.on('value', function(snapshot) {
    datos = snapshot.val();
    console.log(datos);
    carro.innerHTML = "Tu " + datos.marca + " " + datos.modelo + " " + datos.año;
    modelo.innerHTML = datos.modelo;
    trim.innerHTML = datos.trim;
    colorexterior.innerHTML = datos.colorexterior;
    colorinterior.innerHTML = datos.colorinterior;
    //foto.innerHTML = "<img src="+ datos.foto +"  id='IMG_53'>";
});

//MOVEMOS LA PARTE DE LA DERECHA SI ESTAMOS EN MOVIL

var isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
   }
if(isMobile){
    var divInstrucciones = document.getElementById("DIV_50");
    divInstrucciones.style.display = 'inline-table';

    var divEspecificaciones = document.getElementById("DIV_1");
    divEspecificaciones.style.marginTop = '50px';
}
