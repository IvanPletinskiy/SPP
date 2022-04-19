export class Account {
    /** @type {string} */
    ca_id;
    /** @type {string} */
    ca_number;
    /** @type {number} */
    ca_amount;
    /** @type {number} */
    fk_user_id;
    /** @type {number} */
    fk_cc_id;

    constructor(id, number, amount, user_id, currency_id) {
        this.ca_id = id;
        this.ca_number = number;
        this.ca_amount = amount;
        this.fk_user_id = user_id;
        this.fk_cc_id = currency_id;
    }
}