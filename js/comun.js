var ajustes = JSON.parse(localStorage.getItem("cbe") || "{}");
if (!ajustes.modo) ajustes.modo = "ninos";
if (!ajustes.tam) ajustes.tam = 100;

function guardar() {
  localStorage.setItem("cbe", JSON.stringify(ajustes));
}

function leer(texto) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  texto = traducir(texto);
  var h = new SpeechSynthesisUtterance(texto);
  h.lang = vozIdioma();
  h.rate = 0.9;
  speechSynthesis.speak(h);
}

function aplicar() {
  document.body.className = ajustes.modo + (ajustes.contraste ? " contraste" : "");
  document.documentElement.style.fontSize = ajustes.tam + "%";
  document.getElementById("btnModo").textContent = ajustes.modo == "ninos" ? "🌙 Modo oscuro" : "☀️ Modo claro";
  document.getElementById("btnVoz").textContent = ajustes.voz ? "🔊 Voz: sí" : "🔇 Voz: no";
  document.getElementById("btnCont").textContent = ajustes.contraste ? "◐ Contraste: sí" : "◐ Contraste: no";
}

function crearBarra() {
  var barra = document.createElement("header");
  barra.className = "barra";
  barra.innerHTML =
    '<a href="index.html" class="logo"><img class="logo-img" src="images/logo-icono.jpg" alt="" width="44" height="44"> Silent Robots</a>' +
    '<nav><details class="grupo"><summary>📚 Historias</summary><div><a href="libro.html">Libro ilustrado</a><a href="linea.html">Línea del tiempo</a><a href="corto.html">Cortometraje</a></div></details><details class="grupo"><summary>📝 Aprende y practica</summary><div><a href="lecturas.html">Lecturas y preguntas</a><a href="frases.html">Completa frases</a><a href="quiz.html">Quiz espacial</a></div></details><details class="grupo"><summary>🎮 Juegos</summary><div><a href="memorama.html">Memorama</a><a href="sopa.html">Sopa de letras</a><a href="crucigrama.html">Crucigrama</a><a href="rompecabezas.html">Rompecabezas</a></div></details></nav>' +
    '<div class="ajustes">' +
    '<button id="btnModo"></button><button id="btnVoz"></button><button id="btnCont"></button>' +
    '<select id="selIdioma" aria-label="Language / Idioma"><option value="en">English</option><option value="es">Español</option></select><button id="btnMas" aria-label="Letra más grande">A+</button><button id="btnMenos" aria-label="Letra más chica">A-</button></div>';
  document.body.insertBefore(barra, document.body.firstChild);

  document.getElementById("selIdioma").value = idioma;
  document.getElementById("selIdioma").onchange = function () { cambiarIdioma(this.value); };
  document.getElementById("btnModo").onclick = function () {
    ajustes.modo = ajustes.modo == "ninos" ? "adultos" : "ninos";
    guardar(); aplicar();
  };
  document.getElementById("btnVoz").onclick = function () {
    ajustes.voz = !ajustes.voz;
    if (!ajustes.voz) speechSynthesis.cancel();
    else leer("Lectura en voz alta activada. Toca un texto para escucharlo.");
    guardar(); aplicar();
  };
  document.getElementById("btnCont").onclick = function () {
    ajustes.contraste = !ajustes.contraste;
    guardar(); aplicar();
  };
  document.getElementById("btnMas").onclick = function () {
    if (ajustes.tam < 160) ajustes.tam += 15;
    guardar(); aplicar();
  };
  document.getElementById("btnMenos").onclick = function () {
    if (ajustes.tam > 85) ajustes.tam -= 15;
    guardar(); aplicar();
  };
}

document.addEventListener("click", function (e) {
  if (!ajustes.voz) return;
  var t = e.target.closest("[data-leer], p, h1, h2, h3, li");
  if (t) leer(t.innerText);
});

crearBarra();
aplicar();

var categorias = {
  libro: ["historias", "Historias"], linea: ["historias", "Historias"], corto: ["historias", "Historias"],
  lecturas: ["aprende", "Aprende y practica"], frases: ["aprende", "Aprende y practica"], quiz: ["aprende", "Aprende y practica"],
  memorama: ["juegos", "Juegos"], sopa: ["juegos", "Juegos"], crucigrama: ["juegos", "Juegos"], rompecabezas: ["juegos", "Juegos"]
};
var pagina = location.pathname.split("/").pop().replace(".html", "");
if (categorias[pagina]) {
  var pie = document.createElement("div");
  pie.className = "pie";
  pie.innerHTML = '<a class="boton" href="index.html#' + categorias[pagina][0] + '">⬅ Salir a ' + categorias[pagina][1] + '</a>' +
    '<a class="boton" href="index.html">🏠 Menú principal</a><button class="boton" onclick="history.back()">↩ Regresar</button>';
  document.querySelector("main").appendChild(pie);
}

var grupos = document.querySelectorAll(".grupo");
grupos.forEach(function (g) {
  g.addEventListener("toggle", function () {
    if (!g.open) return;
    grupos.forEach(function (o) { if (o !== g) o.open = false; });
  });
});
document.addEventListener("click", function (e) {
  if (e.target.closest(".grupo")) return;
  grupos.forEach(function (o) { o.open = false; });
});

arrancarIdioma();
