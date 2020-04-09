import { Entity } from "../contracts/Entity";
import { Address } from "./Address";
import { PersonValidator } from "../validators/PersonValidator";

/**
 * Class Person.
 */
export class Person extends Entity {
  protected document: string;
  protected documentType: string;
  protected name: string;
  protected surname: string;
  protected company: string;
  protected email: string;
  protected address: any;
  protected mobile: any;

  /**
   * Person constructor.
   *
   * @param {any} data Object to load in this entity.
   */
  constructor(data: any = []) {
    super();

    this.document = data.hasOwnProperty("document") ? data.document : null;
    this.documentType = data.hasOwnProperty("documentType")
      ? data.documentType
      : null;
    this.name = data.hasOwnProperty("name") ? data.name : null;
    this.surname = data.hasOwnProperty("surname") ? data.surname : null;
    this.company = data.hasOwnProperty("company") ? data.company : null;
    this.email = data.hasOwnProperty("email") ? data.email : null;
    this.address = data.hasOwnProperty("address")
      ? new Address(data.address)
      : null;

    /*if (data.hasOwnProperty("address")) {
      this.address = new Address(data.address);
    }*/

    this.mobile = data.hasOwnProperty("mobile")
      ? PersonValidator.normalizePhone(data.mobile.toString())
      : null;
  }

  /**
   * @return string
   */
  getDocument(): string {
    return this.document;
  }

  /**
   * @return string
   */
  getDocumentType(): string {
    return this.documentType;
  }

  /**
   * @return string
   */
  getName(): string {
    return this.name;
  }

  /**
   * @return string
   */
  getSurname(): string {
    return this.surname;
  }

  /**
   * @return string
   */
  getCompany(): string {
    return this.company;
  }

  /**
   * @return string
   */
  getEmail(): string {
    return this.email;
  }

  /**
   * @return any
   */
  getAddress(): any {
    return this.address;
  }

  /**
   * @return any
   */
  getMobile(): any {
    return this.mobile;
  }

  /**
   * @return any
   */
  toObject(): any {
    return {
      document: this.getDocument(),
      documentType: this.getDocumentType(),
      name: this.getName(),
      surname: this.getSurname(),
      company: this.getCompany(),
      email: this.getEmail(),
      address:
        typeof this.getAddress() !== "undefined"
          ? this.getAddress().toObject()
          : null,
      mobile: this.getMobile(),
    };
  }
}
