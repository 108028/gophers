input.onButtonPressed(Button.AB, function () {
    serial.redirectToUSB()
    pins.digitalWritePin(DigitalPin.P3, 1)
    basic.showString("USB")
    pins.digitalWritePin(DigitalPin.P3, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showNumber(game.score())
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    if (_1.isTouching(_2)) {
        game.addScore(1)
        _2.change(LedSpriteProperty.X, randint(0, 4))
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
})
input.onGesture(Gesture.Shake, function () {
	
})
function _3 () {
    _3()
    _1.delete()
    _2.delete()
    game.pause()
    basic.showLeds(`
        . . . . .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . # .
        . . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . # # .
        . . . . #
        . . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . . . #
        . . . . #
        . . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        # . # . #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        # # # . #
        # . # . .
        # # # . #
        # . # . #
        `)
    basic.pause(100)
    basic.clearScreen()
    game.setScore(999)
    basic.showNumber(0)
    basic.clearScreen()
    images.createBigImage(`
        # # # . # # # . . .
        # . # . # . . . . .
        # # # . # . . . . .
        . . . . # . . . . .
        . . . . # # # . . .
        `).scrollImage(1, 200)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    for (let index = 0; index < game.score(); index++) {
        game.addScore(999)
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                . # # . .
                . # . . .
                . # . . .
                # # . . .
                # # . . .
                `)
            for (let index = 0; index < 2; index++) {
                music.playMelody("B A G A G F A C5 ", 120)
                music.playMelody("G F G A - F E D ", 120)
            }
            basic.clearScreen()
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                # # # # .
                # . # . #
                # . # # #
                # . . . #
                # # # # #
                `)
            _4 = randint(0, 2)
            if (_4 == 0) {
                basic.showLeds(`
                    # # . . #
                    # # . # .
                    . . # . .
                    # # . # .
                    # # . . #
                    `)
            } else if (_4 == 1) {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
            } else {
                basic.showLeds(`
                    # # # # .
                    # . # . #
                    # . # # #
                    # . . . #
                    # # # # #
                    `)
            }
            basic.pause(1000 * 5)
        }
        if (input.buttonIsPressed(Button.AB)) {
            basic.showString("I am a ai")
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . # # #
                . # . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . # # . .
                # . . # .
                . . # . .
                . . . . .
                . . # . .
                `)
        }
    }
}
let _4 = 0
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
basic.clearScreen()
basic.forever(function () {
    basic.pause(900)
    _1.move(1)
    _1.ifOnEdgeBounce()
})
