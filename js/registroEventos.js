/* ==========================================================================
1. Configuración de Sesión y Storage
========================================================================== */
function CargarUsuariosBase(usuariosBase){
    localStorage.setItem(STORAGE_USUARIOS_ALMACENADOS, JSON.stringify(usuariosBase))

}

function obtenerUsuariosAlmacenados() {
    const usuariosGuardado = localStorage.getItem(STORAGE_USUARIOS_ALMACENADOS)
    if (!usuariosGuardado) {
        return null
    }
    return JSON.parse(usuariosGuardado)
}


function guardarUsuarioSesion(usuario) {
    localStorage.setItem(STORAGE_USUARIO, JSON.stringify(usuario))
}

function obtenerUsuarioSesion() {
    const usuarioGuardado = localStorage.getItem(STORAGE_USUARIO)
    if (!usuarioGuardado) {
        return null
    }
    return JSON.parse(usuarioGuardado)
}

function cerrarSesion() {
    localStorage.removeItem(STORAGE_USUARIO)
    
}

// TENER MUCHO CUIDADO CON LA DESINCRONIZACION ENTRE EL LOCAL STORAGE Y LAS VARIABLES LOCALES, cargar datos actualiza las variables locales segun lo que tengan el local storage

function ActualizarUsuariosSistema(usuarioNuevo) {
    // 1. Obtenemos el texto de localStorage
    const usuariosGuardado = localStorage.getItem(STORAGE_USUARIOS_ALMACENADOS);
    
    // 2. Convertimos a Array (si está vacío, inicializamos un array vacío [])
    const listaUsuarios = usuariosGuardado ? JSON.parse(usuariosGuardado) : [];
    
    // 3. Agregamos el nuevo usuario al array usando .push()
    listaUsuarios.push(usuarioNuevo);
    
    // 4. Guardamos la lista actualizada de vuelta en localStorage
    localStorage.setItem(STORAGE_USUARIOS_ALMACENADOS, JSON.stringify(listaUsuarios));
    cargarDatos()
}

function BorrarUsuario() {
    let usuario = obtenerUsuarioSesion()
    const listaUsuarios = obtenerUsuariosAlmacenados()
    let listaUsuariosActualizada = []
    for (const element of listaUsuarios) {
        if (usuario.idUsuario===element.idUsuario) {
            continue
        }
        listaUsuariosActualizada.push(element);
    }
    
    CargarUsuariosBase(listaUsuariosActualizada);
    cargarDatos()
    
}

function BorrarCuenta(){
BorrarUsuario()
Perfil_Sesion()
}



/* ==========================================================================
2. Funciones Utilitarias de Validación
========================================================================== */



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

function mostrarCambio(elemenentoEditado) {
    elemenentoEditado.textContent="Cambio efectuado"
}


/* ==========================================================================
3. Referencias DOM - Inicio de Sesión
========================================================================== */

const errorCorreo = document.getElementById("errorCorreo");
const correoInput = document.getElementById("emailInput");

const errorContrasena = document.getElementById("errorContraseña");
const contrasenaInput = document.getElementById("ContraseñaInput");

/* ==========================================================================
4. Validaciones - Inicio de Sesión
========================================================================== */

function validarCorreo() {
    // 1. Obtener el valor y limpiar espacios en los extremos

    const correo = correoInput.value.trim();
    
    // Expresión regular para validar formato de correo (ejemplo@dominio.com)
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 2. Verificar si está vacío
    if (correo === "") {
        mostrarError(correoInput, errorCorreo, "El correo electrónico es obligatorio");
        return false;
    }
    
    // 3. Verificar si el formato es inválido
    if (!regexCorreo.test(correo)) {
        mostrarError(correoInput, errorCorreo, "Ingrese un formato de correo válido (ej: usuario@correo.com)");
        return false;
    }

    // 4. Si todo está correcto, mostrar éxito y retornar true
    mostrarExito(correoInput, errorCorreo);
    return true;
}

correoInput.addEventListener("input",validarCorreo);

//Validar contraseña
function validarContrasena() {
    // 1. Obtener el valor sin espacios vacíos en los extremos
    const contrasena = contrasenaInput.value.trim();

    // 2. Verificar si está vacío
    if (contrasena === "") {
        mostrarError(contrasenaInput, errorContrasena, "La contraseña es obligatoria");
        return false;
    }

    // 3. Si tiene texto, mostrar éxito y retornar true
    mostrarExito(contrasenaInput, errorContrasena);
    return true;
}

contrasenaInput.addEventListener("input",validarContrasena);

/* ==========================================================================
5. Referencias DOM - Registro
========================================================================== */


const errorNombre = document.getElementById("errorNombre");
const nombreInput = document.getElementById("NombreInput");

const errorApellido = document.getElementById("errorApellido");
const apellidoeInput = document.getElementById("ApellidoInput");

const errorCorreo2 = document.getElementById("errorCorreo2");
const correo2Input = document.getElementById("Correo2Input");

const errorContrasena2 = document.getElementById("errorContraseña2");
const contrasenaInput2 = document.getElementById("ContraseñaInput2");


const errorFechaNac = document.getElementById("errorFecha");
const fechaNacInput = document.getElementById("FechaInput");


const errorNumero = document.getElementById("errorExperiencia");
const numeroInput = document.getElementById("AniosInput");


const errorSobreMi = document.getElementById("errorSobreMi");
const SobreMiInput = document.getElementById("SobreMiInput");

/* ==========================================================================
6. Validaciones - Registro
========================================================================== */


function validarNombre() {
    // 1. Obtener el valor sin espacios vacíos en los extremos
    const nombre = nombreInput.value.trim();

    // 2. Verificar si está vacío
    if (nombre === "") {
        mostrarError(nombreInput, errorNombre, "Campo obligatorio");
        return false;
    }

    // 3. Si tiene texto, mostrar éxito y retornar true
    mostrarExito(nombreInput, errorNombre);
    return true;
}

nombreInput.addEventListener("input",validarNombre);


