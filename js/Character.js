class Character {
	constructor(name, attackType) {
		this.name = name;
		this.attackType = attackType;
		this.hp = 100;
	}

	attack(target) {
		const damage = Math.random() * 15;
		message = `o ${heroClass} atacou ${target.name} usando ${attackType}`;
		target.hp -= damage;
		return message;
	}
}
class Hero extends Character {
	constructor(name, age, heroClass, attackType) {
		super(name, attackType);
		this.age = age;
		this.heroClass = heroClass;
	}

	
}
