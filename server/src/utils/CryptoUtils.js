
export function getUsdPrice(id) {
    var usdPrice;
    switch (id) {
        case 1: {
            usdPrice = 1.0;
            break;
        }
        case 2: {
            usdPrice = 40000.0;
            break;
        }
        case 3: {
            usdPrice = 3000.0;
            break;
        }
        case 4: {
            usdPrice = 250.0;
            break;
        }
        default : {
            usdPrice = 40000.0;
            break;
        }
    }
    return usdPrice;
}