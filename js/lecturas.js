var cont = document.getElementById("contenido");

function lista() {
  var html = "<p>Elige una lectura. Al terminar, contesta su cuestionario.</p><div class=\"menu\">";
  lecturas.forEach(function (l, i) {
    html += '<button class="carta" data-i="' + i + '" style="border:0;text-align:left;font-family:inherit;font-size:1rem;cursor:pointer"><img src="images/' + l.i + '.svg" alt="" width="70" height="60"><h2>' + l.t + "</h2></button>";
  });
  cont.innerHTML = html + "</div>";
  cont.querySelectorAll(".carta").forEach(function (b) {
    b.onclick = function () { leer_texto(Number(b.dataset.i)); };
  });
}

function leer_texto(i) {
  var l = lecturas[i];
  cont.innerHTML = '<div class="lectura"><img src="images/' + l.i + '.svg" alt="" width="110" height="95"><h2>' + l.t + "</h2><p>" + l.x.join("</p><p>") + '</p></div><div class="controles"><button class="boton" id="oir">🔊 Escuchar</button><button class="boton" id="preg">Contestar cuestionario</button><button class="boton" id="otra">Elegir otra lectura</button></div>';
  document.getElementById("oir").onclick = function () { leer(l.t + ". " + l.x.join(" ")); };
  document.getElementById("preg").onclick = function () { speechSynthesis.cancel(); cuestionario(i, 0, 0); };
  document.getElementById("otra").onclick = function () { speechSynthesis.cancel(); lista(); };
}

function cuestionario(i, n, puntos) {
  var l = lecturas[i];
  if (n >= l.q.length) {
    cont.innerHTML = '<div class="hoja"><div class="dibujo">🏆</div><h2>' + puntos + " de " + l.q.length + '</h2><p>' + (puntos == l.q.length ? "¡Entendiste muy bien la lectura!" : "Puedes volver a leer y tratar otra vez.") + '</p><button class="boton" id="rel">Releer</button> <button class="boton" id="otra">Otra lectura</button></div>';
    document.getElementById("rel").onclick = function () { leer_texto(i); };
    document.getElementById("otra").onclick = lista;
    return;
  }
  var q = l.q[n];
  var html = "<p>" + l.t + " - pregunta " + (n + 1) + " de " + l.q.length + "</p><h2>" + q.p + '</h2><div class="opciones">';
  q.o.forEach(function (op, k) { html += '<button class="opcion" data-k="' + k + '">' + op + "</button>"; });
  cont.innerHTML = html + '</div><p id="expl"></p><div class="controles"><button class="boton" id="seguir" style="display:none">Siguiente</button></div>';
  var botones = cont.querySelectorAll(".opcion");
  botones.forEach(function (b) {
    b.onclick = function () {
      var k = Number(b.dataset.k);
      botones.forEach(function (x) { x.disabled = true; });
      botones[q.c].classList.add("bien");
      if (k != q.c) b.classList.add("mal");
      document.getElementById("expl").textContent = (k == q.c ? "¡Correcto! " : "Casi. ") + q.e;
      if (ajustes.voz) leer(document.getElementById("expl").textContent);
      var s = document.getElementById("seguir");
      s.style.display = "inline-block";
      s.onclick = function () { cuestionario(i, n + 1, puntos + (k == q.c ? 1 : 0)); };
    };
  });
}
lista();
