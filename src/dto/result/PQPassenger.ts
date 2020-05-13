export class PQPassenger {
  public nameId: string;

  constructor(data: any = {}) {
    this.nameId = data.nameId;
  }

  static fromResponse(data: any): PQPassenger {
    return new this({
      nameId: data.name_id,
    });
  }
}
