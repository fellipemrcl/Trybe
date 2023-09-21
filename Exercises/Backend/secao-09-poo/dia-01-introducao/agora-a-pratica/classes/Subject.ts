export default class Subject {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error("O nome tem que possuir no mínimo 3 caracteres");
    }

    this._name = newName;
  }
}
