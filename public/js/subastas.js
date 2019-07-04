//MODIFICAMOS EL HTML CON LA INFO DE LA BASE DE DATOS
var datos;
var htmlCarros = document.getElementById("listaVehiculos");
var baseDeDatos = firebase.database().ref('CLIENTES');

this.VerCarros();

//VEMOS TODOS LOS CARROS DE LA BASE DE DATOS Y CAMBIAMOS EL HTML
function VerCarros(){
    baseDeDatos.on('value', function(snapshot) {
        datos = snapshot.val();
        var arregloDatos = Object.values(datos);
        arregloDatos = arregloDatos.filter(pedido => pedido.datos.tipo == "Carro");
        htmlCarros.innerHTML = '';
        for(var i=0; i < arregloDatos.length; i++){
            htmlCarros.innerHTML += '<div class="row  text-center">'
            + '<div class="col-md-12">'
               +' <div class="card shadow">'
                   + '<div class="card-body">'
                        + ' <div class="row">'
                           + '<div class="col-md-3 text-center border-right">'
                            +    '<i class="fa fa-car fa-2x text-warning "></i></br>'
                            +    '<h4 class="text-uppercase pt-1  ">' +arregloDatos[i].datos.marca+' '+arregloDatos[i].datos.modelo +'</h4>'
                            +    '<kbd class="text-white mb-4" >05/06/2019 - 12:00</kbd>'
                            + '</div>'
                            + '<div class="col-md-6 border-right">'
                            +    '<h5 class="text-uppercase text-primary ">'+arregloDatos[i].datos.ciudad+'</h5>'
                            +    '<p>'+arregloDatos[i].datos.trim + ', '+arregloDatos[i].datos.año+', '+arregloDatos[i].datos.colorexterior+'</p>'
                           
                            +    '<button type="button" class="btn btn-outline-primary btn-sm" data-toggle="collapse" data-target="#demo'+i+'">Ver Mas Especificaciones</button>'
                            + '<div id="demo'+i+'" class="collapse">'
                            +    '<h2 class="title">Especificaciones</h2>'
                            +        '<div class="row" style="text-align: left;">'
                            +            '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">'
                            +                '<ul>'
                            +                    '<li>'
                            +                        '<span><i class="flaticon-sedan-car-front"></i></span>'
                            +                      ' <strong>Trim: </strong>'+arregloDatos[i].datos.trim
                            +                    '</li>'
                                                                                           
                            +                    '<li>'
                            +                        '<span><i class="flaticon-gasoline-pump"></i></span>'
                            +                        '<strong>Gasolina:</strong> Diesel/Gasolina'
                            +                    '</li>'
                            +                    '<li>'
                            +                        '<span><i class="flaticon-road-with-broken-line"></i></span>'
                            +                        '<strong>Transmision: </strong>'+arregloDatos[i].datos.transmision
                            +                    '</li>'
                            +                    '<li>'
                            +                       '<span><i class="flaticon-engine"></i></span>'
                            +                        '<strong>Año: </strong>'+arregloDatos[i].datos.año
                            +                    '</li>'
                                                                                             
                            +                '</ul>'
                            +            '</div>'
                            +       ' <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">'
                            +                '<ul>'
                            +                   '<li>'
                            +                      '<span><i class="flaticon-time"></i></span>'
                            +                      '<strong>Color Exterior: </strong>'+arregloDatos[i].datos.colorexterior
                                   +            '</li>'
                                   +            '<li>'
                            +                       '<span><i class="flaticon-transport"></i></span>'
                            +                       '<strong>Color Interior: </strong>'+arregloDatos[i].datos.colorinterior
                                   +            '</li>'
                            +                   '<li>'
                            +                        '<span><i class="flaticon-automatic-flash-symbol"></i></span>'
                            +                        '<strong>Color exterior 2: </strong>'+arregloDatos[i].datos.colorexterior2
                            +                    '</li>'
                                                         
                            +                    '<li>'
                            +                       '<span><i class="flaticon-settings"></i></span>'
                            +                        '<strong>Color interior 2: </strong>'+arregloDatos[i].datos.colorinterior2
                            +                    '</li>'
                                                                                            
                            +                '</ul>'
                            +            '</div>'
                            +        '</div>'
                            +    '</div>'
                            +    '<hr>'
                            + '</div>'
                            + '<div class="col-md-3">'
                            +    '<div class="form-group border border-warning">'
                            +        '<input type="text" id="valorPuja'+i+'" class="form-control" placeholder="Tu Valor De Venta">'
                            +   ' </div>'
                            +    '<h3>'+Number(arregloDatos[i].datos.precio).toLocaleString('es', {useGrouping:true})+'</h3>'
                            +    '<div class="sub-row">'
                            +        '<button type="button" class="btn btn-success" onclick="RevisarPuja('+"'"+arregloDatos[i].id+"'"+','+i+')"><i class="fa fa-check"></i> Aceptar</button>'
                            +    '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
        }
    
    });
}


