export class Money {
  public amount: number;
  public currency: string;

  constructor(data: any = {}) {
    this.amount = data.amount;
    this.currency = data.currency;
  }

  getAmount(): any {
    return this.amount;
  }

  getCurrency(): string {
    return this.currency;
  }

  add(addend: any): Money {
    let amount: any = this.amount;

    amount = Number(amount) + Number(addend.amount);

    return new Money({
      amount: amount.toString(),
      currency: this.currency,
    });
  }
}
