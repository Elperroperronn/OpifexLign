function obtenerUsuarioSesion() {
    const usuarioGuardado = localStorage.getItem(STORAGE_USUARIO)
    if (!usuarioGuardado) {
        return null
    }
    return JSON.parse(usuarioGuardado)
}



function CargarCotizaciones(){
    const contenedor = document.querySelector(".Cotizaciones")
    for (const cotizacion of cotizaciones) {
      contenedor.innerHTML += `
    <div class="Cotizacion">

        <div class="InformacionImagen">
            <img src="${cotizacion.imagen}" alt="${cotizacion.titulo}">
        </div>

        <div class="InformacionCotizacion">

            <div class="InformacionParte1">

                <h3>${cotizacion.titulo}</h3>

                <div class="ContenedorFiltros">
                    <p class="Categoria">${cotizacion.categoria}</p>
                    <p class="Estilo">${cotizacion.estilo}</p>
                </div>

                <p class="Descripcion">
                    ${cotizacion.descripcion}
                </p>

            </div>

            <div class="InformacionParte2">

                <h3>$${cotizacion.precio.toLocaleString()}</h3>

<a href="registro.html?id=${cotizacion.idEbanista}">
    <button class="btnVerPerfil">
        Ver perfil
    </button>
</a>

                <button class="btnResponder" data-id="${cotizacion.idCotizacion}">
                    Responder
                </button>

            </div>

        </div>

    </div>
`;
    }
}







function AgregarPerfiles(){
  const contenedor = document.querySelector(".Ebanistas")
  for (const ebanista of usuarios) {
    console.log(ebanista);
    
    if (ebanista.tipoUsuario==="ebanista") {
      contenedor.innerHTML += `
    <div class="Ebanista">

        <div class="InformacionImagen">
            <img src="${ebanista.album[0].foto}" alt="${ebanista.nombre} ${ebanista.apellido}">
        </div>

        <div class="InformacionEbanista">

            <div class="InformacionParte1">

                <h3>${ebanista.nombre} ${ebanista.apellido}</h3>

                <p class="SobreMi">
                    ${ebanista.sobreMi}
                </p>

            </div>

            <div class="InformacionParte2">

<a href="registro.html?id=${ebanista.idUsuario}">
    <button class="btnVerPerfil">
        Ver perfil
    </button>
</a>

            </div>

        </div>

    </div>
`;
    }
  }
}



document.addEventListener("DOMContentLoaded", async () => {
await cargarDatos()
CargarCotizaciones()
AgregarPerfiles()

if (obtenerUsuarioSesion() != null) {
        // AQUÍ VA TU LÓGICA: El usuario está activo, déjamelo a mí
        

    document.getElementById("idRegistro").textContent = "Perfil"

        
    } else {

    console.log("Es nullo");
    
    }
})


function FiltrosAplicar(arregloFiltros){
const contenedor = document.querySelector(".Cotizaciones")
contenedor.innerHTML = ""


if (arregloFiltros.length === 0) {
        CargarCotizaciones()
        return;
    }


for (const cotizacion of cotizaciones) {
    
    if (arregloFiltros.includes(cotizacion.categoria) || arregloFiltros.includes(cotizacion.estilo)  ) {
      contenedor.innerHTML += `
    <div class="Cotizacion">

        <div class="InformacionImagen">
            <img src="${cotizacion.imagen}" alt="${cotizacion.titulo}">
        </div>

        <div class="InformacionCotizacion">

            <div class="InformacionParte1">

                <h3>${cotizacion.titulo}</h3>

                <div class="ContenedorFiltros">
                    <p class="Categoria">${cotizacion.categoria}</p>
                    <p class="Estilo">${cotizacion.estilo}</p>
                </div>

                <p class="Descripcion">
                    ${cotizacion.descripcion}
                </p>

            </div>

            <div class="InformacionParte2">

                <h3>$${cotizacion.precio.toLocaleString()}</h3>

                <button class="btnVerPerfil" data-id="${cotizacion.idEbanista}">
                    Ver perfil
                </button>

                <button class="btnResponder" data-id="${cotizacion.idCotizacion}">
                    Responder
                </button>

            </div>

        </div>

    </div>
`;
    }


      
    }





}





