"use strict";
var Coche = /** @class */ (function () {
    function Coche(color, modelo, velocidad) {
        if (color === void 0) { color = 'gris'; }
        if (modelo === void 0) { modelo = 'sedan'; }
        if (velocidad === void 0) { velocidad = 100; }
        this.color = color;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }
    //color
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    //modelo
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    //velocidad
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    //métodos
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
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
