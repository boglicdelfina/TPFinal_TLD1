// noticias hardcodeadas (se mostrarán junto con las guardadas en localStorage)
let noticias = [

    // ─── TECNOLOGÍA ───────────────────────────────────────────
    {
        titulo: "Un estudiante sin título universitario resuelve con ChatGPT un problema matemático que mantuvo en jaque a expertos durante 60 años",
        descripcion: "La IA encontró en 80 minutos un enfoque que ningún humano había probado. Los matemáticos admiten: 'Todos partimos de una premisa equivocada'.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRb3sPcO4dEsfjX36uzZv0tG6AnJTwTuu-Xw&s",
        categoria: "tecnologia"
    },
    {
        titulo: "Apple presenta gafas de realidad aumentada que reemplazan al celular y generan el mayor debate ético de la década",
        descripcion: "Las nuevas Vision Lens permiten grabar, identificar rostros y traducir conversaciones en tiempo real. Gobiernos de 12 países ya analizan prohibirlas en espacios públicos. 'El problema no es la tecnología, es que nadie leyó los términos y condiciones', ironiza un experto en privacidad.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/5/51/Apple_Vision_Pro_with_Solo_Knit_Band.jpg",
        categoria: "tecnologia"
    },
    {
        titulo: "Una IA detectó un cáncer de páncreas en fase 0 que tres oncólogos habían descartado como 'sombra en la placa'",
        descripcion: "El modelo, entrenado con más de 4 millones de imágenes médicas, marcó la anomalía con un 94% de certeza. El paciente fue operado a tiempo. El médico que ignoró la alerta pidió licencia. El hospital ya usa la IA como segunda opinión obligatoria.",
        imagen: "https://metaverso.pro/wp-content/uploads/2024/06/integracion-de-IA-en-psicoterapia-5.jpg",
        categoria: "tecnologia"
    },
    {
        titulo: "Tesla lanza un robot doméstico por 12.000 dólares y en 48 horas agota el stock mundial: 'No sé si tengo miedo o quiero uno'",
        descripcion: "Optimus Gen 3 puede doblar ropa, cargar el lavavajillas y pasear al perro. En TikTok ya hay videos virales de personas enseñándole a bailar cumbia. Elon Musk dice que en 2028 habrá más robots que humanos trabajando en fábricas.",
        imagen: "https://qz.com/cdn-cgi/image/width=1920,quality=85,format=auto/https://assets.qz.com/media/GettyImages-2211638677.jpg",
        categoria: "tecnologia"
    },

    // ─── ENTRETENIMIENTO ──────────────────────────────────────
    {
        titulo: "Top 5 mejores looks de la Met Gala 2026 según críticos de Vogue",
        descripcion: "Del esqueleto enjoyado de Beyoncé al efecto 'mármol líquido' de Heidi Klum, pasando por Ayo Edebiri con un vestido que latía al ritmo de su corazón. Los críticos de Vogue eligieron los cinco outfits que convirtieron la alfombra roja en una galería de arte viviente.",
        imagen: "https://ew.com/thmb/5p-xhIw9L3HLUuUbmE3XXKOeMeI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Sabrina-Carpenter-Jordan-Roth-Lisa-Met-Gala-050426-483bed10e2ae42c191ad2853afd3e822.jpg",
        categoria: "entretenimiento"
    },
    {
        titulo: "La serie más vista de Netflix en 2026 fue escrita completamente por una IA y nadie lo notó hasta el capítulo final",
        descripcion: "Doce episodios, 340 millones de reproducciones, cuatro memes globales y un final que partió Twitter al medio. Recién en los créditos del último capítulo apareció: 'Guion generado con asistencia de IA'. El debate sobre la creatividad artificial nunca fue tan incómodo.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEaLtma2j-bYsP-DR0nWRmzLGYHv1hsUxkQ&s",
        categoria: "entretenimiento"
    },
    {
        titulo: "Daddy Yankee anuncia su regreso definitivo con un álbum grabado en Buenos Aires: 'Argentina me devolvió las ganas'",
        descripcion: "Dos años después de su retiro, el Rey del Reggaetón confirmó 14 canciones nuevas con colaboraciones que incluyen a Bizarrap, Nathy Peluso y un artista sorpresa que 'nadie en el mundo se espera'. La preventa de entradas para el River colapsó en 11 minutos.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuCeHE35YsMuLY5CJJ7VMnibk9-zOAhTBLgw&s",
        categoria: "entretenimiento"
    },
    {
        titulo: "Christopher Nolan termina de filmar su película más larga y los actores dicen que no entendieron el guion hasta el último día de rodaje",
        descripcion: "'Nos dio las páginas de a una, en sobres sellados, el mismo día de cada escena', contó Cillian Murphy. La película dura 4 horas y 20 minutos y ya tiene fecha de estreno en IMAX. Los cines que no tengan sala de 70mm quedaron afuera de la distribución.",
        imagen: "https://enter504.com/wp-content/uploads/2025/01/La-Odisea-de-Christopher-Nolan-Sicilia-rodaje.jpg",
        categoria: "entretenimiento"
    },

    // ─── POLÍTICA ─────────────────────────────────────────────
    {
        titulo: "Ministra de Economía envía mensaje por error al grupo de WhatsApp del gabinete y desata crisis interna",
        descripcion: "'Estos no saben nada, yo soluciono todo mientras ellos se sacan selfies', escribió la funcionaria pensando que hablaba en privado con su asesor. El Presidente pidió 'reflexión interna' y tres secretarios ya presentaron renuncias indeclinables.",
        imagen: "https://fotos.perfil.com//2022/10/24/900/0/sergio-massa-1441266.jpg",
        categoria: "politica"
    },
    {
        titulo: "Senado aprueba ley que obliga a los políticos a publicar sus gastos en tiempo real y la oposición vota en contra de su propio proyecto",
        descripcion: "La iniciativa había sido presentada hace dos años por los mismos bloques que ayer la rechazaron. 'El contexto cambió', explicó uno de los legisladores sin dar más detalles. En redes, el hashtag #ContextoCambió se convirtió en tendencia en menos de una hora.",
        imagen: "https://dptdsbsas.nyc3.digitaloceanspaces.com/wp-content/uploads/2024/01/15153025/ley-omnibus-1.jpg",
        categoria: "politica"
    },
    {
        titulo: "Cumbre del G20 termina sin acuerdo y los líderes mundiales se van sin foto oficial porque nadie se puso de acuerdo en dónde pararse",
        descripcion: "Cuatro horas de negociación para definir el orden del protocolo fotográfico. Al final, cada delegación publicó su propia foto en redes. El comunicado conjunto tiene 847 palabras y no menciona ninguno de los tres temas que se vinieron a discutir.",
        imagen: "https://s7g10.scene7.com/is/image/eitb/g20_hegoafrika?fmt=webp-alpha&qlt=80",
        categoria: "politica"
    },
    {
        titulo: "Alcalde instala cámaras de inteligencia artificial para detectar baches y el sistema multó por error a 200 vecinos por 'circular sobre superficie irregular'",
        descripcion: "La licitación costó 4 millones de dólares. En la primera semana detectó 12 baches y generó 200 infracciones automáticas a conductores que simplemente pasaron por encima de ellos. El municipio prometió revisar 'los parámetros del algoritmo' y devolver las multas.",
        imagen: "https://motor.flexicar.es/wp-content/uploads/2024/11/camaras-de-trafico-dgt1-1.jpg",
        categoria: "politica"
    },

    // ─── DEPORTES ─────────────────────────────────────────────
    {
        titulo: "Alcaraz enciende las alarmas tras confirmar su ausencia en Roland Garros, y afirmar que no sabe si jugará Wimbledon",
        descripcion: "El tenista murciano sufrió una recaída en la zona del antebrazo que lo había marginado varios meses en 2025. Los médicos recomiendan reposo total y el equipo guarda silencio sobre los plazos. Mientras tanto, Jannik Sinner ya suma tres títulos consecutivos y extiende su ventaja en la cima del ranking.",
        imagen: "https://estaticos-cdn.prensaiberica.es/clip/6c91762a-ac16-43c0-9d88-c23af0eb1b21_alta-libre-aspect-ratio_default_0.jpg",
        categoria: "deportes"
    },
    {
        titulo: "Argentina golea 4 a 0 a Brasil en el Monumental y Messi llora en el vestuario: 'Fue mi último clásico, quería terminar así'",
        descripcion: "Doblete de Lautaro, gol de Julian Álvarez y un golazo de tiro libre de Messi que hizo callar a todos los que pedían su retiro. Al final del partido, la cámara lo captó abrazado a Di María, los dos en silencio. Las redes no hablaron de otra cosa en 72 horas.",
        imagen: "https://tn.com.ar/resizer/v2/https%3A%2F%2Fthumbs.vodgc.net%2F1-419-sMcnTJ1654117059402-1654118307.jpg?auth=4707892e88f70ad3d600fdf583683966a151e5224a5cf78be1c392708a0c07d3&width=767",
        categoria: "deportes"
    },
    {
        titulo: "La NBA investiga si un equipo usó IA durante los partidos para predecir los tiros libres rivales y ajustar la defensa en tiempo real",
        descripcion: "Un analista filtró capturas de una tablet que los asistentes técnicos consultaban antes de cada sustitución. La liga no prohíbe explícitamente el uso de modelos predictivos durante el juego, pero tampoco lo permite. El comisionado prometió una respuesta antes del inicio de los playoffs.",
        imagen: "https://anccom.sociales.uba.ar/wp-content/uploads/sites/19/2020/03/IMG_0096-2.jpg",
        categoria: "deportes"
    },
    {
        titulo: "Ciclista amateur bate el récord de la Vuelta a España de Pogacar usando una bici impresa en 3D que pesa 3,8 kilos",
        descripcion: "Fabricada en un garaje de Mendoza con filamento de fibra de carbono, la bicicleta superó todos los controles de la UCI. Su creador, ingeniero mecánico de 34 años, rechazó una oferta millonaria de tres marcas y dijo que va a publicar los planos gratis en GitHub.",
        imagen: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/719/6-RUTAS-CICLISTAS-DE-CASTELLON-PARA-LOS-AMANTES-DEL-CICLISMO-1.jpg",
        categoria: "deportes"
    },

    // ─── CULTURA ──────────────────────────────────────────────
    {
        titulo: "Samanta Schweblin factura un millón de euros y los críticos todavía discuten si sus cuentos son geniales o perturbadores",
        descripcion: "La escritora argentina ganó el Premio Aena de Narrativa 2026, el más millonario de España, por su última colección de cuentos. El jurado habló de 'prosa hipnótica y mundos incómodos'. Los lectores, mientras tanto, siguen sin dormir después del tercer cuento.",
        imagen: "https://cdn.zendalibros.com/wp-content/uploads/2025/03/ivan_gimenez_-_seix_barral_02-scaled.jpg",
        categoria: "cultura"
    },
    {
        titulo: "El Museo del Prado exhibe por primera vez una obra de Frida Kahlo jamás mostrada al público y las entradas se agotan en 6 minutos",
        descripcion: "El cuadro estuvo 80 años en manos de una familia española que no sabía lo que tenía guardado en el altillo. Un tasador lo encontró durante una herencia. Los expertos calculan que vale entre 40 y 60 millones de dólares. La dueña dice que no lo vende.",
        imagen: "https://media.admagazine.com/photos/62dad7efef35b9d5f2a98871/16:9/w_2560%2Cc_limit/GettyImages-1125944655.jpg",
        categoria: "cultura"
    },
    {
        titulo: "Córdoba declara patrimonio cultural inmaterial al asado del domingo y la polémica sobre si el chimichurri va antes o después divide al país",
        descripcion: "La ordenanza fue aprobada por unanimidad. El problema llegó en el artículo 3, donde se especificaba el 'método tradicional de preparación'. Tres concejales renunciaron a la comisión redactora por diferencias sobre el punto de cocción del vacío. El debate sigue abierto.",
        imagen: "https://globalplay.ar/wp-content/uploads/2026/04/parrilla-madera-asado-asador.jpg",
        categoria: "cultura"
    },
    {
        titulo: "Murió a los 99 años el último bandoneón que tocó con Piazzolla y su funeral se convirtió en el concierto más emotivo del año",
        descripcion: "Rodolfo 'Pichuco' Ferreyra grabó más de 200 discos, tocó en 47 países y nunca aceptó un contrato exclusivo. 'La música no se le debe a nadie', decía. En el cementerio de La Chacarita, músicos de tres generaciones improvisaron durante cuatro horas. Nadie quería irse.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfb_cP9Pr9Q0fN80d2jhobC6elKKjaq1EWA&s",
        categoria: "cultura"
    },

    // ─── SALUD ────────────────────────────────────────────────
    {
        titulo: "Aumentan un 200% las consultas por ansiedad laboral entre jóvenes",
        descripcion: "Profesionales de la salud mental alertan sobre una 'generación quemada' antes de los 30. Los principales desencadenantes son la sobrecarga laboral, el home office sin límites y el miedo constante a ser reemplazado. 'No es falta de voluntad, es falta de aire', resume una psicóloga especializada.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeHcgQjyeO5CIs3XHD-jeO_ZWeB-ymg4CVQ&s",
        categoria: "salud"
    },
    {
        titulo: "Científicos argentinos desarrollan una vacuna contra el dengue que funciona con una sola dosis y ya entró en fase 3 de ensayos",
        descripcion: "El equipo del CONICET lleva ocho años trabajando en la fórmula. Los resultados preliminares muestran un 91% de eficacia contra los cuatro serotipos del virus. Si los ensayos finales confirman los datos, podría estar disponible en farmacias antes de 2028.",
        imagen: "https://www.danielfilmus.com.ar/wp-content/uploads/2023/01/VACUNA-COVID-19-CASSATARO-1100x734.jpg",
        categoria: "salud"
    },
    {
        titulo: "Estudio revela que dormir menos de 6 horas modifica el ADN de forma acumulativa y los efectos no se revierten con el fin de semana",
        descripcion: "La investigación, publicada en Nature, siguió a 11.000 personas durante cinco años. Quienes dormían entre 7 y 9 horas mostraron marcadores genéticos asociados a mayor longevidad. 'El mito de recuperar el sueño el sábado es exactamente eso: un mito', concluyen los autores.",
        imagen: "https://la100.cienradios.com/resizer/v2/GMFDS5J4VVBZJDOXJP5WMFXFAQ.jpg?auth=1db9232be8ce26486cd5f4b74905322bf9697ccef80a0fe04489b16f07b5ca6a&width=800&height=400",
        categoria: "salud"
    },
    {
        titulo: "Hospital porteño realiza el primer trasplante de córnea fabricada en bioimpresora 3D y el paciente ve perfectamente a las 72 horas",
        descripcion: "La córnea fue creada a partir de células del propio paciente, eliminando el riesgo de rechazo. La operación duró 40 minutos. El hombre, que llevaba tres años en lista de espera, dijo que lo primero que vio bien fue la cara de su hija. El equipo médico ya tiene lista de espera para el segundo caso.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtyH73Q6Uo7kWPAHCzlgjFlFQUSNAykNddCg&s",
        categoria: "salud"
    }
];

