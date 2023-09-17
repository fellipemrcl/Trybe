export default class OrderItem {
    private _name: string;
    private _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    get nameGetter(): string {
        return this._name;
    }

    set nameSetter(newName: string) {
        if (newName.length < 3) {
            throw new Error("O nome deve conter no mínimo 3 caracteres.");
        }

        this._name = newName;
    }

    get priceGetter(): number {
        return this._price;
    }

    set priceSetter(newPrice: number) {
        if (newPrice < 0) {
            throw new Error("O preço deve ser maior que zero.");
        }

        this._price = newPrice;
    }
}