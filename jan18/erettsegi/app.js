// const fs = require('fs');

// const PROVEN_ABSENCE = 'X';
// const UNPROVEN_ABSENCE = 'I';

// function parseStudents(parts) {
//     let students = [];
//     for (let i = 1; i < parts.length; i++) {
//         if (parts[i] === '') continue;
//         const nameParts = parts[i].split(' ');
//         students.push({
//             name: nameParts[0] + ' ' + nameParts[1],
//             enrollments: nameParts[2]
//         });
//     }

//     return students;
// }

// function hasStudentAbsence(student) {
//     return student.enrollments.includes('X') || student.enrollments.includes('I');
// }

// function getSumOfAbsenceFromStudents(students) {
//     return students
//         .map(s => hasStudentAbsence(s))
//         .filter(has => has)
//         .length;
//     // let sum = 0;
//     // for (const s of students) {
//     //     if (hasStudentAbsence(s)) {
//     //         sum++;
//     //     }
//     // }

    

//     // return sum;
// }

// function getAbsenceByTypeForStudent(student) {
//     const result = {
//         proven: 0,
//         unproven: 0
//     };

//     for (const c of student.enrollments) {
//         if (c === PROVEN_ABSENCE) {
//             result.proven++;
//         } else if(c === UNPROVEN_ABSENCE) {
//             result.unproven++;
//         }
//     }

//     return result;
// }

// function parseDiary(rawDiary) {
//     return rawDiary.split('#')
//         .filter(item => item !== '')
//         .map(item => {
//             const parts = item.split('\r\n');
//             const students = parseStudents(parts);

//             return {
//                 date: parts[0].trim(),
//                 students
//             };
//         });
//     // return rawDiary.split('#')
//     //     .filter(item => item !== '')
//     //     .map(item => {
//     //         const parts = item.split('\r\n');
//     //         const students = parseStudents(parts);

//     //         return {
//     //             date: parts[0].trim(),
//     //             students
//     //         };
//     //     });

//         // for (const item of arr) {
//     //     if (item !== '') {
//     //         const parts = item.split('\r\n');

//     //         let students = [];
//     //         for (let i = 1; i < parts.length - 1; i++) {
//     //             const nameParts = parts[i].split(' ');
//     //             students.push({
//     //                 name: nameParts[0] + ' ' + nameParts[1],
//     //                 enrollments: nameParts[2]
//     //             });
//     //         }

//     //         result.push({
//     //             date: parts[0].trim(),
//     //             students
//     //         });
//     //     }
//     // }    
// }

// fs.readFile('./naplo.txt', 'utf8', (err, content) => {
//     const diary = parseDiary(content);

//     fs.writeFile('./tmp.json', JSON.stringify(diary, null, 2), 'utf8', (err) => {

//     });

//     const sum = getSumOfAbsence(diary);
//     console.log('2. feladat: ' + sum);

//     const absenceByType = getAbsenceByType(diary);
//     console.log('3. feladat: ', absenceByType);
// });

// // ---- FELADATOK ----
// function getSumOfAbsence(diary) {
//     let sum = 0;
//     for (const item of diary) {
//         sum += getSumOfAbsenceFromStudents(item.students);
//     }

//     return sum;
// }

// function getAbsenceByType(diary) {
//     const result = {
//         proven: 0,
//         unproven: 0
//     };

//     for (const item of diary) {
//         for (const s of item.students) {
//             const data = getAbsenceByTypeForStudent(s);
//             result.proven += data.proven;
//             result.unproven += data.unproven;
//         }
//     }

//     return result;
// }







// const exts = [
//     { type: 'file', path: '...' },
//     { type: 'file', path: '...' },
//     { type: 'folder', path: '...' },
// ];

// // végemnni az exts arrayen
// // minden iterációban csekkolni, hogy az arr array.ben van -e már ilyen 'Ext'
// // ha van már ilyen akkor növeled a qty
// // Ha nincs még, akkor pusholsz egy új elemet


// const index = arr.findIndex(o => o.ext === 'dll');

// // index === -1 -> nincs ilyen Elem

// const obj = {
//     ext: 'dll', qty: 1
// };

// arr[index].qty++

// const arr = [
//     { ext: 'dll', qty: 10 },
//     { ext: 'exe', qty: 2 },
//     { ext: 'js', qty: 21 }
// ];

// const str = arr.map(o => `${o.ext}: ${o.qty}`).join('\r\n');
// ['dll: 10', 'exe: 2', 'js: 21'] -> 'dll: 10\r\nexe: 2\r\njs: 21\r\n'


// // arr.sort((a, b) => a.qty - b.qty);

// const arr = [1,2,3,5];

// // let xs = [];
// // for (const x of arr) {
// //     if (x > 5) {
// //         xs.push(x);
// //     }
// // }

// // const xs = arr.filter(x => x > 5);

// let str = '';
// for (const item of arr) {
//     str += item.ext + ' ' + item.qty + '\r\n';
// }




let arr = [];
const x = 10;
const y = 20;

for (let i = 0; i < x; i++) {
    arr[i] = [];
    for (let j = 0; j < y; j++) {
        arr[i][j] = 0;
    }
}

arr = Array(x).fill([]).map(a => Array(y).fill(1));
console.log(arr);

// console.log(Array(6));

const arr1 = arr.map((a, i) => {
    return a.map((x, j) => x * 2);
});

console.log(arr1);