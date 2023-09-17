export default class Student {
  private _enrollment: string;
  private _name: string;
  private _examGrades: number[];
  private _projectGrades: number[];

  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this._name = name;
    this._examGrades = [];
    this._projectGrades = [];
  }

  get enrollmentGetter(): string {
    return this._enrollment;
  }

  set enrollmentSetter(value: string) {
    this._enrollment = value;
  }

  get nameGetter(): string {
    return this._name;
  }

  set nameSetter(value: string) {
    if (value.length < 3) {
      throw new Error("O nome deve conter no mínimo 3 caracteres.");
    }
    this._name = value;
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
}

const notasProvas = [10, 7, 8, 5];
const notasTrabalhos = [10, 6];
const estudante1 = new Student("123", "Fellipe");
estudante1.examGradesSetter = notasProvas;
estudante1.projectGradesSetter = notasTrabalhos;
console.log(`Soma das notas: ${estudante1.sumGrades()}`);
console.log(`Média das notas: ${estudante1.calcAverage()}`);
