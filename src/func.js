export function calcHealth(item) {
    if (item.health > 50) {
        return 'healthy';
    }
    if (item.health >= 15 && item.health <= 50) {
        return 'wounder';
    }
    if (item.health < 15) {
        return 'critical';
    }
    return undefined;
}

export function sortData() {
    const data = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];
    return data.sort((a, b) => b.health - a.health);
}