var mapa = document.getElementById("mapa")

    function getLocation() {
        if(navigator.geolocation) {
                
            navigator.geolocation.getCurrentPosition(muestraPosicion);

        }
        else {
            mapa.innerHTML = "EL DISPOSITIVO NO PUEDE LOCALIZARSE :("
        }
    }

    function muestraPosicion(posicion) {

        mapa.innerHTML = "LATITUD: " + posicion.coords.latitude + "<br>" + "LONGITUD: " + posicion.coords.longitude ; 
            

    }