function validarapellido() {
    // 1. Obtener el valor sin espacios vacíos en los extremos
    const nombre = apellidoeInput.value.trim();

    // 2. Verificar si está vacío
    if (nombre === "") {
        mostrarError(apellidoeInput, errorApellido, "Campo obligatorio");
        return false;
    }

    // 3. Si tiene texto, mostrar éxito y retornar true
    mostrarExito(apellidoeInput, errorApellido);
    return true;
}

apellidoeInput.addEventListener("input",validarapellido);

function validarCorreo2() {
    // 1. Obtener el valor y limpiar espacios en los extremos

    const correo = correo2Input.value.trim();
    
    // Expresión regular para validar formato de correo (ejemplo@dominio.com)
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 2. Verificar si está vacío
    if (correo === "") {
        mostrarError(correo2Input, errorCorreo2, "El correo electrónico es obligatorio");
        return false;
    }
    
    // 3. Verificar si el formato es inválido
    if (!regexCorreo.test(correo)) {
        mostrarError(correo2Input, errorCorreo2, "Ingrese un formato de correo válido (ej: usuario@correo.com)");
        return false;
    }

    // 4. Si todo está correcto, mostrar éxito y retornar true
    mostrarExito(correo2Input, errorCorreo2);
    return true;
}

correo2Input.addEventListener("input",validarCorreo2);

//Validar contraseña
function validarContrasena2() {
    // 1. Obtener el valor sin espacios vacíos en los extremos
    const contrasena = contrasenaInput2.value.trim();

    // 2. Verificar si está vacío
    if (contrasena === "") {
        mostrarError(contrasenaInput2, errorContrasena2, "La contraseña es obligatoria");
        return false;
    }

    // 3. Si tiene texto, mostrar éxito y retornar true
    mostrarExito(contrasenaInput2, errorContrasena2);
    return true;
}

contrasenaInput2.addEventListener("input",validarContrasena2);

//Validar fecha de nacimiento
function validarFechaNac() {
    // 1. Obtener el valor sin espacios vacíos en los extremos
    const fechaNacValue = fechaNacInput.value.trim();

    // 2. Verificar si está vacío
    if (fechaNacValue === "") {
        mostrarError(fechaNacInput, errorFechaNac, "La fecha de nacimiento es obligatoria");
        return false;
    }

    // 3. REGEX ESTRICTO: Bloquea meses mayores a 12 y días mayores a 31
    const regexFecha = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    if (!regexFecha.test(fechaNacValue)) {
        mostrarError(fechaNacInput, errorFechaNac, "El formato debe ser AAAA-MM-DD (Mes 01-12, Día 01-31)");
        return false;
    }

    // 4. Verificar coherencia del calendario (ej: evita 31 de abril o 30 de febrero)
    const [ano, mes, dia] = fechaNacValue.split("-").map(Number);
    const fechaVerificacion = new Date(ano, mes - 1, dia);
    
    if (fechaVerificacion.getFullYear() !== ano || 
        (fechaVerificacion.getMonth() + 1) !== mes || 
        fechaVerificacion.getDate() !== dia) {
        mostrarError(fechaNacInput, errorFechaNac, "La fecha introducida no existe en el calendario");
        return false;
    }

    // 5. Verificar si es mayor de 18 años
    const hoy = new Date();
    let edad = hoy.getFullYear() - ano;
    const mesDiferencia = hoy.getMonth() - (mes - 1);

    if (mesDiferencia < 0 || (mesDiferencia === 0 && hoy.getDate() < dia)) {
        edad--;
    }

    if (edad < 18) {
        mostrarError(fechaNacInput, errorFechaNac, "Debes ser mayor de 18 años");
        return false;
    }

    // 6. Si pasa todas las validaciones, mostrar éxito y retornar true
    mostrarExito(fechaNacInput, errorFechaNac);
    return true;
}

fechaNacInput.addEventListener("input", validarFechaNac);

//Validar número
function validarNumero() {
    // 1. Obtener el valor sin espacios vacíos en los extremos
    const numeroValue = numeroInput.value.trim();

    // 2. Verificar si está vacío
    if (numeroValue === "") {
        mostrarError(numeroInput, errorNumero, "El número es obligatorio");
        return false;
    }

    // 3. Verificar si excede el límite de 100
    const numero = Number(numeroValue);
    if (numero > 100) {
        mostrarError(numeroInput, errorNumero, "El número no puede ser mayor a 100");
        return false;
    }

    // 4. Si tiene un valor válido, mostrar éxito y retornar true
    mostrarExito(numeroInput, errorNumero);
    return true;
}

numeroInput.addEventListener("input", validarNumero);




document.getElementById("AniosInput").addEventListener("keydown",(e)=>{
    const invalidChars=['e','E','+','-','.']
    if (invalidChars.includes(e.key)) {
        e.preventDefault()
    }
})




//Validar contraseña
function validarSobremi() {
    // 1. Obtener el valor sin espacios vacíos en los extremos
    const Sobre = SobreMiInput.value.trim();

    // 2. Verificar si está vacío
    if (Sobre === "") {
        mostrarError(SobreMiInput, errorSobreMi, "El campo es obligatorio");
        return false;
    }

    // 3. Si tiene texto, mostrar éxito y retornar true
    mostrarExito(SobreMiInput, errorSobreMi);
    return true;
}

SobreMiInput.addEventListener("input",validarSobremi);


/* ==========================================================================
8. Gestión de Inicio de Sesión
========================================================================== */


function Inicio_Confirmacion(){

    if (!validarCorreo()) {
    return 
    }
    if (!validarContrasena()) {
        return
    }
    
    if (!ValidarSesion(correoInput.value,contrasenaInput.value)) {
        return
    }

document.querySelector(".ConfirmacionSesion").style.display = "flex";
document.querySelector(".InicioSesion").classList.add("Desabilitado");
document.querySelector(".ConfirmacionSesion").classList.add("Habilitado");


}


function ValidarSesion(correo,contrasena){

for (const element of usuarios) {
    if (correo === element.correo && contrasena === element.contrasena) {
    guardarUsuarioSesion(element)

    return true
    } 
}

SesionDenegada()
    return false
    

}

