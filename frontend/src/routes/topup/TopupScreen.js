import {getCurrencyNameById} from "../../utils/CryptoUtils";
import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

function TopupScreen() {
    let navigate = useNavigate();

    const [amount, setAmount] = useState(' ');

    const {state} = useLocation();
    const {ca_id, ca_number, fk_cc_id} = state; // Read values passed on state

    const targetAccountText = ca_number + " " + getCurrencyNameById(fk_cc_id)
    const [youWillTopupText, setYouWillTopupText] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    return (<div>
        <button onClick={() => {
            navigate(-1);
        }}>Назад
        </button>
        <h5>Целевой аккаунт: {targetAccountText} </h5>
        <h5>Введите количество:</h5>
        <input type="number" value={amount} onChange={event => {
            setAmount(event.target.value)
            setYouWillTopupText(event.target.value + " $")
        }}/>
        <h5>Вы пополните на: {youWillTopupText}</h5>
        <button onClick={() => {
            const requestOptions = {
                method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
                    "to_fiat_amount": amount, "to_datetime": "2018-03-04 11:21:40+02", "fk_ca_id": ca_id
                })
            };

            fetch('/topups', requestOptions)
                .then(response => {
                    if (response.status == 200) {
                        navigate(-1)
                    } else if (response.status == 400) {
                        setErrorMessage("Пополнение не может быть меньше 0")
                    }
                })
        }

        }>Пополнить
        </button>
        <h6 style={{color: 'red'}}>{errorMessage}</h6>

    </div>)
}

export default TopupScreen;