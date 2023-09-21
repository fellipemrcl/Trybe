// Importando as dependências necessárias
import Subject from "./Subject"; // Importa a classe "Subject" de um arquivo local.
import Employee from "../interfaces/Employee"; // Importa a interface "Employee" de um arquivo local.
import Person from "./Person"; // Importa a classe "Person" de um arquivo local.

// Declarando a classe Teacher que estende a classe Person e implementa a interface Employee
export default class Teacher extends Person implements Employee {
  private _subject: Subject; // Declara uma propriedade privada "_subject" do tipo "Subject".
  private _registration = String(); // Declara uma propriedade privada "_registration" do tipo string, inicializada como uma string vazia.
  private _admissionDate: Date; // Declara uma propriedade privada "_admissionDate" do tipo "Date".

  // O construtor da classe Teacher que recebe vários parâmetros
  constructor(
    name: string,
    birthDate: Date,
    private _salary: number, // Declara uma propriedade privada "_salary" do tipo número.
    subject: Subject // Parâmetro do tipo "Subject".
  ) {
    // Chama o construtor da classe pai (Person) com o nome e data de nascimento.
    super(name, birthDate);

    // Inicializa as propriedades da classe com os valores fornecidos.
    this._subject = subject; // Inicializa "_subject" com o valor de "subject".
    this.salary = _salary; // Chama o setter "salary" para inicializar "_salary".
    this._admissionDate = new Date(); // Inicializa "_admissionDate" com a data atual.
    this.registration = this.generateRegistration(); // Gera e inicializa "_registration".
  }

  // Getter para "subject" que retorna o valor de "_subject".
  get subject(): Subject {
    return this._subject;
  }

  // Setter para "subject" que atualiza o valor de "_subject".
  set subject(value: Subject) {
    this._subject = value;
  }

  // Getter para "registration" que retorna o valor de "_registration".
  get registration(): string {
    return this._registration;
  }

  // Setter para "registration" que verifica se o valor possui pelo menos 16 caracteres.
  set registration(value: string) {
    if (value.length < 16)
      throw new Error("O registro deve possuir no mínimo 16 caracteres.");

    this._registration = value;
  }

  // Getter para "salary" que retorna o valor de "_salary".
  get salary(): number {
    return this._salary;
  }

  // Setter para "salary" que verifica se o valor é negativo.
  set salary(value: number) {
    if (value < 0) throw new Error("O salário não pode ser negativo.");

    this._salary = value;
  }

  // Getter para "admissionDate" que retorna o valor de "_admissionDate".
  get admissionDate(): Date {
    return this._admissionDate;
  }

  // Setter para "admissionDate" que verifica se a data é no futuro.
  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime())
      throw new Error("A data de admissão não pode ser uma data no futuro.");

    this._admissionDate = value;
  }

  // Método para gerar um número de registro aleatório.
  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ""
    );

    return `PRF${randomStr}`;
  }
}
