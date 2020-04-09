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
  };

  let request = new CollectRequest(data);

  console.log(request);

  let mobile = "+573015676565".toString();
  //console.log(mobile.replace("+57", ""));
});
