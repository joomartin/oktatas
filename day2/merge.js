/**
 * Írj olyan függvényt, ami össze mergel két arrayt és a duplikált elemeket csak egyszer rakja bele
 * pl.: merge([1,1,1,2,3], [2,3,4,5]) => [1, 2, 3, 4, 5]
 * 
 * includes
 * objektum kulcsok
 * manuális includes
 */

function merge(arr1, arr2) {
    // [1,2,3]
    // [3,4,5,6]
    // [1,2,3,3,4,5,6]
    const merged = arr1.concat(arr2);
    // const merged = [...arr1, ...arr2];
    let result = [];

    for (const x of merged) {
        if (!result.includes(x)) {
            result.push(x);
        }
        // if (result.indexOf(x) === -1) {
        //     result.push(x);
        // }
        // if (!includes(result, x)) {
        //     result.push(x);
        // }
    }

    return result;
}

function includes(arr, value) {
    for (const x of arr) {
        if (x === value) {
            return true;
        }
    }

    return false;
}

const x = merge([1,2,3,2], [3,4,5,4]);
console.log(x);

















// function merge(arr1, arr2) {
//     let merged = [...arr1, ...arr2];
//     let result = [];

//     for (const x of merged) {
//         if (!result.includes(x)) {
//             result.push(x);
//         }
//     }

//     return result;
// }

// const merged = merge([1, 1, 1, 2, 3], [2, 3, 4, 5]);
// console.log(merged);