// import Client from './classes/Client';
// import Order from './classes/Order';
// import OrderItem from './classes/OrderItem';


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

import Student from "./classes/Student";

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

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
