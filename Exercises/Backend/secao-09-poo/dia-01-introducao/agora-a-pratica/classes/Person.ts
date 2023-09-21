export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  get name(): string {
    return this._name;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error("O nome deve ter no mínimo três caracteres");
    }

    this._name = value;
  }

  set birthDate(value: Date) {
    const currentDate = new Date();
    const ageInMilliseconds = currentDate.getTime() - value.getTime();
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    if (value.getTime() > currentDate.getTime()) {
      throw new Error("A data de nascimento não pode ser uma data no futuro");
    }

    if (ageInYears > 120) {
      throw new Error("A pessoa não pode possuir mais de 120 anos");
    }
  }
}

const person1 = new Person("Fellipe", new Date(1995, 5, 25));
const person2 = new Person("Guilherme", new Date(2006, 6, 16));

person1.birthDate = new Date(1500, 10, 10);

console.log('Pessoa 1', person1);
console.log('Pessoa 2', person2);