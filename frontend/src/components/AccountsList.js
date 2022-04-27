import React from "react";
import {getCurrencyNameById, isFiat} from "../utils/CryptoUtils";

export default function AccountsList(accounts, navigate) {
    return (accounts.map(account => {
                var buttons;
                if (isFiat(account.fk_cc_id)) {
                    buttons = <div>
                        <button
                            onClick={() => {
                                navigate("/topup", {
                                    state: {
                                        ca_id: account.ca_id,
                                        ca_number: account.ca_number,
                                        fk_cc_id: account.fk_cc_id
                                    }
                                })
                            }}>Пополнить</button>
                        <button
                        onClick={() => {
                            navigate("/withdrawal", {
                                state: {
                                    ca_id: account.ca_id,
                                    ca_number: account.ca_number,
                                    fk_cc_id: account.fk_cc_id
                                }
                            })
                        }}>Вывести</button>
                    </div>
                } else {
                    buttons = <div>
                        <button
                            onClick={() => {
                                navigate("/buy", {
                                    state: {
                                        ca_id: account.ca_id,
                                        ca_number: account.ca_number,
                                        fk_cc_id: account.fk_cc_id,
                                        fk_user_id: account.fk_user_id
                                    }
                                });
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