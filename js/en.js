// Contenido en inglés (se usa solo cuando idioma == "en")
function Q(p, o, c, e) { return {p: p, o: o, c: c, e: e || ""}; }
function W(p, f) { return {p: p, f: f}; }
var EN = {};

EN.lecturas = [
 {t: "Surveyor 3, the probe that bounced", i: "sonda", x: [
  "Surveyor 3 launched on April 17, 1967 and reached the Moon on April 20, in Oceanus Procellarum. Very shiny rocks confused its radar, so the probe bounced twice before it settled.",
  "Its scoop arm dug four trenches. Scientists learned the soil was like damp sand, firm enough to hold an Apollo lunar module. It sent 6,326 images and went silent on May 4, 1967, after the lunar night began."], q: [
  Q("What confused the probe's radar?", ["A storm", "Very shiny rocks", "A dust cloud", "The Sun"], 1, "Very reflective rocks fooled the landing radar."),
  Q("What was the Moon's soil compared to?", ["Ice", "Mud", "Damp sand", "Solid rock"], 2, "It was firm, like damp sand."),
  Q("How many images did the probe send?", ["100", "6,326", "52,663", "160,000"], 1, "It sent 6,326 television images.")]},
 {t: "Mars Pathfinder and Sojourner", i: "rover", x: [
  "Mars Pathfinder launched on December 4, 1996 and reached Mars on July 4, 1997, at Ares Vallis, an ancient flood plain. It landed with parachutes and huge airbags and bounced about 15 times.",
  "Out rolled Sojourner, a 10.6 kilogram rover. Its instruments measured rocks and soil, and the results suggested Mars was once warm and wet. The mission ended on September 27, 1997."], q: [
  Q("Where did Pathfinder land?", ["Ares Vallis", "Oceanus Procellarum", "Elysium Planitia", "Jezero Crater"], 0, "Ares Vallis is an ancient flood plain."),
  Q("How much did Sojourner weigh?", ["1.8 kilograms", "10.6 kilograms", "258 kilograms", "997 kilograms"], 1, "It weighed 10.6 kilograms."),
  Q("What did the results suggest about Mars?", ["It was always frozen", "It was warm and wet", "It has oceans today", "It has no wind"], 1, "Rounded rocks point to water that once flowed.")]},
 {t: "Pioneer 10, the silent traveler", i: "pioneer", x: [
  "Pioneer 10 launched on March 2, 1972. It was the first spacecraft to cross the asteroid belt and to fly past Jupiter, in December 1973. It was planned to last only 21 months.",
  "It worked for more than 30 years. Its last signal arrived on January 23, 2003, from 12.23 billion kilometers away, and took 11 hours and 20 minutes to reach Earth. It now heads toward the star Aldebaran carrying an aluminum plaque with a message."], q: [
  Q("How long was the mission supposed to last?", ["21 months", "5 years", "30 years", "10 days"], 0, "It was planned for 21 months and lasted over 30 years."),
  Q("How long did its last signal take to arrive?", ["1 second", "11 hours and 20 minutes", "3 days", "1 year"], 1, "It was so far away that the signal traveled 11 hours and 20 minutes."),
  Q("Which star is it heading toward?", ["Sirius", "Polaris", "Aldebaran", "Proxima Centauri"], 2, "Aldebaran is in the constellation Taurus.")]},
 {t: "Ingenuity, the Mars helicopter", i: "helicoptero", x: [
  "Ingenuity traveled to Mars attached to the Perseverance rover. On April 19, 2021 it made the first powered, controlled flight on another planet. It weighed 1.8 kilograms and flew in air less than 1 percent as dense as Earth's.",
  "It was meant to make five test flights in 30 days but completed 72 in almost three years, scouting ahead for the rover. Its last flight was on January 18, 2024, and the mission ended on January 25."], q: [
  Q("Which rover did Ingenuity travel with?", ["Sojourner", "Spirit", "Perseverance", "Curiosity"], 2, "It rode under the Perseverance rover."),
  Q("How many flights were expected at first?", ["5", "30", "72", "100"], 0, "Five test flights were expected, and it made 72."),
  Q("When was its last flight?", ["April 19, 2021", "January 18, 2024", "July 4, 1997", "December 15, 2022"], 1, "It last flew on January 18, 2024.")]},
 {t: "Viking 1, first on the surface", i: "lander", x: [
  "Viking 1 launched on August 20, 1975 and entered Mars orbit on June 19, 1976. It had two parts, an orbiter and a lander. Because the first site was rougher than expected, scientists moved the landing to the slopes of Chryse Planitia.",
  "The lander touched down on July 20, 1976 and sent color photos. Its robotic arm scooped soil for a biology lab, and the main test found no organic compounds. It worked until November 11, 1982, when a wrong command sent from Earth cut contact."], q: [
  Q("What two parts did Viking 1 have?", ["A rover and a helicopter", "An orbiter and a lander", "A telescope and a probe", "Two rovers"], 1, "Each Viking had an orbiter and a lander."),
  Q("What did the lander's robotic arm collect?", ["Water", "Soil samples", "Moon rocks", "Air"], 1, "It scooped soil to analyze in its lab."),
  Q("Why did it stop communicating in 1982?", ["It ran out of fuel", "It hit a rock", "It received a wrong command", "A dust storm arrived"], 2, "A wrong command from Earth cut the link.")]},
 {t: "Kepler, the planet hunter", i: "telescopio", x: [
  "The Kepler space telescope launched on March 6, 2009 to find planets around other stars. It used the transit method: when a planet passes in front of its star, the star looks slightly dimmer.",
  "In 2013 it lost a second reaction wheel and could no longer point precisely. Engineers used sunlight pressure to steady it, creating the K2 mission. It ran out of fuel and retired on October 30, 2018, after more than 2,600 discoveries."], q: [
  Q("How did Kepler detect planets?", ["Radar", "Watching a star dim", "Listening to radio", "Landing on them"], 1, "This is the transit method."),
  Q("What steadied Kepler during K2?", ["Sunlight pressure", "A new engine", "A rope", "Mars's gravity"], 0, "Sunlight gently pushes the spacecraft, like wind on a kayak."),
  Q("About how many planets did it discover?", ["Fewer than 10", "About 100", "More than 2,600", "Exactly 72"], 2, "It left a legacy of over 2,600 discoveries.")]},
 {t: "NEAR Shoemaker, the landing nobody planned", i: "asteroide", x: [
  "NEAR launched on February 17, 1996 toward the asteroid Eros, flying past the asteroid Mathilde on the way. On February 14, 2000 it became the first human-made object to orbit an asteroid.",
  "On February 12, 2001 it descended gently and landed on Eros, though it was not designed to. It survived and sent data for about two weeks, with about 160,000 images in total. It stopped responding on February 28, 2001, from the extreme cold."], q: [
  Q("Which asteroid did NEAR land on?", ["Mathilde", "Eros", "Vesta", "Ceres"], 1, "It landed on 433 Eros."),
  Q("How long did it send data after landing?", ["About two weeks", "Five years", "A few minutes", "One day"], 0, "It survived the landing and kept sending data."),
  Q("Why did it stop responding?", ["Its antenna broke", "Extreme cold", "It got lost", "It ran out of photos"], 1, "It succumbed to extreme cold.")]},
 {t: "Spirit and Opportunity, the twins", i: "rover", x: [
  "Spirit and Opportunity were twin rovers that landed on Mars in January 2004, on opposite sides of the planet. Spirit reached Gusev Crater and Opportunity reached Meridiani Planum, places that seemed to have held liquid water.",
  "Their rocks confirmed that water once existed on Mars's surface. Spirit drove 7.7 kilometers and ended its mission in 2010. Opportunity drove 45.16 kilometers and spoke for the last time on June 10, 2018, during a planet-wide dust storm."], q: [
  Q("What did the rocks confirm?", ["That water existed", "That life exists today", "That Mars has no dust", "That it is made of ice"], 0, "The rocks confirmed water once existed on the surface."),
  Q("How far did Opportunity drive?", ["7.7 km", "45.16 km", "100 km", "1 km"], 1, "It drove 45.16 kilometers."),
  Q("What happened when Opportunity last spoke?", ["A dust storm covered the planet", "It ran out of fuel", "A meteorite hit it", "Its cable ended"], 0, "A giant dust storm blocked its solar panels.")]}
];
EN.cruci = [
 ["SURVEYOR|Probe that bounced twice on the Moon.", "RADAR|Confused by shiny rocks during landing.", "TRENCH|Its scoop dug four of these.", "SAND|The soil was like damp ___.", "APOLLO|Program whose lunar modules the soil could hold.", "MOON|Where it landed in 1967."],
 ["SOJOURNER|Name of the 10.6 kilogram rover.", "ROVER|Exploring vehicle that rolled down a ramp.", "AIRBAGS|Huge ___ cushioned the landing.", "PARACHUTE|Slowed the fall through the atmosphere.", "WET|Mars was warm and ___ long ago.", "MARS|Planet where it landed."],
 ["PIONEER|Spacecraft launched in 1972.", "JUPITER|Planet it flew past in December 1973.", "ALDEBARAN|Star it is heading toward.", "PLAQUE|It carries an aluminum one with a message.", "ALUMINUM|Metal of that plaque.", "ASTEROID|It was first to cross the ___ belt."],
 ["INGENUITY|The helicopter's name.", "PERSEVERANCE|Rover it traveled with.", "FLIGHTS|It made 72 of them.", "MOTOR|Its first controlled flight was powered by a ___.", "THIN|Mars air is very ___.", "MARS|Planet where it flew."],
 ["VIKING|Mission with an orbiter and a lander.", "ORBITER|Part that circled Mars.", "LANDER|Part that went down to the surface.", "ARM|Its robotic ___ scooped soil.", "SOIL|What the arm collected.", "COMMAND|A wrong ___ cut contact in 1982."],
 ["KEPLER|Space telescope of this reading.", "TRANSIT|Method: a planet crosses its star.", "STAR|Its brightness dipped during a transit.", "FUEL|It ran out in 2018.", "WHEEL|In 2013 it lost a second reaction ___.", "SUNLIGHT|Its pressure kept Kepler pointed."],
 ["EROS|Asteroid NEAR landed on.", "ASTEROID|NEAR was first to orbit one.", "MATHILDE|Asteroid it flew by on the way.", "COLD|What silenced it in 2001.", "IMAGES|It sent about 160,000.", "ORBIT|First spacecraft to ___ an asteroid."],
 ["SPIRIT|Rover that reached Gusev Crater.", "OPPORTUNITY|Rover that drove 45.16 kilometers.", "TWINS|The two rovers were ___.", "GUSEV|Crater where Spirit landed.", "DUST|A ___ storm covered the planet in 2018.", "STORM|What silenced Opportunity."]
];
EN.temas = {
 luna: {nombre: "The Moon", icono: "🌕", palabras: [
  W("SURVEYOR", "The probe ___ 3 bounced twice when landing in 1967."), W("APOLLO", "The ___ 12 astronauts walked to Surveyor 3."),
  W("SCOOP", "Astronauts took the probe's ___ to study it."), W("CAMERA", "They also took its television ___."),
  W("SOIL", "Surveyor 3 showed the lunar ___ could hold a lander."), W("SAND", "The Moon's soil was like damp ___.")]},
 marte: {nombre: "Mars", icono: "🔴", palabras: [
  W("ROVER", "The first ___ on Mars arrived in 1997."), W("VIKING", "The ___ landers touched down on Mars in 1976."),
  W("SOJOURNER", "The rover ___ weighed 10.6 kilograms."), W("INGENUITY", "The helicopter ___ flew 72 times on Mars."),
  W("INSIGHT", "The lander ___ listened for marsquakes."), W("SPIRIT", "The rover ___ and its twin Opportunity landed in 2004.")]},
 profundo: {nombre: "Deep space", icono: "🌌", palabras: [
  W("PIONEER", "The spacecraft ___ 10 was first to fly past Jupiter."), W("JUPITER", "Pioneer 10 flew past ___ in December 1973."),
  W("ALDEBARAN", "Pioneer 10 is heading toward the star ___."), W("PLAQUE", "Pioneer 10 carries an aluminum ___ with a message."),
  W("KEPLER", "The telescope ___ found more than 2,600 planets."), W("EROS", "NEAR Shoemaker landed on the asteroid ___.")]}
};
EN.conjuntos = {
 clasicas: {nombre: "Classic missions", icono: "🚀", pares: [
  ["Sojourner", "First rover on Mars"], ["Ingenuity", "First helicopter on another planet"], ["Pioneer 10", "Flew past Jupiter, heading to Aldebaran"], ["Kepler", "Hunted planets by watching stars dim"],
  ["Surveyor 3", "Bounced twice when landing"], ["Viking 1", "Sent the first photos from Mars in 1976"], ["NEAR Shoemaker", "Landed on asteroid Eros"], ["InSight", "Listened to marsquakes"]]},
 luna: {nombre: "Gear on the Moon", icono: "👨‍🚀", pares: [
  ["Eagle", "Apollo 11 lunar module"], ["Intrepid", "Landed near Surveyor 3"], ["ALSEP", "Science experiment packages"], ["LRV", "Electric lunar rover"], ["Moon Trees", "Trees grown from seeds flown on Apollo 14"], ["Artemis 1", "2022 test flight"]]},
 marte: {nombre: "Mars", icono: "🔴", pares: [
  ["Sojourner", "A 10.6 kilogram rover"], ["Spirit", "Twin that landed in Gusev Crater"], ["Opportunity", "Drove 45.16 kilometers"], ["Phoenix", "Dug for water ice"],
  ["InSight", "Listened to marsquakes"], ["Viking 2", "Landed in Utopia Planitia"], ["Pathfinder", "Landed with airbags"], ["Ingenuity", "Flew 72 times on Mars"]]}
};
EN.bancos = {clasicas: {nombre: "Classic missions", icono: "🚀", preguntas: [
 Q("How many times did Surveyor 3 bounce before it stopped on the Moon?", ["None", "Two", "Ten", "One hundred"], 1, "Its radar was confused by very shiny rocks."),
 Q("Which astronauts visited Surveyor 3 on the Moon?", ["Apollo 12", "Apollo 11", "Viking", "Pioneer"], 0, "They landed about 180 meters away and took its scoop and camera."),
 Q("In what year did the first Mars rover, Sojourner, arrive?", ["1967", "1976", "1997", "2021"], 2, "It arrived on July 4, 1997 with Mars Pathfinder."),
 Q("How did Pathfinder protect itself when landing on Mars?", ["Spring legs", "Airbags", "Water", "A helicopter"], 1, "It bounced about 15 times inside huge airbags."),
 Q("How many flights did the Ingenuity helicopter make?", ["5", "12", "72", "200"], 2, "Five were expected; it completed 72 in almost three years."),
 Q("Which star is Pioneer 10 heading toward?", ["Sirius", "Aldebaran", "Polaris", "The Sun"], 1, "Aldebaran forms the eye of the constellation Taurus."),
 Q("How did the Kepler telescope find planets?", ["Close-up photos", "Listening to radio", "Watching a star dim", "Sending probes"], 2, "A planet passing in front of its star dims it slightly."),
 Q("What did the InSight lander study on Mars?", ["Marsquakes", "Volcanoes on the Moon", "Saturn's rings", "Ice on Ceres"], 0, "It listened to quakes to learn about Mars's interior."),
 Q("What made NEAR Shoemaker special in 2001?", ["Landed on the Moon", "Landed on an asteroid", "Reached Jupiter", "Returned to Earth"], 1, "It landed on Eros without being designed for it.")]}};
