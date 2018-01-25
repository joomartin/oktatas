const prodcut = require('./products/product');
const prodcutGroup = require('./products/productgroup');
const menu = require('./products/menu');
const readline = require('readline-sync');

prodcut.getProduct();
prodcutGroup.getProductgroup();
menu.getMenu();

console.log(readline);