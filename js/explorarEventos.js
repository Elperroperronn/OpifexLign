function obtenerUsuarioSesion() {
    const usuarioGuardado = localStorage.getItem(STORAGE_USUARIO)
    if (!usuarioGuardado) {
        return null
    }
    return JSON.parse(usuarioGuardado)
}

function mostrarError(input,elemenentoError, mensaje) {
    elemenentoError.textContent=mensaje
    input.classList.add("input-error")
    input.classList.remove("input-success")
}
function mostrarExito(input,elemenentoError) {
    elemenentoError.textContent=""
    input.classList.remove("input-error")
    input.classList.add("input-success")
}


function CargarCotizaciones(){

    const contenedor = document.querySelector(".Cotizaciones")
    contenedor.innerHTML = ""
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

            <div class="InformacionParte22">

<a href="registro.html?id=${ebanista.idUsuario}">
    <button class="btnVerPerfil">
        Ver perfil
    </button>
</a>

    <button class="btnHacerPropuesta" onclick="DirigirPropuesta(${ebanista.idUsuario})">
        Proponer
    </button>


            </div>

        </div>

    </div>
`;
    }
  }
}





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

function RevisarElementosVisibles(contenedorSelector, elementoSelector) {

    const contenedor = document.querySelector(contenedorSelector);
    const elementos = contenedor.querySelectorAll(elementoSelector);

    const hayVisible = [...elementos].some(elemento =>
        elemento.style.display !== "none"
    );

    let mensaje = contenedor.querySelector(".SinItems");

    if (!hayVisible) {
        if (!mensaje) {
            contenedor.innerHTML += `
                <section class="SinItems">
                    <h2>No hay items para mostrar</h2>
                </section>
            `;
        }
    } else {
        if (mensaje) {
            mensaje.remove();
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
        RevisarElementosVisibles(".Cotizaciones", ".Cotizacion");
        RevisarElementosVisibles(".Ebanistas", ".Ebanista");
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
    // Control de vistas (Secciones)
    document.querySelector(".Cotizaciones").style.display = "grid";
    document.querySelector(".Ebanistas").style.display = "none";
    document.querySelector(".Crear").style.display = "none";

    // Control de menú (Botones)
    document.querySelector(".OpcionCotizaciones").classList.add("OpcionActual");
    document.querySelector(".OpcionEbanistas").classList.remove("OpcionActual");
    document.querySelector(".OpcionCrear").classList.remove("OpcionActual");
}

function MostrarCotizaciones() {
    // Control de vistas (Secciones)
    document.querySelector(".Cotizaciones").style.display = "grid";
    document.querySelector(".Ebanistas").style.display = "none";
    document.querySelector(".Crear").style.display = "none";
    document.querySelector(".Hacer").style.display = "none";

    // Control de menú (Botones)
    document.querySelector(".OpcionCotizaciones").classList.add("OpcionActual");
    document.querySelector(".OpcionEbanistas").classList.remove("OpcionActual");
    document.querySelector(".OpcionCrear").classList.remove("OpcionActual");
    document.querySelector(".OpcionHacer").classList.remove("OpcionActual");
}

function MostrarEbanistas() {
    // Control de vistas (Secciones)
    document.querySelector(".Cotizaciones").style.display = "none";
    document.querySelector(".Ebanistas").style.display = "grid";
    document.querySelector(".Crear").style.display = "none";
    document.querySelector(".Hacer").style.display = "none";

    // Control de menú (Botones)
    document.querySelector(".OpcionCotizaciones").classList.remove("OpcionActual");
    document.querySelector(".OpcionEbanistas").classList.add("OpcionActual");
    document.querySelector(".OpcionCrear").classList.remove("OpcionActual");
    document.querySelector(".OpcionHacer").classList.remove("OpcionActual");
}

function MostrarCrear() {
    // Control de vistas (Secciones)
    document.querySelector(".Cotizaciones").style.display = "none";
    document.querySelector(".Ebanistas").style.display = "none";
    document.querySelector(".Crear").style.display = "grid";
    document.querySelector(".Hacer").style.display = "none";

    // Control de menú (Botones)
    document.querySelector(".OpcionCotizaciones").classList.remove("OpcionActual");
    document.querySelector(".OpcionEbanistas").classList.remove("OpcionActual");
    document.querySelector(".OpcionCrear").classList.add("OpcionActual");
    document.querySelector(".OpcionHacer").classList.remove("OpcionActual");
}

function MostrarHacer() {
    // Control de vistas (Secciones)
    document.querySelector(".Cotizaciones").style.display = "none";
    document.querySelector(".Ebanistas").style.display = "none";
    document.querySelector(".Crear").style.display = "none";
    document.querySelector(".Hacer").style.display = "grid";

    // Control de menú (Botones)
    document.querySelector(".OpcionCotizaciones").classList.remove("OpcionActual");
    document.querySelector(".OpcionEbanistas").classList.remove("OpcionActual");
    document.querySelector(".OpcionCrear").classList.remove("OpcionActual");
    document.querySelector(".OpcionHacer").classList.add("OpcionActual");
}

/* ==========================================================================
15. Referencias DOM - Crear Cotización
========================================================================== */

const errorTitulo = document.getElementById("errorTitulo");
const tituloCotizacionInput = document.getElementById("TituloCotizacion");

const errorCategoria = document.getElementById("errorCategoria");
const categoriaCotizacionInput = document.getElementById("CategoriaCotizacion");

const errorEstilo = document.getElementById("errorEstilo");
const estiloCotizacionInput = document.getElementById("EstiloCotizacion");

const errorPrecio = document.getElementById("errorPrecio");
const precioCotizacionInput = document.getElementById("PrecioCotizacion");

const errorImagen = document.getElementById("errorImagen");
const imagenCotizacionInput = document.getElementById("ImagenCotizacion");

const errorDescripcion = document.getElementById("errorDescripcion");
const descripcionCotizacionInput = document.getElementById("DescripcionCotizacion");

/* ==========================================================================
16. Validaciones - Crear Cotización
========================================================================== */

// Validar título
function validarTituloCotizacion() {

    const titulo = tituloCotizacionInput.value.trim();

    if (titulo === "") {
        mostrarError(tituloCotizacionInput, errorTitulo, "El título es obligatorio");
        return false;
    }

    mostrarExito(tituloCotizacionInput, errorTitulo);
    return true;
}

tituloCotizacionInput.addEventListener("input", validarTituloCotizacion);


// Validar categoría
function validarCategoriaCotizacion() {

    const categoria = categoriaCotizacionInput.value;

    if (categoria === "") {
        mostrarError(categoriaCotizacionInput, errorCategoria, "Seleccione una categoría");
        return false;
    }

    mostrarExito(categoriaCotizacionInput, errorCategoria);
    return true;
}

categoriaCotizacionInput.addEventListener("change", validarCategoriaCotizacion);


// Validar estilo
function validarEstiloCotizacion() {

    const estilo = estiloCotizacionInput.value;

    if (estilo === "") {
        mostrarError(estiloCotizacionInput, errorEstilo, "Seleccione un estilo");
        return false;
    }

    mostrarExito(estiloCotizacionInput, errorEstilo);
    return true;
}

estiloCotizacionInput.addEventListener("change", validarEstiloCotizacion);


// Validar precio
function validarPrecioCotizacion() {

    const precioValue = precioCotizacionInput.value.trim();

    if (precioValue === "") {
        mostrarError(precioCotizacionInput, errorPrecio, "El precio es obligatorio");
        return false;
    }

    const precio = Number(precioValue);

    if (precio < 0) {
        mostrarError(precioCotizacionInput, errorPrecio, "El precio no puede ser negativo");
        return false;
    }

    mostrarExito(precioCotizacionInput, errorPrecio);
    return true;
}

precioCotizacionInput.addEventListener("input", validarPrecioCotizacion);


document.getElementById("PrecioCotizacion").addEventListener("keydown", (e) => {

    const invalidChars = ['e', 'E', '+', '-', '.'];

    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }

});


// Validar imagen
function validarImagenCotizacion() {

    const imagen = imagenCotizacionInput.value.trim();

    if (imagen === "") {
        mostrarError(imagenCotizacionInput, errorImagen, "La ruta de la imagen es obligatoria");
        return false;
    }

    mostrarExito(imagenCotizacionInput, errorImagen);
    return true;
}

imagenCotizacionInput.addEventListener("input", validarImagenCotizacion);


// Validar descripción
function validarDescripcionCotizacion() {

    const descripcion = descripcionCotizacionInput.value.trim();

    if (descripcion === "") {
        mostrarError(descripcionCotizacionInput, errorDescripcion, "La descripción es obligatoria");
        return false;
    }

    mostrarExito(descripcionCotizacionInput, errorDescripcion);
    return true;
}

descripcionCotizacionInput.addEventListener("input", validarDescripcionCotizacion);



function PreviaCotizacion(){
    const contenedor = document.querySelector(".VistaPrevia")
    contenedor.innerHTML = `
<div class="Cotizacion">

    <div class="InformacionImagen">
        <img src="${imagenCotizacionInput.value.trim() !== "" ? imagenCotizacionInput.value.trim() : "https://static.vecteezy.com/system/resources/thumbnails/026/552/664/small/armchair-art-deco-style-in-yellow-isolated-on-transparent-background-front-view-series-of-furniture-ai-generated-png.png"}"
            alt="${tituloCotizacionInput.value.trim() !== "" ? tituloCotizacionInput.value.trim() : "Vista previa"}">
    </div>

    <div class="InformacionCotizacion">

        <div class="InformacionParte1">

            <h3>${tituloCotizacionInput.value.trim() !== "" ? tituloCotizacionInput.value.trim() : "Título de la cotización"}</h3>

            <div class="ContenedorFiltros">
                <p class="Categoria">${categoriaCotizacionInput.value !== "" ? categoriaCotizacionInput.value : "Categoría"}</p>
                <p class="Estilo">${estiloCotizacionInput.value !== "" ? estiloCotizacionInput.value : "Estilo"}</p>
            </div>

            <p class="Descripcion">
                ${descripcionCotizacionInput.value.trim() !== "" ? descripcionCotizacionInput.value.trim() : "Descripción de la cotización..."}
            </p>

        </div>

        <div class="InformacionParte2">

            <h3>₡${precioCotizacionInput.value.trim() !== "" ? Number(precioCotizacionInput.value).toLocaleString() : "0"}</h3>

            <button class="btnVerPerfil" disabled>
                Ver perfil
            </button>

            <button class="btnResponder" disabled>
                Responder
            </button>

        </div>

    </div>

</div>
`;
}


async function  CrearNuevaCotizacion(){
    const esTituloValido = validarTituloCotizacion();
const esCategoriaValida = validarCategoriaCotizacion();
const esEstiloValido = validarEstiloCotizacion();
const esPrecioValido = validarPrecioCotizacion();
const esImagenValida = validarImagenCotizacion();
const esDescripcionValida = validarDescripcionCotizacion();

if (
    !esTituloValido ||
    !esCategoriaValida ||
    !esEstiloValido ||
    !esPrecioValido ||
    !esImagenValida ||
    !esDescripcionValida
) {
    console.log("Error");
    return;
}

const cotizacionesSistema = obtenerCotizacionesAlmacenadas();
let nuevaCotizacion = {
    "idCotizacion": Math.floor(Math.random() * 100) + 10,
    "idEbanista": obtenerUsuarioSesion().idUsuario ,
    "titulo": tituloCotizacionInput.value.trim(),
    "categoria": categoriaCotizacionInput.value,
    "estilo": estiloCotizacionInput.value,
    "descripcion": descripcionCotizacionInput.value.trim(),
    "precio": precioCotizacionInput.value.trim(),
    "imagen": imagenCotizacionInput.value.trim()
}

cotizacionesSistema.push(nuevaCotizacion);

CargarCotizacionesBase(cotizacionesSistema);
await cargarDatos(); // Mantiene sincronizada la variable cotizaciones
CargarCotizaciones();

    console.log("Cotización creada correctamente.");

    tituloCotizacionInput.value = "";
categoriaCotizacionInput.selectedIndex = 0;
estiloCotizacionInput.selectedIndex = 0;
precioCotizacionInput.value = "";
imagenCotizacionInput.value = "";
descripcionCotizacionInput.value = "";

// Limpiar mensajes de éxito/error
errorTitulo.textContent = "";
errorCategoria.textContent = "";
errorEstilo.textContent = "";
errorPrecio.textContent = "";
errorImagen.textContent = "";
errorDescripcion.textContent = "";

tituloCotizacionInput.classList.remove("input-error", "input-exito");
categoriaCotizacionInput.classList.remove("input-error", "input-exito");
estiloCotizacionInput.classList.remove("input-error", "input-exito");
precioCotizacionInput.classList.remove("input-error", "input-exito");
imagenCotizacionInput.classList.remove("input-error", "input-exito");
descripcionCotizacionInput.classList.remove("input-error", "input-exito");

// Limpiar vista previa (opcional)
document.querySelector(".VistaPrevia").innerHTML = "";

Swal.fire({
    title: "¡Cotización creada!",
    text: "La cotización se registró correctamente.",
    icon: "success",
    confirmButtonText: "Aceptar",
    customClass: {
        popup: "miAlerta",
        title: "miTitulo",
        htmlContainer: "miTexto",
        confirmButton: "miBoton"
    }
});


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
    RevisarElementosVisibles(".Cotizaciones", ".Cotizacion");
RevisarElementosVisibles(".Ebanistas", ".Ebanista");
});


function BuscarUsuario(id){
    for (const element of usuarios) {
        if (element.idUsuario === id) {
            return element;
        }
    }
}



document.addEventListener("DOMContentLoaded", async () => {
await cargarDatos()
CargarCotizaciones()
AgregarPerfiles()

if (obtenerUsuarioSesion() != null) {

    document.getElementById("idRegistro").textContent = "Perfil";

    if (obtenerUsuarioSesion().tipoUsuario === "cliente") {

        document.querySelector(".OpcionCrear").style.display = "none";
        document.querySelector(".OpcionHacer").style.display = "";

        document.querySelectorAll(".btnHacerPropuesta").forEach(btn => {
            btn.style.display = "";
        });

        document.querySelectorAll(".btnResponder").forEach(btn => {
            btn.style.display = "";
        });

    } else {

        document.querySelector(".OpcionCrear").style.display = "";
        document.querySelector(".OpcionHacer").style.display = "none";

        document.querySelectorAll(".btnHacerPropuesta").forEach(btn => {
            btn.style.display = "none";
        });

        document.querySelectorAll(".btnResponder").forEach(btn => {
            btn.style.display = "none";
        });

    }

} else {

    document.querySelector(".OpcionCrear").style.display = "none";
    document.querySelector(".OpcionHacer").style.display = "none";

    document.querySelectorAll(".btnHacerPropuesta").forEach(btn => {
        btn.style.display = "none";
    });

    document.querySelectorAll(".btnResponder").forEach(btn => {
        btn.style.display = "none";
    });

}
})



/* ==========================================================================
1. Referencias - Crear Propuesta
========================================================================== */

const tipoMuebleInput = document.getElementById("TipoMueble");
const errorTipoMueble = document.getElementById("errorTipoMueble");

const descripcionMuebleInput = document.getElementById("DescripcionMueble");
const errorDescripcionMueble = document.getElementById("errorDescripcionMueble");

const altoMuebleInput = document.getElementById("AltoMueble");
const anchoMuebleInput = document.getElementById("AnchoMueble");
const profundidadMuebleInput = document.getElementById("ProfundidadMueble");
const errorMedidas = document.getElementById("errorMedidas");

const presupuestoInput = document.getElementById("Presupuesto");
const errorPresupuesto = document.getElementById("errorPresupuesto");

const fechaEntregaInput = document.getElementById("FechaEntrega");
const errorFechaEntrega = document.getElementById("errorFechaEntrega");

const telefonoSolicitudInput = document.getElementById("TelefonoSolicitud");
const errorTelefono = document.getElementById("errorTelefono");

const correoSolicitudInput = document.getElementById("CorreoSolicitud");
const errorCorreo = document.getElementById("errorCorreo");

const observacionesSolicitudInput = document.getElementById("ObservacionesSolicitud");
const errorObservaciones = document.getElementById("errorObservaciones");

/* ==========================================================================
2. Validaciones - Crear Propuesta
========================================================================== */

//------------------------------------------------
// Tipo de mueble
//------------------------------------------------

function validarTipoMueble(){

    if(tipoMuebleInput.value === ""){
        mostrarError(tipoMuebleInput,errorTipoMueble,"Seleccione un tipo de mueble");
        return false;
    }

    mostrarExito(tipoMuebleInput,errorTipoMueble);
    calcularPresupuestoAutomatico();
    return true;

}

tipoMuebleInput.addEventListener("change",validarTipoMueble);


//------------------------------------------------
// Descripción
//------------------------------------------------

function validarDescripcionMueble(){

    const descripcion = descripcionMuebleInput.value.trim();

    if(descripcion===""){
        mostrarError(descripcionMuebleInput,errorDescripcionMueble,"La descripción es obligatoria");
        return false;
    }

    mostrarExito(descripcionMuebleInput,errorDescripcionMueble);
    return true;

}

descripcionMuebleInput.addEventListener("input",validarDescripcionMueble);


//------------------------------------------------
// Medidas
//------------------------------------------------

function validarMedidas(){

    const alto = altoMuebleInput.value.trim();
    const ancho = anchoMuebleInput.value.trim();
    const profundidad = profundidadMuebleInput.value.trim();

    if(alto==="" || ancho==="" || profundidad===""){

        mostrarError(altoMuebleInput,errorMedidas,"Debe ingresar todas las dimensiones");
        mostrarError(anchoMuebleInput,errorMedidas,"Debe ingresar todas las dimensiones");
        mostrarError(profundidadMuebleInput,errorMedidas,"Debe ingresar todas las dimensiones");

        return false;
    }

    if(Number(alto)<=0 || Number(ancho)<=0 || Number(profundidad)<=0){

        mostrarError(altoMuebleInput,errorMedidas,"Las dimensiones deben ser mayores a 0");
        mostrarError(anchoMuebleInput,errorMedidas,"Las dimensiones deben ser mayores a 0");
        mostrarError(profundidadMuebleInput,errorMedidas,"Las dimensiones deben ser mayores a 0");

        return false;
    }

    mostrarExito(altoMuebleInput,errorMedidas);
    mostrarExito(anchoMuebleInput,errorMedidas);
    mostrarExito(profundidadMuebleInput,errorMedidas);
    calcularPresupuestoAutomatico();
    return true;
}

altoMuebleInput.addEventListener("input",validarMedidas);
anchoMuebleInput.addEventListener("input",validarMedidas);
profundidadMuebleInput.addEventListener("input",validarMedidas);


//------------------------------------------------
// Presupuesto
//------------------------------------------------

function validarPresupuesto(){

    const presupuesto = presupuestoInput.value.trim();

    if(presupuesto===""){
        mostrarError(presupuestoInput,errorPresupuesto,"Ingrese un presupuesto");
        return false;
    }

    if(Number(presupuesto)<=0){
        mostrarError(presupuestoInput,errorPresupuesto,"El presupuesto debe ser mayor a 0");
        return false;
    }

    mostrarExito(presupuestoInput,errorPresupuesto);
    return true;

}

presupuestoInput.addEventListener("input",validarPresupuesto);


//------------------------------------------------
// Fecha
//------------------------------------------------

function validarFechaEntrega(){

    const fecha = fechaEntregaInput.value;

    if(fecha===""){
        mostrarError(fechaEntregaInput,errorFechaEntrega,"Seleccione una fecha");
        return false;
    }

    const hoy = new Date();
    hoy.setHours(0,0,0,0);

    const fechaSeleccionada = new Date(fecha);

    if(fechaSeleccionada < hoy){
        mostrarError(fechaEntregaInput,errorFechaEntrega,"La fecha no puede ser anterior a hoy");
        return false;
    }

    mostrarExito(fechaEntregaInput,errorFechaEntrega);
    return true;

}

fechaEntregaInput.addEventListener("change",validarFechaEntrega);


//------------------------------------------------
// Teléfono
//------------------------------------------------

function validarTelefono(){

    const telefono = telefonoSolicitudInput.value.trim();

    const regex=/^[0-9]{8}$/;

    if(telefono===""){
        mostrarError(telefonoSolicitudInput,errorTelefono,"Ingrese un teléfono");
        return false;
    }

    if(!regex.test(telefono)){
        mostrarError(telefonoSolicitudInput,errorTelefono,"Debe contener exactamente 8 números");
        return false;
    }

    mostrarExito(telefonoSolicitudInput,errorTelefono);
    return true;

}

telefonoSolicitudInput.addEventListener("input",validarTelefono);


//------------------------------------------------
// Correo
//------------------------------------------------

function validarCorreoSolicitud(){

    const correo = correoSolicitudInput.value.trim();

    const regexCorreo=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(correo===""){
        mostrarError(correoSolicitudInput,errorCorreo,"Ingrese un correo");
        return false;
    }

    if(!regexCorreo.test(correo)){
        mostrarError(correoSolicitudInput,errorCorreo,"Ingrese un correo válido");
        return false;
    }

    mostrarExito(correoSolicitudInput,errorCorreo);
    return true;

}

correoSolicitudInput.addEventListener("input",validarCorreoSolicitud);


//------------------------------------------------
// Observaciones
//------------------------------------------------

function validarObservaciones(){

    mostrarExito(observacionesSolicitudInput,errorObservaciones);
    return true;

}

observacionesSolicitudInput.addEventListener("input",validarObservaciones);

const inputsNumericos = [
    altoMuebleInput,
    anchoMuebleInput,
    profundidadMuebleInput,
    presupuestoInput
];

inputsNumericos.forEach(input=>{

    input.addEventListener("keydown",(e)=>{

        const invalidChars=['e','E','+','-','.'];

        if(invalidChars.includes(e.key)){
            e.preventDefault();
        }

    });

});


function validarFormularioPropuesta(){

    if(document.getElementById("EbanistaSeleccionado").value === ""){
        Swal.fire({
            title: "Seleccione un ebanista",
            text: "Primero debe seleccionar un ebanista antes de crear una propuesta.",
            icon: "warning",
            confirmButtonText: "Aceptar",
            customClass: {
                popup: "miAlerta",
                title: "miTitulo",
                htmlContainer: "miTexto",
                confirmButton: "miBoton"
            }
        });

        return false;
    }

    const esTipoValido = validarTipoMueble();
    const esDescripcionValida = validarDescripcionMueble();
    const esMedidasValidas = validarMedidas();
    const esPresupuestoValido = validarPresupuesto();
    const esFechaValida = validarFechaEntrega();
    const esTelefonoValido = validarTelefono();
    const esCorreoValido = validarCorreoSolicitud();
    const esObservacionesValido = validarObservaciones();

    if(
        !esTipoValido ||
        !esDescripcionValida ||
        !esMedidasValidas ||
        !esPresupuestoValido ||
        !esFechaValida ||
        !esTelefonoValido ||
        !esCorreoValido ||
        !esObservacionesValido
    ){
        console.log("Formulario inválido");
        return false;
    }

    return true;
}

async function CrearNuevaPropuesta(){
try {
    obtenerUsuarioSesion().idUsuario
} catch (error) {
     Swal.fire({
    title: "Debes iniciar sesión",
    text: "Inicia sesión para poder enviar una propuesta a un ebanista.",
    icon: "warning",
    confirmButtonText: "Ok",
    customClass: {
        popup: "miAlerta",
        title: "miTitulo",
        htmlContainer: "miTexto",
        confirmButton: "miBoton"
    }
});
return
}

    const formularioValido = validarFormularioPropuesta();

    if(!formularioValido){
        console.log("Formulario inválido");
        return;
    }

    const solicitudesSistema = obtenerSolicitudesAlmacenadas();

    const hoy = new Date().toISOString().split("T")[0];

    let nuevaSolicitud = {

        "idSolicitud": Math.floor(Math.random() * 1000) + 1,

        "idUsuario": obtenerUsuarioSesion().idUsuario,

        "idEbanista": Number(document.getElementById("idEbanista").textContent),

        "tipoMueble": tipoMuebleInput.value,

        "descripcion": descripcionMuebleInput.value.trim(),

        "dimensiones":{

            "alto": Number(altoMuebleInput.value),

            "ancho": Number(anchoMuebleInput.value),

            "profundidad": Number(profundidadMuebleInput.value)

        },

        "presupuesto": Number(presupuestoInput.value),

        "presupuestoRecomendado": Number(document.getElementById("PresupuestoAutomatico").value),

        "fechaEntrega": fechaEntregaInput.value,

        "telefono": telefonoSolicitudInput.value.trim(),

        "correo": correoSolicitudInput.value.trim(),

        "observaciones": observacionesSolicitudInput.value.trim(),

        "estado":"Pendiente",

        "fechaSolicitud": hoy

    };

    solicitudesSistema.push(nuevaSolicitud);

    CargarSolicitudesBase(solicitudesSistema);

    await cargarDatos();

    console.log("Propuesta creada correctamente.");

    // Limpiar formulario

    tipoMuebleInput.selectedIndex = 0;

    descripcionMuebleInput.value = "";

    altoMuebleInput.value = "";
    anchoMuebleInput.value = "";
    profundidadMuebleInput.value = "";

    presupuestoInput.value = "";

    document.getElementById("PresupuestoAutomatico").value = "";

    fechaEntregaInput.value = "";

    telefonoSolicitudInput.value = "";

    correoSolicitudInput.value = "";

    observacionesSolicitudInput.value = "";

    // Limpiar mensajes

    errorTipoMueble.textContent = "";
    errorDescripcionMueble.textContent = "";
    errorMedidas.textContent = "";
    errorPresupuesto.textContent = "";
    errorFechaEntrega.textContent = "";
    errorTelefono.textContent = "";
    errorCorreo.textContent = "";
    errorObservaciones.textContent = "";

    // Limpiar estilos

    tipoMuebleInput.classList.remove("input-error","input-exito");

    descripcionMuebleInput.classList.remove("input-error","input-exito");

    altoMuebleInput.classList.remove("input-error","input-exito");
    anchoMuebleInput.classList.remove("input-error","input-exito");
    profundidadMuebleInput.classList.remove("input-error","input-exito");

    presupuestoInput.classList.remove("input-error","input-exito");

    fechaEntregaInput.classList.remove("input-error","input-exito");

    telefonoSolicitudInput.classList.remove("input-error","input-exito");

    correoSolicitudInput.classList.remove("input-error","input-exito");

    observacionesSolicitudInput.classList.remove("input-error","input-exito");

    Swal.fire({
        title: "¡Propuesta enviada!",
        text: "La propuesta se registró correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar",
        customClass: {
            popup: "miAlerta",
            title: "miTitulo",
            htmlContainer: "miTexto",
            confirmButton: "miBoton"
        }
    });

}

function DirigirPropuesta(id){

        document.querySelector(".Cotizaciones").style.display = "none";
    document.querySelector(".Ebanistas").style.display = "none";
    document.querySelector(".Crear").style.display = "none";
    document.querySelector(".Hacer").style.display = "grid";

    // Control de menú (Botones)
    document.querySelector(".OpcionCotizaciones").classList.remove("OpcionActual");
    document.querySelector(".OpcionEbanistas").classList.remove("OpcionActual");
    document.querySelector(".OpcionCrear").classList.remove("OpcionActual");
    document.querySelector(".OpcionHacer").classList.add("OpcionActual");

    document.getElementById("EbanistaSeleccionado").value = BuscarUsuario(id).nombre + " " + BuscarUsuario(id).apellido;
    document.getElementById("idEbanista").textContent = id;
    
}


function calcularPresupuestoAutomatico(){

    let costoBase = 0;

    switch(tipoMuebleInput.value){

    case "Silla":
        costoBase = 8000;
        break;

    case "Mesa":
        costoBase = 12000;
        break;

    case "Estantería":
        costoBase = 14000;
        break;

    case "Cama":
        costoBase = 18000;
        break;

    case "Closet":
        costoBase = 22000;
        break;

    case "Otro":
        costoBase = 10000;
        break;
}

    const alto = Number(altoMuebleInput.value) || 0;
    const ancho = Number(anchoMuebleInput.value) || 0;
    const profundidad = Number(profundidadMuebleInput.value) || 0;

    if(alto<=0 || ancho<=0 || profundidad<=0){
        document.getElementById("PresupuestoAutomatico").value = "";
        return;
    }

    // Volumen en cm³
    const area = (alto * ancho) / 10000;
const factor = area + (profundidad / 100);

const presupuesto = Math.round(costoBase * factor);

    document.getElementById("PresupuestoAutomatico").value = presupuesto;

}