//MOVEMOS EL TAMAÑO DEL LOGO DEL NAV BAR Y OTRAS COSAS SI ESTAMOS EN MOVIL

var isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
   }
if(isMobile){
    var logoNavBar = document.getElementById("logoNavBar");
    logoNavBar.style.margin = '10px';

    var a_logoNavBar = document.getElementById("hreflogoNavBar");
    a_logoNavBar.style.cssFloat = 'initial';

    var contenedorNavBar = document.getElementById("contenedorNavBar");
    contenedorNavBar.style.marginTop = '0px';
}

function IniciarSesion(){
    window.location.href= "subastas.html";
}
