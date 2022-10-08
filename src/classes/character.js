module.exports = class Character {
    static types() {
        return ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    }

    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;

        if (!Character.types().includes(type)) {
            throw new Error(`type ${type} не существует`);
        }
        if (this.name.length < 3 || this.name.length > 10) {
            throw new Error(`name ${this.name}, min - 2 символа, max - 10`);
        }
    }

    levelUp() {
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;

        if (this.health < 0) {
            return 'Нельзя повысить левел умершего';
        }
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
    }
};
