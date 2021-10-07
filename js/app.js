const user = { id: 11, name: 'amir islam', job: 'actor' }
// console.log(user)

// JSON 

const shop = {
    name: 'Alia stor',
    address: 'Gaptoli road ',
    product: ['laptop', 'mobile', 'pepsi', 'Ram '],
    isExpansive: false,
    oner: {
        name: 'alia vat ',
        address: 'bulistan'
    },
    profite: 15000
}

const Profite = JSON.stringify(shop);
console.log(shop);
console.log(Profite);
