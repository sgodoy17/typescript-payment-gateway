import { Reservation } from "../../src/dto/result/Reservation";
import { PassengerCollection } from "../../src/dto/result/PassengerCollection";
import { Passenger } from "../../src/dto/result/Passenger";

test("testItCanParseReservationData", () => {
  let data = {
    locator: "YPZUMN",
    route: "MDE-BOG-MDE",
    segments: [
      {
        sequence: 1,
        flight_number: "4003",
        airline: { code: "LA", name: "LATAM AIRLINES GROUP" },
        cabin: { code: "Y", name: "ECONOMY" },
        departure: { airport: "MDE", datetime: "2019-11-21T13:29:00" },
        arrival: { airport: "BOG", datetime: "2019-11-21T14:20:00" },
      },
      {
        sequence: 2,
        flight_number: "9322",
        airline: { code: "AV", name: "AVIANCA" },
        cabin: { code: "Y", name: "ECONOMY" },
        departure: { airport: "BOG", datetime: "2019-11-23T15:21:00" },
        arrival: { airport: "MDE", datetime: "2019-11-23T16:20:00" },
      },
    ],
    passengers: [
      {
        first_name: "EDUARDO MR",
        last_name: "GUZMAN HERNANDEZ",
        name_id: "1.1",
        type: "ADULT",
      },
      {
        first_name: "FERNANDA",
        last_name: "VELASQUEZ RAMIREZ",
        name_id: "2.1",
        type: "CHILD",
      },
      {
        first_name: "FABIAN",
        last_name: "GONZALES CALLE",
        name_id: "3.1",
        type: "INFANT",
      },
    ],
    passenger_associations: [
      {
        uid: "1-1.1",
        price_quote_number: 1,
        passenger_name_id: "1.1",
        price_quote: {
          number: 1,
          airline_code: "LA",
          fare: {
            base_fare: { amount: "3930000", currency: "COP" },
            total_tax: { amount: "2377000", currency: "COP" },
            total_fare: { amount: "6307000", currency: "COP" },
            taxes_collection: {
              iva: { amount: "747000", currency: "COP" },
              other_taxes: { amount: "1630000", currency: "COP" },
            },
          },
          passengers: [{ name_id: "1.1" }],
        },
        passenger: {
          first_name: "EDUARDO MR",
          last_name: "GUZMAN HERNANDEZ",
          name_id: "1.1",
          type: "ADULT",
        },
      },
      {
        uid: "2-2.1",
        price_quote_number: 2,
        passenger_name_id: "2.1",
        price_quote: {
          number: 2,
          airline_code: "LA",
          fare: {
            base_fare: { amount: "3930000", currency: "COP" },
            total_tax: { amount: "2377000", currency: "COP" },
            total_fare: { amount: "6307000", currency: "COP" },
            taxes_collection: {
              iva: { amount: "747000", currency: "COP" },
              other_taxes: { amount: "1630000", currency: "COP" },
            },
          },
          passengers: [{ name_id: "2.1" }],
        },
        passenger: {
          first_name: "FERNANDA",
          last_name: "VELASQUEZ RAMIREZ",
          name_id: "2.1",
          type: "CHILD",
        },
      },
      {
        uid: "3-3.1",
        price_quote_number: 3,
        passenger_name_id: "3.1",
        price_quote: {
          number: 3,
          airline_code: "LA",
          fare: {
            base_fare: { amount: "0", currency: "COP" },
            total_tax: { amount: "0", currency: "COP" },
            total_fare: { amount: "0", currency: "COP" },
            taxes_collection: {
              iva: { amount: "0", currency: "COP" },
              other_taxes: { amount: "0", currency: "COP" },
            },
          },
          passengers: [{ name_id: "3.1" }],
        },
        passenger: {
          first_name: "FABIAN",
          last_name: "GONZALES CALLE",
          name_id: "3.1",
          type: "INFANT",
        },
      },
      {
        uid: "4-1.1",
        price_quote_number: 4,
        passenger_name_id: "1.1",
        price_quote: {
          number: 4,
          airline_code: "AV",
          fare: {
            base_fare: { amount: "4530000", currency: "COP" },
            total_tax: { amount: "2451000", currency: "COP" },
            total_fare: { amount: "6981000", currency: "COP" },
            taxes_collection: {
              iva: { amount: "861000", currency: "COP" },
              other_taxes: { amount: "1590000", currency: "COP" },
            },
          },
          passengers: [{ name_id: "1.1" }],
        },
        passenger: {
          first_name: "EDUARDO MR",
          last_name: "GUZMAN HERNANDEZ",
          name_id: "1.1",
          type: "ADULT",
        },
      },
      {
        uid: "5-3.1",
        price_quote_number: 5,
        passenger_name_id: "3.1",
        price_quote: {
          number: 5,
          airline_code: "AV",
          fare: {
            base_fare: { amount: "0", currency: "COP" },
            total_tax: { amount: "0", currency: "COP" },
            total_fare: { amount: "0", currency: "COP" },
            taxes_collection: {
              iva: { amount: "0", currency: "COP" },
              other_taxes: { amount: "0", currency: "COP" },
            },
          },
          passengers: [{ name_id: "3.1" }],
        },
        passenger: {
          first_name: "FABIAN",
          last_name: "GONZALES CALLE",
          name_id: "3.1",
          type: "INFANT",
        },
      },
    ],
    airline_fares: [
      {
        airline_code: "LA",
        fare: {
          base_fare: { amount: "7860000", currency: "COP" },
          total_tax: { amount: "4754000", currency: "COP" },
          total_fare: { amount: "12614000", currency: "COP" },
          taxes_collection: {
            iva: { amount: "1494000", currency: "COP" },
            other_taxes: { amount: "3260000", currency: "COP" },
          },
        },
      },
      {
        airline_code: "AV",
        fare: {
          base_fare: { amount: "4530000", currency: "COP" },
          total_tax: { amount: "2451000", currency: "COP" },
          total_fare: { amount: "6981000", currency: "COP" },
          taxes_collection: {
            iva: { amount: "861000", currency: "COP" },
            other_taxes: { amount: "1590000", currency: "COP" },
          },
        },
      },
    ],
    price_quotes: [
      {
        number: 1,
        airline_code: "LA",
        fare: {
          base_fare: { amount: "3930000", currency: "COP" },
          total_tax: { amount: "2377000", currency: "COP" },
          total_fare: { amount: "6307000", currency: "COP" },
          taxes_collection: {
            iva: { amount: "747000", currency: "COP" },
            other_taxes: { amount: "1630000", currency: "COP" },
          },
        },
        passengers: [{ name_id: "1.1" }],
      },
      {
        number: 2,
        airline_code: "LA",
        fare: {
          base_fare: { amount: "3930000", currency: "COP" },
          total_tax: { amount: "2377000", currency: "COP" },
          total_fare: { amount: "6307000", currency: "COP" },
          taxes_collection: {
            iva: { amount: "747000", currency: "COP" },
            other_taxes: { amount: "1630000", currency: "COP" },
          },
        },
        passengers: [{ name_id: "2.1" }],
      },
      {
        number: 3,
        airline_code: "LA",
        fare: {
          base_fare: { amount: "0", currency: "COP" },
          total_tax: { amount: "0", currency: "COP" },
          total_fare: { amount: "0", currency: "COP" },
          taxes_collection: {
            iva: { amount: "0", currency: "COP" },
            other_taxes: { amount: "0", currency: "COP" },
          },
        },
        passengers: [{ name_id: "3.1" }],
      },
      {
        number: 4,
        airline_code: "AV",
        fare: {
          base_fare: { amount: "4530000", currency: "COP" },
          total_tax: { amount: "2451000", currency: "COP" },
          total_fare: { amount: "6981000", currency: "COP" },
          taxes_collection: {
            iva: { amount: "861000", currency: "COP" },
            other_taxes: { amount: "1590000", currency: "COP" },
          },
        },
        passengers: [{ name_id: "1.1" }],
      },
      {
        number: 5,
        airline_code: "AV",
        fare: {
          base_fare: { amount: "0", currency: "COP" },
          total_tax: { amount: "0", currency: "COP" },
          total_fare: { amount: "0", currency: "COP" },
          taxes_collection: {
            iva: { amount: "0", currency: "COP" },
            other_taxes: { amount: "0", currency: "COP" },
          },
        },
        passengers: [{ name_id: "3.1" }],
      },
    ],
  };

  let response = Reservation.fromResponse(data);

  let airlineGroups = response.passengerAssociations.groupByAirline();

  let count = 0;

  for (let item in airlineGroups["collection"]) {
    if (airlineGroups["collection"].hasOwnProperty(item)) {
      count++;
    }
  }

  expect(count).toEqual(2);

  expect(airlineGroups["collection"][0].getPassengers()).toBeInstanceOf(
    PassengerCollection
  );
  expect(airlineGroups["collection"][0].getPassengers().first()).toBeInstanceOf(
    Passenger
  );

  expect("7860000").toEqual(
    airlineGroups.getByAirline("LA").getFare().getBaseFare().getAmount()
  );
  expect("COP").toEqual(
    airlineGroups.getByAirline("LA").getFare().getBaseFare().getCurrency()
  );
  expect("4754000").toEqual(
    airlineGroups.getByAirline("LA").getFare().getTotalTax().getAmount()
  );
  expect("COP").toEqual(
    airlineGroups.getByAirline("LA").getFare().getTotalTax().getCurrency()
  );
  expect("12614000").toEqual(
    airlineGroups.getByAirline("LA").getFare().getTotalFare().getAmount()
  );
  expect("COP").toEqual(
    airlineGroups.getByAirline("LA").getFare().getTotalFare().getCurrency()
  );
  expect("1494000").toEqual(
    airlineGroups
      .getByAirline("LA")
      .getFare()
      .getTaxesCollection()
      .getIVA()
      .getAmount()
  );
  expect("COP").toEqual(
    airlineGroups
      .getByAirline("LA")
      .getFare()
      .getTaxesCollection()
      .getIVA()
      .getCurrency()
  );
  expect("3260000").toEqual(
    airlineGroups
      .getByAirline("LA")
      .getFare()
      .getTaxesCollection()
      .getOtherTaxes()
      .getAmount()
  );
  expect("COP").toEqual(
    airlineGroups
      .getByAirline("LA")
      .getFare()
      .getTaxesCollection()
      .getOtherTaxes()
      .getCurrency()
  );

  expect("4530000").toEqual(
    airlineGroups.getByAirline("AV").getFare().getBaseFare().getAmount()
  );
  expect("COP").toEqual(
    airlineGroups.getByAirline("AV").getFare().getBaseFare().getCurrency()
  );
  expect("2451000").toEqual(
    airlineGroups.getByAirline("AV").getFare().getTotalTax().getAmount()
  );
  expect("COP").toEqual(
    airlineGroups.getByAirline("AV").getFare().getTotalTax().getCurrency()
  );
  expect("6981000").toEqual(
    airlineGroups.getByAirline("AV").getFare().getTotalFare().getAmount()
  );
  expect("COP").toEqual(
    airlineGroups.getByAirline("AV").getFare().getTotalFare().getCurrency()
  );
  expect("861000").toEqual(
    airlineGroups
      .getByAirline("AV")
      .getFare()
      .getTaxesCollection()
      .getIVA()
      .getAmount()
  );
  expect("COP").toEqual(
    airlineGroups
      .getByAirline("AV")
      .getFare()
      .getTaxesCollection()
      .getIVA()
      .getCurrency()
  );
  expect("1590000").toEqual(
    airlineGroups
      .getByAirline("AV")
      .getFare()
      .getTaxesCollection()
      .getOtherTaxes()
      .getAmount()
  );
  expect("COP").toEqual(
    airlineGroups
      .getByAirline("AV")
      .getFare()
      .getTaxesCollection()
      .getOtherTaxes()
      .getCurrency()
  );
});

