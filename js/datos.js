var temas = {
  luna: {nombre: "La Luna", icono: "🌕", palabras: [
    {p: "SURVEYOR", f: "La sonda ___ 3 rebotó dos veces al alunizar en 1967."},
    {p: "APOLO", f: "Los astronautas del ___ 12 caminaron hasta Surveyor 3."},
    {p: "PALA", f: "Los astronautas se llevaron la ___ de la sonda para estudiarla."},
    {p: "CAMARA", v: "cámara", f: "También recogieron la ___ de televisión de la sonda."},
    {p: "SUELO", f: "Surveyor 3 comprobó que el ___ lunar aguanta el peso de un módulo."},
    {p: "ARENA", f: "El suelo de la Luna se parecía a la ___ húmeda."},
    {p: "ZANJAS", f: "Con su pala, Surveyor 3 excavó cuatro ___."}
  ], pistas: {SURVEYOR: "Sonda que rebotó dos veces en la Luna.", APOLO: "Programa cuyos astronautas visitaron a Surveyor 3.", PALA: "Herramienta que Surveyor 3 usó para excavar.", CAMARA: "Lo que mandó miles de fotos desde la sonda.", SUELO: "Superficie que la sonda probó.", ARENA: "El suelo lunar era como la ___ húmeda.", ZANJAS: "Huecos largos que la sonda cavó."}},
  marte: {nombre: "Marte", icono: "🔴", palabras: [
    {p: "ROVER", f: "El primer ___ en Marte llegó en 1997."},
    {p: "VIKING", f: "Las sondas ___ aterrizaron con éxito en Marte en 1976."},
    {p: "SOJOURNER", f: "El rover ___ pesaba 10.6 kilos."},
    {p: "INGENUITY", f: "El helicóptero ___ hizo 72 vuelos en Marte."},
    {p: "INSIGHT", f: "El módulo ___ escuchó los temblores de Marte."},
    {p: "SPIRIT", f: "El rover ___ y su gemelo Opportunity aterrizaron en 2004."},
    {p: "VIENTO", f: "InSight grabó el sonido del ___ marciano."}
  ], pistas: {ROVER: "Vehículo explorador.", VIKING: "Misión de 1976 con módulos de aterrizaje.", SOJOURNER: "Rover de la misión Pathfinder.", INGENUITY: "Primer helicóptero en otro planeta.", INSIGHT: "Módulo que estudió el interior de Marte.", SPIRIT: "Gemelo de Opportunity.", VIENTO: "InSight grabó su sonido en Marte."}},
  profundo: {nombre: "Espacio profundo", icono: "🌌", palabras: [
    {p: "PIONEER", f: "La nave ___ 10 fue la primera en sobrevolar Júpiter."},
    {p: "JUPITER", v: "Júpiter", f: "Pioneer 10 sobrevoló ___ en diciembre de 1973."},
    {p: "ALDEBARAN", v: "Aldebarán", f: "Pioneer 10 se dirige hacia la estrella ___."},
    {p: "PLACA", f: "Pioneer 10 lleva una ___ de aluminio con un mensaje."},
    {p: "KEPLER", f: "El telescopio ___ descubrió más de 2,600 planetas."},
    {p: "EROS", f: "NEAR Shoemaker aterrizó en el asteroide ___."},
    {p: "ASTEROIDE", f: "NEAR fue la primera nave en aterrizar en un ___."}
  ], pistas: {PIONEER: "Primera nave en cruzar el cinturón de asteroides.", JUPITER: "Planeta gigante que Pioneer 10 visitó.", ALDEBARAN: "Estrella hacia donde viaja Pioneer 10.", PLACA: "Mensaje de aluminio para quien la encuentre.", KEPLER: "Telescopio cazador de planetas.", EROS: "Asteroide donde aterrizó NEAR.", ASTEROIDE: "Roca espacial pequeña."}}  ,
  apolo: {nombre: "Equipo en la Luna", icono: "👨‍🚀", palabras: [
    {p: "EAGLE", f: "El módulo lunar ___ del Apolo 11 dejó su etapa de descenso en la Luna."},
    {p: "INTREPID", f: "El módulo ___ del Apolo 12 aterrizó a menos de 200 metros de Surveyor 3."},
    {p: "ALSEP", f: "Los paquetes científicos ___ siguieron mandando datos años después de que se fueron los astronautas."},
    {p: "SISMOMETROS", v: "sismómetros", f: "Entre los instrumentos de ALSEP había ___ para detectar temblores."},
    {p: "BATERIAS", v: "baterías", f: "Los vehículos lunares siguen en la Luna con sus estructuras y sus ___."},
    {p: "ARTEMIS", f: "El vuelo de prueba ___ 1 fue en 2022."},
    {p: "SEMILLAS", f: "Los Moon Trees nacieron de ___ que viajaron en órbita lunar con el Apolo 14."}
  ], pistas: {EAGLE: "Nombre del módulo lunar del Apolo 11.", INTREPID: "Módulo lunar del Apolo 12.", ALSEP: "Paquetes de experimentos del programa Apolo.", SISMOMETROS: "Instrumentos que detectan temblores.", BATERIAS: "Guardan la energía de los vehículos lunares.", ARTEMIS: "Programa que regresa a la Luna.", SEMILLAS: "De ellas nacieron los Moon Trees."}},
  venus: {nombre: "Mercurio y Venus", icono: "🌋", palabras: [
    {p: "MARINER", f: "La sonda ___ 10 usó la gravedad de Venus para llegar a Mercurio."},
    {p: "MESSENGER", f: "___ fue el primer orbitador de Mercurio y terminó con un impacto controlado en 2015."},
    {p: "BEPICOLOMBO", f: "___ es una misión de ESA y JAXA con dos orbitadores."},
    {p: "VENERA", f: "El programa soviético ___ logró aterrizar en Venus y mandar imágenes."},
    {p: "MAGELLAN", f: "La misión ___ cartografió todo Venus."},
    {p: "RADAR", f: "Magellan mapeó Venus con un ___ de apertura sintética."},
    {p: "MERCURIO", f: "___ es el planeta más cercano al Sol."}
  ], pistas: {MARINER: "Primera sonda en usar asistencia gravitacional.", MESSENGER: "Primer orbitador de Mercurio.", BEPICOLOMBO: "Misión europea y japonesa a Mercurio.", VENERA: "Programa soviético a Venus.", MAGELLAN: "Mapeó Venus con radar.", RADAR: "Ondas que permiten ver a través de las nubes.", MERCURIO: "El planeta más interno."}},
  asteroides: {nombre: "Asteroides y cometas", icono: "☄️", palabras: [
    {p: "HAYABUSA", f: "La sonda ___ trajo una muestra del asteroide Itokawa."},
    {p: "BENNU", f: "La misión OSIRIS-REx recogió una muestra del asteroide ___."},
    {p: "DART", f: "La misión ___ chocó contra Dimorphos en 2021 para probar la defensa planetaria."},
    {p: "ROSETTA", f: "La sonda ___ orbitó el cometa Churyumov-Gerasimenko."},
    {p: "PHILAE", f: "El módulo ___ descendió al cometa de la misión Rosetta."},
    {p: "GIOTTO", f: "La sonda ___ fotografió el núcleo del cometa Halley."},
    {p: "HALLEY", f: "Varias naves formaron una armada para visitar al cometa ___."}
  ], pistas: {HAYABUSA: "Sonda japonesa que trajo polvo de un asteroide.", BENNU: "Asteroide visitado por OSIRIS-REx.", DART: "Chocó contra una luna de asteroide a propósito.", ROSETTA: "Orbitó un cometa.", PHILAE: "Módulo que descendió a un cometa.", GIOTTO: "Sonda europea que se acercó al núcleo de un cometa.", HALLEY: "Cometa famoso visitado por una armada."}},
  gigantes: {nombre: "Planetas gigantes", icono: "🪐", palabras: [
    {p: "JUPITER", v: "Júpiter", f: "Galileo fue el primer orbitador de ___ y soltó una sonda en 1995."},
    {p: "SATURNO", f: "La misión Cassini-Huygens exploró ___ de 1997 a 2017."},
    {p: "URANO", f: "Solo la sonda Voyager 2 ha visitado ___, en enero de 1986."},
    {p: "CASSINI", f: "El orbitador ___ viajó a Saturno junto con la sonda Huygens."},
    {p: "HUYGENS", f: "La sonda ___ aterrizó en Titán en enero de 2005."},
    {p: "TITAN", v: "Titán", f: "Huygens aterrizó en ___, una luna de Saturno."},
    {p: "VOYAGER", f: "La sonda ___ 2 descubrió 10 lunas nuevas de Urano."}
  ], pistas: {JUPITER: "El planeta más grande.", SATURNO: "Planeta de los anillos.", URANO: "Planeta con el eje inclinado 98 grados.", CASSINI: "Orbitador que estudió Saturno.", HUYGENS: "Sonda europea que bajó a Titán.", TITAN: "Luna de Saturno.", VOYAGER: "Sondas que visitaron los planetas exteriores."}}
};

