import { PassengerAssociation } from "./PassengerAssociation";
import { Fare as FareEntity } from "../../entities/Fare";
import { PassengerGroup } from "../../entities/PassengerGroup";
import { PassengerCollection } from "./PassengerCollection";
import { PassengerGroupCollection } from "../../entities/PassengerGroupCollection";

/**
 * @class
 */
export class PassengerAssociationCollection {
  /**
   * @type {Array<PassengerAssociation>}
   */
  public collection: Array<PassengerAssociation>;

  /**
   * @constructor
   * @param {any} data
   */
  constructor(data: any = {}) {
    this.collection = data.collection;
  }

  /**
   * @param {any} data
   * @returns {PassengerAssociationCollection}
   */
  static fromResponse(data: any): PassengerAssociationCollection {
    let collection: any = [];

    data.forEach((item: any) => {
      collection.push(PassengerAssociation.fromResponse(item));
    });

    return new this({ collection });
  }

  /**
   * @returns {PassengerGroupCollection}
   */
  groupByAirline(): PassengerGroupCollection {
    let groupedResults: any = new Map();

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

  /**
   * @returns {PassengerGroupCollection}
   */
  groupByPassenger(): PassengerGroupCollection {
    let results: Array<PassengerGroup> = [];

    this.collection.forEach((passengerAssociation: PassengerAssociation) => {
      let passengersUids: any = [];
      passengersUids.push(passengerAssociation.uid)

      results.push(
        new PassengerGroup(
          FareEntity.fromDTO(passengerAssociation.priceQuote.fare),
          passengerAssociation.priceQuote.airlineCode,
          passengersUids,
          new PassengerCollection({ collection: [passengerAssociation.passenger] })
        )
      );
    });

    return new PassengerGroupCollection({ collection: results });
  }

  /**
   * @param {string} uid
   * @returns {PassengerAssociation}
   */
  getByUid(uid: string): PassengerAssociation {
    let result: any = [];

    this.collection.forEach((passengerAssociation: any) => {
      if (passengerAssociation.uid === uid) {
        result = passengerAssociation;
      }
    });

    return result;
  }
}
