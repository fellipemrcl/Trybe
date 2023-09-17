import Client from "./Client";
import OrderItem from "./OrderItem";

export default class Order {
  private _client: Client;
  private _items: OrderItem[] = [];
  private _paymentMethod: string;
  private _discount = 0;

  constructor(
    client: Client,
    items: OrderItem[],
    paymentMethod: string,
    discount: number
  ) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get clientGetter(): Client {
    return this._client;
  }

  set clientSetter(newClient: Client) {
    this._client = newClient;
  }

  get itemsGetter(): OrderItem[] {
    return this._items;
  }

  set itemsSetter(newItems: OrderItem[]) {
    if (newItems.length === 0) {
      throw new Error("O pedido não pode estar vazio.");
    }

    this._items = newItems;
  }

  get paymentMethodGetter(): string {
    return this._paymentMethod;
  }

  set paymentMethodSetter(newPaymentMethod: string) {
    this._paymentMethod = newPaymentMethod;
  }

  get discountGetter(): number {
    return this._discount;
  }

  set discountSetter(newDiscount: number) {
    if (newDiscount < 0) {
      throw new Error("O desconto deve ser maior que zero.");
    }

    this._discount = newDiscount;
  }

  calculateTotal(): number {
    return this._items
      .reduce((previousValue, item) => {
        const total = previousValue + item.priceGetter;
        return total;
      }, 0);
  }
  
  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.discountGetter);
  }
}
