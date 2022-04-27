import {getCurrencyNameById} from "../../utils/CryptoUtils";
import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

function WithdrawalScreen() {
    let navigate = useNavigate();

    const [amount, setAmount] = useState(' ');

    const {state} = useLocation();
    const {ca_id, ca_number, fk_cc_id} = state; // Read values passed on state

    const targetAccountText = ca_number + " " + getCurrencyNameById(fk_cc_id)
    const [youWillWithdrawalText, setYouWillWithdrawalText] = useState("");

    console.log(state)

    return (<div>
        <button onClick={() => {
            navigate(-1);
        }}>Назад</button>
        <h5>Целевой аккаунт: {targetAccountText} </h5>
        <h5>Введите количество:</h5>
        <input type="number" value={amount} onChange={event => {
            setAmount(event.target.value)
            setYouWillWithdrawalText(event.target.value + " $")
        }}/>
        <h5>Вы выведете: {youWillWithdrawalText}</h5>
        <button onClick={() => {
            const requestOptions = {
                method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
                    "wi_fiat_amount": amount,
                    "to_datetime": "2018-03-04 11:21:40+02",
                    "fk_ca_id": ca_id
                })
            };

            fetch('/withdrawals', requestOptions)
                .then(response => navigate(-1))
        }

        }>Вывести</button>

    </div>)
}

export default WithdrawalScreen;