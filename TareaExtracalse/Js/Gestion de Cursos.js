class  Entidad {

    constructor (nombre, descripcion){
        this.nombre=nombre;
        this.descripcion=descripcion;

    }
}
class Curso extends Entidad {
    constructor(nombre,descripcion,profesor){
      super(nombre,descripcion);
    this.profesor=profesor;
    this.estudiantes = [];
    

    }

 mostrarDetalles(){
  console.log(`Nombre del curso: ${this.nombre}`);
  console.log(`Descripción: ${this.descripcion}`); 
  console.log(`Profesor: ${this.profesor}`); 
  if (this.estudiantes.length > 0) { 
      if (this.estudiantes.length > 1) { 
        console.log("Estudiantes inscritos:");
        for (let i = 0; i < this.estudiantes.length; i++) {
          console.log(`- ${this.estudiantes[i]}`);
        }
      } else {
        console.log(`Estudiante inscrito: ${this.estudiantes[0]}`);
      }
  } else {
      console.log("No hay estudiantes inscritos.");
  }
}

}

let cursos = [];

function crearCurso() {
let nombre = prompt("Introduce el nombre del curso");
let descripcion =prompt ("Introduce la descripcion del curso:");
let profesor =prompt ("Introduce el nombre del profesor:");
let estudiantes = [];
let curso = new Curso (nombre,descripcion, profesor, estudiantes) ;
cursos. push (curso);
}

function inscribirEstudiante() {

  if(cursos.length > 0){
    let curso_ins =prompt ("Introduce el indice del curso al que quieres inscribirte:");
    if(cursos.length >= curso_ins){
    let estudiante =prompt ("Introduce tu nombre:");
    cursos [curso_ins].estudiantes. push(estudiante);
    }else{
    alert("El curso no existe");
    console.log("El curso no existe");}
    }
    else{
    alert("Aun no hay cursos disponibles");
    console.log("Aun no hay cursos disponibles");}
    
}

function mostrarDetallesCurso()
{
let curso_mos = prompt ("Introduce el indice del curso del que quieres ver los detalles:");
let curso = cursos [curso_mos];
curso.mostrarDetalles();
}

function opcionesMenu()
{
    console.log("1. Anadir un curso\n");
    console.log("2. Inscribir estudiante en un curso\n");
    console.log("3.Mostrar detalles del curso\n");   
    console.log("4. Salir\n");
  
}
function mostrarMenu(){
    let opcion;
    do {
      opcion = prompt("1.Anadir un curso.\n2.Inscribir estudiante en un curso.\n3.Mostrar detalles del curso.\n4.Salir.\n\nSeleccione una de las opciones anteriores :");
      switch (opcion) {
        case "1":
          crearCurso() ;
          break;
        case "2":
          inscribirEstudiante();
          break;
        case "3":
          mostrarDetallesCurso();
          break;
        case "4":
          console.log("Saliendo...");
          alert("Saliendo...");
          break;
        default:
          console.log("Opcion no valida");
          alert("Opcion no valida");
          break;
      }
    }while (opcion!=="4");
    } 
    mostrarMenu();