EN.puzzle = {
 surveyor: {nombre: "Surveyor 3", dato: "Surveyor 3 landed on the Moon in 1967 and bounced twice. Its scoop dug trenches and showed the soil is firm like damp sand, so it could hold an Apollo module.", p: "What did Surveyor 3 discover about the lunar soil?", o: ["It is ice", "It is firm like damp sand", "It is mud", "It does not exist"], c: 1},
 sojourner: {nombre: "Sojourner", dato: "Sojourner weighed 10.6 kilograms and was the first rover on Mars, in 1997. Its rounded rocks suggested Mars was once warm and wet.", p: "How much did the Sojourner rover weigh?", o: ["10.6 kilograms", "106 kilograms", "1 kilogram", "1,000 kilograms"], c: 0},
 ingenuity: {nombre: "Ingenuity", dato: "Ingenuity was the first helicopter on another planet. It was meant to fly 5 times and completed 72 in almost three years.", p: "How many flights did Ingenuity make?", o: ["5", "72", "200", "12"], c: 1},
 pioneer: {nombre: "Pioneer 10", dato: "Pioneer 10 left in 1972 and was first to fly past Jupiter. Today it heads toward the star Aldebaran carrying a plaque with a message.", p: "Which star is Pioneer 10 heading toward?", o: ["Sirius", "Aldebaran", "Polaris", "Vega"], c: 1},
 kepler: {nombre: "Kepler", dato: "Kepler found more than 2,600 planets outside the solar system by watching a star dim a little when a planet passed in front.", p: "How did Kepler find planets?", o: ["With radar", "Watching a star dim", "Landing on them", "Listening to radio"], c: 1},
 near: {nombre: "NEAR Shoemaker", dato: "NEAR Shoemaker landed on the asteroid Eros in 2001 without being designed for it, and kept sending data for about two weeks.", p: "Which asteroid did NEAR Shoemaker land on?", o: ["Ceres", "Eros", "Vesta", "Bennu"], c: 1}
};
EN.hitos = [
 {a: 1967, e: "sonda", n: "Surveyor 3", x: "It landed on April 20, 1967 in Oceanus Procellarum after bouncing twice. It sent 6,326 photos and proved the soil could hold a lunar module. Its last contact was on May 4, 1967.", f: "Apollo 12 took its scoop in 1969."},
 {a: 1972, e: "pioneer", n: "Pioneer 10 launches", x: "It left Earth on March 2, 1972. It was first to cross the asteroid belt and first to fly past Jupiter, in December 1973.", f: "It crossed Neptune's orbit on June 13, 1983."},
 {a: 1976, e: "lander", n: "Viking 1", x: "It landed on Mars on July 20, 1976 and tested the soil for signs of life. It stopped communicating on November 11, 1982 because of a wrong command.", f: "The two Viking missions sent 52,663 images of Mars."},
 {a: 1997, e: "rover", n: "Sojourner", x: "The first rover on Mars arrived with Mars Pathfinder on July 4, 1997 at Ares Vallis. The mission ended on September 27, 1997.", f: "It weighed 10.6 kilograms."},
 {a: 2001, e: "asteroide", n: "NEAR Shoemaker", x: "It entered orbit around Eros in 2000 and landed on it on February 12, 2001, though it was not built to land. It stopped responding on February 28, 2001.", f: "First spacecraft to land on an asteroid."},
 {a: 2003, e: "pioneer", n: "Pioneer 10's last signal", x: "On January 23, 2003 it sent its final message from 12.23 billion kilometers away. It took 11 hours and 20 minutes to arrive.", f: "It is heading toward the star Aldebaran."},
 {a: 2004, e: "rover", n: "Spirit and Opportunity", x: "Two twin rovers landed in January 2004 to look for traces of water. Spirit ended its mission in 2010. Opportunity spoke for the last time on June 10, 2018, during a dust storm.", f: "Opportunity drove 45.16 kilometers."},
 {a: 2018, e: "telescopio", n: "Kepler retires", x: "The Kepler telescope ran out of fuel and retired on October 30, 2018. It discovered more than 2,600 planets outside the solar system.", f: "It spotted planets as they crossed in front of their stars."},
 {a: 2022, e: "lander", n: "InSight", x: "It listened to marsquakes to learn about the planet's interior. Its mission ended on December 15, 2022 when it ran out of power.", f: "It also recorded the sound of Martian wind."},
 {a: 2024, e: "helicoptero", n: "Ingenuity", x: "It made 72 flights on Mars starting April 19, 2021. It flew for the last time on January 18, 2024 and the mission was declared over on January 25.", f: "Only 5 flights were expected."}
];
EN.paginas = [
 {t: "The robot that bounced", d: ["sonda"], x: "On April 20, 1967, the Surveyor 3 probe reached the Moon. Its radar was confused by shiny rocks and the probe bounced twice before it settled. With its scoop it dug trenches and found that lunar soil is firm like damp sand."},
 {t: "A surprise visit", d: ["astronauta", "sonda"], x: "In November 1969, Apollo 12 astronauts landed about 180 meters from Surveyor 3. They walked to it and took its scoop and camera back to Earth to see how they had survived almost two and a half years on the Moon."},
 {t: "Viking 1, the pioneer", d: ["lander"], x: "On July 20, 1976, Viking 1 touched down on Mars and sent the first photos from the surface. It worked until November 11, 1982, when a wrong command sent from Earth cut the connection."},
 {t: "Sojourner, the first rover", d: ["rover"], x: "Pathfinder landed on Mars on July 4, 1997 surrounded by huge airbags and bounced about 15 times like a beach ball. Out rolled Sojourner, a 10.6 kilogram rover. Its rounded rocks suggested Mars was once warm and wet."},
 {t: "Pioneer 10 travels alone", d: ["pioneer"], x: "Pioneer 10 was first to fly past Jupiter. It was meant to last 21 months and lasted over 30 years. Its last signal arrived on January 23, 2003. Today it heads toward the star Aldebaran with a plaque for whoever finds it."},
 {t: "Ingenuity, the helicopter", d: ["helicoptero"], x: "On April 19, 2021, Ingenuity made the first powered flight on another planet. Engineers expected five flights and it made 72. Its last flight was on January 18, 2024."},
 {t: "They are not forgotten", d: ["rover", "pioneer", "telescopio"], x: "Even if they no longer move or send signals, these explorers taught us what the Moon is like, how Mars used to be and what lies far from home. Thanks to them, other robots can go even farther."}
];
EN.corto = [
 {fondo: "luna", actor: "sonda", anim: "rebota", texto: "In nineteen sixty-seven, the Surveyor 3 probe reaches the Moon and bounces twice before it comes to rest."},
 {fondo: "luna", actor: "astronauta", anim: "mover", texto: "In nineteen sixty-nine, Apollo 12 astronauts walk up to it and take its scoop and camera."},
 {fondo: "marte", actor: "rover", anim: "mover", texto: "In nineteen ninety-seven, Sojourner, the first rover, calmly explores Mars."},
 {fondo: "marte", actor: "helicoptero", anim: "vuela", texto: "In twenty twenty-one, Ingenuity makes the first powered flight on another planet. In the end it flew seventy-two times."},
 {fondo: "espacio", actor: "pioneer", anim: "deriva", texto: "Pioneer 10 keeps traveling toward the star Aldebaran, even though it no longer sends signals."},
 {fondo: "espacio", actor: "telescopio", anim: "vuela", texto: "And the Kepler telescope discovered more than two thousand six hundred planets outside the solar system. Abandoned, but not forgotten."}
];

// Reemplazos globales (datos que viven en datos.js y textos.js)
if (idioma == "en") {
  if (typeof lecturas != "undefined") lecturas = EN.lecturas;
  if (typeof cruci != "undefined") cruci = EN.cruci;
  if (typeof temas != "undefined") temas = EN.temas;
}
