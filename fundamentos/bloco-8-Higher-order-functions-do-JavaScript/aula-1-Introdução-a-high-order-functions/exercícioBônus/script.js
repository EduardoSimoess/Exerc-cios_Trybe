const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = {
    mage,
    warrior,
    dragon
};

const dragonsDamage = () => {
    const damage = Math.round(15 + (Math.random() * (dragon.strength - 15)));
    return damage;
}

const warriorsDamage = () => {
    const damage = Math.round(warrior.strength + (Math.random() * (warrior.strength * (warrior.weaponDmg - 1))));
    return damage;
}

const magesDamage = () => {
    const magesAttack = {
        damage: undefined,
        mana: mage.intelligence,
    }
    if (mage.mana >= 15) {
        magesAttack.damage = Math.round(mage.intelligence + (Math.random() * mage.intelligence));
        mage.mana -= 15
    } else {
        magesAttack.damage = 0;
        console.log('Não possui mana suficiente');
    }
    return magesAttack;
}

// magesDamage();
// console.log(mage.intelligence);

const gameActions = (warriorsData, magesData, dragonsData) => {
    // Rodada do guerreiro
    warrior.damage = warriorsData();
    dragon.healthPoints = dragon.healthPoints - warrior.damage;
    // Rodada do mago
    mage.damage = magesData().damage;
    mage.intelligence = magesData().mana;
    dragon.healthPoints = dragon.healthPoints - mage.damage;
    // Rodada do dragão
    dragon.damage = dragonsData();
    warrior.healthPoints = warrior.healthPoints - dragon.damage;
    mage.healthPoints = mage.healthPoints - dragon.damage;
    // Saldo da rodada
    console.log(battleMembers);
}

gameActions(warriorsDamage, magesDamage);
console.log(warrior);
console.log(mage);
console.log(dragon);