class Escuela {
  nombre: string;
  cursos: Curso[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.cursos = [];
  }

  agregarCurso(curso: Curso) {
    this.cursos.push(curso);
  }

  asociarAlumnoEnCurso(alumno: Alumno, nombreCurso: string) {
    const curso = this.cursos.find(curso => curso.nombre === nombreCurso);
    if (curso) {
      curso.asociarAlumno(alumno);
      return true;
    }
    return false;
  }
}

class Curso {
  nombre: string;
  alumnos: Alumno[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.alumnos = [];
  }

  asociarAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
  }
}

class Alumno {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

const escuela = new Escuela("Escuela Maipú");

const curso1 = new Curso("Programacion 2");
const curso2 = new Curso("Base de Datos 1");

const alumno1 = new Alumno("Cristian");
const alumno2 = new Alumno("Fernanda");

// Agregar cursos a la escuela
escuela.agregarCurso(curso1);
escuela.agregarCurso(curso2);

escuela.asociarAlumnoEnCurso(alumno1, "Programacion 2");
escuela.asociarAlumnoEnCurso(alumno2, "Programacion 2");
escuela.asociarAlumnoEnCurso(alumno1, "Base de Datos 1");
escuela.asociarAlumnoEnCurso(alumno2, "Base de Datos 1");

for (const curso of escuela.cursos) {
  console.log(`Curso: ${curso.nombre}`);
  console.log("Alumnos:");
  for (const alumno of curso.alumnos) {
    console.log(alumno.nombre);
  }
  console.log();
}
