input.onButtonPressed(Button.AB, function () {
    serial.redirectToUSB()
})
input.onButtonPressed(Button.A, function () {
    if (_1.isTouching(_2)) {
        game.addScore(1)
        _2.change(LedSpriteProperty.X, randint(0, 4))
    }
})
input.onButtonPressed(Button.B, function () {
    game.pause()
    basic.showNumber(game.score())
    basic.pause(100)
    game.resume()
})
let _2: game.LedSprite = null
let _1: game.LedSprite = null
basic.showLeds(`
    . . # . .
    # . # . #
    # . # . #
    # . . . #
    . # # # .
    `)
_1 = game.createSprite(2, 2)
_2 = game.createSprite(randint(0, 4), 2)
music.playTone(494, music.beat(BeatFraction.Half))
basic.showLeds(`
    # # # # #
    # . . . #
    # # # # #
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    basic.pause(900)
    _1.move(1)
})