function SesionDenegada(){
    
document.querySelector(".DenegarSesion").style.display = "flex";
document.querySelector(".InicioSesion").classList.add("Desabilitado");
document.querySelector(".DenegarSesion").classList.add("Habilitado");
}

function SesionDenegadaCerrar(){
    
document.querySelector(".DenegarSesion").style.display = "none";
document.querySelector(".InicioSesion").classList.add("Habilitado");
document.querySelector(".DenegarSesion").classList.add("Desabilitado");
}

function InicioSesion_Perfil(){

    document.querySelector(".Perfil").style.display = "flex";
    document.querySelector(".InicioSesion").style.display = "none";
    document.querySelector(".actuala").textContent = "Perfil"
    AgregarInformacionUsuario(false, null);
    EbanistaOCliente()
    document.querySelector(".ConfirmacionSesion").style.display = "none";
    document.querySelector(".InicioSesion").classList.remove("Desabilitado");
document.querySelector(".ConfirmacionSesion").classList.remove("Habilitado");
}

/* ==========================================================================
9. Gestión de Registro de Usuarios
========================================================================== */

function Registro_Confirmacion(){

    const esNombreValido = validarNombre();
    const esApellidoValido = validarapellido();
    const esCorreoValido = validarCorreo2();
    const esContrasenaValido = validarContrasena2();
    const esFechaValida = validarFechaNac();
    const esNumeroValido = validarNumero();
    const esSobreMiValido = validarSobremi();


    if (!esNombreValido || !esApellidoValido || !esCorreoValido || !esContrasenaValido || !esFechaValida || !esNumeroValido || !esSobreMiValido) {
        console.log("Error");
        
        return; // Detiene la ejecución si hay errores en pantalla
    }

        let tipo = ""
    if (document.getElementById("Ebanista").checked) {
    tipo = "ebanista"
    } else {
    tipo = "cliente"
    }

    let usuarioRegistrado = {
    "idUsuario": Math.floor(Math.random() * 100) + 1,
    "tipoUsuario": tipo,
    "nombre": nombreInput.value.trim(),
    "apellido": apellidoeInput.value.trim(),
    "correo": correo2Input.value.trim(),
    "contrasena": contrasenaInput2.value.trim(),
    "fechaNacimiento": fechaNacInput.value.trim(),
    "aniosExperiencia": numeroInput.value.trim(),
    "sobreMi": SobreMiInput.value.trim(),
    "album": [
        {
        "nombre": "FotoPerfil",
        "foto": "https://st4.depositphotos.com/29453910/37778/v/450/depositphotos_377785318-stock-illustration-hand-drawn-modern-man-avatar.jpg"
    },
    ]
    }


guardarUsuarioSesion(usuarioRegistrado)
ActualizarUsuariosSistema(usuarioRegistrado)
cargarDatos()
    EbanistaOCliente()
document.querySelector(".ConfirmacionRegistro").style.display = "flex";
document.querySelector(".Registrar").classList.add("Desabilitado");
document.querySelector(".ConfirmacionRegistro").classList.add("Habilitado");


}


function LimpiarCampos(){
        nombreInput.value = ""
    apellidoeInput.value = ""
    correo2Input.value = ""
    contrasenaInput2.value = ""
    fechaNacInput.value = ""
    numeroInput.value = ""
    SobreMiInput.value = ""
    contrasenaInput.value = ""
    correoInput.value = ""
    const esNombreValido = validarNombre();
    const esApellidoValido = validarapellido();
    const esCorreoValido = validarCorreo2();
    const esContrasenaValido = validarContrasena2();
    const esFechaValida = validarFechaNac();
    const esNumeroValido = validarNumero();
    const esSobreMiValido = validarSobremi();
}




/* ==========================================================================
11. Gestión del Perfil
========================================================================== */






function AgregarInformacionUsuario(otroUsuario, PerfilAjeno) {
    if (otroUsuario) {
document.getElementById("ImagenPerfil").src = PerfilAjeno.album[0].foto;
document.querySelector(".Nombre").textContent = PerfilAjeno.nombre + " " + PerfilAjeno.apellido;
document.querySelector(".Rol").textContent = PerfilAjeno.tipoUsuario;
document.querySelector(".Correo").textContent = PerfilAjeno.correo; //No quiere cargar
document.querySelector(".ContenedorNombreO").children[1].value = PerfilAjeno.nombre;
document.querySelector(".ContenedorApellidoO").children[1].value = PerfilAjeno.apellido;
document.querySelector(".ContenedorCorreoO").children[1].value = PerfilAjeno.correo;
document.querySelector(".ContenedorFechaO").children[1].value = PerfilAjeno.fechaNacimiento;
document.querySelector(".ContenedorExperienciaO").children[1].value = PerfilAjeno.aniosExperiencia;
document.querySelector(".ContenedorSobreMiO").children[1].textContent = PerfilAjeno.sobreMi;

agregarAlbum(PerfilAjeno)
    } else {
document.getElementById("ImagenPerfil").src = obtenerUsuarioSesion().album[0].foto;
document.querySelector(".Nombre").textContent = obtenerUsuarioSesion().nombre +" "+ obtenerUsuarioSesion().apellido;
document.querySelector(".Rol").textContent = obtenerUsuarioSesion().tipoUsuario;
document.querySelector(".Correo").textContent = obtenerUsuarioSesion().correo;
document.querySelector(".ContenedorNombreO").children[1].value = obtenerUsuarioSesion().nombre;
document.querySelector(".ContenedorApellidoO").children[1].value = obtenerUsuarioSesion().apellido;
document.querySelector(".ContenedorCorreoO").children[1].value = obtenerUsuarioSesion().correo;
document.querySelector(".ContenedorFechaO").children[1].value = obtenerUsuarioSesion().fechaNacimiento;
document.querySelector(".ContenedorContraseñaO").children[1].value = obtenerUsuarioSesion().contrasena;
document.querySelector(".ContenedorExperienciaO").children[1].value =  parseInt(obtenerUsuarioSesion().aniosExperiencia);
document.querySelector(".ContenedorSobreMiO").children[1].textContent =  obtenerUsuarioSesion().sobreMi;
document.querySelector(".ContenedorFotoPerfil").children[1].value = obtenerUsuarioSesion().album[0].foto;
agregarAlbum(obtenerUsuarioSesion())
AgregarPropuestas()
    }

}

