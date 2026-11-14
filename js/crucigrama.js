var cont = document.getElementById("contenido");
cont.innerHTML = '<p>Elige una lectura y un nivel. Lee el texto que aparece a la derecha para encontrar las respuestas.</p><div class="temas" id="temas"></div><div class="temas" id="niveles"></div><div id="juego"></div>';
var fuenteLec = {};
lecturas.forEach(function (l, i) { fuenteLec[i] = {nombre: l.t.split(",")[0], icono: "📰"}; });
var lecActual = 0;

function generar(lista) {
  var cel = {};
  var puestas = [];
  function dirs(d) { return d == "h" ? {df: 0, dc: 1} : {df: 1, dc: 0}; }
  function cabe(p, f, c, d) {
    var v = dirs(d);
    if (cel[(f - v.df) + "," + (c - v.dc)]) return false;
    if (cel[(f + v.df * p.length) + "," + (c + v.dc * p.length)]) return false;
    for (var k = 0; k < p.length; k++) {
      var ff = f + v.df * k, cc = c + v.dc * k;
      var x = cel[ff + "," + cc];
      if (x) {
        if (x.l != p[k] || x[d]) return false;
      } else if (cel[(ff + v.dc) + "," + (cc + v.df)] || cel[(ff - v.dc) + "," + (cc - v.df)]) {
        return false;
      }
    }
    return true;
  }
  function poner(w, f, c, d) {
    var v = dirs(d);
    for (var k = 0; k < w.p.length; k++) {
      var clave = (f + v.df * k) + "," + (c + v.dc * k);
      if (!cel[clave]) cel[clave] = {l: w.p[k], h: 0, v: 0};
      cel[clave][d] = 1;
    }
    puestas.push({w: w, f: f, c: c, d: d});
  }
  function intentar(w) {
    for (var i = 0; i < puestas.length; i++) {
      var pu = puestas[i];
      var nd = pu.d == "h" ? "v" : "h";
      for (var a = 0; a < pu.w.p.length; a++) {
        for (var b = 0; b < w.p.length; b++) {
          if (pu.w.p[a] != w.p[b]) continue;
          var cf = pu.f + (pu.d == "v" ? a : 0);
          var cc = pu.c + (pu.d == "h" ? a : 0);
          var f = cf - (nd == "v" ? b : 0);
          var c = cc - (nd == "h" ? b : 0);
          if (cabe(w.p, f, c, nd)) { poner(w, f, c, nd); return; }
        }
      }
    }
  }
  poner(lista[0], 0, 0, "h");
  for (var i = 1; i < lista.length; i++) intentar(lista[i]);
  return {cel: cel, puestas: puestas};
}

function iniciar(k) {
  if (k !== undefined) lecActual = Number(k);
  var lec = lecturas[lecActual];
  var todas = cruci[lecActual].map(function (s) { var a = s.split("|"); return {p: a[0], t: a[1]}; });
  todas = mezclar(todas);
  var lista = todas.slice(0, {facil: 4, medio: 5, dificil: 6}[nivel]);
  var g = null;
  for (var intento = 0; intento < 80; intento++) {
    var prueba = generar(mezclar(lista));
    if (!g || prueba.puestas.length > g.puestas.length) g = prueba;
    if (g.puestas.length == lista.length) break;
  }
  var minF = 99, maxF = -99, minC = 99, maxC = -99;
  for (var key in g.cel) {
    var par = key.split(",");
    minF = Math.min(minF, +par[0]); maxF = Math.max(maxF, +par[0]);
    minC = Math.min(minC, +par[1]); maxC = Math.max(maxC, +par[1]);
  }
  var nums = {};
  g.puestas.forEach(function (pu, i) {
    var kk = pu.f + "," + pu.c;
    nums[kk] = (nums[kk] ? nums[kk] + "/" : "") + (i + 1);
  });
  var html = '<div class="dos-col"><div>';
  if (nivel == "facil") html += "<p>En el nivel fácil ya viene la primera letra de cada palabra.</p>";
  html += '<table class="cruci">';
  for (var f = minF; f <= maxF; f++) {
    html += "<tr>";
    for (var c = minC; c <= maxC; c++) {
      var clave = f + "," + c;
      if (g.cel[clave]) html += '<td class="l" data-k="' + clave + '"><span class="num">' + (nums[clave] || "") + '</span><input maxlength="1" aria-label="casilla"></td>';
      else html += '<td class="v"></td>';
    }
    html += "</tr>";
  }
  html += "</table><h2>Pistas</h2><ul>";
  g.puestas.forEach(function (pu, i) {
    html += "<li>" + (i + 1) + " (" + (pu.d == "h" ? "horizontal →" : "hacia abajo ↓") + ", " + pu.w.p.length + " letras): " + pu.w.t + "</li>";
  });
  html += '</ul><div class="controles"><button class="boton" id="revisar">Revisar</button></div><p id="resultado"></p></div>';
  html += '<aside class="lado-lectura"><h2>' + lec.t + "</h2><p>" + lec.x.join("</p><p>") + "</p></aside></div>";
  document.getElementById("juego").innerHTML = html;

  if (nivel == "facil") {
    g.puestas.forEach(function (pu) {
      var inp = document.querySelector('[data-k="' + pu.f + "," + pu.c + '"] input');
      inp.value = pu.w.p[0];
      inp.readOnly = true;
    });
  }
  document.getElementById("revisar").onclick = function () {
    var bien = 0, total = 0;
    document.querySelectorAll(".cruci td.l").forEach(function (td) {
      var v = td.querySelector("input").value.toUpperCase();
      total++;
      td.classList.remove("ok", "mal");
      if (v == g.cel[td.dataset.k].l) { td.classList.add("ok"); bien++; }
      else if (v != "") td.classList.add("mal");
    });
    var r = document.getElementById("resultado");
    r.textContent = bien == total ? "¡Crucigrama completo!" : "Llevas " + bien + " letras bien de " + total + ".";
    if (ajustes.voz) leer(r.textContent);
  };
}
crearNiveles(document.getElementById("niveles"), function () { iniciar(); });
crearTemas(document.getElementById("temas"), iniciar, fuenteLec);
