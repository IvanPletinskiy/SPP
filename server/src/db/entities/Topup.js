export class Topup {
    to_id;
    to_fiat_amount;
    to_datetime;
    fk_ac_id;

    constructor(to_id, to_fiat_amount, to_datetime, fk_ac_id) {
        this.to_id = to_id;
        this.to_fiat_amount = to_fiat_amount;
        this.to_datetime = to_datetime;
        this.fk_ac_id = fk_ac_id;
    }
}