function Perfil_Sesion() {
    document.querySelector(".InicioSesion").style.display = "flex";
    document.querySelector(".Perfil").style.display = "none";
    document.querySelector(".actuala").textContent = "Registro"
        document.querySelector(".ConfirmacionCerrarSesion").style.display = "none";
document.querySelector(".Funcionalidades").classList.remove("Desabilitado");
document.querySelector(".ConfirmacionCerrarSesion").classList.remove("Habilitado");
    cerrarSesion()
}

/* ==========================================================================
12. Gestión del Álbum
========================================================================== */

const fotoAlbumInput = document.getElementById("FotoAlbumInput");
const errorFotoAlbum = document.getElementById("errorFotoAlbum");

const descripcionAlbumInput = document.getElementById("DescripcionAlbumInput");
const errorDescripcionAlbum = document.getElementById("errorDescripcionAlbum");


function agregarAlbum(Usuario){

    if (Usuario.album.length === 1) {
        contenedorLista.innerHTML = `
                    <section class="SinItems"> 
                        <h2>No hay items para mostrar</h2>
                    </section>
                `;
                return
    }

    document.querySelector(".AlbumMuebles").innerHTML = ""
    let i = 0;
    for (const element of Usuario.album) {
        if (i===0){
            i++
            continue
        }
        let nombre = element.nombre;
        let imagen = element.foto;
    document.querySelector(".AlbumMuebles").innerHTML += `
    <div class="TarjetaMueble">
        <img src="${imagen}" alt="${nombre}">

        <div class="InformacionMueble">
            <p class="NombreMueble">
                ${nombre}
            </p>

            <div class="AccionesMueble">
                <button class="btnEliminarMueble" onclick="EliminarMueble('${imagen}')">
                    Eliminar
                </button>
            </div>
        </div>
    </div>
`;
    }

}

function MostrarAgregarFoto(){
    document.querySelector(".AgregarAlbum").style.display = "flex";
    document.querySelector(".SeleccionadaAlbum").classList.add("Desabilitado");
    document.querySelector(".AgregarAlbum").classList.add("Habilitado");
}

function CerrarAgregarFoto(){
    document.querySelector(".AgregarAlbum").style.display = "none";
    document.querySelector(".SeleccionadaAlbum").classList.remove("Desabilitado");
    document.querySelector(".AgregarAlbum").classList.remove("Habilitado");
}

function AgregarMueble() {

    const esFotoValida = validarFotoAlbum();
    const esDescripcionValida = validarDescripcionAlbum();

    if (!esFotoValida || !esDescripcionValida) {
        console.log("Error");
        return;
    }

    let usuario = obtenerUsuarioSesion();

    usuario.album.push({
        nombre: descripcionAlbumInput.value.trim(),
        foto: fotoAlbumInput.value.trim()
    });

    guardarUsuarioSesion(usuario);
    BorrarUsuario()
    ActualizarUsuariosSistema(obtenerUsuarioSesion())
    console.log("Imagen agregada correctamente");
    document.querySelector(".AgregarAlbum").style.display = "none";
    document.querySelector(".SeleccionadaAlbum").classList.remove("Desabilitado");
    document.querySelector(".AgregarAlbum").classList.remove("Habilitado");
    agregarAlbum(obtenerUsuarioSesion())
}

function EliminarMueble(URL) {

    let usuario = obtenerUsuarioSesion();
    const albumUsuario = usuario.album ? usuario.album : [];

    let nuevoAlbum = [];

    for (const element of albumUsuario) {
        if (element.foto === URL) {
            continue;
        }

        nuevoAlbum.push(element);
    }

    usuario.album = nuevoAlbum;

    guardarUsuarioSesion(usuario);
    BorrarUsuario();
    ActualizarUsuariosSistema(usuario);
    agregarAlbum(obtenerUsuarioSesion());

}


const contenedorLista = document.querySelector(".AlbumMuebles");

const observador = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
            
            // Verificamos si no quedan hijos, o si el único hijo no es ya la sección de "No hay items"
            const tieneHijosReales = contenedorLista.children.length > 0;
            const yaMuestraElMensaje = contenedorLista.querySelector(".SinItems");

            if (!tieneHijosReales) {
                // Insertamos el HTML que nos pediste usando innerHTML
                contenedorLista.innerHTML = `
                    <section class="SinItems"> 
                        <h2>No hay items para mostrar</h2>
                    </section>
                `;
            } else if (tieneHijosReales && yaMuestraElMensaje && contenedorLista.children.length > 1) {
                // Si se añade un ítem nuevo y estaba el mensaje de vacío, borramos el mensaje
                yaMuestraElMensaje.remove();
            }
        }
    }
});

// 3. Activa el observador para que escuche cambios en los hijos
observador.observe(contenedorLista, { childList: true });


/* ==========================================================================
14. Validaciones - Agregar Álbum
========================================================================== */

// Validar foto
function validarFotoAlbum() {

    // 1. Obtener el valor sin espacios vacíos
    const foto = fotoAlbumInput.value.trim();

    // 2. Verificar si está vacío
    if (foto === "") {
        mostrarError(fotoAlbumInput, errorFotoAlbum, "La foto es obligatoria");
        return false;
    }

    // 3. Si tiene texto mostrar éxito
    mostrarExito(fotoAlbumInput, errorFotoAlbum);
    return true;
}

fotoAlbumInput.addEventListener("input", validarFotoAlbum);


// Validar descripción
function validarDescripcionAlbum() {

    // 1. Obtener el valor sin espacios vacíos
    const descripcion = descripcionAlbumInput.value.trim();

    // 2. Verificar si está vacío
    if (descripcion === "") {
        mostrarError(descripcionAlbumInput, errorDescripcionAlbum, "La descripción es obligatoria");
        return false;
    }

    // 3. Si tiene texto mostrar éxito
    mostrarExito(descripcionAlbumInput, errorDescripcionAlbum);
    return true;
}