const NEWS_KEY = "noticias";

function inicializarNoticias() {
    const raw = localStorage.getItem(NEWS_KEY);

    if (!raw || raw === "[]") {
        const noticiasConFecha = noticias.map(n => ({
            ...n,
            fecha: new Date().toISOString()
        }));

        localStorage.setItem(NEWS_KEY, JSON.stringify(noticiasConFecha));

        console.log("Noticias inicializadas en main.js");
    }
}

// Si el admin guardó noticias en localStorage, usarlas. Si no, usar las hardcodeadas
try {
    const raw = localStorage.getItem('noticias');
    if (raw) {
        const stored = JSON.parse(raw);
        if (Array.isArray(stored) && stored.length > 0) {
            noticias = stored;
        }
    }
} catch (e) {
    console.log('No se pudieron cargar noticias desde localStorage:', e);
}

// noticias en el dom
function mostrarNoticias(filtro = "") {
    const contenedor = document.getElementById('contenedor-noticias');
   
    contenedor.innerHTML = "";

    for (let i = 0; i < noticias.length; i++) {
        if (noticias[i].titulo.toLowerCase().includes(filtro.toLowerCase())) {
        
            // Contenedor de cada noticia
            const card = document.createElement('div');
            card.classList.add("noticia-card");
            

            // Imagen
            const img = document.createElement('img');
            img.src = noticias[i].imagen;
            img.style.width = "100%";

            // Título
            const titulo = document.createElement('h2');
            titulo.textContent = noticias[i].titulo;

            // Descripción
            const desc = document.createElement('p');
            desc.textContent = noticias[i].descripcion;

            // Agregar todo al card
            card.appendChild(img);
            card.appendChild(titulo);
            card.appendChild(desc);

            // Agregar card al contenedor
            contenedor.appendChild(card);
        }
    }

}

document.getElementById('buscador').addEventListener('input', function(event) {
    mostrarNoticias(event.target.value);
});

// Ejecutar al cargar
window.addEventListener('load', function() {
    inicializarNoticias();
    mostrarNoticias();
    
    // Verificar si el usuario está logueado y actualizar el texto del menú
    const tokenGuardado = sessionStorage.getItem("token");
    const enlaceLogin = document.getElementById("enlace-login");
    if (enlaceLogin) {
        if (tokenGuardado) {
    const usuario = JSON.parse(sessionStorage.getItem("usuario"));

    if (usuario) {
        enlaceLogin.innerHTML = `
            <img src="${usuario.image}" style="width:30px;height:30px;border-radius:50%;vertical-align:middle;">
            ${usuario.firstName}•(Panel de admin)
        `;
    } else {
        enlaceLogin.textContent = "👩🏻‍💻Loguearse";
    }}}
});
