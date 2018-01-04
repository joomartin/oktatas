/**
 * Olyan függvény, ami kap egy array -t és 
 * 
 * [1,2,3,4,5,6,7,8,9,10], x < 5 => [1,2,3,4]
 */

function takeWhile(arr, predicateFn) {
    // let result = [];
    // for (const value of arr) {
    //     if (predicateFn(value)) {
    //         result.push(value);
    //     } else {
    //         break;
    //     }
    // }

    // return result;

    let i = 0;
    let result = [];
    while (predicateFn(arr[i]) && i < arr.length) {
        result.push(arr[i]);
        i++;
    }

    // while (i <= arr.length) {
    //     if (predicateFn(arr[i])) {
    //         result.push(arr[i])
    //     } else {
    //         break;
    //     }

    //     i++;
    // }

    return result;
}

const xs = takeWhile([1,2,3,4], x => x < 5);
console.log(xs);