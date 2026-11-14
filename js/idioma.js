// Idioma: inglés por defecto, español opcional
var idioma = "en";
try { idioma = localStorage.getItem("cbe_lang") || "en"; } catch (e) {}
document.documentElement.lang = idioma;

function vozIdioma() { return idioma == "en" ? "en-US" : "es-MX"; }

var DICC = [
["Abandonados pero no olvidados","Abandoned but not forgotten"],
["La NASA ha dejado robots en la Luna, en Marte y en el espacio profundo. Algunos ya no funcionan, otros siguen viajando. Aquí cuentan su historia.","NASA has left robots on the Moon, on Mars and in deep space. Some no longer work, others are still traveling. Here they tell their story."],
["Elige una categoría y empieza a explorar.","Pick a category and start exploring."],
["Para ver y escuchar cómo fueron las misiones.","To see and hear how the missions went."],
["Siete páginas con dibujos.","Seven illustrated pages."],
["De 1967 a 2024, también en 3D.","From 1967 to 2024, also in 3D."],
["Los robots en movimiento.","The robots in motion."],
["Para leer, completar y comprobar lo que sabes.","To read, complete and check what you know."],
["Elige una lectura y contesta su cuestionario.","Pick a reading and answer its quiz."],
["Escoge la palabra que falta.","Choose the missing word."],
["Nueve preguntas de todo.","Nine questions on everything."],
["Para divertirte mientras aprendes.","To have fun while you learn."],
["Une cada robot con lo que hizo.","Match each robot with what it did."],
["Elige el tema: Luna, Marte o espacio profundo.","Pick a theme: Moon, Mars or deep space."],
["También por temas.","Also by theme."],
["Arma el paisaje de Marte.","Build the Martian landscape."],
["Aprende y practica","Learn and practice"],["Historias","Stories"],["Juegos","Games"],
["Libro ilustrado","Picture book"],["Línea del tiempo","Timeline"],["Cortometraje","Short film"],
["Lecturas y preguntas","Readings and questions"],["Completa frases","Fill in the blanks"],["Quiz espacial","Space quiz"],
["Memorama","Memory match"],["Sopa de letras","Word search"],["Crucigrama","Crossword"],["Rompecabezas","Puzzle"],
["Modo oscuro","Dark mode"],["Modo claro","Light mode"],["Voz: sí","Voice: on"],["Voz: no","Voice: off"],
["Contraste: sí","Contrast: on"],["Contraste: no","Contrast: off"],
["⬅ Salir a ","⬅ Exit to "],["Menú principal","Main menu"],["↩ Regresar","↩ Back"],
["Fácil: 4 palabras cortas, en horizontal y vertical.","Easy: 4 short words, horizontal and vertical."],
["Medio: 5 palabras, también en diagonal.","Medium: 5 words, also diagonal."],
["Difícil: 7 palabras, en cualquier dirección y al revés.","Hard: 7 words, in any direction and backwards."],
[" Mantén presionado en la primera letra y arrastra hasta la última. Cada palabra encontrada se pinta de un color distinto."," Press and hold the first letter and drag to the last. Each word you find is painted a different color."],
["En el nivel fácil ya viene la primera letra de cada palabra.","On easy level the first letter of each word is already filled in."],
["Elige una lectura y un nivel. Lee el texto que aparece a la derecha para encontrar las respuestas.","Pick a reading and a level. Read the text on the right to find the answers."],
["Elige un tema y un nivel. Encuentra cada nombre con su descripción. Las tarjetas cambian de lugar cada vez.","Pick a theme and a level. Match each name with its description. The cards change places every time."],
["Elige un tema y completa cada frase con la palabra correcta.","Pick a theme and complete each sentence with the right word."],
["Elige una lectura. Al terminar, contesta su cuestionario.","Pick a reading. When you finish, answer its quiz."],
["Elige una imagen y un nivel. Arrastra una pieza y suéltala sobre otra para cambiarlas de lugar (también puedes tocar una y luego la otra). Las piezas bien puestas se marcan en verde y el botón de pista te acomoda una.","Pick an image and a level. Drag a piece onto another to swap them (you can also tap one and then the other). Correct pieces turn green and the hint button places one for you."],
["Elige un tema y un nivel:","Pick a theme and a level:"],["Elige un tema:","Pick a theme:"],
["Presiona el botón para empezar.","Press the button to start."],["▶ Ver cortometraje","▶ Watch the short film"],
[" Narración con voz"," Voice narration"],["Fin. Abandonados, pero no olvidados.","The end. Abandoned, but not forgotten."],
["↻ Ver otra vez","↻ Watch again"],["⏸ Pausa","⏸ Pause"],["▶ Reanudar","▶ Resume"],
["Toca una misión para leer su historia.","Tap a mission to read its story."],["Ver en 3D","View in 3D"],["Ver en tira","View as strip"],["Dato curioso:","Fun fact:"],
["◀ Anterior","◀ Previous"],["Siguiente ▶","Next ▶"],["🔊 Escuchar","🔊 Listen"],["Siguiente","Next"],
["Contestar cuestionario","Take the quiz"],["Elegir otra lectura","Choose another reading"],["Otra lectura","Another reading"],["Releer","Read again"],
["Revisar","Check"],["elige...","choose..."],["Intentar otra vez","Try again"],["Intentos:","Attempts:"],["Parejas:","Pairs:"],
["¡Correcto! ","Correct! "],["Casi. ","Almost. "],
["¡Eres un astronauta experto!","You are an expert astronaut!"],["¡Buen vuelo! Repasa el libro y la línea del tiempo.","Good flight! Review the book and the timeline."],
["Sigue explorando, ¡tú puedes!","Keep exploring, you can do it!"],["¡Excelente!","Excellent!"],["Revisa las que están en rojo.","Check the ones in red."],
["¡Entendiste muy bien la lectura!","You understood the reading very well!"],["Puedes volver a leer y tratar otra vez.","You can read again and try once more."],
["¡Encontraste todas!","You found them all!"],["¡Crucigrama completo!","Crossword complete!"],["Pistas","Clues"],
["👁 Ver modelo","👁 Show model"],["💡 Pista","💡 Hint"],["Mezclar de nuevo","Shuffle again"],["Mezclar","Shuffle"],
["Antes de armar, lee esto:","Before you start, read this:"],["Ahora comprueba lo que aprendiste:","Now check what you learned:"],
["Aquí los robots cuentan su historia. Lee, mira y escucha cómo fueron sus misiones, desde la Luna hasta el espacio profundo.","Here the robots tell their story. Read, watch and listen to how their missions went, from the Moon to deep space."],
["Un libro de 7 páginas con dibujos que cuenta la historia de Surveyor 3, Viking 1, Sojourner, Pioneer 10 e Ingenuity. Puedes leerlo o escucharlo, con pausa y reanudar.","A 7-page illustrated book that tells the story of Surveyor 3, Viking 1, Sojourner, Pioneer 10 and Ingenuity. You can read it or listen to it, with pause and resume."],
["Recorre en orden las misiones más importantes, de 1967 a 2024. Toca una fecha para leer qué pasó y un dato curioso, o míralo en 3D.","Travel through the most important missions in order, from 1967 to 2024. Tap a date to read what happened and a fun fact, or view it in 3D."],
["Una mini película animada de 6 escenas, con subtítulos y narración con voz, que resume el viaje de los robots abandonados. Tiene pausa y reanudar.","A short animated film in 6 scenes, with subtitles and voice narration, that sums up the journey of the abandoned robots. It has pause and resume."],
["Lee textos cortos y pon a prueba lo que entendiste con cuestionarios, frases por completar y un quiz.","Read short texts and test what you understood with quizzes, fill-in sentences and a space quiz."],
["Elige una de 8 lecturas sobre una misión y contesta su cuestionario para comprobar que la entendiste.","Pick one of 8 readings about a mission, then answer its quiz to check that you understood it."],
["Lee frases sobre las misiones y elige la palabra que falta en cada una. Hay temas de la Luna, Marte, el espacio profundo y más.","Read sentences about the missions and choose the missing word in each one. There are themes on the Moon, Mars, deep space and more."],
["Contesta nueve preguntas de opción múltiple sobre las misiones y mira cuántas aciertas. Cada respuesta trae una explicación.","Answer nine multiple-choice questions about the missions and see how many you get right. Every answer comes with an explanation."],
["Juegos para repasar lo aprendido. Cada vez que entras salen palabras y piezas distintas, y puedes mezclarlas con un botón.","Games to review what you learned. Every time you enter, the words and pieces are different, and you can shuffle them with a button."],
["Voltea las tarjetas y une cada robot con lo que hizo. Tú escoges el tema y el nivel: fácil, medio o difícil.","Flip the cards and match each robot with what it did. You choose the theme and the level: easy, medium or hard."],
["Encuentra los nombres de misiones y robots escondidos en la cuadrícula, arrastrando de la primera a la última letra. Cambia el tema y el nivel cuando quieras.","Find the names of missions and robots hidden in the grid by dragging from the first letter to the last. Change the theme and level whenever you like."],
["Completa un crucigrama con pistas basadas en una lectura. Lee el texto que aparece a la derecha para encontrar las respuestas.","Fill in a crossword with clues based on a reading. Read the text on the right to find the answers."],
["Arma el dibujo de una misión intercambiando piezas. Al terminar aparece una pregunta para comprobar lo que aprendiste.","Build the picture of a mission by swapping pieces. When you finish, a question appears to check what you learned."],
["Arriba puedes cambiar entre modo claro y modo oscuro, elegir el idioma, activar la lectura en voz alta, subir el contraste y agrandar la letra. Datos tomados de la NASA (NSSDCA y science.nasa.gov). Proyecto educativo del equipo Constelación Bolillo Estelar; no es un sitio oficial de la NASA.","Above you can switch between light and dark mode, choose the language, turn on read-aloud, raise the contrast and enlarge the text. Data taken from NASA (NSSDCA and science.nasa.gov). Educational project by team Constelación Bolillo Estelar; not an official NASA site."],
["La respuesta correcta es:","The correct answer is:"],
["Fácil","Easy"],["Medio","Medium"],["Difícil","Hard"]
].sort(function (a, b) { return b[0].length - a[0].length; });

