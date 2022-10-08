const Character = require('./character');

module.exports = class Bowerman extends Character {
    constructor(name) {
        super();
        this.name = name;
        this.type = 'Bowman';
        this.attack = 25;
        this.defence = 25;
    }
};