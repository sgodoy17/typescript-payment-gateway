export class Location {
  public airport: string;
  public datetime: string;

  constructor(data: any = {}) {
    this.airport = data.airport;
    this.datetime = data.datetime;
  }

  static fromResponse(data: any): Location {
    return new this({
      airport: data.airport,
      datetime: data.datetime,
    });
  }
}
