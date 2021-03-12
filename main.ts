basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 20 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    }
})
basic.forever(function () {
    basic.showString("" + (maqueen.Ultrasonic(PingUnit.Centimeters)))
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 25) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
})
