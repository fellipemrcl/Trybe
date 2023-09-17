class Person {
  age: number;
  name: string;
  private _email: string;
  private _password: string;

  constructor(age: number, name: string, email: string, password: string) {
    this.age = age;
    this.name = name;
    this._email = email;
    this._password = password;
  }

  get getEmail() {
    return this._email;
  }

  set setEmail(newEmail: string) {
    const currentEmail = this._email;
    if (newEmail === currentEmail) {
      console.log("You're trying to update an identical e-mail");
      return;
    }
    this._email = newEmail;
    console.log(this._email);
  }
}

const person1 = new Person(28, "Fellipe", "fellipe@email.com", "12345");
person1.setEmail = "fellipemarcel@email.com";
