let cotizaciones;
let usuarios;
let solicitudes;
let respuestas;

const STORAGE_USUARIO = "techevents_usuario";
const STORAGE_USUARIOS_ALMACENADOS = "techevents_usuarios_Almacenados";
const STORAGE_COTIZACIONES = "techevents_cotizaciones";
const STORAGE_SOLICITUDES = "techevents_solicitudes";
const STORAGE_RESPUESTAS = "techevents_respuestas";

async function cargarDatos() {
    try {

        const respuesta = await fetch("json/usuarios.json");
        const respuesta2 = await fetch("json/solicitudes.json");
        const respuesta3 = await fetch("json/cotizaciones.json");
        const respuesta4 = await fetch("json/respuestas.json");


        



        // ===================== USUARIOS =====================
        usuarios = obtenerUsuariosAlmacenados();

        if (!usuarios) {
            const usuariosBase = await respuesta.json();
            CargarUsuariosBase(usuariosBase);
            usuarios = usuariosBase;
        }


        // ===================== SOLICITUDES =====================

        solicitudes = obtenerSolicitudesAlmacenadas();

        if (!solicitudes) {
            const solicitudesBase = await respuesta2.json();
            CargarSolicitudesBase(solicitudesBase);
            solicitudes = solicitudesBase;
        }


        // ===================== COTIZACIONES =====================

        cotizaciones = obtenerCotizacionesAlmacenadas();

        if (!cotizaciones) {
            const cotizacionesBase = await respuesta3.json();
            CargarCotizacionesBase(cotizacionesBase);
            cotizaciones = cotizacionesBase;
        }

        // ===================== RESPUESTAS =====================

        respuestas = obtenerRespuestasAlmacenadas();

        if (!respuestas) {
            const respuestasBase = await respuesta4.json();
            CargarRespuestasBase(respuestasBase);
            respuestas = respuestasBase;
        }

        console.log("Datos cargados exitosamente");

    } catch (error) {
        console.error("ERROR AL CARGAR DATOS", error);
    }
}


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


/* ==========================================================================
Cotizaciones
========================================================================== */

function CargarCotizacionesBase(cotizacionesBase) {
    localStorage.setItem(STORAGE_COTIZACIONES, JSON.stringify(cotizacionesBase));
}

function obtenerCotizacionesAlmacenadas() {
    const cotizacionesGuardadas = localStorage.getItem(STORAGE_COTIZACIONES);

    if (!cotizacionesGuardadas) {
        return null;
    }

    return JSON.parse(cotizacionesGuardadas);
}


/* ==========================================================================
Solicitudes
========================================================================== */

function CargarSolicitudesBase(solicitudesBase) {
    localStorage.setItem(STORAGE_SOLICITUDES, JSON.stringify(solicitudesBase));
}

function obtenerSolicitudesAlmacenadas() {
    const solicitudesGuardadas = localStorage.getItem(STORAGE_SOLICITUDES);

    if (!solicitudesGuardadas) {
        return null;
    }

    return JSON.parse(solicitudesGuardadas);
}


/* ==========================================================================
Respuestas
========================================================================== */

function CargarRespuestasBase(respuestasBase) {
    localStorage.setItem(STORAGE_RESPUESTAS, JSON.stringify(respuestasBase));
}

function obtenerRespuestasAlmacenadas() {
    const respuestasGuardadas = localStorage.getItem(STORAGE_RESPUESTAS);

    if (!respuestasGuardadas) {
        return null;
    }

    return JSON.parse(respuestasGuardadas);
}