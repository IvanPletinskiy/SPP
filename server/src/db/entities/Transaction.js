export class Transaction {
    tr_id;
    tr_amount_from;
    tr_amount_to;
    tr_datetime;
    fk_account_from;
    fk_account_to;

    constructor(tr_id, tr_amount_from, tr_amount_to, tr_datetime, fk_account_from, fk_account_to) {
        this.tr_id = tr_id;
        this.tr_amount_from = tr_amount_from;
        this.tr_amount_to = tr_amount_to;
        this.tr_datetime = tr_datetime;
        this.fk_account_from = fk_account_from;
        this.fk_account_to = fk_account_to;
    }
}