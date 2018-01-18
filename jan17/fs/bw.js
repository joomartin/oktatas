function calc(x, y) {
    return new Promise((res, rej) => {
        resolve(x + y);
    });
}

calc(1, 2)
    .then(res => console.log(res));