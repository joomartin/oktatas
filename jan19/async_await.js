function getNumber(x) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(x);
        }, 1000);
    });
}

function getNumberCb(x, cb) {
    setTimeout(() => {
        cb(x);
    }, 1000);
}

// const arr = [1,2,3];
// let results = [];

// for (let i = 0; i < arr.length; i++) {
//     getNumberCb(arr[i], function(r) {
//         results.push(r);

//         if (i === arr.length - 1) {
//             console.log(results);
//         }
//     });
// }

async function add(x) {
    const a = await getNumber(10);
    const b = await getNumber(20);

    return a + b + x;
}

(async function main() {
    // const res = await add(20);
    // console.log(res);

    const arr = [1,2,3];
    const results = [];
    for (const x of arr) {
        results.push(await add(x));
    }

    console.log(results);
})();






























function getNumber(x) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(x);
        }, 1000);
    })
}

async function add(x) {
    const a = await getNumber(10);
    const b = await getNumber(20);

    return a + b + x;
}

(async function main() {
    const result = await add(30);
    console.log(result);
})();