//PASAMOS EL HTML A MOTOS Y FILTRAMOS LOS VEHICULOS
function VerMotos(){
    baseDeDatos.on('value', function(snapshot) {
        datos = snapshot.val();
        var arregloDatos = Object.values(datos);
        arregloDatos = arregloDatos.filter(pedido => pedido.datos.tipo == "Moto");
        htmlCarros.innerHTML = '';
        for(var i=0; i < arregloDatos.length; i++){
            htmlCarros.innerHTML += '<div class="row  text-center">'
            + '<div class="col-md-12">'
               +' <div class="card shadow">'
                   + '<div class="card-body">'
                        + ' <div class="row">'
                           + '<div class="col-md-3 text-center border-right">'
                            +    '<i class="fa fa-motorcycle fa-2x text-warning "></i></br>'
                            +    '<h4 class="text-uppercase pt-1  ">' +arregloDatos[i].datos.marca+' '+arregloDatos[i].datos.modelo +'</h4>'
                            +    '<kbd class="text-white mb-4" >05/06/2019 - 12:00</kbd>'
                            + '</div>'
                            + '<div class="col-md-6 border-right">'
                            +    '<h5 class="text-uppercase text-primary ">'+arregloDatos[i].datos.ciudad+ ', '+arregloDatos[i].datos.barrio+'</h5>'
                            +    '<p>'+arregloDatos[i].datos.trim + ', '+arregloDatos[i].datos.año+', '+arregloDatos[i].datos.colorexterior+'</p>'
                            +    '<button type="button" class="btn btn-outline-primary btn-sm" data-toggle="collapse" data-target="#demo'+i+'">Ver Mas Especificaciones</button>'
                            + '<div id="demo'+i+'" class="collapse">'
                            +    '<h2 class="title">Especificaciones</h2>'
                            +        '<div class="row" style="text-align: left;">'
                            +            '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">'
                            +                '<ul>'
                            +                    '<li>'
                            +                        '<span><i class="flaticon-sedan-car-front"></i></span>'
                            +                      ' <strong>Trim: </strong>'+arregloDatos[i].datos.trim
                            +                    '</li>'
                                                                                           
                            +                    '<li>'
                            +                        '<span><i class="flaticon-gasoline-pump"></i></span>'
                            +                        '<strong>Gasolina:</strong> Diesel/Gasolina'
                            +                    '</li>'
                            +                    '<li>'
                            +                        '<span><i class="flaticon-road-with-broken-line"></i></span>'
                            +                        '<strong>Transmision: </strong>'+arregloDatos[i].datos.transmision
                            +                    '</li>'
                            +                    '<li>'
                            +                       '<span><i class="flaticon-engine"></i></span>'
                            +                        '<strong>Año: </strong>'+arregloDatos[i].datos.año
                            +                    '</li>'
                                                                                             
                            +                '</ul>'
                            +            '</div>'
                            +       ' <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">'
                            +                '<ul>'
                            +                   '<li>'
                            +                      '<span><i class="flaticon-time"></i></span>'
                            +                      '<strong>Color Exterior: </strong>'+arregloDatos[i].datos.colorexterior
                                   +            '</li>'
                                   +            '<li>'
                            +                       '<span><i class="flaticon-transport"></i></span>'
                            +                       '<strong>Color Interior: </strong>'+arregloDatos[i].datos.colorinterior
                                   +            '</li>'
                            +                   '<li>'
                            +                        '<span><i class="flaticon-automatic-flash-symbol"></i></span>'
                            +                        '<strong>Color exterior 2: </strong>'+arregloDatos[i].datos.colorexterior2
                            +                    '</li>'
                                                         
                            +                    '<li>'
                            +                       '<span><i class="flaticon-settings"></i></span>'
                            +                        '<strong>Color interior 2: </strong>'+arregloDatos[i].datos.colorinterior2
                            +                    '</li>'
                                                                                            
                            +                '</ul>'
                            +            '</div>'
                            +        '</div>'
                            +    '</div>'
                            +    '<hr>'
                            + '</div>'
                            + '<div class="col-md-3">'
                            +    '<div class="form-group border border-warning">'
                            +        '<input type="text" id="valorPuja'+i+'" class="form-control" placeholder="Tu Valor De Venta">'
                            +   ' </div>'
                            +    '<h3>'+Number(arregloDatos[i].datos.precio).toLocaleString('es', {useGrouping:true})+'</h3>'
                            +    '<div class="sub-row">'
                            +        '<button type="button" class="btn btn-success" onclick="RevisarPuja('+"'"+arregloDatos[i].id+"'"+','+i+')"><i class="fa fa-check"></i> Aceptar</button>'
                            +    '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
        }
    
    });
}


//ACA REVISAMOS QUE LA PUJA SEA MAYOR Y LA ENVIAMOS A LA BASE DE DATOS
function RevisarPuja(key,i){
    var valorPuja = document.getElementById("valorPuja"+i).value;
    valorPuja = Number(valorPuja);
    var rutaDb = firebase.database().ref('CLIENTES').child(key);
    rutaDb.on('value', function(snapshot) {
        info = snapshot.val();
        var MaximaPuja = Number(info.datos.precio);
        if(valorPuja < MaximaPuja){
            EnviarValorPuja(key, valorPuja);
        }
    });  
}

function EnviarValorPuja(key, valorPuja){
    var rutaDb = firebase.database().ref('CLIENTES').child(key).child('datos');
    rutaDb.update({
        precio: valorPuja
    });
}

//MOVEMOS EL TAMAÑO DEL LOGO DEL NAV BAR Y OTRAS COSAS SI ESTAMOS EN MOVIL

var isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
   }
if(isMobile){
    var logoNavBar = document.getElementById("logoNavBar");
    logoNavBar.style.margin = '10px';
}
