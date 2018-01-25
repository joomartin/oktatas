class Weapon {
    constructor(minDamage, maxDamage) {
        this.minDamage = minDamage;
        this.maxDamage = maxDamage;
    }

    getDamage(hero) {
        let dmg = this.getDamageByHero(hero);
        return (dmg <= this.maxDamage) ? dmg : this.maxDamage;
    }
}

class Axe extends Weapon {
    getDamageByHero(hero) {
        return this.minDamage + hero.strength;
    }
}

class Sword extends Weapon {
    getDamageByHero(hero) {
        return this.minDamage + hero.dexterity;
    }
}

class Staff extends Weapon {
    getDamageByHero(hero) {
        return this.minDamage + hero.intelligence;
    }
}

module.exports = {
    Weapon, Sword, Axe, Staff
};


// IS A
// HAS A

// SWORD IS A WEAPON
// HERO HAS A WEAPON