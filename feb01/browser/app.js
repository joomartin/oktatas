const button = document.getElementById('btn');
const input = document.getElementById('name');
const h1 = document.getElementById('name-header');

input.addEventListener('keyup', (event) => {
    const str = input.value;
    h1.innerHTML = `Hello, ${str}`;
});

// button.addEventListener('click', () => {
//     alert(input.value);
// });