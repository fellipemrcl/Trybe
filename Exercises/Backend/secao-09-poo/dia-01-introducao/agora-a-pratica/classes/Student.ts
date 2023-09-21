import Person from "./Person";

export default class Student extends Person {
  private _enrollment: string;
  private _examGrades: number[] = [];
  private _projectGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment() ;
  }

  get enrollmentGetter(): string {
    return this._enrollment;
  }

  set enrollmentSetter(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    this._enrollment = value;
  }

  get examGradesGetter(): number[] {
    return this._examGrades;
  }

  set examGradesSetter(value: number[]) {
    if (value.length > 4) {
      throw new Error("A pessoa estudante só pode possuir 4 notas de provas.");
    }
    this._examGrades = value;
  }

  get projectGradesGetter(): number[] {
    return this._projectGrades;
  }

  set projectGradesSetter(value: number[]) {
    if (value.length > 2) {
      throw new Error(
        "A pessoa estudante só pode possuir 2 notas de trabalhos."
      );
    }
    this._projectGrades = value;
  }

  sumGrades(): number {
    const arrayNotas = [...this._examGrades, ...this._projectGrades];
    const sum = arrayNotas.reduce((acc, cur) => acc + cur, 0);
    return sum;
  }

  calcAverage(): number {
    const somaTotalDasNotas = this.sumGrades();
    const quantidadeDeNotas =
      this._examGrades.length + this._projectGrades.length;
    const media = somaTotalDasNotas / quantidadeDeNotas;
    return Number(media.toFixed(2));
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}
