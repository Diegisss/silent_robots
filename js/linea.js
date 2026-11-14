var hitos = [
  { a: 1967, e: "sonda", n: "Surveyor 3", x: "Alunizó el 20 de abril de 1967 en Oceanus Procellarum tras rebotar dos veces. Mandó 6,326 fotos y probó que el suelo aguantaría un módulo lunar. Su último contacto fue el 4 de mayo de 1967.", f: "Apolo 12 le recogió la pala en 1969." },
  { a: 1972, e: "pioneer", n: "Pioneer 10 despega", x: "Salió de la Tierra el 2 de marzo de 1972. Fue la primera en cruzar el cinturón de asteroides y la primera en sobrevolar Júpiter, en diciembre de 1973.", f: "Cruzó la órbita de Neptuno el 13 de junio de 1983." },
  { a: 1976, e: "lander", n: "Viking 1", x: "Aterrizó en Marte el 20 de julio de 1976 y buscó señales de vida en el suelo. Dejó de comunicarse el 11 de noviembre de 1982 por una orden equivocada.", f: "Las dos naves Viking mandaron 52,663 imágenes de Marte." },
  { a: 1997, e: "rover", n: "Sojourner", x: "El primer rover en Marte llegó con Mars Pathfinder el 4 de julio de 1997 en Ares Vallis. La misión terminó el 27 de septiembre de 1997.", f: "Pesaba 10.6 kilos y la base de Pathfinder se llama Estación Carl Sagan." },
  { a: 2001, e: "asteroide", n: "NEAR Shoemaker", x: "Entró en órbita de Eros en el año 2000 y aterrizó en él el 12 de febrero de 2001, aunque no estaba hecha para aterrizar. Dejó de responder el 28 de febrero de 2001.", f: "Fue la primera nave en aterrizar en un asteroide." },
  { a: 2003, e: "pioneer", n: "Última señal de Pioneer 10", x: "El 23 de enero de 2003 mandó su último mensaje desde 12,230 millones de kilómetros. Tardó 11 horas y 20 minutos en llegar.", f: "Va hacia la estrella Aldebarán." },
  { a: 2004, e: "rover", n: "Spirit y Opportunity", x: "Dos rovers gemelos aterrizaron en enero de 2004 para buscar rastros de agua. Spirit terminó su misión en 2010. Opportunity habló por última vez el 10 de junio de 2018, durante una tormenta de polvo.", f: "Opportunity recorrió 45.16 kilómetros." },
  { a: 2018, e: "telescopio", n: "Kepler se retira", x: "El telescopio Kepler se quedó sin combustible y fue retirado el 30 de octubre de 2018. Descubrió más de 2,600 planetas fuera del sistema solar.", f: "Detectaba planetas cuando pasaban frente a su estrella." },
  { a: 2022, e: "lander", n: "InSight", x: "Escuchó temblores de Marte para conocer su interior. Su misión terminó el 15 de diciembre de 2022 al quedarse sin energía.", f: "También grabó el sonido del viento marciano." },
  { a: 2024, e: "helicoptero", n: "Ingenuity", x: "Hizo 72 vuelos en Marte desde el 19 de abril de 2021. Voló por última vez el 18 de enero de 2024 y su misión se dio por terminada el 25 de enero.", f: "Se esperaban solo 5 vuelos." }
];

if (idioma == "en") hitos = EN.hitos;
function img(n, t) {
  return '<img src="images/' + n + '.svg" alt="" width="' + t + '" height="' + t + '">';
}
var cont = document.getElementById("contenido");
cont.innerHTML = '<p>Toca una misión para leer su historia.</p>' +
  '<div class="controles"><button class="boton" id="izq">◀</button><button class="boton" id="vista">Ver en 3D</button><button class="boton" id="der">▶</button></div>' +
  '<div id="escena"><div class="tira" id="tira"></div></div><div class="panel" id="panel"></div>';
var tira = document.getElementById("tira");
var escena = document.getElementById("escena");
var actual = 0;
var en3d = false;

hitos.forEach(function (h, i) {
  var b = document.createElement("button");
  b.className = "hito";
  b.innerHTML = '<span class="anio">' + h.a + '</span>' + img(h.e, 48) + '<br>' + h.n;
  b.onclick = function () { abrir(i); };
  tira.appendChild(b);
});

function poner() {
  var botones = tira.children;
  for (var j = 0; j < botones.length; j++) {
    botones[j].style.transform = en3d ? "rotateY(" + (j * 36) + "deg) translateZ(280px)" : "";
  }
  tira.style.transform = en3d ? "rotateY(" + (-actual * 36) + "deg)" : "";
}

function abrir(i) {
  var h = hitos[i];
  actual = i;
  var botones = tira.children;
  for (var j = 0; j < botones.length; j++) botones[j].classList.remove("activo");
  botones[i].classList.add("activo");
  if (!en3d) botones[i].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  poner();
  document.getElementById("panel").innerHTML =
    "<h2>" + img(h.e, 40) + " " + h.n + " (" + h.a + ")</h2><p>" + h.x + "</p><p><b>Dato curioso:</b> " + h.f + "</p>";
  if (ajustes.voz) leer(h.n + ". " + h.x + " Dato curioso. " + h.f);
}

document.getElementById("izq").onclick = function () { abrir((actual + hitos.length - 1) % hitos.length); };
document.getElementById("der").onclick = function () { abrir((actual + 1) % hitos.length); };
document.getElementById("vista").onclick = function () {
  en3d = !en3d;
  tira.classList.toggle("d3", en3d);
  escena.classList.toggle("esc3d", en3d);
  this.textContent = en3d ? "Ver en tira" : "Ver en 3D";
  abrir(actual);
};
abrir(0);
