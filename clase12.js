var freddy = {
  nombre: "Freddy",
  apellido: "Lifszyc",
  edad: 38,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: false
};

var cristian = {
  nombre: "Cristian",
  apellido: "Gomez",
  edad: 13
};

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);

  if (persona.ingeniero) {
    console.log("Ingeniero");
  } else {
    console.log("No es ingeniero");
  }

  if (persona.cocinero) {
    console.log("Cocinero");
  }

  if (persona.dj) {
    console.log("DJ");
  }

  if (persona.cantante) {
    console.log("Cantante");
  }

  if (persona.guitarrista) {
    console.log("Gutiarrista");
  }

  if (persona.drone) {
    console.log("Piloto de drone");
  }
}

const MAYORIA_DE_EDAD = 18;

// const esMayorDeEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD
// }
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}
imprimirSiEsMayorDeEdad(freddy);
imprimirSiEsMayorDeEdad(cristian);

/* const esMenorDeEdad = ({ edad }) => edad < MAYORIA_DE_EDAD;
 */
function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} ACCESO DENEGADO`);
  } else {
    console.log(`${persona.nombre} ACCESO PERMITIDO`);
  }
}

permitirAcceso(freddy);
permitirAcceso(cristian);
