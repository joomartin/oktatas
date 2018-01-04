const persons = [
    { gender: 'male', name: 'John' },
    { gender: 'male', name: 'x' },
    { gender: 'female', name: 'asdf' },
    { gender: 'male', name: 'sdgdf' },
    { gender: 'female', name: 'dsfgdssadfsf' },
    { gender: 'male', name: 'dsfgdsf' },
    { gender: 'male', name: 'dsfgds133' }
];

const result = {
    male: 0,
    female: 0
};

for (const p of persons) {
    if (p.gender === 'male') result.male++;
    else result.female++;
}

const r = persons
    .reduce((acc, p) => (acc[p.gender]++, acc), { male: 0, female: 0 });

console.log(r);
// console.log(result);

// olyan objektumot aminek két indexe
// male: number (hány darab férfi van a tömbben)
// female: number (hány darab nő van a tömbben)