// javaScript object Notation
// JSON
const user = { id: 11, name: 'Ridwan', job: 'actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'ALia Store',
    adrress: 'Ranbir Road',
    profit: 15000,
    product: ['laptop', 'mobile', 'Cocacola'],
    isExpensive: false,
}
const storeStringified = JSON.stringify(shop);
console.log(storeStringified);
const converted = JSON.parse(storeStringified);
console.log(converted);