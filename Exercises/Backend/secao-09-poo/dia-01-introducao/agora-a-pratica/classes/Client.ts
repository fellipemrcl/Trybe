export default class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get nameGetter(): string {
    return this._name;
  }

  set nameSetter(newName: string) {
    if (newName.length < 3) {
      throw new Error("O nome deve ter no mínimo 3 caracteres.");
    }

    this._name = newName;
  }
}
