let UsuarioActivo = null;
const errorCorreo = document.getElementById("errorCorreo");
const correoInput = document.getElementById("emailInput");


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

//Validar correo
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


const errorContrasena = document.getElementById("errorContraseña");
const contrasenaInput = document.getElementById("ContraseñaInput");

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

const errorNombre = document.getElementById("errorNombre");
const nombreInput = document.getElementById("NombreInput");

//Validar contraseña
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

const errorApellido = document.getElementById("errorApellido");
const apellidoeInput = document.getElementById("ApellidoInput");

//Validar contraseña
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
const errorCorreo2 = document.getElementById("errorCorreo2");
const correo2Input = document.getElementById("Correo2Input");

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

const errorContrasena2 = document.getElementById("errorContraseña2");
const contrasenaInput2 = document.getElementById("ContraseñaInput2");

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


const errorFechaNac = document.getElementById("errorFecha");
const fechaNacInput = document.getElementById("FechaInput");

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




const errorNumero = document.getElementById("errorExperiencia");
const numeroInput = document.getElementById("AniosInput");

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



const errorSobreMi = document.getElementById("errorSobreMi");
const SobreMiInput = document.getElementById("SobreMiInput");

//Validar contraseña
function validarSobremi() {
    // 1. Obtener el valor sin espacios vacíos en los extremos
    const Sobre = SobreMiInput.value.trim();

    // 2. Verificar si está vacío
    if (Sobre === "") {
        mostrarError(SobreMiInput, errorSobreMi, "La contraseña es obligatoria");
        return false;
    }

    // 3. Si tiene texto, mostrar éxito y retornar true
    mostrarExito(SobreMiInput, errorSobreMi);
    return true;
}

SobreMiInput.addEventListener("input",validarSobremi);

apellidoeInput.addEventListener("input",validarapellido);

contrasenaInput.addEventListener("input",validarContrasena);

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


function Registro_Confirmacion(){

    const esNombreValido = validarNombre();
    const esApellidoValido = validarapellido();
    const esCorreoValido = validarCorreo2();
    const esContrasenaValido = validarContrasena2();
    const esFechaValida = validarFechaNac();
    const esNumeroValido = validarNumero();
    const esSobreMiValido = validarSobremi();

    // 2. Verificar que NINGUNA validación haya fallado
    if (!esNombreValido || !esApellidoValido || !esCorreoValido || !esContrasenaValido || !esFechaValida || !esNumeroValido || !esSobreMiValido) {
        console.log("Error");
        
        return; // Detiene la ejecución si hay errores en pantalla
    }
    let tipo = ""
    let nombre = nombreInput.value.trim()
    let apellido = apellidoeInput.value.trim()
    let correo = correo2Input.value.trim()
    let constrasena = contrasenaInput2.value.trim()
    let fecha = fechaNacInput.value.trim()
    let experiencia = numeroInput.value.trim()
    let sobreMi = SobreMiInput.value.trim()
    if (document.getElementById("Ebanista").checked) {
    tipo = "ebanista"
    } else {
    tipo = "cliente"
    }

    console.log("=== DATOS DE REGISTRO CAPTURADOS ===");
    console.log({
        tipo: tipo,
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contrasena: constrasena,
        fecha_nacimiento: fecha,
        experiencia_anios: experiencia,
        sobre_mi: sobreMi
    });
    console.log("====================================");
    
document.querySelector(".ConfirmacionSesion").style.display = "flex";
document.querySelector(".InicioSesion").classList.add("Desabilitado");
document.querySelector(".ConfirmacionSesion").classList.add("Habilitado");


}


function LimpiarCampos(){
        nombreInput.value = ""
    apellidoeInput.value = ""
    correo2Input.value = ""
    contrasenaInput2.value = ""
    fechaNacInput.value = ""
    numeroInput.value = ""
    SobreMiInput.value = ""
    Registro_Confirmacion()
}


function InicioSesion_Perfil(){

    document.querySelector(".Perfil").style.display = "flex";
    document.querySelector(".InicioSesion").style.display = "none";
    document.querySelector(".actuala").textContent = "Perfil"
    AgregarInformacionUsuario(false, null);
    document.querySelector(".ConfirmacionSesion").style.display = "none";
    document.querySelector(".InicioSesion").classList.add("Habilitado");
document.querySelector(".ConfirmacionSesion").classList.add("Desabilitado");
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

function ValidarSesion(correo,contrasena){

for (const element of usuarios) {
    if (correo === element.correo && contrasena === element.contrasena) {
    UsuarioActivo = element;
    return true
    } 
}

SesionDenegada()
    return false
    

}

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
agregarAlbum()
AgregarPropuestas()
    } else {
document.getElementById("ImagenPerfil").src = UsuarioActivo.album[0].foto;
document.querySelector(".Nombre").textContent = UsuarioActivo.nombre +" "+ UsuarioActivo.apellido;
document.querySelector(".Rol").textContent = UsuarioActivo.tipoUsuario;
document.querySelector(".Correo").textContent = UsuarioActivo.correo;
document.querySelector(".ContenedorNombreO").children[1].value = UsuarioActivo.nombre;
document.querySelector(".ContenedorApellidoO").children[1].value = UsuarioActivo.apellido;
document.querySelector(".ContenedorCorreoO").children[1].value = UsuarioActivo.correo;
document.querySelector(".ContenedorFechaO").children[1].value = UsuarioActivo.fechaNacimiento;
document.querySelector(".ContenedorExperienciaO").children[1].value =  parseInt(UsuarioActivo.aniosExperiencia);
document.querySelector(".ContenedorSobreMiO").children[1].textContent =  UsuarioActivo.sobreMi;
agregarAlbum()
AgregarPropuestas()
    }

}





