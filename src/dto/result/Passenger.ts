export class Passenger {
  public firstName: string;
  public lastName: string;
  public nameId: string;
  public type: string;

  constructor(data: any = {}) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.nameId = data.nameId;
    this.type = data.type;
  }

  static fromResponse(data: any): Passenger {
    return new this({
      firstName: data.first_name,
      lastName: data.last_name,
      nameId: data.name_id,
      type: data.type,
    });
  }
}
