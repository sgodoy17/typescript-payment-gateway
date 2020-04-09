import { CollectRequest } from "../../src/entities/CollectRequest";

test("testItParsesCorrectlyACollectWithCredit", () => {
  let data: any = {
    locale: "es_CO",
    payer: {
      name: "Cassie",
      surname: "Walsh",
      email: "ance04@lockman.com",
      document: "1040035020",
      documentType: "CC",
      mobile: "+573015676565",
      company: "Enterdev S.A.S",
      address: {
        street: "64880 Herman Shores",
        city: "West Sophiamouth",
        state: "Antioquia",
        postalCode: "36950-5136",
        country: "US",
        phone: "+57770-649-4858 x713",
      },
    },
    payment: {
      reference: "TEST_20200408_200203",
      description: "Minus ipsum ut sint omnis ut.",
      amount: {
        taxes: [
          {
            kind: "ice",
            amount: 3.6,
          },
          {
            kind: "valueAddedTax",
            amount: 5.7,
          },
        ],
        details: [
          {
            kind: "shipping",
            amount: 1.5,
          },
          {
            kind: "tip",
            amount: 1.5,
          },
          {
            kind: "subtotal",
            amount: 30,
          },
        ],
        currency: "USD",
        total: 42.3,
      },
      items: [
        {
          sku: 22449,
          name: "Voluptate dignissimos.",
          category: "physical",
          qty: 1,
          price: 30,
          tax: 5.7,
        },
      ],
      recurring_remove: {
        periodicity: "D",
        interval: 7,
        nextPayment: "2020-04-10",
        maxPeriods: 4,
        notificationUrl: "https://dnetix.co/ping/recurring_notification",
      },
      shipping: {
        name: "Helen Kling",
        surname: "Hand",
        email: "kathleen.von@yahoo.com",
        documentType: "CC",
        document: "1602634851",
        mobile: "3006108300",
        address: {
          street: "65914 Cornell Junction Apt. 607",
          city: "Kuvalismouth",
          state: "Antioquia",
          postalCode: "22370-5673",
          country: "CO",
          phone: "702-857-0919 x0881",
        },
      },
      allowPartial: false,
      subscribe: false,
    },
  };

  let request = new CollectRequest(data);

  console.log(request);
});
