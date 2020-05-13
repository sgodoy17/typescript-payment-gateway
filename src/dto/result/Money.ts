export class Money {
  public amount: number;
  public currency: string;

  constructor(data: any = {}) {
    this.amount = data.amount;
    this.currency = data.currency;
  }
}
