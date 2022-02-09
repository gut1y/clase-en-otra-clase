// crear las clases Edificio, Piso y Departamento aquí

class Piso {
  nombre: string;
  deptos: Departamento[];
  constructor(nombre) {
    this.nombre = nombre;
    this.deptos = [];
  }
  pushDepartamento(depto: Departamento) {
    return this.deptos.push(depto);
  }
  getDepartamento(): Departamento[] {
    return this.deptos;
  }
}

class Departamento {
  nombre: string;

  constructor(nombre) {
    this.nombre = nombre;
  }
  getName() {
    return this.nombre;
  }
}

class Edificio {
  pisos: Piso[];
  constructor(pisos: Piso[]) {
    // Piso { nombre: 'planta baja', deptos: [] },
    // Piso { nombre: 'primer piso', deptos: [] }
    this.pisos = pisos;
  }

  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    const pisoEncontrado = this.pisos.find((p) => p.nombre == nombreDePiso);
    // Piso {
    //   nombre: 'planta baja',
    //   deptos: [ Departamento { nombre: 'depto uno' } ]
    // }
    // Piso {
    //   nombre: 'planta baja',
    //   deptos: [
    //     Departamento { nombre: 'depto uno' },
    //     Departamento { nombre: 'depto dos' }
    //   ]
    // }
    //plantabaja
    return pisoEncontrado.pushDepartamento(departamento); // 1 2 3 // "depto uno", "depto dos", "depto tres"
  }
  getDepartamentosByPiso(nombreDelPiso: string): Departamento[] {
    const pisoEncontrado = this.pisos.find((p) => p.nombre == nombreDelPiso);
    return pisoEncontrado.getDepartamento();
  }
}

// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  //Piso { nombre: 'planta baja', deptos: [] }

  const otroPiso = new Piso("primer piso");
  //Piso { nombre: 'primer piso', deptos: [] }

  const unEdificio = new Edificio([unPiso, otroPiso]);
  //Edificio {
  // pisos: [
  //     Piso { nombre: 'planta baja', deptos: [] },
  //     Piso { nombre: 'primer piso', deptos: [] }
  //   ]
  // }

  const deptoUno = new Departamento("depto uno");
  //Departamento { nombre: 'depto uno' }
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  // [
  //   Departamento { nombre: 'depto uno' },
  //   Departamento { nombre: 'depto dos' },
  //   Departamento { nombre: 'depto tres' }
  // ]

  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  //deptos Empty []

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
}
main();
