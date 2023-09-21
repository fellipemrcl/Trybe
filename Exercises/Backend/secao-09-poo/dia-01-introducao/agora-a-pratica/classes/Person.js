"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, birthDate) {
        this._name = name;
        this._birthDate = birthDate;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value.length < 3) {
                throw new Error("O nome deve ter no mínimo três caracteres");
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (value) {
            var currentDate = new Date();
            var ageInMilliseconds = currentDate.getTime() - value.getTime();
            var ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
            if (value.getTime() > currentDate.getTime()) {
                throw new Error("A data de nascimento não pode ser uma data no futuro");
            }
            if (ageInYears > 120) {
                throw new Error("A pessoa não pode possuir mais de 120 anos");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.default = Person;
var person1 = new Person("Fellipe", new Date(1995, 5, 25));
var person2 = new Person("Guilherme", new Date(2006, 6, 16));
person1.birthDate = new Date(1500, 10, 10);
console.log('Pessoa 1', person1);
console.log('Pessoa 2', person2);
