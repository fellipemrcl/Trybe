class Superclass {
  constructor(public isSuper: boolean = true) {}

  public sayHello(): void {
    console.log("Olá, mundo!");
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

function myFunc(object: Superclass): void {
  object.sayHello();

  console.log(object.isSuper ? "Super!" : "Sub!");
}

const obj1 = new Superclass();
const obj2 = new Subclass();

myFunc(obj1);
myFunc(obj2);