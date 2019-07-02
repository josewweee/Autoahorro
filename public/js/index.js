
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
    foto: ''
}; 

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

    var refUsers = firebase.database();
    
    var datos = this.datos;
    console.log(datos);
    refUsers.ref("CLIENTES").push({
        datos
    }).then((snap) => {
        var key = snap.key;
        var password = "000000";
        localStorage.setItem('KEY', key);

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


//MOVEMOS EL TAMAÑO DEL LOGO DEL NAV BAR SI ESTAMOS EN MOVIL

var isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
   }
if(isMobile){
    var logoNavBar = document.getElementById("logoNavBar");
    logoNavBar.style.margin = '10px';

    var a_logoNavBar = document.getElementById("hreflogoNavBar");
    a_logoNavBar.style.cssFloat = 'initial';
}


