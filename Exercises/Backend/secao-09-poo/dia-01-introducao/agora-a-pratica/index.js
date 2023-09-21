"use strict";
// import Client from './classes/Client';
// import Order from './classes/Order';
// import OrderItem from './classes/OrderItem';
Object.defineProperty(exports, "__esModule", { value: true });
// /* const client = new Client('João');
// const sandwich = new OrderItem('Sanduíche Natural', 5.00);
// const juice = new OrderItem('Suco de Abacaxi', 5.00);
// const dessert = new OrderItem('Gelatina de Uva', 2.50);
// const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);
// console.log(order); */
// const client = new Client('João');
// const sandwich = new OrderItem('Sanduíche Natural', 5.00);
// const juice = new OrderItem('Suco de Abacaxi', 5.00);
// const dessert = new OrderItem('Gelatina de Uva', 2.50);
// const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);
// console.log(order);
// console.log('Valor normal: ', order.calculateTotal());
// console.log('Valor com desconto: ', order.calculateTotalWithDiscount());
// Para testar!
// ,/index.ts
var Student_1 = require("./classes/Student");
var carolina = new Student_1.default('Carolina da Silva', new Date('2005/03/17'));
var lucas = new Student_1.default('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
var jessica = new Student_1.default('Jéssica Bianca Nunes', new Date('2004/06/06'));
var tamires = new Student_1.default('Tamires Santos Bastos', new Date('2005/11/05'));
var fernando = new Student_1.default('Fernando Gonçalves', new Date('2006/09/11'));
carolina.examGradesSetter = [25, 20, 25, 23];
lucas.examGradesSetter = [25, 20, 25, 23];
jessica.projectGradesSetter = [50, 45];
tamires.projectGradesSetter = [47, 42];
console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);
// deve retornar erro
// fernando.assignmentsGrades = [45, 45, 45];