document.addEventListener("DOMContentLoaded", () => {
    // 1. Intentar obtener el usuario activo (convertido de texto a objeto)
    //NO va a servir la variable por mas que la comparta entre js igual vuelve a null

    console.log("Hola");
    
    // 2. Verificar si es null o si existe
    if (UsuarioActivo != null) {
        // AQUÍ VA TU LÓGICA: El usuario está activo, déjamelo a mí
        
    document.querySelector(".Perfil").style.display = "flex";
    document.querySelector(".InicioSesion").style.display = "none";
    document.querySelector(".Registrar").style.display = "none";
    AgregarInformacionUsuario(false,null)
        console.log("No es nullo");
        
    } else {
        // 3. Qué hacer si es null (Usuario no logueado)
    document.querySelector(".Perfil").style.display = "none";
    document.querySelector(".InicioSesion").style.display = "flex";
    document.querySelector(".Registrar").style.display = "none";
        // Opcional: window.location.href = "login.html"; // Redirigir si no está logueado
    console.log("Es nullo");
    
    }
});


function agregarAlbum(){
    let i = 0;
    for (const element of UsuarioActivo.album) {
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
                <button class="btnEliminarMueble">
                    Eliminar
                </button>
            </div>
        </div>
    </div>
`;
    }



}


function AgregarPropuestas(){

for (const solicitud of solicitudes) {
    if (solicitud.idEbanista === UsuarioActivo.idUsuario) {
        
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

    
    
}

function BuscarUsuario(id){
    for (const element of usuarios) {
        if (element.idUsuario === id) {
            return element;
        }
    }
}


function Perfil_Sesion() {
    document.querySelector(".InicioSesion").style.display = "flex";
    document.querySelector(".Perfil").style.display = "none";
    UsuarioActivo = null;
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
        <p class="Explicativo">Envía tu solicitud al ebanista.</p>
        <p class="Aviso">Los campos marcados con * son obligatorios</p>

        <section class="seccionFormulario">
          <h3 class="TituloSeccion">Detalle</h3>
          <p id="DeUsuario">Del usuario: <strong>${BuscarUsuario(datos.idUsuario).nombre}</strong></p>
          <p id="ParaEbanista">Para el ebanista: <strong>${BuscarUsuario(datos.idEbanista).nombre}</strong></p>
        </section>

        <section class="seccionFormulario">
          <h3 class="TituloSeccion">1. Información del mueble</h3>

          <div class="TipoMueble">
            <label for="tipoMueble">Tipo de mueble *</label>
            <select id="tipoMueble" required>
              <option value="">Seleccione una opción</option>
              <option value="Cocina" ${datos.tipoMueble === 'Cocina' ? 'selected' : ''}>Cocina</option>
              <option value="Closet" ${datos.tipoMueble === 'Closet' ? 'selected' : ''}>Closet</option>
              <option value="Escritorio" ${datos.tipoMueble === 'Escritorio' ? 'selected' : ''}>Escritorio</option>
              <option value="Mesa" ${datos.tipoMueble === 'Mesa' ? 'selected' : ''}>Mesa</option>
              <option value="Estantería" ${datos.tipoMueble === 'Estantería' ? 'selected' : ''}>Estantería</option>
              <option value="Otro" ${datos.tipoMueble === 'Otro' ? 'selected' : ''}>Otro</option>
            </select>
          </div>

          <div class="DescripcionDetallada">
            <label for="descripcion">Descripción detallada *</label>
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
              <label for="telefono">Teléfono *</label>
              <input type="tel" id="telefono" placeholder="8888-8888" required value="${datos.telefono}">
            </div>

            <div class="CorreoForm">
              <label for="correo">Correo electrónico *</label>
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



function InicioSesion_Registro() {
    document.querySelector(".Registrar").style.display = "grid";
    document.querySelector(".InicioSesion").style.display = "none";
    
    
}



function Registro_InicioSesion() {
    document.querySelector(".InicioSesion").style.display = "flex";
    document.querySelector(".Registrar").style.display = "none";
}

function Registro_Perfil() {
    document.querySelector(".Perfil").style.display = "flex";
    document.querySelector(".Registrar").style.display = "none";
    document.querySelector(".actuala").textContent = "Perfil"
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