import { Entity } from "../contracts/Entity";
import { Address } from "./Address";
import { PersonValidator } from "../validators/PersonValidator";

/**
 * Class Person.
 */
export class Person extends Entity {
  /**
   * @var {string}
   */
  protected document: string;

  /**
   * @var {string}
   */
  protected documentType: string;

  /**
   * @var {string}
   */
  protected name: string;

  /**
   * @var {string}
   */
  protected surname: string;

  /**
   * @var {string}
   */
  protected company: string;

  /**
   * @var {string}
   */
  protected email: string;

  /**
   * @var {any}
   */
  protected address: any;

  /**
   * @var {any}
   */
  protected mobile: any;

  /**
   * Person constructor.
   *
   * @param {any} data
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
    this.mobile = data.hasOwnProperty("mobile") ? data.mobile.toString() : null;
  }

  /**
   * @returns {string}
   */
  getDocument(): string {
    return this.document;
  }

  /**
   * @returns {string}
   */
  getDocumentType(): string {
    return this.documentType;
  }

  /**
   * @returns {string}
   */
  getName(): string {
    return this.name;
  }

  /**
   * @returns {string}
   */
  getSurname(): string {
    return this.surname;
  }

  /**
   * @returns {string}
   */
  getCompany(): string {
    return this.company;
  }

  /**
   * @returns {string}
   */
  getEmail(): string {
    return this.email;
  }

  /**
   * @returns {any}
   */
  getAddress(): any {
    return this.address;
  }

  /**
   * @returns {any}
   */
  getMobile(): any {
    return this.mobile != null
      ? PersonValidator.normalizePhone(this.mobile)
      : null;
  }

  /**
   * @returns {any}
   */
  toObject(): any {
    return this.arrayFilter({
      document: this.getDocument(),
      documentType: this.getDocumentType(),
      name: this.getName(),
      surname: this.getSurname(),
      company: this.getCompany(),
      email: this.getEmail(),
      address: this.getAddress() ? this.getAddress().toObject() : null,
      mobile: this.getMobile(),
    });
  }
}
