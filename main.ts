input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(1000)
    strip.clear()
    strip.show()
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        strip.setPixelColor(position, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(position + 1, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(position + 2, neopixel.colors(NeoPixelColors.Yellow))
        position += 3
    }
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(1000)
    strip.clear()
    strip.show()
})
let strip: neopixel.Strip = null
let position = 0
position = 0
strip = neopixel.create(DigitalPin.P0, 11, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.pause(1000)
strip.clear()
strip.show()
