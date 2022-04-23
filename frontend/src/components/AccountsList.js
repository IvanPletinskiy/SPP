import React from "react";
import {getCurrencyNameById, isFiat} from "../utils/CryptoUtils";

class AccountsList extends React.Component {

    render() {
        return this.props.accounts.map(account => {
                var buttons;
                if (isFiat(account.fk_cc_id)) {
                    buttons = <div>
                        <button>Пополнить</button>
                        <button>Вывести</button>
                    </div>
                } else {
                    buttons = <div>
                        <button>Купить</button>
                    </div>
                }
                return (
                    <div>
                        <h5>{account.ca_number}</h5>
                        <h6>{getCurrencyNameById(account.fk_cc_id)}</h6>
                        <h6>{account.ca_amount}</h6>
                        <div>{buttons}</div>
                    </div>
                )
            }
        )
    }
}

export default AccountsList;