input.onButtonPressed(Button.B, function () {
    basic.showNumber(cant_playeras_mujer)
    basic.showString("Mujer")
    basic.showNumber(cant_playeras_hombre)
    basic.showString("Hombre")
    basic.showNumber(total)
    basic.showString("Total")
})
let total = 0
let cant_playeras_hombre = 0
let cant_playeras_mujer = 0
basic.showString("Mia Silva A01285669")
cant_playeras_mujer = randint(20, 200)
cant_playeras_hombre = randint(20, 200)
let precio_playeras_mujer = 250
let precio_playeras_hombre = 200
total = cant_playeras_mujer * precio_playeras_mujer + cant_playeras_hombre * precio_playeras_hombre