const checkboxes = document.querySelectorAll('.filtro-check');

function obtenerFiltrosActivos() {
    // 1. Convertimos a arreglo
    const filtrosActivos = Array.from(checkboxes)
        // 2. Filtramos: solo dejamos los que están marcados
        .filter(checkbox => checkbox.checked)
        // 3. Mapeamos: guardamos su ID (el nombre del filtro)
        .map(checkbox => checkbox.id);
    
    console.log(filtrosActivos); 
    // Ejemplo de salida si marcas Mesas y Moderno: ["Mesas", "Moderno"]
    
    return filtrosActivos;
}


const inputBuscador = document.getElementById('InputBuscar');
// 3. Escucha los cambios en cada checkbox para actualizar el arreglo en tiempo real
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Obtenemos la lista actualizada de IDs marcados (ej: ["Mesas", "Moderno"])
        const filtrosActuales = obtenerFiltrosActivos();
        
        // Ejecutamos tu función de filtrado pasándole el nuevo arreglo
        FiltrosAplicar(filtrosActuales);
        filtrarPorTexto(inputBuscador.value);
    });
});


function MostrarFiltros(){
  const seccionFiltros = document.querySelector('.Filtros');
  const boton = document.querySelector('.btnMostrar');
  seccionFiltros.classList.toggle('mostrar');

  if (boton.textContent == "Ocultar filtros") {
    boton.textContent = "Mostrar filtros"
  } else {
    boton.textContent = "Ocultar filtros"
  }
  

}

function MostrarCotizaciones() {


    document.querySelector(".Ebanistas").style.display = "none";
    document.querySelector(".Cotizaciones").style.display = "grid";

    
    document.querySelector(".OpcionEbanistas").classList.remove("OpcionActual");
    document.querySelector(".OpcionCotizaciones").classList.add("OpcionActual");
}

function MostrarEbanistas() {


    document.querySelector(".Cotizaciones").style.display = "none";
    document.querySelector(".Ebanistas").style.display = "grid";

    
    document.querySelector(".OpcionCotizaciones").classList.remove("OpcionActual");
    document.querySelector(".OpcionEbanistas").classList.add("OpcionActual");
}




function filtrarPorTexto(texto) {
    const textoBusqueda = texto.toLowerCase().trim();
    
    // Captura ambos tipos de tarjetas que puedan existir en el DOM
    const cotizaciones = document.querySelectorAll('.Cotizacion');
    const ebanistas = document.querySelectorAll('.Ebanista');

    // 1. SI EL BUSCADOR ESTÁ VACÍO: Muestra todas las tarjetas de ambos tipos
    if (textoBusqueda === "") {
        cotizaciones.forEach(tarjeta => tarjeta.style.display = 'flex');
        ebanistas.forEach(tarjeta => tarjeta.style.display = 'flex');
        return;
    }

    // 2. BUCLE PARA COTIZACIONES (Verifica su h3)
    cotizaciones.forEach((tarjeta) => {
        const titulo = tarjeta.querySelector('.InformacionParte1 h3').textContent.toLowerCase();
        if (titulo.includes(textoBusqueda)) {
            tarjeta.style.display = 'flex'; 
        } else {
            tarjeta.style.display = 'none'; 
        }
    });

    // 3. BUCLE PARA EBANISTAS (Verifica su h3)
    ebanistas.forEach((tarjeta) => {
        const titulo = tarjeta.querySelector('.InformacionParte1 h3').textContent.toLowerCase();
        if (titulo.includes(textoBusqueda)) {
            tarjeta.style.display = 'flex'; 
        } else {
            tarjeta.style.display = 'none'; 
        }
    });
}



inputBuscador.addEventListener('input', (e) => {
    filtrarPorTexto(e.target.value);
});

