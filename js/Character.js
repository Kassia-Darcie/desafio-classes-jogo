class Character {
	constructor(name, attackType, characterClass) {
		this.name = name;
		this.attackType = attackType;
		this.characterClass = characterClass;
		this.hp = 120;
	}

	attack(target) {
		const damage = Math.random() * 15;
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
		this.setHp();
	}

	setHp() {
		switch (this.characterClass) {
			case "guerreiro":
				this.hp = 150;
				break;
			case "mago":
				this.hp = 80;
				break;
			case "monge":
				this.hp = 120;
				break;
			case "ninja":
				this.hp = 100;
				break;
		}
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
		}
		let message = `o ${this.characterClass} atacou ${target.name} usando ${
			this.attackType
		}, causando ${damage.toFixed(1)} de dano`;
		target.hp -= damage;
		return message;
	}
}
