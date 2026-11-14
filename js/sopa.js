var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var colores = ["#ff4f9a", "#16c2b0", "#ffb703", "#8f6bff", "#ff7a1a", "#2fbf71", "#3b9cff", "#d946ef"];
var todas = [[0, 1], [1, 0], [1, 1], [-1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1]];
var niveles = {
  facil: {n: 8, dirs: [[0, 1], [1, 0]], pal: [0, 4], nota: "Fácil: 4 palabras cortas, en horizontal y vertical."},
  medio: {n: 10, dirs: [[0, 1], [1, 0], [1, 1], [-1, 1]], pal: [1, 6], nota: "Medio: 5 palabras, también en diagonal."},
  dificil: {n: 13, dirs: todas, pal: [0, 7], nota: "Difícil: 7 palabras, en cualquier dirección y al revés."}
};
var cont = document.getElementById("contenido");
cont.innerHTML = '<p>Elige un tema y un nivel:</p><div class="temas" id="temas"></div><div class="temas" id="niveles"></div><div id="juego"></div>';
var N, dirs, rejilla, celdas, palabras, halladas, temaActual;
var arrastrando = false;
var ini = null;
var seleccion = [];

function armar() {
  rejilla = [];
  for (var f = 0; f < N; f++) {
    rejilla[f] = [];
    for (var c = 0; c < N; c++) rejilla[f][c] = "";
  }
  var orden = palabras.slice().sort(function (a, b) { return b.length - a.length; });
  for (var i = 0; i < orden.length; i++) {
    var p = orden[i];
    var puesto = false;
    for (var t = 0; t < 300 && !puesto; t++) {
      var d = dirs[Math.floor(Math.random() * dirs.length)];
      var f0 = Math.floor(Math.random() * N);
      var c0 = Math.floor(Math.random() * N);
      var f1 = f0 + d[0] * (p.length - 1);
      var c1 = c0 + d[1] * (p.length - 1);
      if (f1 < 0 || f1 >= N || c1 < 0 || c1 >= N) continue;
      var libre = true;
      for (var k = 0; k < p.length; k++) {
        var x = rejilla[f0 + d[0] * k][c0 + d[1] * k];
        if (x !== "" && x !== p[k]) libre = false;
      }
      if (!libre) continue;
      for (var k2 = 0; k2 < p.length; k2++) rejilla[f0 + d[0] * k2][c0 + d[1] * k2] = p[k2];
      puesto = true;
    }
    if (!puesto) return false;
  }
  for (var a = 0; a < N; a++)
    for (var b = 0; b < N; b++)
      if (rejilla[a][b] === "") rejilla[a][b] = letras[Math.floor(Math.random() * 26)];
  return true;
}

function iniciar(clave) {
  if (clave) temaActual = clave;
  var c = niveles[nivel];
  var ordenadas = temas[temaActual].palabras.map(function (w) { return w.p; }).sort(function (a, b) { return a.length - b.length; });
  palabras = mezclar(ordenadas).slice(0, c.pal[1] - c.pal[0]).sort(function (a, b) { return a.length - b.length; });
  N = Math.max(c.n, palabras[palabras.length - 1].length + 1);
  dirs = c.dirs;
  while (!armar()) {}
  var html = "<p>" + c.nota + " Mantén presionado en la primera letra y arrastra hasta la última. Cada palabra encontrada se pinta de un color distinto.</p>";
  html += '<ul class="lista-palabras">';
  palabras.slice().sort().forEach(function (p) { html += '<li id="p' + p + '">' + p + "</li>"; });
  html += '</ul><div class="rejilla" id="rejilla"></div><p id="avance"></p>';
  document.getElementById("juego").innerHTML = html;
  var tabla = document.getElementById("rejilla");
  tabla.style.gridTemplateColumns = "repeat(" + N + ", 1fr)";
  celdas = [];
  halladas = 0;
  for (var f = 0; f < N; f++) {
    celdas[f] = [];
    for (var c2 = 0; c2 < N; c2++) {
      var b = document.createElement("div");
      b.className = "celda";
      b.style.display = "flex";
      b.style.alignItems = "center";
      b.style.justifyContent = "center";
      b.textContent = rejilla[f][c2];
      b.dataset.f = f;
      b.dataset.c = c2;
      tabla.appendChild(b);
      celdas[f][c2] = b;
    }
  }
  tabla.onpointerdown = function (e) {
    var cel = e.target.closest(".celda");
    if (!cel) return;
    e.preventDefault();
    arrastrando = true;
    ini = {f: Number(cel.dataset.f), c: Number(cel.dataset.c)};
    seleccion = [ini];
    pintar();
  };
  tabla.onpointermove = function (e) {
    if (!arrastrando) return;
    var el = document.elementFromPoint(e.clientX, e.clientY);
    var cel = el && el.closest ? el.closest(".celda") : null;
    if (!cel) return;
    seleccion = calcular(Number(cel.dataset.f), Number(cel.dataset.c));
    pintar();
  };
}

function calcular(f, c) {
  var df = f - ini.f, dc = c - ini.c;
  if (df == 0 && dc == 0) return [ini];
  var paso = Math.round(Math.atan2(df, dc) / (Math.PI / 4));
  var vf = Math.round(Math.sin(paso * Math.PI / 4));
  var vc = Math.round(Math.cos(paso * Math.PI / 4));
  var largo = Math.max(Math.abs(df), Math.abs(dc));
  var lista = [];
  for (var k = 0; k <= largo; k++) {
    var ff = ini.f + vf * k, cc = ini.c + vc * k;
    if (ff < 0 || ff >= N || cc < 0 || cc >= N) break;
    lista.push({f: ff, c: cc});
  }
  return lista;
}

function pintar() {
  for (var f = 0; f < N; f++)
    for (var c = 0; c < N; c++) celdas[f][c].classList.remove("sel");
  seleccion.forEach(function (s) { celdas[s.f][s.c].classList.add("sel"); });
}

document.addEventListener("pointerup", function () {
  if (!arrastrando) return;
  arrastrando = false;
  var texto = seleccion.map(function (s) { return rejilla[s.f][s.c]; }).join("");
  var reves = texto.split("").reverse().join("");
  var hallada = palabras.indexOf(texto) >= 0 ? texto : palabras.indexOf(reves) >= 0 ? reves : null;
  var li = hallada ? document.getElementById("p" + hallada) : null;
  if (li && !li.classList.contains("ok")) {
    var color = colores[halladas % colores.length];
    seleccion.forEach(function (s) {
      var cel = celdas[s.f][s.c];
      cel.classList.add("hallada");
      cel.style.backgroundColor = color;
      cel.style.color = "#000";
    });
    li.classList.add("ok");
    li.style.backgroundColor = color;
    li.style.color = "#000";
    halladas++;
    if (ajustes.voz) leer(hallada);
    document.getElementById("avance").textContent = halladas == palabras.length ? "¡Encontraste todas!" : halladas + " de " + palabras.length + " palabras";
  }
  seleccion = [];
  pintar();
});

crearNiveles(document.getElementById("niveles"), function () { iniciar(); });
crearTemas(document.getElementById("temas"), iniciar);
