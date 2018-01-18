const fs = require('fs');

const PROVEN_ABSENCE = 'X';
const UNPROVEN_ABSENCE = 'I';

function parseStudents(parts) {
    let students = [];
    for (let i = 1; i < parts.length; i++) {
        if (parts[i] === '') continue;
        const nameParts = parts[i].split(' ');
        students.push({
            name: nameParts[0] + ' ' + nameParts[1],
            enrollments: nameParts[2]
        });
    }

    return students;
}

function hasStudentAbsence(student) {
    return student.enrollments.includes('X') || student.enrollments.includes('I');
}

function getSumOfAbsenceFromStudents(students) {
    return students
        .map(s => hasStudentAbsence(s))
        .filter(has => has)
        .length;
    // let sum = 0;
    // for (const s of students) {
    //     if (hasStudentAbsence(s)) {
    //         sum++;
    //     }
    // }

    

    // return sum;
}

function getAbsenceByTypeForStudent(student) {
    const result = {
        proven: 0,
        unproven: 0
    };

    for (const c of student.enrollments) {
        if (c === PROVEN_ABSENCE) {
            result.proven++;
        } else if(c === UNPROVEN_ABSENCE) {
            result.unproven++;
        }
    }

    return result;
}

function parseDiary(rawDiary) {
    return rawDiary.split('#')
        .filter(item => item !== '')
        .map(item => {
            const parts = item.split('\r\n');
            const students = parseStudents(parts);

            return {
                date: parts[0].trim(),
                students
            };
        });
    // return rawDiary.split('#')
    //     .filter(item => item !== '')
    //     .map(item => {
    //         const parts = item.split('\r\n');
    //         const students = parseStudents(parts);

    //         return {
    //             date: parts[0].trim(),
    //             students
    //         };
    //     });

        // for (const item of arr) {
    //     if (item !== '') {
    //         const parts = item.split('\r\n');

    //         let students = [];
    //         for (let i = 1; i < parts.length - 1; i++) {
    //             const nameParts = parts[i].split(' ');
    //             students.push({
    //                 name: nameParts[0] + ' ' + nameParts[1],
    //                 enrollments: nameParts[2]
    //             });
    //         }

    //         result.push({
    //             date: parts[0].trim(),
    //             students
    //         });
    //     }
    // }    
}

fs.readFile('./naplo.txt', 'utf8', (err, content) => {
    const diary = parseDiary(content);

    fs.writeFile('./tmp.json', JSON.stringify(diary, null, 2), 'utf8', (err) => {

    });

    const sum = getSumOfAbsence(diary);
    console.log('2. feladat: ' + sum);

    const absenceByType = getAbsenceByType(diary);
    console.log('3. feladat: ', absenceByType);
});

// ---- FELADATOK ----
function getSumOfAbsence(diary) {
    let sum = 0;
    for (const item of diary) {
        sum += getSumOfAbsenceFromStudents(item.students);
    }

    return sum;
}

function getAbsenceByType(diary) {
    const result = {
        proven: 0,
        unproven: 0
    };

    for (const item of diary) {
        for (const s of item.students) {
            const data = getAbsenceByTypeForStudent(s);
            result.proven += data.proven;
            result.unproven += data.unproven;
        }
    }

    return result;
}