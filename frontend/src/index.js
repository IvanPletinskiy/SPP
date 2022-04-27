import {render} from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route, useNavigate,
} from "react-router-dom";
import App from "./App";
import BuyScreen from "./routes/buy/BuyScreen"
import TopupScreen from "./routes/topup/TopupScreen";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/buy" element={<BuyScreen/>}/>
            <Route path="/topup" element={<TopupScreen/>}/>
        </Routes>
    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
