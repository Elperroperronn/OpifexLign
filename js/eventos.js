

// 1. Declaramos las variables globales para poder acceder a ellas desde ambas funciones
let mqlGlobal = null;
let funcionListenerGlobal = null;



function InicioSesion_Registro() {
    document.querySelector(".Registrar").style.display = "grid";
    document.querySelector(".InicioSesion").style.display = "none";
    
    
}

function InicioSesion_Perfil() {
    document.querySelector(".Perfil").style.display = "flex";
    document.querySelector(".InicioSesion").style.display = "none";
    document.querySelector(".actuala").textContent = "Perfil"
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

function Perfil_Registro() {
    document.querySelector(".Registrar").style.display = "grid";
    document.querySelector(".Perfil").style.display = "none";
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

function Hero1_Hero2() {
  // Nota el punto "." antes de Registrar, funciona como en CSS
  const elemento = document.querySelector(".InicioSesion");
  const elementoPadre = document.querySelector(".Registrar");

  if (elemento.style.display === "grid") {
    elemento.style.display = "none";
  } else {
    elemento.style.display = "grid"; // Cambié este a "flex" para que se muestre
  }

  elementoPadre.style.display = "none";
}

// Definimos la media query de forma global
const esMovil = window.matchMedia('(max-width: 1612px)'); 
function Hero1_Hero2() { 
  const hero1 = document.querySelector(".HeroSection1"); 
  const hero2 = document.querySelector(".HeroSection2"); 
  
  hero1.style.display = "none"; 
  hero2.style.display = "flex"; 

  controlarMediaScroll();
} 

function Hero2_Hero1() { 
  const hero1 = document.querySelector(".HeroSection1"); 
  const hero2 = document.querySelector(".HeroSection2"); 
  
  hero2.style.display = "none"; 
  hero1.style.display = "flex"; 

  removerMediaScroll();
}

function controlarMediaScroll() {
  mqlGlobal = window.matchMedia('(max-width: 1612px)');

  funcionListenerGlobal = (evento) => {
    if (evento.matches) {
      // 1. Si mide menos de 1612px, AÑADIMOS la clase
      document.documentElement.classList.add('modo-movil');
    } else {
      // CORRECCIÓN: Si mide más de 1612px, QUITAMOS la clase
      document.documentElement.classList.remove('modo-movil');
    }
  };

  mqlGlobal.addEventListener('change', funcionListenerGlobal);
  funcionListenerGlobal(mqlGlobal);
}

function removerMediaScroll() {
  if (mqlGlobal && funcionListenerGlobal) {
    mqlGlobal.removeEventListener('change', funcionListenerGlobal);
    
    // CORRECCIÓN: Al apagar el sistema, aseguramos QUITAR la clase por completo
    document.documentElement.classList.remove('modo-movil');
    
    mqlGlobal = null;
    funcionListenerGlobal = null;
    
    console.log("Listener removido con éxito.");
  }
}



function MostrarFiltros(){
  const seccionFiltros = document.querySelector('.Filtros');
  const boton = document.querySelector('.btnMostrar');
  seccionFiltros.classList.toggle('mostrar');

  if (boton.textContent==="Mostrar filtros") {
    boton.textContent = "Ocultar filtros"
  } else {
    boton.textContent = "Mostrar filtros"
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

function VerPropuestaCompleta(){
  document.querySelector(".FormularioSolicitud").style.display = "flex";
  document.querySelector(".Perfil").classList.add("Desabilitado");
  document.querySelector(".FormularioSolicitud").classList.add("Habilitado");
  
}

function CerrarPropuestaCompleta(){
  document.querySelector(".FormularioSolicitud").style.display = "none";
  document.querySelector(".Perfil").classList.remove("Desabilitado");
  document.querySelector(".FormularioSolicitud").classList.remove("Habilitado");
}
  
