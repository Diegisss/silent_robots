var escenas = {
  surveyor: {nombre: "Surveyor 3", icono: "🌕", img: "escena-surveyor",
    dato: "Surveyor 3 alunizó en 1967 y rebotó dos veces. Con su pala excavó zanjas y descubrió que el suelo de la Luna es firme como arena húmeda, así que podía sostener un módulo del Apolo.",
    p: "¿Qué descubrió Surveyor 3 sobre el suelo lunar?", o: ["Que es de hielo", "Que es firme como arena húmeda", "Que es de lodo", "Que no existe"], c: 1},
  sojourner: {nombre: "Sojourner", icono: "🔴", img: "escena-sojourner",
    dato: "Sojourner pesaba 10.6 kilos y fue el primer rover en Marte, en 1997. Sus rocas redondas sugirieron que Marte fue cálido y húmedo.",
    p: "¿Cuánto pesaba el rover Sojourner?", o: ["10.6 kilos", "106 kilos", "1 kilo", "1,000 kilos"], c: 0},
  ingenuity: {nombre: "Ingenuity", icono: "🚁", img: "escena-ingenuity",
    dato: "Ingenuity fue el primer helicóptero en otro planeta. Debía hacer 5 vuelos y completó 72 en casi tres años.",
    p: "¿Cuántos vuelos hizo Ingenuity?", o: ["5", "72", "200", "12"], c: 1},
  pioneer: {nombre: "Pioneer 10", icono: "🛰️", img: "escena-pioneer",
    dato: "Pioneer 10 salió en 1972 y fue la primera en sobrevolar Júpiter. Hoy va hacia la estrella Aldebarán y lleva una placa con un mensaje.",
    p: "¿Hacia qué estrella se dirige Pioneer 10?", o: ["Sirio", "Aldebarán", "La Polar", "Vega"], c: 1},
  kepler: {nombre: "Kepler", icono: "🔭", img: "escena-kepler",
    dato: "Kepler descubrió más de 2,600 planetas fuera del sistema solar. Los encontraba viendo cómo bajaba un poquito el brillo de una estrella cuando un planeta pasaba enfrente.",
    p: "¿Cómo encontraba planetas Kepler?", o: ["Con radar", "Viendo bajar el brillo de una estrella", "Aterrizando en ellos", "Escuchando radio"], c: 1},
  near: {nombre: "NEAR Shoemaker", icono: "☄️", img: "escena-near",
    dato: "NEAR Shoemaker aterrizó en el asteroide Eros en 2001 sin haber sido diseñada para eso, y siguió mandando datos unas dos semanas.",
    p: "¿En qué asteroide aterrizó NEAR Shoemaker?", o: ["Ceres", "Eros", "Vesta", "Bennu"], c: 1}
};
if (idioma == "en") {
  for (var k in EN.puzzle) for (var campo in EN.puzzle[k]) escenas[k][campo] = EN.puzzle[k][campo];
}
var tam = {facil: [2, 3], medio: [3, 3], dificil: [4, 4]};
var cont = document.getElementById("contenido");
cont.innerHTML = '<p>Elige una imagen y un nivel. Arrastra una pieza y suéltala sobre otra para cambiarlas de lugar (también puedes tocar una y luego la otra). Las piezas bien puestas se marcan en verde y el botón de pista te acomoda una.</p><div class="temas" id="temas"></div><div class="temas" id="niveles"></div><div id="juego"></div>';
var clave, orden, elegida, movs, cols, filas, ancho, alto;

function iniciar(k) {
  if (k) clave = k;
  var e = escenas[clave];
  cols = tam[nivel][0];
  filas = tam[nivel][1];
  var lado = Math.min(320, window.innerWidth - 40);
  ancho = lado / cols;
  alto = lado / filas;
  document.getElementById("juego").innerHTML =
    '<div class="panel" id="datoPanel"><b>Antes de armar, lee esto:</b> ' + e.dato + '</div>' +
    '<div class="controles"><button class="boton" id="modelo">👁 Ver modelo</button><button class="boton" id="pista">💡 Pista</button><button class="boton" id="otra">Mezclar de nuevo</button></div>' +
    '<img id="ref" src="images/' + e.img + '.svg" alt="Imagen terminada" width="140" height="140" style="display:none;margin:8px 0">' +
    '<div class="puzzle" id="tablero"></div><p id="movs"></p><div id="pregunta"></div>';
  document.getElementById("modelo").onclick = function () {
    var r = document.getElementById("ref");
    r.style.display = r.style.display == "none" ? "block" : "none";
  };
  document.getElementById("otra").onclick = function () { iniciar(); };
  document.getElementById("pista").onclick = pista;
  var n = cols * filas;
  var base = [];
  for (var i = 0; i < n; i++) base.push(i);
  orden = mezclar(base);
  while (orden.every(function (p, i) { return p == i; })) orden = mezclar(base);
  elegida = null;
  movs = 0;
  dibujar();
}