descripcionAlbumInput.addEventListener("input", validarDescripcionAlbum);


/* ==========================================================================
13. Gestión de Propuestas
========================================================================== */


function AgregarPropuestas(){
let existe = false;

document.querySelector(".SeleccionadaPropuesta").innerHTML = ""
for (const solicitud of solicitudes) {
    if (solicitud.idEbanista === obtenerUsuarioSesion().idUsuario) {
        existe = true;
        document.querySelector(".SeleccionadaPropuesta").innerHTML += `
<div class="TargetaPropuesta">
    <div class="EncabezadoPropuesta">
        <img src="assets/images/contrato.png" alt="Propuesta con un lapiz">
        <h3>Información de la propuesta</h3>
    </div>

    <div class="ContenedorInfoProp">
        <div class="InfoProp1">
            <p><b>Cliente:</b> ${BuscarUsuario(solicitud.idUsuario).nombre}</p>
            <p><b>Fecha solicitud:</b> ${solicitud.fechaSolicitud}</p>
        </div>

        <div class="InfoProp2">
            <p><b>Descripción:</b> ${solicitud.descripcion}</p>
        </div>

        <div class="InfoProp3">
            <p class="pAlto"><b>Alto:</b> ${solicitud.dimensiones.alto} cm</p>
            <p class="pAncho"><b>Ancho:</b> ${solicitud.dimensiones.ancho} cm</p>
            <p class="pProfundiad"><b>Profundidad:</b> ${solicitud.dimensiones.profundidad} cm</p>
        </div>

        <div class="ContenedorEnlace">
            <a onclick="VerPropuestaCompleta(${solicitud.idSolicitud})">
                Ver solicitud completa
            </a>
        </div>
    </div>
</div>
`;
    }
}

     if (!existe) {
            
        document.querySelector(".SeleccionadaPropuesta").innerHTML = `
                    <section class="SinItems"> 
                        <h2>No hay items para mostrar</h2>
                    </section>
                `;
                return
    
     }
    
}


function BuscarUsuario(id){
    for (const element of usuarios) {
        if (element.idUsuario === id) {
            return element;
        }
    }
}





function VerPropuestaCompleta(idSolicitud) {
  // 1. Buscamos la solicitud específica por su ID
  const datos = solicitudes.find(s => s.idSolicitud === idSolicitud);

  // Validación de seguridad por si no se encuentra el ID
  if (!datos) {
    console.error("No se encontró la solicitud con ID:", idSolicitud);
    return;
  }

  // 2. Creamos la plantilla HTML de forma segura
  const formularioHTML = `
    <form action="" class="FormularioSolicitud">
      <h2>Solicitud de Cotización</h2>

      <div class="ContenedorFormulario">


        <section class="seccionFormulario">
          <h3 class="TituloSeccion">Detalle</h3>
          <p id="DeUsuario">Del usuario: <strong>${BuscarUsuario(datos.idUsuario).nombre}</strong></p>
          <p id="ParaEbanista">Para el ebanista: <strong>${BuscarUsuario(datos.idEbanista).nombre}</strong></p>
        </section>

        <section class="seccionFormulario">
          <h3 class="TituloSeccion">1. Información del mueble</h3>

          <div class="TipoMueble">
            <label for="tipoMueble">Tipo de mueble </label>
            <select id="tipoMueble" required>
<option value="">Seleccione una opción</option>
<option value="Mesa" ${datos.tipoMueble === "Mesa" ? "selected" : ""}>Mesa</option>
<option value="Silla" ${datos.tipoMueble === "Silla" ? "selected" : ""}>Silla</option>
<option value="Closet" ${datos.tipoMueble === "Closet" ? "selected" : ""}>Closet</option>
<option value="Cama" ${datos.tipoMueble === "Cama" ? "selected" : ""}>Cama</option>
<option value="Estantería" ${datos.tipoMueble === "Estantería" ? "selected" : ""}>Estantería</option>
<option value="Otro" ${datos.tipoMueble === "Otro" ? "selected" : ""}>Otro</option>
            </select>
          </div>

          <div class="DescripcionDetallada">
            <label for="descripcion">Descripción detallada </label>
            <textarea
              id="descripcion"
              rows="5"
              placeholder="Describe el mueble, materiales deseados, acabados o características especiales."
              required
            >${datos.descripcion}</textarea>
          </div>
        </section>

        <section class="seccionFormulario">
          <h3 class="TituloSeccion">2. Dimensiones aproximadas</h3>

          <div class="contenedorMedidas">
            <div class="Medidas">
              <label for="alto">Alto (cm)</label>
              <input type="number" id="alto" placeholder="Ej: 200" value="${datos.dimensiones.alto}">
            </div>

            <div class="Medidas">
              <label for="ancho">Ancho (cm)</label>
              <input type="number" id="ancho" placeholder="Ej: 150" value="${datos.dimensiones.ancho}">
            </div>

            <div class="Medidas">
              <label for="profundidad">Profundidad (cm)</label>
              <input type="number" id="profundidad" placeholder="Ej: 60" value="${datos.dimensiones.profundidad}">
            </div>
          </div>
        </section>

        <section class="seccionFormulario">
          <h3 class="TituloSeccion">3. Información adicional</h3>

          <div class="ContenedorInfoAdicional">
            <div class="Presupuesto">
              <label for="presupuesto">Presupuesto aproximado (₡)</label>
              <input type="number" id="presupuesto" placeholder="Ej: 250000" value="${datos.presupuesto}">
              <label for="presupuestoRecomendado">Presupuesto recomendado (₡)</label>
              <input type="number" id="presupuestoRecomendado" value="${datos.presupuestoRecomendado}">
            </div>

            <div class="EnchaEntrega">
              <label for="fechaEntrega">Fecha deseada</label>
              <input type="date" id="fechaEntrega" value="${datos.fechaEntrega}">
            </div>
          </div>
        </section>

        <section class="seccionFormulario">
          <h3 class="TituloSeccion">4. Información de contacto</h3>

          <div class="ContenedorContacto">
            <div class="Telefono">
              <label for="telefono">Teléfono </label>
              <input type="tel" id="telefono" placeholder="8888-8888" required value="${datos.telefono}">
            </div>

            <div class="CorreoForm">
              <label for="correo">Correo electrónico </label>
              <input type="email" id="correo" placeholder="correo@ejemplo.com" required value="${datos.correo}">
            </div>
          </div>
        </section>

        <section class="seccionFormulario">
          <h3 class="TituloSeccion">5. Observaciones adicionales</h3>

          <div class="Observaciones">
            <textarea
              id="observaciones"
              rows="4"
              placeholder="Agrega cualquier detalle importante para el ebanista."
            >${datos.observaciones}</textarea>
          </div>
        </section>

        <div class="BotonesFormulario">
          <button type="button" class="botonCancelar" onclick="CerrarPropuestaCompleta(this)">
            Cancelar
          </button>
          <button type="button" class="botonEnviar">
            Responder
          </button>
        </div>
      </div> 
    </form>
  `;

  // 3. Lo inyectamos al final de <main> de manera limpia sin resetear el DOM
  document.querySelector("main").insertAdjacentHTML('beforeend', formularioHTML);
    document.querySelector(".FormularioSolicitud").style.display = "flex";
  document.querySelector(".Perfil").classList.add("Desabilitado");
  document.querySelector(".FormularioSolicitud").classList.add("Habilitado");
}


