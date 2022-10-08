const Character = require('./character');

module.exports = class Swordsman extends Character {
    constructor(name) {
        super();
        this.name = name;
        this.type = 'Swordsman';
        this.attack = 40;
        this.defence = 10;
    }
};
