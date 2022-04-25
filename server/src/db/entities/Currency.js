export class Currency {
    cc_id;
    cc_code;
    cc_name;
    cc_description;

    constructor(cc_id, cc_code, cc_name, cc_description) {
        this.cc_id = cc_id;
        this.cc_code = cc_code;
        this.cc_name = cc_name;
        this.cc_description = cc_description;
    }
}