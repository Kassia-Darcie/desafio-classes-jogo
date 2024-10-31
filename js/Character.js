class Character {
	constructor(name, attackType, characterClass) {
		this.name = name;
		this.attackType = attackType;
		this.characterClass = characterClass;
		this.maxHp = 120;
		this.hp = this.maxHp;
	}

	attack(target) {
		let damage;
		switch (this.characterClass) {
			case "guerreiro":
				damage = Math.random() * 10;
				break;
			case "mago":
				damage = Math.random() * 20;
				damage += 15;
				break;
			case "monge":
				damage = Math.random() * 10;
				damage *= 2;
				break;
			case "ninja":
				damage = Math.random() * 8;
				damage *= 5;
				break;
			default:
				damage = Math.random() * 15;
		}

		let message = `o ${this.characterClass} atacou ${target.name} usando ${
			this.attackType
		}, causando ${damage.toFixed(1)} de dano`;
		target.hp -= damage;
		return message;
	}
}
class Hero extends Character {
	constructor(name, age, characterClass, attackType) {
		super(name, attackType, characterClass);
		this.age = age;
		this.setMaxHp();
		this.hp = this.maxHp;
	}

	setMaxHp() {
		switch (this.characterClass) {
			case "guerreiro":
				this.maxHp = 200;
				break;
			case "mago":
				this.maxHp = 80;
				break;
			case "monge":
				this.maxHp = 120;
				break;
			case "ninja":
				this.maxHp = 100;
				break;
		}
	}
}