test("canSeeReservationByPassengerAssociation", () => {
  let data = {
    locator: "YPZUMN",
    route: "MDE-BOG-MDE",
    segments: [
      {
        sequence: 1,
        flight_number: "4003",
        airline: { code: "LA", name: "LATAM AIRLINES GROUP" },
        cabin: { code: "Y", name: "ECONOMY" },
        departure: { airport: "MDE", datetime: "2019-11-21T13:29:00" },
        arrival: { airport: "BOG", datetime: "2019-11-21T14:20:00" },
      },
      {
        sequence: 2,
        flight_number: "9322",
        airline: { code: "AV", name: "AVIANCA" },
        cabin: { code: "Y", name: "ECONOMY" },
        departure: { airport: "BOG", datetime: "2019-11-23T15:21:00" },
        arrival: { airport: "MDE", datetime: "2019-11-23T16:20:00" },
      },
    ],
    passengers: [
      {
        first_name: "EDUARDO MR",
        last_name: "GUZMAN HERNANDEZ",
        name_id: "1.1",
        type: "ADULT",
      },
      {
        first_name: "FERNANDA",
        last_name: "VELASQUEZ RAMIREZ",
        name_id: "2.1",
        type: "CHILD",
      },
      {
        first_name: "FABIAN",
        last_name: "GONZALES CALLE",
        name_id: "3.1",
        type: "INFANT",
      },
    ],
    passenger_associations: [
      {
        uid: "1-1.1",
        price_quote_number: 1,
        passenger_name_id: "1.1",
        price_quote: {
          number: 1,
          airline_code: "LA",
          fare: {
            base_fare: { amount: "3930000", currency: "COP" },
            total_tax: { amount: "2377000", currency: "COP" },
            total_fare: { amount: "6307000", currency: "COP" },
            taxes_collection: {
              iva: { amount: "747000", currency: "COP" },
              other_taxes: { amount: "1630000", currency: "COP" },
            },
          },
          passengers: [{ name_id: "1.1" }],
        },
        passenger: {
          first_name: "EDUARDO MR",
          last_name: "GUZMAN HERNANDEZ",
          name_id: "1.1",
          type: "ADULT",
        },
      },
      {
        uid: "2-2.1",
        price_quote_number: 2,
        passenger_name_id: "2.1",
        price_quote: {
          number: 2,
          airline_code: "LA",
          fare: {
            base_fare: { amount: "3930000", currency: "COP" },
            total_tax: { amount: "2377000", currency: "COP" },
            total_fare: { amount: "6307000", currency: "COP" },
            taxes_collection: {
              iva: { amount: "747000", currency: "COP" },
              other_taxes: { amount: "1630000", currency: "COP" },
            },
          },
          passengers: [{ name_id: "2.1" }],
        },
        passenger: {
          first_name: "FERNANDA",
          last_name: "VELASQUEZ RAMIREZ",
          name_id: "2.1",
          type: "CHILD",
        },
      },
      {
        uid: "3-3.1",
        price_quote_number: 3,
        passenger_name_id: "3.1",
        price_quote: {
          number: 3,
          airline_code: "LA",
          fare: {
            base_fare: { amount: "0", currency: "COP" },
            total_tax: { amount: "0", currency: "COP" },
            total_fare: { amount: "0", currency: "COP" },
            taxes_collection: {
              iva: { amount: "0", currency: "COP" },
              other_taxes: { amount: "0", currency: "COP" },
            },
          },
          passengers: [{ name_id: "3.1" }],
        },
        passenger: {
          first_name: "FABIAN",
          last_name: "GONZALES CALLE",
          name_id: "3.1",
          type: "INFANT",
        },
      },
      {
        uid: "4-1.1",
        price_quote_number: 4,
        passenger_name_id: "1.1",
        price_quote: {
          number: 4,
          airline_code: "AV",
          fare: {
            base_fare: { amount: "4530000", currency: "COP" },
            total_tax: { amount: "2451000", currency: "COP" },
            total_fare: { amount: "6981000", currency: "COP" },
            taxes_collection: {
              iva: { amount: "861000", currency: "COP" },
              other_taxes: { amount: "1590000", currency: "COP" },
            },
          },
          passengers: [{ name_id: "1.1" }],
        },
        passenger: {
          first_name: "EDUARDO MR",
          last_name: "GUZMAN HERNANDEZ",
          name_id: "1.1",
          type: "ADULT",
        },
      },
      {
        uid: "5-3.1",
        price_quote_number: 5,
        passenger_name_id: "3.1",
        price_quote: {
          number: 5,
          airline_code: "AV",
          fare: {
            base_fare: { amount: "0", currency: "COP" },
            total_tax: { amount: "0", currency: "COP" },
            total_fare: { amount: "0", currency: "COP" },
            taxes_collection: {
              iva: { amount: "0", currency: "COP" },
              other_taxes: { amount: "0", currency: "COP" },
            },
          },
          passengers: [{ name_id: "3.1" }],
        },
        passenger: {
          first_name: "FABIAN",
          last_name: "GONZALES CALLE",
          name_id: "3.1",
          type: "INFANT",
        },
      },
    ],
    airline_fares: [
      {
        airline_code: "LA",
        fare: {
          base_fare: { amount: "7860000", currency: "COP" },
          total_tax: { amount: "4754000", currency: "COP" },
          total_fare: { amount: "12614000", currency: "COP" },
          taxes_collection: {
            iva: { amount: "1494000", currency: "COP" },
            other_taxes: { amount: "3260000", currency: "COP" },
          },
        },
      },
      {
        airline_code: "AV",
        fare: {
          base_fare: { amount: "4530000", currency: "COP" },
          total_tax: { amount: "2451000", currency: "COP" },
          total_fare: { amount: "6981000", currency: "COP" },
          taxes_collection: {
            iva: { amount: "861000", currency: "COP" },
            other_taxes: { amount: "1590000", currency: "COP" },
          },
        },
      },
    ],
    price_quotes: [
      {
        number: 1,
        airline_code: "LA",
        fare: {
          base_fare: { amount: "3930000", currency: "COP" },
          total_tax: { amount: "2377000", currency: "COP" },
          total_fare: { amount: "6307000", currency: "COP" },
          taxes_collection: {
            iva: { amount: "747000", currency: "COP" },
            other_taxes: { amount: "1630000", currency: "COP" },
          },
        },
        passengers: [{ name_id: "1.1" }],
      },
      {
        number: 2,
        airline_code: "LA",
        fare: {
          base_fare: { amount: "3930000", currency: "COP" },
          total_tax: { amount: "2377000", currency: "COP" },
          total_fare: { amount: "6307000", currency: "COP" },
          taxes_collection: {
            iva: { amount: "747000", currency: "COP" },
            other_taxes: { amount: "1630000", currency: "COP" },
          },
        },
        passengers: [{ name_id: "2.1" }],
      },
      {
        number: 3,
        airline_code: "LA",
        fare: {
          base_fare: { amount: "0", currency: "COP" },
          total_tax: { amount: "0", currency: "COP" },
          total_fare: { amount: "0", currency: "COP" },
          taxes_collection: {
            iva: { amount: "0", currency: "COP" },
            other_taxes: { amount: "0", currency: "COP" },
          },
        },
        passengers: [{ name_id: "3.1" }],
      },
      {
        number: 4,
        airline_code: "AV",
        fare: {
          base_fare: { amount: "4530000", currency: "COP" },
          total_tax: { amount: "2451000", currency: "COP" },
          total_fare: { amount: "6981000", currency: "COP" },
          taxes_collection: {
            iva: { amount: "861000", currency: "COP" },
            other_taxes: { amount: "1590000", currency: "COP" },
          },
        },
        passengers: [{ name_id: "1.1" }],
      },
      {
        number: 5,
        airline_code: "AV",
        fare: {
          base_fare: { amount: "0", currency: "COP" },
          total_tax: { amount: "0", currency: "COP" },
          total_fare: { amount: "0", currency: "COP" },
          taxes_collection: {
            iva: { amount: "0", currency: "COP" },
            other_taxes: { amount: "0", currency: "COP" },
          },
        },
        passengers: [{ name_id: "3.1" }],
      },
    ],
  };

  let response = Reservation.fromResponse(data);

  let passengerGroups = response.passengerAssociations.groupByPassenger();

  expect(passengerGroups["collection"][0].getPassengers()).toBeInstanceOf(
    PassengerCollection
  );
  expect(passengerGroups["collection"][0].getPassengers().first()).toBeInstanceOf(
    Passenger
  );

  expect("3930000").toEqual(
    passengerGroups.getByUid("1-1.1").getFare().getBaseFare().getAmount()
  );
  expect("COP").toEqual(
    passengerGroups.getByUid("1-1.1").getFare().getBaseFare().getCurrency()
  );
  expect("2377000").toEqual(
    passengerGroups.getByUid("1-1.1").getFare().getTotalTax().getAmount()
  );
  expect("COP").toEqual(
    passengerGroups.getByUid("1-1.1").getFare().getTotalTax().getCurrency()
  );
  expect("6307000").toEqual(
    passengerGroups.getByUid("1-1.1").getFare().getTotalFare().getAmount()
  );
  expect("COP").toEqual(
    passengerGroups.getByUid("1-1.1").getFare().getTotalFare().getCurrency()
  );

  expect("0").toEqual(
    passengerGroups.getByUid("5-3.1").getFare().getBaseFare().getAmount()
  );
  expect("COP").toEqual(
    passengerGroups.getByUid("5-3.1").getFare().getBaseFare().getCurrency()
  );
  expect("0").toEqual(
    passengerGroups.getByUid("5-3.1").getFare().getTotalTax().getAmount()
  );
  expect("COP").toEqual(
    passengerGroups.getByUid("5-3.1").getFare().getTotalTax().getCurrency()
  );
  expect("0").toEqual(
    passengerGroups.getByUid("5-3.1").getFare().getTotalFare().getAmount()
  );
  expect("COP").toEqual(
    passengerGroups.getByUid("5-3.1").getFare().getTotalFare().getCurrency()
  );
});
