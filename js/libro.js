var paginas = [
  {t: "El robot que rebotó", d: ["sonda"], x: "El 20 de abril de 1967, la sonda Surveyor 3 llegó a la Luna. Su radar se confundió con las rocas brillantes y la sonda rebotó dos veces antes de quedarse quieta. Con su pala excavó zanjas y descubrió que el suelo lunar es firme como arena húmeda."},
  {t: "Una visita sorpresa", d: ["astronauta","sonda"], x: "En noviembre de 1969, los astronautas del Apolo 12 aterrizaron a unos 180 metros de Surveyor 3. Caminaron hasta ella y se llevaron la pala y la cámara a la Tierra para ver cómo habían resistido casi dos años y medio en la Luna."},
  {t: "Viking 1, la pionera", d: ["lander"], x: "El 20 de julio de 1976, Viking 1 se posó en Marte y mandó las primeras fotos desde la superficie. Funcionó hasta el 11 de noviembre de 1982, cuando una orden equivocada enviada desde la Tierra cortó la comunicación."},
  {t: "Sojourner, el primer rover", d: ["rover"], x: "Pathfinder aterrizó en Marte el 4 de julio de 1997 rodeada de enormes bolsas de aire y rebotó unas 15 veces como pelota de playa. De ella salió Sojourner, un rover de 10.6 kilos. Sus rocas redondas sugirieron que Marte fue cálido y húmedo."},
  {t: "Pioneer 10 viaja sola", d: ["pioneer"], x: "Pioneer 10 fue la primera nave en sobrevolar Júpiter. Debía durar 21 meses y duró más de 30 años. Su última señal llegó el 23 de enero de 2003. Hoy sigue su camino hacia la estrella Aldebarán con una placa para quien la encuentre."},
  {t: "Ingenuity, la helicóptera", d: ["helicoptero"], x: "El 19 de abril de 2021, Ingenuity logró el primer vuelo con motor en otro planeta. Los ingenieros esperaban cinco vuelos y hizo 72. Su último vuelo fue el 18 de enero de 2024."},
  {t: "No están olvidados", d: ["rover","pioneer","telescopio"], x: "Aunque ya no se muevan ni manden señales, estos exploradores nos enseñaron cómo es la Luna, cómo fue Marte y qué hay lejos de casa. Gracias a ellos, otros robots pueden llegar más lejos."}
];
if (idioma == "en") paginas = EN.paginas;
var actual = 0;
var cont = document.getElementById("contenido");
cont.innerHTML =
  '<div class="hoja"><div class="dibujo" id="dib"></div><h2 id="tit"></h2><p id="txt"></p></div>' +
  '<div class="controles"><button class="boton" id="ant">◀ Anterior</button>' +
  '<button class="boton" id="oir">🔊 Escuchar</button>' +
  '<button class="boton" id="pausaLec">⏸ Pausa</button>' +
  '<button class="boton" id="sig">Siguiente ▶</button></div>' +
  '<p style="text-align:center" id="num"></p>';

function mostrar() {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  reponerPausa();
  var p = paginas[actual];
  document.getElementById("dib").innerHTML = p.d.map(function (n) { return '<img src="images/' + n + '.svg" alt="">'; }).join("");
  document.getElementById("tit").textContent = p.t;
  document.getElementById("txt").textContent = p.x;
  document.getElementById("num").textContent = "Página " + (actual + 1) + " de " + paginas.length;
  document.getElementById("ant").disabled = actual == 0;
  document.getElementById("sig").disabled = actual == paginas.length - 1;
}
document.getElementById("ant").onclick = function () { actual--; mostrar(); };
document.getElementById("sig").onclick = function () { actual++; mostrar(); };
document.getElementById("oir").onclick = function () { reponerPausa(); leer(paginas[actual].t + ". " + paginas[actual].x); };
mostrar();

var lecPausada = false;
function reponerPausa() {
  lecPausada = false;
  document.getElementById("pausaLec").textContent = "⏸ Pausa";
}
document.getElementById("pausaLec").onclick = function () {
  if (!("speechSynthesis" in window)) return;
  lecPausada = !lecPausada;
  if (lecPausada) speechSynthesis.pause(); else speechSynthesis.resume();
  this.textContent = lecPausada ? "▶ Reanudar" : "⏸ Pausa";
};