function dibujar() {
  var e = escenas[clave];
  var tablero = document.getElementById("tablero");
  tablero.innerHTML = "";
  tablero.style.gridTemplateColumns = "repeat(" + cols + ", " + ancho + "px)";
  orden.forEach(function (p, pos) {
    var b = document.createElement("button");
    b.className = "pieza" + (p == pos ? " bien" : "") + (elegida === pos ? " elegida" : "");
    b.style.width = ancho + "px";
    b.style.height = alto + "px";
    b.style.backgroundImage = "url(images/" + e.img + ".svg)";
    b.style.backgroundSize = (ancho * cols) + "px " + (alto * filas) + "px";
    b.style.backgroundPosition = "-" + (p % cols) * ancho + "px -" + Math.floor(p / cols) * alto + "px";
    b.setAttribute("aria-label", "pieza " + (pos + 1));
    b.dataset.pos = pos;
    b.style.touchAction = "none";
    b.onpointerdown = function (e) {
      e.preventDefault();
      arrastre = {pos: pos, el: b, x: e.clientX, y: e.clientY, movio: false};
    };
    tablero.appendChild(b);
  });
  document.getElementById("movs").textContent = "Movimientos: " + movs;
}

var arrastre = null;

function revisarFin() {
  if (orden.every(function (p, i) { return p == i; })) preguntar();
}

function intercambiar(a, b) {
  var t = orden[a];
  orden[a] = orden[b];
  orden[b] = t;
  movs++;
  elegida = null;
  dibujar();
  revisarFin();
}

function tocar(pos) {
  if (elegida === null) {
    elegida = pos;
    dibujar();
  } else if (elegida == pos) {
    elegida = null;
    dibujar();
  } else {
    intercambiar(elegida, pos);
  }
}

function pista() {
  for (var i = 0; i < orden.length; i++) {
    if (orden[i] != i) {
      intercambiar(i, orden.indexOf(i));
      return;
    }
  }
}

function piezaBajo(e) {
  var el = document.elementFromPoint(e.clientX, e.clientY);
  return el && el.closest ? el.closest(".pieza") : null;
}

document.addEventListener("pointermove", function (e) {
  if (!arrastre) return;
  var dx = e.clientX - arrastre.x, dy = e.clientY - arrastre.y;
  if (Math.abs(dx) + Math.abs(dy) > 6) arrastre.movio = true;
  if (!arrastre.movio) return;
  arrastre.el.style.transform = "translate(" + dx + "px," + dy + "px) scale(1.08)";
  arrastre.el.style.zIndex = 10;
  arrastre.el.style.opacity = ".85";
  arrastre.el.style.pointerEvents = "none";
  document.querySelectorAll(".pieza.destino").forEach(function (p) { p.classList.remove("destino"); });
  var d = piezaBajo(e);
  if (d) d.classList.add("destino");
});

document.addEventListener("pointerup", function (e) {
  if (!arrastre) return;
  var a = arrastre;
  arrastre = null;
  if (!a.movio) { tocar(a.pos); return; }
  var d = piezaBajo(e);
  if (d && d.dataset.pos !== undefined && Number(d.dataset.pos) != a.pos) intercambiar(a.pos, Number(d.dataset.pos));
  else dibujar();
});

function preguntar() {
  var e = escenas[clave];
  var dp = document.getElementById("datoPanel");
  if (dp) dp.style.display = "none";
  var html = "<div class=\"panel\"><h2>¡Lo armaste en " + movs + " movimientos!</h2><p>Ahora comprueba lo que aprendiste:</p><h3>" + e.p + '</h3><div class="opciones">';
  e.o.forEach(function (op, i) { html += '<button class="opcion" data-i="' + i + '">' + op + "</button>"; });
  html += '</div><p id="expl"></p><div class="controles"><button class="boton" id="siguiente" style="display:none">Siguiente imagen</button></div></div>';
  document.getElementById("pregunta").innerHTML = html;
  document.getElementById("pregunta").scrollIntoView({behavior: "smooth", block: "nearest"});
  var botones = document.querySelectorAll("#pregunta .opcion");
  botones.forEach(function (b) {
    b.onclick = function () {
      var i = Number(b.dataset.i);
      botones.forEach(function (x) { x.disabled = true; });
      botones[e.c].classList.add("bien");
      if (i != e.c) b.classList.add("mal");
      document.getElementById("expl").textContent = (i == e.c ? "¡Correcto!" : "Casi. La respuesta correcta es: " + e.o[e.c]);
      if (ajustes.voz) leer(document.getElementById("expl").textContent);
      var s = document.getElementById("siguiente");
      s.style.display = "inline-block";
      s.onclick = function () {
        var caja = document.getElementById("temas").children;
        var claves = Object.keys(escenas);
        caja[(claves.indexOf(clave) + 1) % claves.length].click();
      };
    };
  });
}

crearNiveles(document.getElementById("niveles"), function () { iniciar(); });
crearTemas(document.getElementById("temas"), iniciar, escenas);
