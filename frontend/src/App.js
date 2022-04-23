import React from "react";
import "./App.css";
import AccountsList from "./components/AccountsList";

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
                <div>
                    {!accounts ? "" : <AccountsList accounts={accounts}/>}
                </div>

            </header>
        </div>
    );
}

export default App;