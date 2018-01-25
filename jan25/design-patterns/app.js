const readline = require('readline-sync');
const heroModule = require('./hero');
const weaponModule = require('./weapon/weapon');

console.log('Válassz karaktert');
console.log('1. Barbar');
console.log('2. Paladin');
console.log('3. Mage');

const axeStandard = new weaponModule.Axe(20, 50);
const axeStrong = new weaponModule.Axe(40, 80);
const axeSuperStrong = new weaponModule.Axe(75, 125);

const code = parseInt(readline.question());

const hero = heroModule.heroFactory(code, axeStrong);
const d = hero.getDamage();

console.log(d);