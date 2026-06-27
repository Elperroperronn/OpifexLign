// 1. Declaramos las variables globales para poder acceder a ellas desde ambas funciones
let mqlGlobal = null;
let funcionListenerGlobal = null;

function obtenerUsuarioSesion() {
    const usuarioGuardado = localStorage.getItem(STORAGE_USUARIO)
    if (!usuarioGuardado) {
        return null
    }
    return JSON.parse(usuarioGuardado)
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





const matrizFotos = [
    { src: "assets/images/MuebleOpifex.jpeg", alt: "Mueble con elementos con tematica de OpifexLign" },
    { src: "assets/images/OpifexLignPapel_upscaled.png", alt: "Logo y nombre de OpifexLign impreso en papel carta" }
];

let indiceActual = 0;

function rotarFoto() {

    indiceActual++;


    if (indiceActual >= matrizFotos.length) {
        indiceActual = 0; 
    }


    const imagenHTML = document.getElementById("ImagenHero1");


    const fotoSiguiente = matrizFotos[indiceActual];


    imagenHTML.src = fotoSiguiente.src;
    imagenHTML.alt = fotoSiguiente.alt;
}

const descripcionJson = {
    nombre: "OpefixLign",
    descripcion: "OpefixLign es un ecosistema digital creado para unir la maestría artesanal con la demanda del mercado moderno. Funcionamos como un punto de encuentro donde los ebanistas transforman su taller en una vitrina global, permitiéndoles comercializar piezas exclusivas."
};

function cargarDescripcion() {
    const descripcionHtml = document.getElementById("OpifexLignDescripcion");
    
    if (descripcionHtml) {
        descripcionHtml.textContent = descripcionJson.descripcion;
    }
}

// 2. Corregido: Se pasa la función sin paréntesis ()
document.addEventListener("DOMContentLoaded", ()=> {
  
  cargarDescripcion()
if (obtenerUsuarioSesion() != null) {
        // AQUÍ VA TU LÓGICA: El usuario está activo, déjamelo a mí
        

    document.getElementById("idRegistro").textContent = "Perfil"

        
    } else {

    console.log("Es nullo");
    
    }

});
