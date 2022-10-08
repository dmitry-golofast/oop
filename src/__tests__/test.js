const Character = require('../classes/character');

test('class Character', () => {
    const zombies = new Character('Shon', 'Zombie');
    expect(zombies).toEqual({
            name: 'Shon',
            type: 'Zombie',
            health: 100,
            level: 1,
    });
});

test('class Character error name', () => {
    expect(() => new Character('Sh', 'Zombie')).toThrow('name Sh, min - 2 символа, max - 10');
});

test('class Character error type', () => {
    expect(() => new Character('Shon', 'Warrior')).toThrow('type Warrior не существует');
});

test('class Character error levelUp', () => {
    const zombie3 = new Character('Shon', 'Zombie');
    zombie3.health = -1;
    expect(zombie3.levelUp()).toEqual('Нельзя повысить левел умершего');
});

test('class Character levelUp', () => {
    const zombie4 = new Character('Shon', 'Zombie');
    zombie4.levelUp();
    expect(zombie4.level).toEqual(2);
});

test('class Character damage', () => {
    const zombie5 = new Character('Shon', 'Zombie');
    zombie5.defence = 10;
    zombie5.damage(50);
    expect(zombie5.health).toEqual(55);
});