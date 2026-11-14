var conjuntos = {
  clasicas: {nombre: "Misiones clásicas", icono: "🚀", pares: [
    ["Sojourner", "Primer rover en Marte"], ["Ingenuity", "Primer helicóptero en otro planeta"],
    ["Pioneer 10", "Sobrevoló Júpiter y va hacia Aldebarán"], ["Kepler", "Buscó planetas viendo bajar el brillo de estrellas"],
    ["Surveyor 3", "Rebotó dos veces al alunizar"], ["Viking 1", "Mandó las primeras fotos desde Marte en 1976"],
    ["NEAR Shoemaker", "Aterrizó en el asteroide Eros"], ["InSight", "Escuchó temblores en Marte"]]},
  apolo: {nombre: "Equipo en la Luna", icono: "👨‍🚀", pares: [
    ["Eagle", "Módulo lunar del Apolo 11"], ["Intrepid", "Aterrizó cerca de Surveyor 3"],
    ["ALSEP", "Paquetes de experimentos científicos"], ["LRV", "Vehículo lunar eléctrico (moon buggy)"],
    ["Moon Trees", "Árboles de semillas que viajaron con el Apolo 14"], ["Artemis 1", "Vuelo de prueba de 2022"]]},
  venus: {nombre: "Mercurio y Venus", icono: "🌋", pares: [
    ["Mariner 10", "Usó la gravedad de Venus para llegar a Mercurio"], ["MESSENGER", "Primer orbitador de Mercurio"],
    ["BepiColombo", "Misión de ESA y JAXA con dos orbitadores"], ["Venera", "Programa soviético que aterrizó en Venus"],
    ["Magellan", "Mapeó Venus con radar"], ["Vega 1 y 2", "Soltaron globos en la atmósfera de Venus"]]},
  asteroides: {nombre: "Asteroides y cometas", icono: "☄️", pares: [
    ["DART", "Chocó contra Dimorphos"], ["Hayabusa", "Trajo muestras de Itokawa"],
    ["Rosetta", "Orbitó el cometa Churyumov-Gerasimenko"], ["Philae", "Módulo que descendió a un cometa"],
    ["Giotto", "Fotografió el núcleo del Halley"], ["Stardust", "Capturó polvo de cometa con aerogel"]]},
  marte: {nombre: "Marte", icono: "🔴", pares: [
    ["Sojourner", "Rover de 10.6 kilos"], ["Spirit", "Gemelo que aterrizó en el cráter Gusev"],
    ["Opportunity", "Recorrió 45.16 kilómetros"], ["Phoenix", "Excavó buscando hielo de agua"],
    ["InSight", "Escuchó temblores marcianos"], ["Viking 2", "Aterrizó en Utopia Planitia"],
    ["Pathfinder", "Aterrizó con bolsas de aire"], ["Ingenuity", "Hizo 72 vuelos en Marte"]]},
  profundo: {nombre: "Espacio profundo", icono: "🌌", pares: [
    ["Pioneer 10", "Primera en sobrevolar Júpiter"], ["Pioneer 11", "Visitó Saturno en 1979"],
    ["NEAR Shoemaker", "Aterrizó en Eros"], ["Dawn", "Cartografió Vesta y Ceres"],
    ["Kepler", "Descubrió miles de exoplanetas"], ["Cosmos 482", "Sonda soviética a Venus que volvió a caer a la Tierra"],
    ["Voyager 2", "Visitó Urano en 1986"], ["Cassini", "Orbitó Saturno hasta 2017"]]},
  gigantes: {nombre: "Planetas gigantes", icono: "🪐", pares: [
    ["Galileo", "Primer orbitador de Júpiter"], ["Cassini", "Orbitador de Saturno"],
    ["Huygens", "Aterrizó en Titán"], ["Voyager 2", "Visitó Urano en 1986"],
    ["Juno", "Orbita Júpiter pasando por los polos"], ["Encélado", "Luna de Saturno con géiseres"]]}
};
if (idioma == "en") conjuntos = EN.conjuntos;
var cont = document.getElementById("contenido");
cont.innerHTML = '<p>Elige un tema y un nivel. Encuentra cada nombre con su descripción. Las tarjetas cambian de lugar cada vez.</p><div class="temas" id="temas"></div><div class="temas" id="niveles"></div><div id="juego"></div>';
var abiertas, intentos, aciertos, total, temaActual;

function iniciar(clave) {
  if (clave) temaActual = clave;
  var cantidad = {facil: 4, medio: 6, dificil: 8}[nivel];
  var pares = mezclar(conjuntos[temaActual].pares).slice(0, cantidad);
  total = pares.length;
  var cartas = [];
  pares.forEach(function (p, i) {
    cartas.push({id: i, t: p[0]});
    cartas.push({id: i, t: p[1]});
  });
  cartas = mezclar(cartas);
  document.getElementById("juego").innerHTML = '<p>Intentos: <b id="intentos">0</b> | Parejas: <b id="aciertos">0</b> de ' + total + '</p><div class="tablero" id="tablero"></div>';
  var tablero = document.getElementById("tablero");
  abiertas = [];
  intentos = 0;
  aciertos = 0;
  cartas.forEach(function (c) {
    var b = document.createElement("button");
    b.className = "ficha";
    b.textContent = "⭐";
    b.onclick = function () { voltear(b, c); };
    tablero.appendChild(b);
  });
}

function voltear(b, c) {
  if (abiertas.length == 2 || b.classList.contains("abierta") || b.classList.contains("lista")) return;
  b.textContent = c.t;
  b.classList.add("abierta");
  if (ajustes.voz) leer(c.t);
  abiertas.push({b: b, c: c});
  if (abiertas.length < 2) return;
  intentos++;
  document.getElementById("intentos").textContent = intentos;
  var x = abiertas[0], y = abiertas[1];
  if (x.c.id == y.c.id) {
    x.b.className = "ficha lista";
    y.b.className = "ficha lista";
    aciertos++;
    document.getElementById("aciertos").textContent = aciertos;
    abiertas = [];
    if (aciertos == total) alert(idioma == "en" ? "You did it in " + intentos + " attempts!" : "¡Lo lograste en " + intentos + " intentos!");
  } else {
    setTimeout(function () {
      x.b.className = "ficha"; x.b.textContent = "⭐";
      y.b.className = "ficha"; y.b.textContent = "⭐";
      abiertas = [];
    }, nivel == "dificil" ? 800 : 1300);
  }
}
crearNiveles(document.getElementById("niveles"), function () { iniciar(); });
crearTemas(document.getElementById("temas"), iniciar, conjuntos);
