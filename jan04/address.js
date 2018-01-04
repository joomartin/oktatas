const customers = [
    {
        name: 'sdf',
        defaultAddress: 'szhely',
        addresses: [
            { zip: 9700, city: 'szhely', street: 'rohonczi' },
            { zip: 9700, city: 'szhely', street: 'rohonczi' }
        ]
    },
    {
        name: 'sdf',
        addresses: [
            { zip: 9700, city: 'szhely', street: 'rohonczi' },
            { zip: 9700, city: 'szhely', street: 'rohonczi' }
        ]
    },
    {
        name: 'sdf',
        defaultAddress: null,
        addresses: []
    }
];

const addresses = customers.map(customer => {
    // if (customer.defaultAddress) {
    //     return customer.defaultAddress;    
    // } else if (customer.addresses[0]) {
    //     return customer.addresses[0].city;
    // } else {
    //     return 'csepreg';
    // }

    // falsy => false, null, undefined, '', 0
    return customer.defaultAddress || 'asdf';

    // if (customer.defaultAddress) {
    //     return customer.defaultAddress;
    // } else {
    //     const address = customer.addresses[0];
    //     return address ? address.city : 'csepreg';
    // }
});

console.log(addresses);

