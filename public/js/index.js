
//CAMBIO DE VENTANA DATOS VEHICULO A DATOS USUARIO

function OpenPersonalData(){
    var formDatosPersonales = document.getElementById("datosPersonales");
    var formVehiculo = document.getElementById("datosVehiculo");

    formVehiculo.style.display = 'none';
    formDatosPersonales.style.display = "block";
    this.DatosVehiculoBaseDatos();
}

//TOMAMOS LA INFO DEL CARRO ESCOGIDO
var datos = {
    tipo: '',
    marca: '',
    modelo: '',
    año: '',
    trim: '',
    transmision: '',
    colorexterior: '',
    colorexterior2: '',
    colorexterior: '',
    colorexterior2: '',
    ciudad: '',
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    foto: '',
    hora: '',
    precio: ''
}; 

var precio;
function DatosVehiculoBaseDatos(){
        var text = "";
        var tipo  = document.getElementById('tipo');
        text = tipo.options[tipo.selectedIndex].text;
        this.datos.tipo = text;
        text = "";

        var marca = document.getElementById('marca');
        text = marca.options[marca.selectedIndex].text;
        this.datos.marca = text;
        text = "";

        var modelo = document.getElementById('modelo');
        text = modelo.options[modelo.selectedIndex].text;
        this.datos.modelo = text;
        text = "";

        var año = document.getElementById('año');
        text = año.options[año.selectedIndex].text;
        this.datos.año = text;
        text = "";

        var trim = document.getElementById('trim');
        text = trim.options[trim.selectedIndex].text;
        this.datos.trim = text;
        text = "";

        var transmision = document.getElementById('transmision');
        text = transmision.options[transmision.selectedIndex].text;
        this.datos.transmision = text;
        text = "";

        this.datos.precio = this.precio;
        
        var colorexterior = document.getElementById('colorexterior');
        text = colorexterior.options[colorexterior.selectedIndex].text;
        this.datos.colorexterior = text;
        text = "";

        var colorexterior2 = document.getElementById('colorexterior2');
        text = colorexterior2.options[colorexterior2.selectedIndex].text;
        this.datos.colorexterior2 = text;
        text = "";

        var colorinterior = document.getElementById('colorinterior');
        text = colorinterior.options[colorinterior.selectedIndex].text;
        this.datos.colorinterior = text;
        text = "";

        var colorinterior2 = document.getElementById('colorinterior2');
        text = colorinterior2.options[colorinterior2.selectedIndex].text;
        this.datos.colorinterior2 = text;
        text = "";
        console.log(this.datos);
}

//TOMAMOS LA INFO DEL USUARIO Y ENVIAMOS A LA BASE DE DATOS

