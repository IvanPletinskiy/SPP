import React from "react";
import {getCurrencyNameById, isFiat} from "../utils/CryptoUtils";

export default function AccountsList(accounts, navigate) {
    return (accounts.map(account => {
                var buttons;
                if (isFiat(account.fk_cc_id)) {
                    buttons = <div>
                        <button>Пополнить</button>
                        <button>Вывести</button>
                    </div>
                } else {
                    buttons = <div>
                        <button
                            onClick={() => {
                                navigate("/buy");
                            }}
                        >Купить
                        </button>
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
    )
}