function CerrarPropuestaCompleta(boton) {
  // Encuentra el formulario contenedor más cercano y lo elimina por completo del DOM
    document.querySelector(".FormularioSolicitud").style.display = "none";
  document.querySelector(".Perfil").classList.remove("Desabilitado");
  document.querySelector(".FormularioSolicitud").classList.remove("Habilitado");
  boton.closest('form').remove();
}

const contenedorListaPropuestas = document.querySelector(".SeleccionadaPropuesta");

const observador2 = new MutationObserver((mutationsList) => {
    console.log("Holaaaa");
    
    for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
            
            // Verificamos si no quedan hijos, o si el único hijo no es ya la sección de "No hay items"
            const tieneHijosReales = contenedorListaPropuestas.children.length > 0;
            const yaMuestraElMensaje = contenedorListaPropuestas.querySelector(".SinItems");

            if (!tieneHijosReales) {
                // Insertamos el HTML que nos pediste usando innerHTML
                contenedorListaPropuestas.innerHTML = `
                    <section class="SinItems2 {"> 
                        <h2>No hay items para mostrar</h2>
                    </section>
                `;
            } else if (tieneHijosReales && yaMuestraElMensaje && contenedorListaPropuestas.children.length > 1) {
                // Si se añade un ítem nuevo y estaba el mensaje de vacío, borramos el mensaje
                yaMuestraElMensaje.remove();
            }
        }
    }
});

// 3. Activa el observador para que escuche cambios en los hijos
observador2.observe(contenedorListaPropuestas, { childList: true });

/* ==========================================================================
14. Navegación entre Pantallas
========================================================================== */


function InicioSesion_Registro() {
    document.querySelector(".Registrar").style.display = "grid";
    document.querySelector(".InicioSesion").style.display = "none";
    LimpiarCampos()
}


function Registro_InicioSesion() {
    document.querySelector(".InicioSesion").style.display = "flex";
    document.querySelector(".Registrar").style.display = "none";
    LimpiarCampos()
}
/*Va a ser remplazada */
function Registro_Perfil() {

    document.querySelector(".Perfil").style.display = "flex";
    document.querySelector(".Registrar").style.display = "none";
    document.querySelector(".actuala").textContent = "Perfil"
    AgregarInformacionUsuario(false, null);
    document.querySelector(".ConfirmacionRegistro").style.display = "none";
    document.querySelector(".Registrar").classList.remove("Desabilitado");
    document.querySelector(".ConfirmacionRegistro").classList.remove("Habilitado");
    LimpiarCampos()
}

/* ==========================================================================
15. Navegación Interna del Perfil
========================================================================== */

function MostrarPersonal() {

    document.querySelector(".SeleccionadaAlbum").style.display = "none";
    document.querySelector(".SeleccionadaConfiguracion").style.display = "none";
    document.querySelector(".SeleccionadaPersonal").style.display = "grid";
    document.querySelector(".SeleccionadaPropuesta").style.display = "none";

    document.querySelector(".OpcionAlbum").classList.remove("OpcionActual");
    document.querySelector(".OpcionConfiguracion").classList.remove("OpcionActual");
    document.querySelector(".OpcionPersonal").classList.add("OpcionActual");
    document.querySelector(".OpcionPropuesta").classList.remove("OpcionActual");
}

function MostrarConfiguracion() {

    document.querySelector(".SeleccionadaAlbum").style.display = "none";
    document.querySelector(".SeleccionadaPersonal").style.display = "none";
    document.querySelector(".SeleccionadaConfiguracion").style.display = "flex";
    document.querySelector(".SeleccionadaPropuesta").style.display = "none";

    document.querySelector(".OpcionAlbum").classList.remove("OpcionActual");
    document.querySelector(".OpcionPersonal").classList.remove("OpcionActual");
    document.querySelector(".OpcionConfiguracion").classList.add("OpcionActual");
    document.querySelector(".OpcionPropuesta").classList.remove("OpcionActual");
}


function MostrarPropuestas() {

    document.querySelector(".SeleccionadaAlbum").style.display = "none";
    document.querySelector(".SeleccionadaPersonal").style.display = "none";
    document.querySelector(".SeleccionadaConfiguracion").style.display = "none";
    document.querySelector(".SeleccionadaPropuesta").style.display = "grid";

    document.querySelector(".OpcionAlbum").classList.remove("OpcionActual");
    document.querySelector(".OpcionPersonal").classList.remove("OpcionActual");
    document.querySelector(".OpcionConfiguracion").classList.remove("OpcionActual");
    document.querySelector(".OpcionPropuesta").classList.add("OpcionActual");
    
}

