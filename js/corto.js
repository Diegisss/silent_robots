var escenas = [
  {fondo: "luna", actor: "sonda", anim: "rebota", texto: "En mil novecientos sesenta y siete, la sonda Surveyor 3 llega a la Luna y rebota dos veces antes de quedarse quieta."},
  {fondo: "luna", actor: "astronauta", anim: "mover", texto: "En mil novecientos sesenta y nueve, astronautas del Apolo 12 caminan hasta ella y se llevan su pala y su cámara."},
  {fondo: "marte", actor: "rover", anim: "mover", texto: "En mil novecientos noventa y siete, Sojourner, el primer rover, recorre Marte con muchísima calma."},
  {fondo: "marte", actor: "helicoptero", anim: "vuela", texto: "En dos mil veintiuno, Ingenuity hace el primer vuelo con motor en otro planeta. Al final fueron setenta y dos vuelos."},
  {fondo: "espacio", actor: "pioneer", anim: "deriva", texto: "Pioneer 10 sigue su camino hacia la estrella Aldebarán, aunque ya no manda señales."},
  {fondo: "espacio", actor: "telescopio", anim: "vuela", texto: "Y el telescopio Kepler descubrió más de dos mil seiscientos planetas fuera del sistema solar. Abandonados, pero no olvidados."}
];
if (idioma == "en") escenas = EN.corto;
var cont = document.getElementById("contenido");
cont.innerHTML =
  '<div class="pantalla" id="pantalla"><img class="actor" id="actor" alt=""><div class="subtitulo" id="sub">Presiona el botón para empezar.</div></div>' +
  '<div class="controles"><button class="boton" id="play">▶ Ver cortometraje</button>' +
  '<button class="boton" id="pausa" disabled>⏸ Pausa</button>' +
  '<label><input type="checkbox" id="narrar" checked> Narración con voz</label></div>';
var pantalla = document.getElementById("pantalla");
var actor = document.getElementById("actor");
var sub = document.getElementById("sub");
var play = document.getElementById("play");
var pausa = document.getElementById("pausa");
var pausado = false;
var reloj = null;
pantalla.style.backgroundImage = "url(images/espacio.svg)";
actor.style.display = "none";

function narrar(i, fin) {
  var listo = false;
  function terminar() { if (!listo) { listo = true; fin(); } }
  if (!document.getElementById("narrar").checked || !("speechSynthesis" in window)) { terminar(); return; }
  speechSynthesis.cancel();
  var h = new SpeechSynthesisUtterance(escenas[i].texto);
  h.lang = vozIdioma();
  h.rate = 0.9;
  h.onend = terminar;
  h.onerror = terminar;
  speechSynthesis.speak(h);
}

function escena(i) {
  clearInterval(reloj);
  if (i >= escenas.length) {
    actor.style.display = "none";
    sub.textContent = "Fin. Abandonados, pero no olvidados.";
    play.disabled = false;
    pausa.disabled = true;
    play.textContent = "↻ Ver otra vez";
    return;
  }
  var e = escenas[i];
  pantalla.style.backgroundImage = "url(images/" + e.fondo + ".svg)";
  actor.className = "actor";
  void actor.offsetWidth;
  actor.src = "images/" + e.actor + ".svg";
  actor.style.display = "block";
  actor.className = "actor a-" + e.anim;
  sub.textContent = e.texto;
  var faltan = 2;
  function una() { faltan--; if (faltan == 0) escena(i + 1); }
  var ms = 0;
  reloj = setInterval(function () {
    if (pausado) return;
    ms += 100;
    if (ms >= 6500) { clearInterval(reloj); una(); }
  }, 100);
  narrar(i, una);
}

play.onclick = function () {
  play.disabled = true;
  pausado = false;
  pausa.disabled = false;
  pausa.textContent = "⏸ Pausa";
  pantalla.classList.remove("pausa");
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  escena(0);
};

pausa.onclick = function () {
  pausado = !pausado;
  pantalla.classList.toggle("pausa", pausado);
  pausa.textContent = pausado ? "▶ Reanudar" : "⏸ Pausa";
  if ("speechSynthesis" in window) {
    if (pausado) speechSynthesis.pause(); else speechSynthesis.resume();
  }
};
