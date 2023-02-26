def on_button_pressed_b():
    music.play_tone(494, music.beat(BeatFraction.HALF))
    basic.show_number(game.score())
    basic.pause(100)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def _3():
    global _4
    _3()
    _1.delete()
    _2.delete()
    game.pause()
    basic.show_leds("""
        . . . . .
                # . . . #
                # . . . #
                # . . . #
                . # # # .
    """)
    basic.show_leds("""
        . . . # .
                . . . . #
                # . . . #
                # . . . #
                . # # # .
    """)
    basic.show_leds("""
        . . # # .
                . . . . #
                . . . . #
                # . . . #
                . # # # .
    """)
    basic.show_leds("""
        . # # # .
                . . . . #
                . . . . #
                . . . . #
                . # # # .
    """)
    basic.show_leds("""
        . . # . .
                # . # . #
                # . # . #
                # . . . #
                . # # # .
    """)
    basic.clear_screen()
    basic.show_leds("""
        . . . . .
                # # # . #
                # . # . .
                # # # . #
                # . # . #
    """)
    basic.pause(100)
    basic.clear_screen()
    game.set_score(999)
    basic.show_number(0)
    basic.clear_screen()
    images.create_big_image("""
        # # # . # # # . . .
                # . # . # . . . . .
                # # # . # . . . . .
                . . . . # . . . . .
                . . . . # # # . . .
    """).scroll_image(1, 200)
    images.create_image("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """).show_image(0)
    for index in range(game.score()):
        game.add_score(999)
        if input.button_is_pressed(Button.A):
            basic.show_leds("""
                . # # . .
                                . # . . .
                                . # . . .
                                # # . . .
                                # # . . .
            """)
            for index2 in range(2):
                music.play_melody("B A G A G F A C5 ", 120)
                music.play_melody("G F G A - F E D ", 120)
            basic.clear_screen()
        if input.button_is_pressed(Button.B):
            basic.show_leds("""
                # # . . #
                                # # . # .
                                . . # . .
                                # # . # .
                                # # . . #
            """)
            basic.show_leds("""
                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
            """)
            basic.show_leds("""
                # # # # .
                                # . # . #
                                # . # # #
                                # . . . #
                                # # # # #
            """)
            _4 = randint(0, 2)
            if _4 == 0:
                basic.show_leds("""
                    # # . . #
                                        # # . # .
                                        . . # . .
                                        # # . # .
                                        # # . . #
                """)
            elif _4 == 1:
                basic.show_leds("""
                    # # # # #
                                        # # # # #
                                        # # # # #
                                        # # # # #
                                        # # # # #
                """)
            else:
                basic.show_leds("""
                    # # # # .
                                        # . # . #
                                        # . # # #
                                        # . . . #
                                        # # # # #
                """)
            basic.pause(1000 * 5)
        if input.button_is_pressed(Button.AB):
            basic.show_string("I am a ai")
            basic.show_leds("""
                # # # # #
                                # . . . #
                                # . . . #
                                # . # # #
                                . # . . .
            """)
            basic.pause(100)
            basic.show_leds("""
                . # # . .
                                # . . # .
                                . . # . .
                                . . . . .
                                . . # . .
            """)

def on_button_pressed_a():
    music.play_tone(494, music.beat(BeatFraction.HALF))
    if _1.is_touching(_2):
        game.add_score(1)
        _2.change(LedSpriteProperty.X, randint(0, 4))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    serial.redirect_to_usb()
    music.play_tone(494, music.beat(BeatFraction.HALF))
    basic.show_string("USB")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

_4 = 0
_2: game.LedSprite = None
_1: game.LedSprite = None
basic.show_leds("""
    . . # . .
        # . # . #
        # . # . #
        # . . . #
        . # # # .
""")
_1 = game.create_sprite(2, 2)
_2 = game.create_sprite(randint(0, 4), 2)
music.play_tone(494, music.beat(BeatFraction.HALF))
basic.show_leds("""
    # # # # #
        # . . . #
        # # # # #
        . . # . .
        . . # . .
""")
basic.clear_screen()

def on_forever():
    basic.pause(900)
    _1.move(1)
    _1.if_on_edge_bounce()
basic.forever(on_forever)