function MostrarAlbum() {

    document.querySelector(".SeleccionadaPersonal").style.display = "none";
    document.querySelector(".SeleccionadaConfiguracion").style.display = "none";
    document.querySelector(".SeleccionadaAlbum").style.display = "flex";
    document.querySelector(".SeleccionadaPropuesta").style.display = "none";

    document.querySelector(".OpcionPersonal").classList.remove("OpcionActual");
    document.querySelector(".OpcionConfiguracion").classList.remove("OpcionActual");
    document.querySelector(".OpcionAlbum").classList.add("OpcionActual");
    document.querySelector(".OpcionPropuesta").classList.remove("OpcionActual");
}


/* ==========================================================================
16. Inicialización de la Aplicación
========================================================================== */

function EbanistaOCliente(){
if (obtenerUsuarioSesion().tipoUsuario === "cliente" ) {
        
        document.querySelector(".OpcionAlbum").style.display = "none";
        document.querySelector(".OpcionPropuesta").style.display = "none";
        } else {
                document.querySelector(".OpcionAlbum").style.display = "flex";
        document.querySelector(".OpcionPropuesta").style.display = "flex";
        }
}

function PerfilAjenoAbrir(){
        document.querySelector(".OpcionConfiguracion").style.display = "none";
        document.querySelector(".OpcionPropuesta").style.display = "none";
        document.getElementById("GuardarCambiosBtn").style.display = "none"; 
        document.querySelector(".btnAgregarMueble").style.display = "none";

        document.querySelector(".ContenedorNombreO").classList.add("Desabilitado");
document.querySelector(".ContenedorApellidoO").classList.add("Desabilitado");
document.querySelector(".ContenedorCorreoO").classList.add("Desabilitado");
document.querySelector(".ContenedorFechaO").classList.add("Desabilitado");
document.querySelector(".ContenedorContraseñaO").style.display = "none";
document.querySelector(".ContenedorExperienciaO").classList.add("Desabilitado");
document.querySelector(".ContenedorSobreMiO").classList.add("Desabilitado");
document.querySelector(".ContenedorFotoPerfil").classList.add("Desabilitado");
document.querySelector(".actuala").textContent = "Perfil"
        try {
        document.querySelectorAll(".btnEliminarMueble").forEach(btn => {
    btn.style.display = "none";
});
        } catch (error) {
        console.log("No hay ningun mueble");
        
        }
        
        
}


document.addEventListener("DOMContentLoaded", async () => {

    // 1. Intentar obtener el usuario activo (convertido de texto a objeto)
    //NO va a servir la variable por mas que la comparta entre js igual vuelve a null
await cargarDatos()

    
    const parametros = new URLSearchParams(window.location.search);
    const id = Number(parametros.get("id"));

    if (id===0) {
    
    } else {
    const PerfilAjeno = obtenerUsuariosAlmacenados().find(u => u.idUsuario === id);
    AgregarInformacionUsuario(true,PerfilAjeno)
    PerfilAjenoAbrir()
    document.querySelector(".Perfil").style.display = "flex";
    document.querySelector(".InicioSesion").style.display = "none";
    return
    }


    console.log("Hola");
    
    // 2. Verificar si es null o si existe
    if (obtenerUsuarioSesion() != null) {
    
        
    document.querySelector(".Perfil").style.display = "flex";
    document.querySelector(".InicioSesion").style.display = "none";
    document.querySelector(".Registrar").style.display = "none";
    AgregarInformacionUsuario(false,null)
    document.querySelector(".actuala").textContent = "Perfil"
        console.log("No es nullo");
        EbanistaOCliente()
    } else {
       
    document.querySelector(".Perfil").style.display = "none";
    document.querySelector(".InicioSesion").style.display = "flex";
    document.querySelector(".Registrar").style.display = "none";
        // Opcional: window.location.href = "login.html"; // Redirigir si no está logueado
    console.log("Es nullo");
    
    }
});



/* ==========================================================================
12. Referencias DOM - Edición de Perfil
========================================================================== */

const errorNombre2 = document.getElementById("errorNombre2");
const nombreInput2 = document.getElementById("NombreInput2");

const errorApellido2 = document.getElementById("errorApellido2");
const apellidoInput2 = document.getElementById("ApellidoInput2");

const errorCorreo3 = document.getElementById("errorCorreo3");
const correoInput3 = document.getElementById("CorreoInput3");

const errorContrasena3 = document.getElementById("errorContraseña3");
const contrasenaInput3 = document.getElementById("ContraseñaInput3");

const errorFecha2 = document.getElementById("errorFecha2");
const fechaInput2 = document.getElementById("FechaInput2");

const errorExperiencia2 = document.getElementById("errorExperiencia2");
const experienciaInput2 = document.getElementById("AniosInput2");

const errorSobreMi2 = document.getElementById("errorSobreMi2");
const sobreMiInput2 = document.getElementById("SobreMiInput2");


/* ==========================================================================
13. Validaciones - Edición de Perfil
========================================================================== */

function validarNombreEditar() {
    const nombre = nombreInput2.value.trim();

    if (nombre === "") {
        mostrarError(nombreInput2, errorNombre2, "Campo obligatorio");
        return false;
    }

    mostrarExito(nombreInput2, errorNombre2);
    return true;
}

nombreInput2.addEventListener("input", validarNombreEditar);


function validarApellidoEditar() {
    const apellido = apellidoInput2.value.trim();

    if (apellido === "") {
        mostrarError(apellidoInput2, errorApellido2, "Campo obligatorio");
        return false;
    }

    mostrarExito(apellidoInput2, errorApellido2);
    return true;
}

apellidoInput2.addEventListener("input", validarApellidoEditar);


function validarCorreoEditar() {
    const correo = correoInput3.value.trim();

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo === "") {
        mostrarError(correoInput3, errorCorreo3, "El correo electrónico es obligatorio");
        return false;
    }

    if (!regexCorreo.test(correo)) {
        mostrarError(correoInput3, errorCorreo3, "Ingrese un formato de correo válido");
        return false;
    }

    mostrarExito(correoInput3, errorCorreo3);
    return true;
}

