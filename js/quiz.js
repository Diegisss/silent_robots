var clasicas = [
  {p: "¿Cuántas veces rebotó Surveyor 3 antes de quedarse quieta en la Luna?", o: ["Ninguna", "Dos", "Diez", "Cien"], c: 1, e: "Rebotó dos veces porque su radar se confundió con rocas muy brillantes."},
  {p: "¿Qué astronautas visitaron a Surveyor 3 en la Luna?", o: ["Apolo 12", "Apolo 11", "Viking", "Pioneer"], c: 0, e: "Los de Apolo 12 aterrizaron a unos 180 metros y se llevaron la pala y la cámara."},
  {p: "¿En qué año llegó el primer rover a Marte, Sojourner?", o: ["1967", "1976", "1997", "2021"], c: 2, e: "Llegó el 4 de julio de 1997 con la misión Mars Pathfinder."},
  {p: "¿Cómo se protegió Pathfinder al aterrizar en Marte?", o: ["Con patas de resorte", "Con bolsas de aire", "Con agua", "Con un helicóptero"], c: 1, e: "Rebotó unas 15 veces dentro de enormes bolsas de aire."},
  {p: "¿Cuántos vuelos hizo el helicóptero Ingenuity?", o: ["5", "12", "72", "200"], c: 2, e: "Se esperaban 5 vuelos y completó 72 en casi tres años."},
  {p: "¿Hacia qué estrella se dirige Pioneer 10?", o: ["Sirio", "Aldebarán", "La Polar", "El Sol"], c: 1, e: "Aldebarán forma el ojo de la constelación de Tauro."},
  {p: "¿Cómo encontraba planetas el telescopio Kepler?", o: ["Tomándoles fotos de cerca", "Escuchando radio", "Viendo bajar el brillo de una estrella", "Mandando sondas"], c: 2, e: "Detectaba tránsitos: el planeta pasa frente a su estrella y la oscurece un poco."},
  {p: "¿Qué estudió el módulo InSight en Marte?", o: ["Los temblores del planeta", "Los volcanes de la Luna", "Los anillos de Saturno", "El hielo de Ceres"], c: 0, e: "Escuchó temblores para conocer el interior de Marte."},
  {p: "¿Qué hizo especial a NEAR Shoemaker en 2001?", o: ["Aterrizó en la Luna", "Aterrizó en un asteroide", "Llegó a Júpiter", "Volvió a la Tierra"], c: 1, e: "Fue la primera nave en aterrizar en un asteroide, Eros, sin estar diseñada para eso."}
];
var preguntas, n, puntos;
var caja = document.getElementById("contenido");
caja.innerHTML = '<p>Elige un tema:</p><div class="temas" id="temas"></div><div id="juego"></div>';
var cont = document.getElementById("juego");

function pregunta() {
  var q = preguntas[n];
  var html = "<p>Pregunta " + (n + 1) + " de " + preguntas.length + "</p><h2>" + q.p + '</h2><div class="opciones">';
  q.o.forEach(function (op, i) {
    html += '<button class="opcion" data-i="' + i + '">' + op + "</button>";
  });
  html += '</div><p id="expl" data-leer></p><div class="controles"><button class="boton" id="seguir" style="display:none">Siguiente</button></div>';
  cont.innerHTML = html;
  var botones = cont.querySelectorAll(".opcion");
  botones.forEach(function (b) {
    b.onclick = function () { responder(botones, Number(b.dataset.i)); };
  });
  if (ajustes.voz) leer(q.p + " " + q.o.join(", "));
}

function responder(botones, i) {
  var q = preguntas[n];
  botones.forEach(function (b) { b.disabled = true; });
  botones[q.c].classList.add("bien");
  if (i == q.c) puntos++;
  else botones[i].classList.add("mal");
  document.getElementById("expl").textContent = (i == q.c ? "¡Correcto! " : "Casi. ") + q.e;
  if (ajustes.voz) leer(document.getElementById("expl").textContent);
  var s = document.getElementById("seguir");
  s.style.display = "inline-block";
  s.onclick = function () {
    n++;
    if (n < preguntas.length) pregunta(); else fin();
  };
}

