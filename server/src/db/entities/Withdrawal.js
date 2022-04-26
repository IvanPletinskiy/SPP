export class Withdrawal {
    wi_id;
    wi_fiat_amount;
    wi_datetime;
    fk_ca_id;

    constructor(wi_id, wi_fiat_amount, wi_datetime, fk_ca_id) {
        this.wi_id = wi_id
        this.wi_fiat_amount = wi_fiat_amount
        this.wi_datetime = wi_datetime
        this.fk_ca_id = fk_ca_id
    }
}