import { Authentication } from "../helpers/Authentication";

/**
 * Class RestCarrier.
 */
export class RestCarrier {
  authorize(
    transaction: any,
    person: any,
    attributes: any,
    config: any,
    payment: any
  ) {
    var instrument: any = [];
    instrument["card"] = this.buildCardFromTransaction(transaction);

    let request: any = this.buildRequest(
      this.buildAuth(config),
      {...instrument},
      this.buildPayment(payment)
    );

    request["payer"] = this.buildPerson(person);

    if (typeof attributes != "undefined") {
      request["additional"] = attributes;
    }

    return {...request};
  }

  buildRequest(auth: any, instrument: any, payment: any = null): Object {
    let request: any = [];

    request["auth"] = auth;
    request["instrument"] = instrument;

    if (typeof payment != "undefined") {
      request["payment"] = payment;
    }

    request["locale"] = "es_CO";
    request["ipAddress"] = "192.168.1.1";
    request["userAgent"] = "Chrome";

    return {...request};
  }

  /**
   * @param config
   */
  buildAuth(config: any): Object {
    let auth = new Authentication(config);

    return auth.asObject();
  }

  buildPayment(payment: any): Object {
    let valueAddedTax: any = [];

    valueAddedTax["kind"] = "valueAddedTax";
    valueAddedTax["amount"] = payment.tax;
    valueAddedTax["base"] = 0;

    let amount: any = [];

    amount["currency"] = payment.currency_code;
    amount["total"] = payment.amount;
    amount["taxes"] = [{...valueAddedTax}];

    let data: any = [];

    data["reference"] = payment.reference;
    data["description"] = payment.description;
    data["amount"] = {...amount};

    return {...data};
  }

  buildPerson(person: any): Object {
    let address: any = [];

    address["street"] = person.address;
    address["city"] = person.city;
    address["state"] = person.state;
    address["postalCode"] = person.postal_code;
    address["country"] = person.country_code;
    address["phone"] = person.phone;

    let rawPerson: any = [];

    rawPerson["documentType"] = person.document_type;
    rawPerson["document"] = person.document;
    rawPerson["name"] = person.first_name;
    rawPerson["surname"] = person.last_name;
    rawPerson["email"] = person.email;
    rawPerson["address"] = {...address};
    rawPerson["mobile"] = person.mobile;

    return {...rawPerson};
  }

  /**
   * @param transaction
   */
  buildCardFromTransaction(transaction: any): Object {
    let card: any = [];

    card["number"] = transaction.ccDigits;
    card["expirationMonth"] = transaction.expDateMM;
    card["expirationYear"] = transaction.expDateYY;
    card["cvv"] = transaction.securityCode;

    return {...card};
  }
}
