const Character = require('./character');

module.exports = class Daemon extends Character {
    constructor(name) {
        super();
        this.name = name;
        this.type = 'Daemon';
        this.attack = 10;
        this.defence = 40;
    }
};