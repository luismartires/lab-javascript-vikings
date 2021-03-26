// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomIndexViking];

    let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomIndexSaxon];

    const attackByViking = randomViking.attack();
    const vikingDamage = randomSaxon.receiveDamage(attackByViking);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomIndexSaxon, 1);
    }
    return vikingDamage;
  }

  saxonAttack() {
    let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomIndexViking];

    let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomIndexSaxon];

    const attackBySaxon = randomSaxon.attack();
    const saxonDamage = randomViking.receiveDamage(attackBySaxon);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomIndexViking, 1);
    }
    return saxonDamage;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
