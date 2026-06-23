const cotizaciones = [
  {
    "idCotizacion": 1,
    "idEbanista": 1,
    "titulo": "Mesa de roble macizo",
    "categoria": "Mesa",
    "estilo": "Clasico",
    "descripcion": "Mesa de comedor para 6 personas en roble macizo con acabado natural.",
    "precio": 200000,
    "imagen": "assets/images/Juego de mesa.webp"
  },
  {
    "idCotizacion": 2,
    "idEbanista": 2,
    "titulo": "Silla minimalista de nogal",
    "categoria": "Silla",
    "estilo": "Minimalista",
    "descripcion": "Silla ergonómica de nogal con acabado mate.",
    "precio": 85000,
    "imagen": "assets/images/Juego de mesa.webp"
  },
  {
    "idCotizacion": 3,
    "idEbanista": 1,
    "titulo": "Closet moderno de melamina",
    "categoria": "Closet",
    "estilo": "Moderno",
    "descripcion": "Closet de 3 puertas corredizas con espejos y cajoneras internas.",
    "precio": 350000,
    "imagen": "assets/images/Juego de mesa.webp"
  },
  {
    "idCotizacion": 4,
    "idEbanista": 3,
    "titulo": "Cama matrimonial rústica",
    "categoria": "Cama",
    "estilo": "Rustico",
    "descripcion": "Cama matrimonial elaborada en madera sólida con acabado envejecido.",
    "precio": 275000,
    "imagen": "assets/images/Juego de mesa.webp"
  },
  {
    "idCotizacion": 5,
    "idEbanista": 2,
    "titulo": "Estantería flotante moderna",
    "categoria": "Estanteria",
    "estilo": "Moderno",
    "descripcion": "Estantería de pared con diseño minimalista para sala u oficina.",
    "precio": 95000,
    "imagen": "assets/images/Juego de mesa.webp"
  }
]

const usuarios = [
  {
    "idUsuario": 1,
    "tipoUsuario": "ebanista",
    "nombre": "Juan",
    "apellido": "Pérez",
    "correo": "juanperez@gmail.com",
    "contrasena": "Eloro",
    "fechaNacimiento": "1990-05-15",
    "aniosExperiencia": 8,
    "sobreMi": "Ebanista especializado en muebles de cocina y salas personalizadas.",
    "album": [
      {
        "nombre": "FotoPerfil",
        "foto": "assets/images/Pedro_Sánchez_2020_(portrait).jpg"
      },
      {
        "nombre": "Mesa de comedor moderna",
        "foto": "assets/images/images.jpg"
      }
    ]
  },
  {
    "idUsuario": 2,
    "tipoUsuario": "ebanista",
    "nombre": "María",
    "apellido": "Gómez",
    "correo": "mariagomez@gmail.com",
    "contrasena": "MaderaViva20",
    "fechaNacimiento": "1988-11-22",
    "aniosExperiencia": 12,
    "sobreMi": "Especialista en estructuras de madera techos y restauración de muebles antiguos.",
    "album": [
      {
        "nombre": "FotoPerfil",
        "foto": "assets/images/FotoPerfil1.jpg"
      },
      {
        "nombre": "Biblioteca empotrada",
        "foto": "assets/images/images.jpg"
      }
    ]
  },
  {
    "idUsuario": 3,
    "tipoUsuario": "ebanista",
    "nombre": "Carlos",
    "apellido": "Mendoza",
    "correo": "carlosmendoza@gmail.com",
    "contrasena": "DisenoArs3",
    "fechaNacimiento": "1995-03-05",
    "aniosExperiencia": 5,
    "sobreMi": "Diseño de espacios funcionales y fabricación de mobiliario minimalista.",
    "album": [
      {
        "nombre": "FotoPerfil",
        "foto": "assets/images/FotoPerfil2.jpg"
      },
      {
        "nombre": "Mueble de TV modular",
        "foto": "assets/images/images.jpg"
      }
    ]
  }
];



const solicitudes = [
  {
    "idSolicitud": 1,
    "idUsuario": 1,
    "idEbanista": 1,

    "tipoMueble": "Cocina",
    "descripcion": "Cocina moderna con acabado en porcelanato, espacio para horno empotrado y múltiples gavetas.",

    "dimensiones": {
      "alto": 240,
      "ancho": 350,
      "profundidad": 60
    },

    "presupuesto": 850000,
    "presupuestoRecomendado": 2520,
    "fechaEntrega": "2026-08-15",

    "telefono": "8888-1111",
    "correo": "maria@gmail.com",

    "observaciones": "Deseo colores claros y tiradores ocultos.",

    "estado": "Pendiente",
    "fechaSolicitud": "2026-06-18"
  },

  {
    "idSolicitud": 2,
    "idUsuario": 1,
    "idEbanista": 1,

    "tipoMueble": "Closet",
    "descripcion": "Closet para habitación principal con puertas corredizas y espejo integrado.",

    "dimensiones": {
      "alto": 220,
      "ancho": 280,
      "profundidad": 65
    },

    "presupuesto": 450000,
    "presupuestoRecomendado": 2520,
    "fechaEntrega": "2026-07-30",

    "telefono": "8888-2222",
    "correo": "carlos@gmail.com",

    "observaciones": "Necesito espacio para ropa larga y zapatera.",

    "estado": "Respondida",
    "fechaSolicitud": "2026-06-15"
  },

  {
    "idSolicitud": 3,
    "idUsuario": 1,
    "idEbanista": 1,

    "tipoMueble": "Escritorio",
    "descripcion": "Escritorio para oficina en casa con cajones laterales y espacio para dos monitores.",

    "dimensiones": {
      "alto": 75,
      "ancho": 180,
      "profundidad": 70
    },

    "presupuesto": 180000,
    "presupuestoRecomendado": 2520,
    "fechaEntrega": "2026-07-10",

    "telefono": "8888-3333",
    "correo": "andrea@gmail.com",

    "observaciones": "Preferiblemente en madera de melina con acabado oscuro.",

    "estado": "Aceptada",
    "fechaSolicitud": "2026-06-10"
  }
]