var RX = [
[/Página (\d+) de (\d+)/g, "Page $1 of $2"],
[/Pregunta (\d+) de (\d+)/g, "Question $1 of $2"],
[/ - pregunta (\d+) de (\d+)/g, " - question $1 of $2"],
[/(\d+) de (\d+) correctas\./g, "$1 of $2 correct."],
[/(\d+) de (\d+) palabras/g, "$1 of $2 words"],
[/Llevas (\d+) letras bien de (\d+)\./g, "You have $1 of $2 letters right."],
[/^(\d+) de (\d+)$/g, "$1 of $2"],
[/^ de (\d+)$/g, " of $1"],
[/¡Lo armaste en /g, "You solved it in "],[/ movimientos!/g, " moves!"],
[/\((horizontal →|hacia abajo ↓), (\d+) letras\)/g, function (m, d, n) { return "(" + (d[0] == "h" ? "across →" : "down ↓") + ", " + n + " letters)"; }]
];

function traducir(s) {
  if (idioma != "en" || !/[a-záéíóúñ¿¡]/i.test(s)) return s;
  var r = s;
  DICC.forEach(function (p) { if (r.indexOf(p[0]) >= 0) r = r.split(p[0]).join(p[1]); });
  RX.forEach(function (p) { r = r.replace(p[0], p[1]); });
  return r;
}
function recorrer(n) {
  if (n.nodeType == 3) {
    if (n.parentNode && /SCRIPT|STYLE/.test(n.parentNode.nodeName)) return;
    var v = traducir(n.nodeValue);
    if (v !== n.nodeValue) n.nodeValue = v;
  } else if (n.childNodes) {
    for (var i = 0; i < n.childNodes.length; i++) recorrer(n.childNodes[i]);
  }
}
function arrancarIdioma() {
  if (idioma != "en") return;
  recorrer(document.body);
  document.title = traducir(document.title);
  new MutationObserver(function (ms) {
    ms.forEach(function (m) {
      if (m.type == "characterData") recorrer(m.target);
      m.addedNodes.forEach(recorrer);
    });
  }).observe(document.body, {childList: true, subtree: true, characterData: true});
}
function cambiarIdioma(l) {
  try { localStorage.setItem("cbe_lang", l); } catch (e) {}
  location.reload();
}
