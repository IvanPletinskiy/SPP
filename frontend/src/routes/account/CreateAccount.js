import React, {useState} from "react";
import Select from "react-select";
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";



function CreateAccount(){
    let navigate = useNavigate();
    const [options, setOptions] = React.useState([{value: 'now found', label: 'not found'}]);

    const [currencies, setCurrencies] = React.useState({});
    React.useEffect(() => {
        fetch(`/currencies`)
            .then((res) => res.json())
            .then((currencies) => {
                setOptions(currencies.map((currency) => {
                    return {value: currency.cc_id, label: currency.cc_code + '\t(' + currency.cc_name + ')'};
                }))
                setCurrencies(currencies)
            })
    }, []);
    console.log(currencies)

    const [selectedOption, setSelectedOption] = useState();
    return (
        <div>
            <h1>Открыть новый счет</h1>
            <p/>
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}/>
            <div>
                <Button onClick={() => navigate(-1)}>Назад</Button>
                <Button onClick= {()=>{
                    const requestOptions = {
                        method: 'POST', headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            "user": 1,
                            "currency": selectedOption.value,
                        })
                    };
                    fetch('/accounts', requestOptions)
                        .then(()=>{
                            //TODO get created account number and show in alert prbly
                            alert("Счет открыт")
                            navigate(-1)
                        })
                    }
                }
                >Открыть</Button>
            </div>
        </div>
    );
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

export default CreateAccount;