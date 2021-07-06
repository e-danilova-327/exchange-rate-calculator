//const url = 'https://v6.exchangerate-api.com/v6/';
//const apiKey = 'df74fcc0434ad81c1f74051f';

const currency1 = document.getElementById('first');
const currency2 = document.getElementById('second');

const amount1 = document.getElementById('firstAmount');
const amount2 = document.getElementById('secondAmount');

const getExchangeRates = () => {
    const baseCurrency = currency1.value;
    const convertedCurrency = currency2.value;
    fetch(
        `https://v6.exchangerate-api.com/v6/df74fcc0434ad81c1f74051f/latest/${baseCurrency}`
    )
        .then((response) => response.json())
        .then((data) => {
            const rate = data.rates[convertedCurrency];
            exchangeTxt.innerText = `1 ${baseCurrency} = ${rate} ${convertedCurrency}`;

            amount2.value = (amount1.value * rate).toFixed(2);
        });
};

amount1.addEventListener('input', getExchangeRates);
amount2.addEventListener('input', getExchangeRates);
currency1.addEventListener('change', getExchangeRates);
currency2.addEventListener('change', getExchangeRates);

const swapCurrency = () => {
    let currency1 = document.getElementById('first').value;
    let currency2 = document.getElementById('second').value;

    let swap = currency1;
    currency1 = currency2;
    currency2 = swap;

    document.getElementById('first').value = currency1;
    document.getElementById('second').value = currency2;
};

getExchangeRates();
