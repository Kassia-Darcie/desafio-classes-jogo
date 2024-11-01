# Desafio classes de um jogo

Esse projeto é minha solução para o desafio de projeto do bootcamp GFT start - Lógica de programação da DIO. O projeto simula um jogo de RPG por turnos em que o jogador escolhe uma classe, cada uma possui hp e ataques diferentes, para derrotar o dragão que ameaça o reino.

[site do jogo](https://kassia-darcie.github.io/desafio-classes-jogo/)

## Funcionalidades

1. Ao iniciar o jogo pergunta ao jogador a classe que ele irá jogar para enfrentar o dragão.

-   **Guerreiro -** Possui um hp de 200 e seu ataque causa entre 5 e 10 de dano.
-   **Mago -** Possui um hp de 80 e seu ataque causa entre 2 e 20 de dano + 15 de bonus.
-   **Monge -** Possui um hp de 120 e seu ataque causa entre 1 e 10 de dano, tem 50% de chance de causar ataque duplo.
-   **Ninja -** Possui um hp de 100, pode lançar de 2 a 5 shurikens com ataque entre 1 e 10 de dano.

2. A cada ataque é exibida a mensagem `o {classe} atacou {nome do alvo} usando ${tipo de ataque}, causando {dano causado} de dano`
3. Caso o HP do dragão chegue a zero o jogador vence o jogo, caso o HP do Herói chegue a zero é game over.
