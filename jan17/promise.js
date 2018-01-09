function findInDatabase(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (id === 1)
                res('result');
            else 
                rej('no product with id ' + id);
        }, 1000);
    });
}

findInDatabase(2)
    .then(res => console.log(res))
    .catch(err => console.log(err));