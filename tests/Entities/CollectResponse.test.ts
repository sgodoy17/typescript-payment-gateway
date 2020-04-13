import { CollectResponse } from "../../src/entities/CollectResponse";
import { Status } from "../../src/entities/Status";

test("testItParsesCorrectlyACollectResponse", () => {
  let data = {
    status: {
      status: "APPROVED",
      reason: "00",
      message: "Aprobada",
      date: "2020-04-13T16:22:36-05:00",
    },
    date: "2020-04-13T16:22:36-05:00",
    transactionDate: "2020-04-13T16:22:36-05:00",
    internalReference: 1486065056,
    reference: "Test1",
    paymentMethod: "CR_VS",
    franchise: "visa",
    franchiseName: "Visa",
    issuerName: "JPMORGAN CHASE BANK, N.A.",
    amount: {
      taxes: [
        {
          kind: "valueAddedTax",
          amount: 0,
          base: 0,
        },
      ],
      currency: "COP",
      total: "300000.00",
    },
    conversion: {
      from: {
        currency: "COP",
        total: "300000.00",
      },
      to: {
        currency: "COP",
        total: 300000,
      },
      factor: 1,
    },
    authorization: "999999",
    receipt: 2025008528,
    type: "AUTH_ONLY",
    refunded: false,
    lastDigits: "****1111",
    provider: "CREDIBANCO",
    discount: null,
    processorFields: {
      id: "4dd8fa54e79e208742740819fcf3c010",
      b24: "000",
    },
    additional: {
      merchantCode: "011271442",
      terminalNumber: "00057742",
      bin: "411111",
      expiration: "1223",
      installments: 1,
    },
  };

  let response = new CollectResponse(data);

  expect("Test1").toEqual(response.getReference());
  expect(Status.ST_APPROVED).toEqual(response.getStatus().getStatus());

  expect(response.isSuccessful()).toBeTruthy();
  expect(response.isApproved()).toBeTruthy();
});
