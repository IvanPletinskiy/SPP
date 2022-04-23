export function getCurrencyNameById(id) {
    var name;
    switch (id) {
        case 1: {
            name = "USD";
            break;
        }
        case 2: {
            name = "BTC";
            break;
        }
        case 3: {
            name = "ETH";
            break;
        }
        case 4: {
            name = "UNI";
            break;
        }
        default : {
            name = "BTC";
            break;
        }
    }
    return name;
}

export function isFiat(id) {
    return id === 1;
}