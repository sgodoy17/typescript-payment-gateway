import { CollectRequest } from "../../src/entities/CollectRequest";

test("testItParsesCorrectlyACollectWithCredit", () => {
  let data: any = {
    instrument: {
      card: {
        number: "4111111111111111",
        expirationMonth: "12",
        expirationYear: "23",
        cvv: "123",
        installments: 12,
        kind: "C",
      },
    },
    payment: {
      reference: "123123",
      description: "IVR Credit Card",
      amount: {
        currency: "COP",
        total: "432600.00",
        taxes: [
          {
            kind: "valueAddedTax",
            amount: "0.00",
          },
        ],
      },
    },
    locale: "es_CO",
    payer: {
      documentType: "CC",
      document: "1035435141",
      name: "Jessica",
      surname: "Brandt",
      email: "test@test.com",
    },
  };

  let request = new CollectRequest(data);

  expect(data.instrument.card.number).toEqual(
    request.getInstrument().getCard().getNumber()
  );
  expect(data.instrument).toEqual(request.getInstrument().toObject());
  expect(data).toEqual(request.toObject());
});
