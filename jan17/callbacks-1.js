function dbSelect(cb) {
    setTimeout(() => {
        // throw new Error('wrong table');
        if (Math.random() > 0.5) {
            // hiba
            cb('wrong table', 'Béla');
        } else {
            // ok
            cb(null, 'Béla');
        }
    }, 2000);
}

dbSelect((err, name) => {
    if (err) {
        throw err;
    } else {
        console.log(name);
    }
});