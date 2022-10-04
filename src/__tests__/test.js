import { calcHealth, sortData } from '../func';

test('calcHealth healthy', () => {
    const man = {name: 'Маг', health: 90};
    expect(calcHealth(man)).toBe('healthy');
});

test('calcHealth wounder', () => {
    const man = {name: 'Маг', health: 50};
    expect(calcHealth(man)).toBe('wounder');
});

test('calcHealth critical', () => {
    const man = {name: 'Маг', health: 1};
    expect(calcHealth(man)).toBe('critical');
});

test('calcHealth healthy', () => {
    const man = {name: 'Маг', health: undefined};
    expect(calcHealth(man)).toBe(undefined);
});

test('sortData', () => {
    const finData = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];
    expect(sortData()).toEqual(finData);
});