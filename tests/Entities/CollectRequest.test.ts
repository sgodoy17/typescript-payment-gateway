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
            base: 0,
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
      address: {
        street: "",
        city: "Madellin",
        state: "Antioquia",
        postalCode: null,
        country: "CO",
        phone: "+5745990766",
      },
      mobile: "+573014565656",
    },
    fields: [
      {
        keyword: "Redeem Code",
        value: 148352,
        displayOn: "payment",
      },
    ],
    additional: {
      test_1: "test_1_data_json",
      test_2: "test_2_data_json",
    },
  };

  let request = new CollectRequest(data);

  console.log(JSON.stringify(request.toObject(), null, 2));
});
