/**
 * @class
 */
export class Session {
  /**
   * @type {string}
   */
  protected token: string;

  /**
   * @type {string}
   */
  protected conversationId: string;

  /**
   * @constructor
   * @param {string} token
   * @param {string} conversationId
   */
  constructor(token: string, conversationId: string) {
    this.token = token;
    this.conversationId = conversationId;
  }

  /**
   * @returns {string}
   */
  getToken(): string {
    return this.token;
  }

  /**
   * @returns {string}
   */
  getConversationId(): string {
    return this.conversationId;
  }
}
