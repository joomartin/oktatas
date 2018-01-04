/**
 * Írj egy függvényt, ami visszaadja két sztring legnagyobb közös substingét
 * 
 * pl.: commonSubstring('google', 'go to store') => 'go'
 */


function commonSubstring(s1, s2) {
    let i = 0;
    while (i < s1.length && s1.charAt(i) === s2.charAt(i)) {
        i++;
    }

    return s1.substring(0, i);
}

const x = commonSubstring('google', 'go to store');
const y = commonSubstring('go to store', 'google');
const z = commonSubstring('asdf', 'qwer');
console.log(x, y, z);





















 
// function commonSubstring(s1, s2) {
//     let i = 0;
//     while (i < s1.length && s1.charAt(i) === s2.charAt(i)) i++;

//     return s1.substring(0, i);
// }

// console.log(commonSubstring('google', 'go to store'));
// console.log(commonSubstring('go to store', 'google'));

// console.log(commonSubstring('hello', 'world'));