import React from "react";
import "./App.css";

function App() {
    const [users, setUsers] = React.useState(null);
    React.useEffect(() => {
        fetch("/users")
            .then((res) => res.json())
            .then((users) => setUsers(users))
    }, []);

    const [accounts, setAccounts] = React.useState(null);
    React.useEffect(() => {
        fetch("/accounts")
            .then((res) => res.json())
            .then((accounts) => setAccounts(accounts))
    }, []);

    const [cryptocurrencies, setCryptocurrencies] = React.useState(null);
    React.useEffect(() => {
        fetch("/cryptocurrencies")
            .then((res) => res.json())
            .then((cryptocurrencies) => setCryptocurrencies(cryptocurrencies))
    }, []);

    const [topUps, setTopUps] = React.useState(null);
    React.useEffect(() => {
        fetch("/topups")
            .then((res) => res.json())
            .then((topUps) => setTopUps(topUps))
    }, []);

    const [transactions, setTransactions] = React.useState(null);
    React.useEffect(() => {
        fetch("/transactions")
            .then((res) => res.json())
            .then((transactions) => setTransactions(transactions))
    }, []);

    const [verifications, setVerifications] = React.useState(null);
    React.useEffect(() => {
        fetch("/verifications")
            .then((res) => res.json())
            .then((verifications) => setVerifications(verifications))
    }, []);

    const [withdrawals, setWithdrawals] = React.useState(null);
    React.useEffect(() => {
        fetch("/withdrawals")
            .then((res) => res.json())
            .then((withdrawals) => setWithdrawals(withdrawals))
    }, []);

    return (
        <div className="App">
            <header className="">
                {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                <div>
                    {!users ? "Loading..." :
                        <div>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>us_id</th>
                                    <th>us_login</th>
                                    <th>us_password</th>
                                    <th>fk_verification_id</th>
                                </tr>
                                </thead>
                                <tbody>
                                {users.map(
                                    (user) => {
                                        return (
                                            <tr>
                                                <td>{user.us_id}</td>
                                                <td>{user.us_login}</td>
                                                <td>{user.us_password}</td>
                                                <td>{user.fk_verification_id}</td>
                                            </tr>
                                        )
                                    }
                                )}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
                <div>
                    {!accounts ? "Loading..." :
                        <div>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>ca_id</th>
                                    <th>ca_number</th>
                                    <th>ca_amount</th>
                                    <th>ca_last_update</th>
                                    <th>fk_user_id</th>
                                    <th>fk_cc_id</th>
                                </tr>
                                </thead>
                                <tbody>
                                {accounts.map(
                                    (account) => {
                                        return (
                                            <tr>
                                                <td>{account.ca_id}</td>
                                                <td>{account.ca_number}</td>
                                                <td>{account.ca_amount}</td>
                                                <td>{account.ca_last_update}</td>
                                                <td>{account.fk_user_id}</td>
                                                <td>{account.fk_cc_id}</td>
                                            </tr>
                                        )
                                    }
                                )}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
                <div>
                    {!cryptocurrencies ? "Loading..." :
                        <div>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>cc_id</th>
                                    <th>cc_code</th>
                                    <th>cc_name</th>
                                    <th>cc_description</th>
                                </tr>
                                </thead>
                                <tbody>
                                {cryptocurrencies.map(
                                    (cryptocurrency) => {
                                        return (
                                            <tr>
                                                <td>{cryptocurrency.cc_id}</td>
                                                <td>{cryptocurrency.cc_code}</td>
                                                <td>{cryptocurrency.cc_name}</td>
                                                <td>{cryptocurrency.cc_description}</td>
                                            </tr>
                                        )
                                    }
                                )}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
                <div>
                    {!topUps ? "Loading..." :
                        <div>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>to_id</th>
                                    <th>to_fiat_iban</th>
                                    <th>to_fiat_amount</th>
                                    <th>to_cryptocurrency_amount</th>
                                    <th>to_datetime</th>
                                    <th>fk_acc_id</th>
                                </tr>
                                </thead>
                                <tbody>
                                {topUps.map(
                                    (topUp) => {
                                        return (
                                            <tr>
                                                <td>{topUp.to_id}</td>
                                                <td>{topUp.to_fiat_iban}</td>
                                                <td>{topUp.to_fiat_amount}</td>
                                                <td>{topUp.to_cryptocurrency_amount}</td>
                                                <td>{topUp.to_datetime}</td>
                                                <td>{topUp.fk_ac_id}</td>
                                            </tr>
                                        )
                                    }
                                )}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
                <div>
                    {!transactions ? "Loading..." :
                        <div>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>tr_id</th>
                                    <th>tr_amount_from</th>
                                    <th>tr_amount_to</th>
                                    <th>tr_datetime</th>
                                    <th>fk_account_from</th>
                                    <th>fk_account_to</th>
                                </tr>
                                </thead>
                                <tbody>
                                {transactions.map(
                                    (transaction) => {
                                        return (
                                            <tr>
                                                <td>{transaction.tr_id}</td>
                                                <td>{transaction.tr_amount_from}</td>
                                                <td>{transaction.tr_amount_to}</td>
                                                <td>{transaction.tr_datetime}</td>
                                                <td>{transaction.fk_account_from}</td>
                                                <td>{transaction.fk_account_to}</td>
                                            </tr>
                                        )
                                    }
                                )}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
                <div>
                    {!verifications ? "Loading..." :
                        <div>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>ve_id</th>
                                    <th>ve_name</th>
                                    <th>ve_surname</th>
                                    <th>ve_photo_url</th>
                                    <th>ve_passport_code</th>
                                    <th>ve_phone_number</th>
                                </tr>
                                </thead>
                                <tbody>
                                {verifications.map(
                                    (verification) => {
                                        return (
                                            <tr>
                                                <td>{verification.ve_id}</td>
                                                <td>{verification.ve_name}</td>
                                                <td>{verification.ve_surname}</td>
                                                <td>{verification.ve_photo_url}</td>
                                                <td>{verification.ve_passport_code}</td>
                                                <td>{verification.ve_phone_number}</td>
                                            </tr>
                                        )
                                    }
                                )}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
                <div>
                    {!withdrawals ? "Loading..." :
                        <div>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>wi_id</th>
                                    <th>wi_iban</th>
                                    <th>wi_cryptocurrency_amount</th>
                                    <th>wi_fiat_amount</th>
                                    <th>wi_datetime</th>
                                    <th>fk_ca_id</th>
                                </tr>
                                </thead>
                                <tbody>
                                {withdrawals.map(
                                    (withdrawal) => {
                                        return (
                                            <tr>
                                                <td>{withdrawal.wi_id}</td>
                                                <td>{withdrawal.wi_iban}</td>
                                                <td>{withdrawal.wi_cryptocurrency_amount}</td>
                                                <td>{withdrawal.wi_fiat_amount}</td>
                                                <td>{withdrawal.wi_datetime}</td>
                                                <td>{withdrawal.fk_ca_id}</td>
                                            </tr>
                                        )
                                    }
                                )}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>

            </header>
        </div>
    );
}

export default App;