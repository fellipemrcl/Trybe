interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    const sum = this.myNumber + myParam;
    return `O resultado da soma é: ${sum}`;
  }
}

const object = new MyClass(20);
console.log(object.myFunc(10));
