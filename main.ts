let guess = 0
let value = randint(1, 5)
game.splash("I'm thinking of a number between 1 and 5")
while (guess != value) {
    guess = parseInt(game.askForString("What's your guess"))
}
game.splash("Correct!")
game.over(true)
