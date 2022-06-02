const print = (array) => {
const list = document.getElementById('coinList');
for (let item of array) {
const printedCripto = document.createElement('li');
printedCripto.innerText = item;
printedCripto.className = 'crypto';
list.appendChild(printedCripto);
}
}
const fetchCoin = async () => {
    const url = `https://api.coincap.io/v2/assets`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const line = data.data.map((cripto, index) => `${index + 1}º - ${cripto.id} (${cripto.symbol}): US$ ${cripto.priceUsd}`);
        const topTen = line.filter((coin, index) => index < 10);
        print(topTen);
    } catch (erro) {
        console.log('Somithing went wrong');
    }
}
window.onload = () => fetchCoin();