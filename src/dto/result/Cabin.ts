export class Cabin {
  public code: string;
  public name: string;

  constructor(data: any = {}) {
    this.code = data.code;
    this.name = data.name;
  }
}
