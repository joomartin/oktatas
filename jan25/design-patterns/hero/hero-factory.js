const hero = require('./hero');

function heroFactory(code, weapon) {
    switch (code) {
        case 1: return new hero.Barbarian(weapon);
        case 2: return new hero.Paladin(weapon);
        case 3: return new hero.Mage(weapon);
    }
}

module.exports = heroFactory;