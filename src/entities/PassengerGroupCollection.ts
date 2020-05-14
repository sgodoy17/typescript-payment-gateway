import { PassengerGroup } from "./PassengerGroup";

export class PassengerGroupCollection {
  protected collection: Array<PassengerGroup>;

  constructor(data: any = {}) {
    this.collection = data.collection;
  }

  getByAirline(code: string): PassengerGroup {
    let result: any = [];

    this.collection.forEach((item: any) => {
      if (item.getAirlineCode() === code) {
        result = item;
      }
    });

    return result;
  }

  getByUid(uid: string): PassengerGroup | null {
    this.collection.forEach((item: any) => {
      if (item.getPassengerUids().includes(uid)) {
        return item;
      }
    });

    return null;
  }
}