function DatosUsuarioBaseDatos(){
    var nombre = document.getElementById('nombre').value;
    this.datos.nombre = nombre;

    var correo = document.getElementById('correo').value;
    this.datos.correo = correo;

    var telefono = document.getElementById('telefono').value;
    this.datos.telefono = telefono;

    var ciudad = document.getElementById('ciudad').value;
    this.datos.ciudad = ciudad;

    this.datos.hora = Date(Date.now()).toString();

    var refUsers = firebase.database();
    
    var datos = this.datos;
    console.log(datos);
    refUsers.ref("CLIENTES").push({
        datos
    }).then((snap) => {
        var key = snap.key;
        var password = "000000";
        localStorage.setItem('KEY', key);
        refUsers.ref("CLIENTES").child(snap.key).update({"id": snap.key})

        /* firebaseAuth.createUserWithEmailAndPassword(correo, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode === 'auth/wrong-password') {
                alert('Contraseña equivocada.');
                return;
            } else {
                alert(errorMessage);
                return;
            }
        }); */
    }).then((snap) => {
        window.location.href= "confirmacion.html";
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
    
    var a_logoNavBar = document.getElementById("hreflogoNavBar");
    a_logoNavBar.style.cssFloat = 'initial';

    var textoTitulo = document.getElementById("textoTitulo");
    textoTitulo.style.margin = 'auto';

    var textoConcesionarios = document.getElementById("textoConcesionarios");
    textoConcesionarios.style.margin = 'auto';
    
    var contenedorNavBar = document.getElementById("contenedorNavBar");
    contenedorNavBar.style.marginTop = '0px';

}

// FILTRAMOS LA SELECCION DE VEHICULOS DEPENDIENDO DE SU CATEGORIA
var arregloVehiculos;
var arregloTemporal;
function filtrarTipos(tipo){
   switch (tipo.toString()) {
       case 'tipo':
            var selecHTML = document.getElementById(tipo);
            var opcionSeleccionada = selecHTML.options[selecHTML.selectedIndex].value;
            var refTipo = firebase.database().ref("VEHICULOS");
            var htmlMarca = document.getElementById('marca');
            var marcasNoRepetidas;
            if(opcionSeleccionada == 'carro'){
                refTipo.child('CARROS').on('value', function(snapshot){
                    this.arregloVehiculos = Object.values(snapshot.val());
                    //eliminamos los repetidos y los ponemos en 1 arreglo
                    htmlMarca.innerHTML = '<option value="">Marca</option>';
                    for(var i=0; i<this.arregloVehiculos.length;i++){
                        htmlMarca.innerHTML += '<option value="'+this.arregloVehiculos[i].marca+'">'+this.arregloVehiculos[i].marca+'</option>';
                    }
                });
            }else if (opcionSeleccionada == 'moto'){
                var htmlMarca = document.getElementById('marca');
                refTipo.child('MOTOS').on('value', function(snapshot){
                    this.arregloVehiculos = Object.values(snapshot.val());
                    //eliminamos los repetidos y los ponemos en 1 arreglo
                    htmlMarca.innerHTML = '<option value="">Marca</option>';
                    for(var i=0; i<this.arregloVehiculos.length;i++){
                        htmlMarca.innerHTML += '<option value="'+this.arregloVehiculos[i].marca+'">'+this.arregloVehiculos[i].marca+'</option>';
                    }
                });
            }
           break;
        case 'marca':
                var selecHTML = document.getElementById(tipo);
                var opcionSeleccionada = (selecHTML.options[selecHTML.selectedIndex].value).toString();
                var arregloMarca = this.arregloVehiculos.filter(objeto => objeto.marca == opcionSeleccionada);
                var htmlModelo = document.getElementById('modelo');
                htmlModelo.innerHTML = "<option>Modelo</option>";
                for(var i=0; i<arregloMarca.length;i++){
                    htmlModelo.innerHTML += '<option value="'+arregloMarca[i].modelo+'">'+arregloMarca[i].modelo+'</option>';
                }
            break;
        case 'modelo':
                var selecHTML = document.getElementById(tipo);
                var opcionSeleccionada = (selecHTML.options[selecHTML.selectedIndex].value).toString();
                var arregloModelos = this.arregloVehiculos.filter(objeto => objeto.modelo == opcionSeleccionada);
                var htmlAño = document.getElementById('año');
                htmlAño.innerHTML = "<option>Año</option>";
                for(var i=0; i<arregloModelos.length;i++){
                    htmlAño.innerHTML += '<option value="'+arregloModelos[i].año.toString()+'">'+arregloModelos[i].año.toString()+'</option>';
                }
                break;
        case 'año':
                var selecHTML = document.getElementById(tipo);
                var opcionSeleccionada = (selecHTML.options[selecHTML.selectedIndex].value).toString();
                var arregloAño = this.arregloVehiculos.filter(objeto => objeto.año == opcionSeleccionada);
                var htmlTrim = document.getElementById('trim');
                htmlTrim.innerHTML = "<option>Trim</option>";
                for(var i=0; i<arregloAño.length;i++){
                    htmlTrim.innerHTML += '<option value="'+arregloAño[i].trim.toString()+'">'+arregloAño[i].trim.toString()+'</option>';
                }
                break;
        case 'trim':
                var selecHTML = document.getElementById(tipo);
                var opcionSeleccionada = (selecHTML.options[selecHTML.selectedIndex].value).toString();
                var arregloTrim = this.arregloVehiculos.filter(objeto => objeto.trim == opcionSeleccionada);
                this.arregloTemporal = arregloTrim;
                var htmlTransmision = document.getElementById('transmision');
                htmlTransmision.innerHTML = "<option>Transmision</option>";
                for(var i=0; i<arregloTrim.length;i++){
                    var arregloTransmisiones = Object.values(arregloTrim[i].transmision);
                    for(var j=0;j<arregloTransmisiones.length;j++){
                        htmlTransmision.innerHTML += '<option value="'+arregloTransmisiones[j].transmision.toString()+'">'+arregloTransmisiones[j].transmision.toString()+'</option>';
                    }
                }
                break;
        case 'transmision':
                var selecHTML = document.getElementById(tipo);
                var opcionSeleccionada = (selecHTML.options[selecHTML.selectedIndex].value).toString();
                var arregloTrim = this.arregloTemporal;

                var htmlColorExterior = document.getElementById('colorexterior');
                htmlColorExterior.innerHTML = "<option>Color Exterior</option>";
                var htmlColorExterior2 = document.getElementById('colorexterior2');
                htmlColorExterior2.innerHTML = "<option>Color Exterior 2</option>";
                var htmlColorInterior = document.getElementById('colorinterior');
                htmlColorInterior.innerHTML = "<option>Color Interior</option>";
                var htmlColorInterior2 = document.getElementById('colorinterior2');
                htmlColorInterior2.innerHTML = "<option>Color Interior 2</option>";
                for(var i=0; i<arregloTrim.length;i++){
                    var arregloColores = Object.values(arregloTrim[i].colorexterior);

                    htmlColorInterior.innerHTML += '<option value="'+arregloTrim[i].colorinterior+'">'+arregloTrim[i].colorinterior+'</option>';
                    htmlColorInterior2.innerHTML += '<option value="'+arregloTrim[i].colorinterior+'">'+arregloTrim[i].colorinterior+'</option>';
                    for(var j=0;j<arregloColores.length;j++){
                        htmlColorExterior.innerHTML += '<option value="'+arregloColores[j].color+'">'+arregloColores[j].color+'</option>';
                        htmlColorExterior2.innerHTML += '<option value="'+arregloColores[j].color+'">'+arregloColores[j].color+'</option>';
                    }
                }
                this.precio = arregloTrim[0].precio;
                console.log(this.precio);
                break;   
       default:
           break;
   }
}


