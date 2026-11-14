var cont = document.getElementById("contenido");
cont.innerHTML = '<p>Elige un tema y completa cada frase con la palabra correcta.</p><div class="temas" id="temas"></div><div id="juego"></div>';

function iniciar(clave) {
  var lista = temas[clave].palabras;
  var banco = lista.slice().sort(function () { return Math.random() - 0.5; });
  var opciones = '<option value="">elige...</option>';
  banco.forEach(function (w) { opciones += '<option value="' + w.p + '">' + (w.v || w.p.toLowerCase()) + "</option>"; });
  var html = '<ol class="frases">';
  lista.forEach(function (w, i) {
    var partes = w.f.split("___");
    html += "<li>" + partes[0] + '<select data-i="' + i + '" aria-label="palabra que falta">' + opciones + "</select>" + partes[1] + "</li>";
  });
  html += '</ol><div class="controles"><button class="boton" id="revisar">Revisar</button></div><p id="resultado"></p>';
  document.getElementById("juego").innerHTML = html;

  document.getElementById("revisar").onclick = function () {
    var bien = 0;
    document.querySelectorAll(".frases li").forEach(function (li, i) {
      var v = li.querySelector("select").value;
      li.className = v == lista[i].p ? "ok" : "mal";
      if (v == lista[i].p) bien++;
    });
    var r = document.getElementById("resultado");
    r.textContent = bien + " de " + lista.length + " correctas." + (bien == lista.length ? " ¡Excelente!" : " Revisa las que están en rojo.");
    if (ajustes.voz) leer(r.textContent);
  };
}
crearTemas(document.getElementById("temas"), iniciar);
