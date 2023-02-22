input.onGesture(Gesture.ScreenDown, function () {
    game.gameOver()
})
input.onButtonPressed(Button.A, function () {
    if (鎚仔.isTouching(地鼠)) {
        game.pause()
        game.addScore(1)
        game.resume()
        地鼠.change(LedSpriteProperty.X, randint(0, 4))
    }
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
    serial.redirectToUSB()
    basic.showIcon(IconNames.Yes)
    basic.showString("USB")
    game.resume()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(game.score())
})
let 鎚仔: game.LedSprite = null
let 地鼠: game.LedSprite = null
basic.showLeds(`
    . . # . .
    # . # . #
    # . # . #
    # . . . #
    . # # # .
    `)
game.setScore(0)
地鼠 = game.createSprite(randint(0, 4), 2)
鎚仔 = game.createSprite(randint(0, 4), 2)
game.pause()
basic.showLeds(`
    . # # # .
    # . . . #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.pause(100)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    . . # . .
    . . # . .
    `)
basic.pause(100)
basic.showLeds(`
    . # # # .
    . # . # .
    . # # # .
    . # . # .
    . # . # .
    `)
basic.showLeds(`
    . # # . .
    . # . # .
    . # # . .
    . # . # .
    . # # . .
    `)
basic.clearScreen()
game.resume()
basic.forever(function () {
    basic.pause(100)
    鎚仔.move(1)
    鎚仔.ifOnEdgeBounce()
})
control.inBackground(function () {
	
})