function crearTemas(caja, alElegir, fuente) {
  fuente = fuente || temas;
  Object.keys(fuente).forEach(function (k) {
    var b = document.createElement("button");
    b.className = "boton tema";
    b.textContent = fuente[k].icono + " " + fuente[k].nombre;
    b.onclick = function () {
      for (var i = 0; i < caja.children.length; i++) caja.children[i].classList.remove("elegido");
      b.classList.add("elegido");
      alElegir(k);
    };
    caja.appendChild(b);
  });
  caja.children[Math.floor(Math.random() * caja.children.length)].click();
}

var nivel = "medio";
function crearNiveles(caja, alElegir) {
  [["facil", "Fácil"], ["medio", "Medio"], ["dificil", "Difícil"]].forEach(function (n) {
    var b = document.createElement("button");
    b.className = "boton tema nv-" + n[0] + (n[0] == nivel ? " elegido" : "");
    b.textContent = n[1];
    b.onclick = function () {
      for (var i = 0; i < caja.children.length; i++) caja.children[i].classList.remove("elegido");
      b.classList.add("elegido");
      nivel = n[0];
      alElegir();
    };
    caja.appendChild(b);
  });
  var m = document.createElement("button");
  m.className = "boton tema";
  m.textContent = "Mezclar";
  m.onclick = function () { alElegir(); };
  caja.appendChild(m);
}

function mezclar(lista) {
  var a = lista.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