correoInput3.addEventListener("input", validarCorreoEditar);


function validarContrasenaEditar() {
    const contrasena = contrasenaInput3.value.trim();

    if (contrasena === "") {
        mostrarError(contrasenaInput3, errorContrasena3, "La contraseña es obligatoria");
        return false;
    }

    mostrarExito(contrasenaInput3, errorContrasena3);
    return true;
}

contrasenaInput3.addEventListener("input", validarContrasenaEditar);


function validarFechaEditar() {
    const fechaValue = fechaInput2.value.trim();

    if (fechaValue === "") {
        mostrarError(fechaInput2, errorFecha2, "La fecha de nacimiento es obligatoria");
        return false;
    }

    const regexFecha = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

    if (!regexFecha.test(fechaValue)) {
        mostrarError(fechaInput2, errorFecha2, "El formato debe ser AAAA-MM-DD");
        return false;
    }

    const [ano, mes, dia] = fechaValue.split("-").map(Number);

    const fechaVerificacion = new Date(ano, mes - 1, dia);

    if (
        fechaVerificacion.getFullYear() !== ano ||
        fechaVerificacion.getMonth() + 1 !== mes ||
        fechaVerificacion.getDate() !== dia
    ) {
        mostrarError(fechaInput2, errorFecha2, "La fecha introducida no existe");
        return false;
    }

    const hoy = new Date();

    let edad = hoy.getFullYear() - ano;

    const mesDiferencia = hoy.getMonth() - (mes - 1);

    if (
        mesDiferencia < 0 ||
        (mesDiferencia === 0 && hoy.getDate() < dia)
    ) {
        edad--;
    }

    if (edad < 18) {
        mostrarError(fechaInput2, errorFecha2, "Debes ser mayor de 18 años");
        return false;
    }

    mostrarExito(fechaInput2, errorFecha2);
    return true;
}

fechaInput2.addEventListener("input", validarFechaEditar);


function validarExperienciaEditar() {
    const numeroValue = experienciaInput2.value.trim();

    if (numeroValue === "") {
        mostrarError(experienciaInput2, errorExperiencia2, "El número es obligatorio");
        return false;
    }

    const numero = Number(numeroValue);

    if (numero > 100) {
        mostrarError(experienciaInput2, errorExperiencia2, "El número no puede ser mayor a 100");
        return false;
    }

    mostrarExito(experienciaInput2, errorExperiencia2);
    return true;
}

experienciaInput2.addEventListener("input", validarExperienciaEditar);


document.getElementById("AniosInput2").addEventListener("keydown", (e) => {
    const invalidChars = ['e', 'E', '+', '-', '.'];

    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});


function validarSobreMiEditar() {
    const sobreMi = sobreMiInput2.value.trim();

    if (sobreMi === "") {
        mostrarError(sobreMiInput2, errorSobreMi2, "El campo es obligatorio");
        return false;
    }

    mostrarExito(sobreMiInput2, errorSobreMi2);
    return true;
}

sobreMiInput2.addEventListener("input", validarSobreMiEditar);












function ActualizarDatos() {

    const esNombreValido = validarNombreEditar();
    const esApellidoValido = validarApellidoEditar();
    const esCorreoValido = validarCorreoEditar();
    const esContrasenaValida = validarContrasenaEditar();
    const esFechaValida = validarFechaEditar();
    const esExperienciaValida = validarExperienciaEditar();
    const esSobreMiValido = validarSobreMiEditar();

    if (!esNombreValido ||!esApellidoValido ||!esCorreoValido ||!esContrasenaValida ||!esFechaValida ||!esExperienciaValida ||!esSobreMiValido) {
        console.log("Error");
        return;
    }

    let usuarioRegistrado = obtenerUsuarioSesion();

    usuarioRegistrado.nombre = nombreInput2.value.trim();
    usuarioRegistrado.apellido = apellidoInput2.value.trim();
    usuarioRegistrado.correo = correoInput3.value.trim();
    usuarioRegistrado.contrasena = contrasenaInput3.value.trim();
    usuarioRegistrado.fechaNacimiento = fechaInput2.value.trim();
    usuarioRegistrado.aniosExperiencia = experienciaInput2.value.trim();
    usuarioRegistrado.sobreMi = sobreMiInput2.value.trim();


    usuarioRegistrado.album[0].foto =
        document.querySelector(".ContenedorFotoPerfil").children[1].value;
    BorrarUsuario();
    guardarUsuarioSesion(usuarioRegistrado);
    ActualizarUsuariosSistema(usuarioRegistrado)
    cargarDatos()
    AgregarInformacionUsuario(false, null);
    mostrarCambio(document.getElementById("cambioEfectuado"))
    console.log("Datos actualizados correctamente");
}

function ConfirmacionCerrar(){
    document.querySelector(".ConfirmacionCerrarSesion").style.display = "flex";
document.querySelector(".Funcionalidades").classList.add("Desabilitado");
document.querySelector(".ConfirmacionCerrarSesion").classList.add("Habilitado");
}

function ConfirmacionCerrarAtras(){
    document.querySelector(".ConfirmacionCerrarSesion").style.display = "none";
document.querySelector(".Funcionalidades").classList.remove("Desabilitado");
document.querySelector(".ConfirmacionCerrarSesion").classList.remove("Habilitado");
}

function ConfirmacionBorrar(){
    document.querySelector(".ConfirmacionBorrarCuenta").style.display = "flex";
document.querySelector(".Funcionalidades").classList.add("Desabilitado");
document.querySelector(".ConfirmacionBorrarCuenta").classList.add("Habilitado");
}

function ConfirmacionBorrarAtras(){
    document.querySelector(".ConfirmacionBorrarCuenta").style.display = "none";
document.querySelector(".Funcionalidades").classList.remove("Desabilitado");
document.querySelector(".ConfirmacionBorrarCuenta").classList.remove("Habilitado");
}