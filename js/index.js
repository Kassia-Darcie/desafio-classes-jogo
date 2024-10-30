let hero;
const dragon = new Character("Smaug", "Fogo", "dragon");
const intro = document.querySelector(".intro");
const gameDiv = document.querySelector(".game");
const buttons = document.getElementsByClassName("heroBtn");
const heroHp = document.querySelector(".heroHp");
const dragonHp = document.querySelector(".dragonHp");
const attackBtn = document.querySelector(".attackBtn");
const endGameDiv = document.querySelector(".endGame");

for (const element of buttons) {
	let btnName = element.getAttribute("name");
	element.addEventListener("click", () => startGame(btnName));
}

function startGame(heroClass) {
	setHero(heroClass);

	gameDiv.querySelector(".heroName").innerHTML = hero.name;
	gameDiv.querySelector(".dragonName").innerHTML = dragon.name;
	heroHp.innerHTML = hero.hp;
	dragonHp.innerHTML = dragon.hp;
	gameDiv.classList.remove("hidden");
	intro.classList.add("hidden");
	attackBtn.addEventListener("click", () => handleAttack(hero, dragon));
}

function setHero(heroClass) {
	switch (heroClass) {
		case "warrior":
			hero = new Hero("Garrosh", 30, "guerreiro", "espada");
			break;
		case "mage":
			hero = new Hero("Gandalf", 150, "mago", "magia");
			break;
		case "monk":
			hero = new Hero("Poo", 20, "monge", "artes marciais");
			break;
		case "ninja":
			hero = new Hero("Naruto", 15, "ninja", "shurikens");
			break;

		default:
			break;
	}
}

function handleAttack() {
	const msgElement = document.querySelector(".attackMsg");
	let attackMsg = "";

	attackMsg = hero.attack(dragon);
	msgElement.innerHTML = attackMsg;
	attackMsg = dragon.attack(hero);
	attackBtn.classList.add("hidden");
	dragonHp.innerHTML = dragon.hp;
	setTimeout(() => {
		msgElement.innerHTML = attackMsg;
		heroHp.innerHTML = hero.hp;
		attackBtn.classList.remove("hidden");
	}, 3000);
	if (hero.hp <= 0 || dragon.hp <= 0) {
		endGame();
	}
}

function endGame() {
	gameDiv.classList.add("hidden");
	endGameDiv.classList.remove("hidden");
	if (hero.hp <= 0) {
		endGameDiv.innerHTML = `
		<h2>Fim de jogo!</h2>
		<p>${hero.name} não foi páreo para ${dragon.name}, o reino foi destruído.</p>
		`;
	} else {
		endGameDiv.innerHTML = `
		<h2>Você venceu!</h2>
		<p>${hero.name} derrotou ${dragon.name}, o reino foi salvo.</p>
		`;
	}
}