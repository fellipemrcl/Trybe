"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._examGrades = [];
        _this._projectGrades = [];
        _this._enrollment = _this.generateEnrollment();
        return _this;
    }
    Object.defineProperty(Student.prototype, "enrollmentGetter", {
        get: function () {
            return this._enrollment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "enrollmentSetter", {
        set: function (value) {
            if (value.length < 16)
                throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
            this._enrollment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "examGradesGetter", {
        get: function () {
            return this._examGrades;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "examGradesSetter", {
        set: function (value) {
            if (value.length > 4) {
                throw new Error("A pessoa estudante só pode possuir 4 notas de provas.");
            }
            this._examGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "projectGradesGetter", {
        get: function () {
            return this._projectGrades;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "projectGradesSetter", {
        set: function (value) {
            if (value.length > 2) {
                throw new Error("A pessoa estudante só pode possuir 2 notas de trabalhos.");
            }
            this._projectGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.sumGrades = function () {
        var arrayNotas = __spreadArray(__spreadArray([], this._examGrades, true), this._projectGrades, true);
        var sum = arrayNotas.reduce(function (acc, cur) { return acc + cur; }, 0);
        return sum;
    };
    Student.prototype.calcAverage = function () {
        var somaTotalDasNotas = this.sumGrades();
        var quantidadeDeNotas = this._examGrades.length + this._projectGrades.length;
        var media = somaTotalDasNotas / quantidadeDeNotas;
        return Number(media.toFixed(2));
    };
    Student.prototype.generateEnrollment = function () {
        var randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return "STU".concat(randomStr);
    };
    return Student;
}(Person_1.default));
exports.default = Student;
