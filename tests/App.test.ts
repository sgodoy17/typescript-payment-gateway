import { RestCarrier } from "../src/carriers/RestCarrier";
import { Card } from "../src/entities/Card";

test("Fake Test", () => {
  let config: any = [];

  config["login"] = "6dd490faf9cb87a9862245da41170ff2";
  config["tranKey"] = "024h1IlD";

  let buyer: any = [];

  buyer["address"] = "CL 51";
  buyer["city"] = "Sabaneta";
  buyer["state"] = "Antioquia";
  buyer["postal_code"] = "400998";
  buyer["country_code"] = "Colombia";
  buyer["phone"] = "3016787878";
  buyer["document_type"] = "CC";
  buyer["document"] = "123123";
  buyer["first_name"] = "Test";
  buyer["last_name"] = "Test";
  buyer["email"] = "test@test.com";
  buyer["mobile"] = "3016787878";

  let payment: any = [];

  payment["currency_code"] = "COP";
  payment["amount"] = "300000.00";
  payment["reference"] = "Test1";
  payment["description"] = "This is a test";
  payment["tax"] = "0";

  let transaction: any = [];
  transaction["name"] = "Admin Istrator";
  transaction["number"] = "4111111111111111";
  transaction["expirationMonth"] = "12";
  transaction["expirationYear"] = "21";
  transaction["cvv"] = "123";
  transaction["installments"] = 3;

  let card = new Card(transaction);
  //console.log(card.toObject());

  let carrier = new RestCarrier();
  let response = carrier.authorize(transaction, buyer, [], config, payment);
  //console.log(JSON.stringify(response));
  //console.log(JSON.stringify({...transaction}));
  expect(true).toBeTruthy();
});
