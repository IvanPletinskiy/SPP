import React from "react";
import {getCurrencyNameById, isFiat} from "../utils/CryptoUtils";
import styled from "styled-components";


function AccountsList(navigate) {
    return (
        <div>
            <Button onClick={() => navigate('/createAccount')}>Открыть счет</Button>
            <div>{Accounts(navigate)}</div>
        </div>
    )
}

function Accounts(navigate) {
    const [accounts, setAccounts] = React.useState(null);
    React.useEffect(() => {
        fetch("/accounts")
            .then((res) => res.json())
            .then((accounts) => {
                setAccounts(accounts)
                console.log("Accounts:")
                console.log(accounts)
            })
    }, []);
    return (
        !accounts ? "" :
            accounts.map(account => {
                    var buttons;
                    if (isFiat(account.fk_cc_id)) {
                        buttons = <div>
                            <Button
                                onClick={() => {
                                    navigate("/topup", {
                                        state: {
                                            ca_id: account.ca_id,
                                            ca_number: account.ca_number,
                                            fk_cc_id: account.fk_cc_id
                                        }
                                    })
                                }}>Пополнить</Button>
                            <Button
                                onClick={() => {
                                    navigate("/withdrawal", {
                                        state: {
                                            ca_id: account.ca_id,
                                            ca_number: account.ca_number,
                                            fk_cc_id: account.fk_cc_id
                                        }
                                    })
                                }}>Вывести</Button>
                            <Button
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
                            </Button>

                        </div>
                    } else {
                        buttons = <div>
                            <Button
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
                            </Button>
                        </div>
                    }
                    return (
                        <div>
                            <h5>{account.ca_number}</h5>
                            <h6>{getCurrencyNameById(account.fk_cc_id)}</h6>
                            <h6>{account.ca_amount.replace(/[^0-9.-]+/g, "")}</h6>
                            <div>{buttons}</div>
                        </div>
                    )
                }
            )
    )
}

const Button = styled.button`
  background-color: #e2ffa1;
  color: #443838;
  font-size: 15px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

export default AccountsList;