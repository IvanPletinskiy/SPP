export class Currency {
    cc_id;
    cc_code;
    cc_name;
    cc_description;
    cc_usd_price;

    constructor(cc_id, cc_code, cc_name, cc_description, cc_usd_price) {
        this.cc_id = cc_id;
        this.cc_code = cc_code;
        this.cc_name = cc_name;
        this.cc_description = cc_description;
        this.cc_usd_price = cc_usd_price;
    }
}