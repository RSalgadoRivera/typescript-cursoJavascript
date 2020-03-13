module tienda{
    export class Ropa{
         constructor(public titulo:string){
            alert(titulo);
        }
    }
    export class Informatica{
        constructor(public titulo:string){
            alert('Tienda de tecnología'+titulo);
        }
    }
}

import Informatica = tienda.Informatica;
let cargar_informatica = new Informatica('super tienda');

function arranque(lanzar: string) {
    return function (target: Function) {
        target.prototype.lanzamiento = function (): void {
            alert(lanzar);
        }
    }
}


@arranque('lanzamiento del curso de javascript')
class Programa {

    public nombre: string;
    public version: number;

    constructor() {
        this.nombre = '';
        this.version = 0;
    }

    getNombre() {
        return this.nombre;
    }

    getVersion() {
        return this.version;
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    setVersion(version: number) {
        this.version = version
    }

}

class EditorVideo extends Programa {
    public timeline: number;

    constructor() {
        super();
        this.timeline = 0;
    }

    setTimeline(timeline: number) {
        this.timeline = timeline;
    }
    getTimeline() {
        return this.timeline;
    }
    getAllData(): string {
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeline();
    }
}

var editor = new EditorVideo();
editor.setNombre('Camtasia');
editor.setVersion(8);
editor.setTimeline(4000);
console.log(editor.getAllData());

//Logica del formulario

var programas: Array<Programa> = [];

function guardar() {
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(1);

    programas.push(programa);

    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    var listado = <HTMLElement>document.getElementById("listado");
    listado.innerHTML = list;
    (<HTMLInputElement>document.getElementById("nombre")).value = "";
}