function fin() {
  var msg = puntos >= 7 ? "¡Eres un astronauta experto!" : puntos >= 4 ? "¡Buen vuelo! Repasa el libro y la línea del tiempo." : "Sigue explorando, ¡tú puedes!";
  cont.innerHTML = '<div class="hoja"><div class="dibujo">🏆</div><h2>' + puntos + " de " + preguntas.length + "</h2><p>" + msg + '</p><button class="boton" onclick="location.reload()">Intentar otra vez</button></div>';
  if (ajustes.voz) leer("Obtuviste " + puntos + " de " + preguntas.length + ". " + msg);
}
var bancos = {
  clasicas: {nombre: "Misiones clásicas", icono: "🚀", preguntas: clasicas},
  apolo: {nombre: "Equipo en la Luna", icono: "👨‍🚀", preguntas: [
    {p: "¿Cuántos vehículos lunares (moon buggies) quedaron en la Luna?", o: ["1", "2", "3", "10"], c: 2, e: "Fueron tres, manejados en las misiones Apolo 15, 16 y 17."},
    {p: "¿Para qué sirvieron las etapas de descenso de los módulos lunares?", o: ["Como casas", "Como plataformas de despegue para volver", "Como antenas", "Como cohetes a Marte"], c: 1, e: "Se quedaron en la Luna y sirvieron de plataforma de lanzamiento."},
    {p: "¿Cómo se llamó el módulo lunar del Apolo 11?", o: ["Intrepid", "Viking", "Eagle", "Surveyor"], c: 2, e: "El Eagle es el módulo del Apolo 11."},
    {p: "¿Qué eran los paquetes ALSEP?", o: ["Comida de astronautas", "Experimentos científicos que quedaron en la Luna", "Trajes espaciales", "Mapas"], c: 1, e: "Incluían sismómetros, retrorreflectores y más instrumentos."},
    {p: "¿Qué son los Moon Trees?", o: ["Árboles de plástico", "Árboles nacidos de semillas que viajaron con el Apolo 14", "Plantas de la Luna", "Antenas"], c: 1, e: "Las semillas orbitaron la Luna y luego se plantaron en la Tierra."}]},
  venus: {nombre: "Mercurio y Venus", icono: "🌋", preguntas: [
    {p: "¿Qué primer orbitador de Mercurio terminó con un impacto controlado en 2015?", o: ["Mariner 10", "MESSENGER", "Magellan", "Venera"], c: 1, e: "MESSENGER entró en órbita en 2011 y operó hasta 2015."},
    {p: "¿La gravedad de qué planeta usó Mariner 10 para llegar a Mercurio?", o: ["Marte", "Júpiter", "Venus", "Saturno"], c: 2, e: "Fue la primera nave en usar asistencia gravitacional, con Venus."},
    {p: "¿Qué técnica usó Magellan para cartografiar Venus?", o: ["Fotos con flash", "Radar", "Un rover", "Telescopio óptico"], c: 1, e: "Usó radar de apertura sintética."},
    {p: "¿Qué agencias participan en BepiColombo?", o: ["NASA y ESA", "ESA y JAXA", "NASA y JAXA", "ISRO y CNSA"], c: 1, e: "Es una misión conjunta de ESA y JAXA."},
    {p: "¿Qué soltaron Vega 1 y 2 en la atmósfera de Venus además de módulos de aterrizaje?", o: ["Globos aerostáticos", "Paracaídas gigantes", "Helicópteros", "Rovers"], c: 0, e: "Desplegaron globos y luego siguieron hacia el cometa Halley."}]},
  asteroides: {nombre: "Asteroides y cometas", icono: "☄️", preguntas: [
    {p: "¿Qué misión chocó contra Dimorphos en 2021?", o: ["DART", "Lucy", "Psyche", "Rosetta"], c: 0, e: "DART probó un impacto cinético para la defensa planetaria."},
    {p: "¿De qué asteroide trajo muestras Hayabusa?", o: ["Bennu", "Ryugu", "Itokawa", "Eros"], c: 2, e: "Hayabusa trajo una muestra de Itokawa."},
    {p: "¿Cómo se llamó el módulo que descendió al cometa de Rosetta?", o: ["Philae", "Huygens", "Giotto", "Intrepid"], c: 0, e: "Philae descendió al cometa Churyumov-Gerasimenko."},
    {p: "¿Qué capturó Stardust con aerogel del cometa Wild 2?", o: ["Hielo", "Polvo", "Luz", "Sonido"], c: 1, e: "Atrapó polvo de la coma del cometa."},
    {p: "¿Qué pasó en julio de 1994 con el cometa Shoemaker-Levy 9?", o: ["Chocó contra Júpiter", "Pasó cerca de la Tierra", "Se partió en la Luna", "Aterrizó en Marte"], c: 0, e: "Chocó contra Júpiter y se observó desde varios lugares."}]},
  gigantes: {nombre: "Planetas gigantes", icono: "🪐", preguntas: [
    {p: "¿Qué sonda aterrizó en Titán?", o: ["Cassini", "Galileo", "Huygens", "Juno"], c: 2, e: "Huygens aterrizó en Titán en enero de 2005."},
    {p: "¿Qué sonda es la única que ha visitado Urano?", o: ["Voyager 2", "Pioneer 10", "Cassini", "Juno"], c: 0, e: "Voyager 2 lo visitó en enero de 1986."},
    {p: "¿Cuántos grados está inclinado el eje de Urano?", o: ["10", "45", "98", "180"], c: 2, e: "Su eje está inclinado 98 grados."},
    {p: "¿Qué luna de Saturno tiene géiseres?", o: ["Titán", "Encélado", "Tetis", "Ío"], c: 1, e: "Encélado lanza géiseres de hielo."},
    {p: "¿Qué misión fue el primer orbitador de Júpiter?", o: ["Galileo", "Voyager 1", "Pioneer 11", "Ulysses"], c: 0, e: "Galileo orbitó Júpiter y soltó una sonda en 1995."}]}
};
if (idioma == "en") bancos = EN.bancos;
function iniciar(k) {
  preguntas = bancos[k].preguntas;
  n = 0;
  puntos = 0;
  pregunta();
}
crearTemas(document.getElementById("temas"), iniciar, bancos);
