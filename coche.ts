/* 
tsc -init
tsc -p ./ -w
*/
interface CocheBase{
    getModelo():string;
    getVelocidad():number;
}


class Coche implements CocheBase{
    private color: string;
    private modelo: string;
    private velocidad: number;

    constructor(color: string = 'gris', modelo: string = 'sedan', velocidad: number = 100) {
        this.color = color;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }

    //color
    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    //modelo
    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    //velocidad
    public getVelocidad(): number {
        return this.velocidad;
    }

    public setVelocidad(velocidad: number): void {
        this.velocidad = velocidad;
    }
    //métodos
    public acelerar(): void {
        this.velocidad++;
    }
    public frenar(): void {
        this.velocidad--;
    }
}

var coche = new Coche();

console.log(coche);
/*var coche_dos = new Coche();
var coche_tres = new Coche();

coche.setColor('Rojo');
coche.acelerar();
coche.acelerar();
coche.acelerar();

console.log(coche.getVelocidad());*/

/*
coche_dos.setColor('Azul');
coche_tres.setColor('Verde');

console.log("El color del coche 1 es: " + coche.getColor());
console.log("El color del coche 2 es: " + coche_dos.getColor());
console.log("El color del coche 3 es: " + coche_tres.getColor());
*/