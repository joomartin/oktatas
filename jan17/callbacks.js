function findInDatabase(cb) {
    setTimeout(() => {
        const result = {
            id: 1,
            name: 'first'
        };

        cb(result);
    }, 1000);
}

// const result = findInDatabase();
// console.log(result);

// function logResult(result) {
//     console.log('RESULT: ', result);
// }

findInDatabase(result => {
    console.log('RESULT', result);
});