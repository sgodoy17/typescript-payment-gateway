import { PassengerAssociation } from "./PassengerAssociation";
import { Fare as FareEntity } from "../../entities/Fare";
import { PassengerGroup } from "../../entities/PassengerGroup";
import { PassengerCollection } from "./PassengerCollection";
import { PassengerGroupCollection } from "../../entities/PassengerGroupCollection";

export class PassengerAssociationCollection {
  public collection: Array<PassengerAssociation>;

  constructor(data: any = {}) {
    this.collection = data.collection;
  }

  static fromResponse(data: any): PassengerAssociationCollection {
    let collection: any = [];

    data.forEach((item: any) => {
      collection.push(PassengerAssociation.fromResponse(item));
    });

    return new this({ collection });
  }

  groupByAirline(): PassengerGroupCollection {
    let groupedResults = new Map();

    this.collection.forEach((item: any) => {
      let groupBy = item.priceQuote.airlineCode;
      let collection = groupedResults.get(groupBy);

      if (!collection) {
        groupedResults.set(groupBy, [item]);
      } else {
        collection.push(item);
      }
    });

    let results: Array<PassengerGroup> = [];

    groupedResults.forEach((group: any, airline: string) => {
      let fareSum: FareEntity = group.reduce(
        (carry: FareEntity, passenger: PassengerAssociation) => {
          if (carry == null) {
            return FareEntity.fromDTO(passenger.priceQuote.fare);
          }

          return carry.addDTO(passenger.priceQuote.fare);
        },
        null
      );

      let passengersUids: [] = group.map((passenger: PassengerAssociation) => {
        return passenger.uid;
      });

      let passengers: PassengerCollection = group.map(
        (passengerAssociation: PassengerAssociation) => {
          return passengerAssociation.passenger;
        }
      );

      passengers = new PassengerCollection({ collection: passengers });

      results.push(
        new PassengerGroup(fareSum, airline, passengersUids, passengers)
      );
    });

    return new PassengerGroupCollection({ collection: results });
  }
}
