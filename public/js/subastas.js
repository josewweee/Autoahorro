//MODIFICAMOS EL HTML CON LA INFO DE LA BASE DE DATOS
var datos;
var htmlCarros = document.getElementById("listaVehiculos");
var baseDeDatos = firebase.database().ref('CLIENTES');

baseDeDatos.on('value', function(snapshot) {
    datos = snapshot.val();
    var arregloDatos = Object.values(datos);
    console.log(arregloDatos);

    for(var i=0; i < arregloDatos.length; i++){
        console.log(arregloDatos[i].datos);
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
                        +    '<h5 class="text-uppercase text-primary ">'+arregloDatos[i].datos.ciudad+ ', El Poblado</h5>'
                        +    '<p>'+arregloDatos[i].datos.trim + ', '+arregloDatos[i].datos.año+', '+arregloDatos[i].datos.colorexterior+'</p>'
                        +    '<hr>'
                        +    '<button type="button" class="btn btn-outline-primary btn-sm">Ver Mas Especificaciones</button>'
                        + '</div>'
                        + '<div class="col-md-3">'
                        +    '<div class="form-group border border-warning">'
                        +        '<input type="text" class="form-control" placeholder="Tu Valor De Venta">'
                        +   ' </div>'
                        +    '<small>40.000,000</small>'
                        +    '<div class="sub-row">'
                        +        '<button type="button" class="btn btn-success"data-toggle="modal" data-target="#toploginModal"><i class="fa fa-plus"></i> Aceptar</button>'
                        +    '</div>'
                + '</div>'
                + '</div>'
                + '</div>'
                + '</div>'
                + '</div>'
                + '</div>';
    }

});


