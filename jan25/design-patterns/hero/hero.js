const LEVELS = [
    { min: 0, max: 999, level: 1 },
    { min: 1000, max: 2999, level: 2 },
    { min: 3000, max: 4999, level: 3 },
    { min: 5000, max: 7499, level: 4 },
    { min: 7500, max: 10000, level: 5 },
];

class Hero {
    constructor(weapon) {
        this.initProperties();

        this.xp = 0;
        this.level = 0;

        this.weapon = weapon;
    }

    setWeapon(weapon) {
        this.weapon = weapon;
    }

    increaseXp(points) {
        this.xp += points;
        this.levelUp();
    }

    levelUp() {
        const levelObj = LEVELS.find(l => l.min > this.xp && l.max < this.xp);

        if (this.level < levelObj.level) {
            console.log('level up yayy ' + levelObj.level - this.level);            
            this.level = levelObj.level;
        }
    }

    getDamage() {
        // Template method
        let dmg = this.weapon.getDamage(this);
        return dmg + this.getExtraDamage();
    }

    getExtraDamage() {
        throw new Error('Unimplemented');
    }

    initProperties() {
        throw new Error('Unimplemented');        
    }

    getCast() {
        return this.cast;
    }
}

class Warrior extends Hero {
    warriorSkill() {
        console.log('warr skill');
    }
}

class Barbarian extends Warrior {
    constructor(weapon) {
        super(weapon);
        this.cast = 'Barbarian';
    }

    getExtraDamage() {
        return this.strength;
    }

    initProperties() {
        this.strength = 20;
        this.vitality = 15;
        this.dexerity = 10;
        this.intelligence = 5;
    }
}

class Paladin extends Warrior {
    constructor(weapon) {
        super(weapon);
        this.cast = 'Paladin';
    }

    getExtraDamage() {
        return this.strength / 2 + this.intelligence / 2;
    }

    initProperties() {
        this.strength = 15;
        this.vitality = 15;
        this.dexerity = 10;
        this.intelligence = 10;
    }
}

class Mage extends Hero {   
    constructor(weapon) {
        super(weapon);
        this.cast = 'Mage';
    }

    getExtraDamage() {
        return this.intelligence;
    }

    initProperties() {
        this.strength = 5;
        this.vitality = 10;
        this.dexerity = 10;
        this.intelligence = 25;
    }
}

module.exports = {
    Hero, Barbarian, Paladin, Mage
};