import {getCurrencyNameById, isFiat} from "../../utils/CryptoUtils";
import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Select from 'react-select';

function BuyScreen() {
    let navigate = useNavigate();

    const [amount, setAmount] = useState(' ');

    const [options, setOptions] = React.useState([{value: 'chocolate', label: 'Chocolate'}, {
        value: 'strawberry', label: 'Strawberry'
    }, {value: 'vanilla', label: 'Vanilla'},]);

    const {state} = useLocation();
    const {ca_id, ca_number, fk_cc_id, fk_user_id} = state; // Read values passed on state

    const [accounts, setAccounts] = React.useState({});
    React.useEffect(() => {
        fetch(`/buy?user_id=${fk_user_id}`)
            .then((res) => res.json())
            .then((accounts) => {
                setOptions(accounts.map((account) => {
                    return {value: account.ca_id, label: account.cc_name};
                }))

                setAccounts(accounts)
            })
    }, []);

    const [selectedOption, setSelectedOption] = useState(null);
    const targetAccountText = ca_number + " " + getCurrencyNameById(fk_cc_id)
    const [youWillBuyText, setYouWillBuyText] = useState("");

    return (<div>
        <button onClick={() => {
            navigate(-1);
        }

        }>Назад
        </button>
        <h5>Выберите исходный аккаунт:</h5>
        <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
        />
        <h5>Целевой аккаунт: {targetAccountText} </h5>
        <h5>Введите количество:</h5>
        <input type="number" value={amount} onChange={event => {
            setAmount(event.target.value)
            //Don't edit, we should use == and not === below
            const targetUsdValue = accounts.find((it) => it.ca_id == ca_id).usd_price
            const srcUsdValue = accounts.find((it) => it.ca_id == selectedOption.value).usd_price
            const buyAmount = event.target.value * targetUsdValue / srcUsdValue
            const targetCurrencyCode = accounts.find((it) => it.ca_id == ca_id).cc_code
            const youWillBuy = " " + buyAmount + " " + targetCurrencyCode
            setYouWillBuyText(youWillBuy)
        }}/>
        <h5>Вы купите: {youWillBuyText}</h5>
        <button onClick={() => {
            //Don't edit, we should use == and not === below
            const srcUsdValue = accounts.find((it) => it.ca_id == selectedOption.value).usd_price
            const srcAmount = amount
            const targetUsdValue = accounts.find((it) => it.ca_id == ca_id).usd_price
            const targetAmount = amount * targetUsdValue / srcUsdValue
            const srcAccountId = selectedOption.value
            const targetAccountId = ca_id

            const requestOptions = {
                method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
                    "tr_amount_from": srcAmount,
                    "tr_amount_to": targetAmount,
                    "tr_datetime": "2018-03-04 11:21:40+02",
                    "fk_account_from": srcAccountId,
                    "fk_account_to": targetAccountId
                })
            };
            fetch('/buy', requestOptions)
                .then(response => navigate(-1))
        }

        }>Купить
        </button>

    </div>)
}

export default BuyScreen;