class Character {
	constructor(name, attackType, characterClass) {
		this.name = name;
		this.attackType = attackType;
		this.characterClass = characterClass;
		this.maxHp = 120;
		this.hp = this.maxHp;
	}

	attack(target) {
		if (!(target instanceof Character)) throw new Error("Alvo inválido");
		let damage;
		switch (this.characterClass) {
			case "guerreiro":
				damage = Character.getRandom(5, 10);
				break;
			case "mago":
				damage = Character.getRandom(1, 20);
				damage += 15;
				break;
			case "monge":
				damage = Character.getRandom(1, 10);
				damage *= Math.floor(Character.getRandom(1, 2));
				break;
			case "ninja":
				damage = Character.getRandom(3, 5);
				damage *= Math.floor(Character.getRandom(2, 5));
				break;
			default:
				damage = Character.getRandom(1, 15);
		}

		let message = `o ${this.characterClass} atacou ${target.name} usando ${
			this.attackType
		}, causando ${damage.toFixed(1)} de dano`;
		target.hp -= damage;
		return message;
	}

	static getRandom(min, max) {
		let result = Math.random() * (max - min + 1) + min;
		return result;
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
