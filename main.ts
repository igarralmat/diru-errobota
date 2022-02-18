basic.showIcon(IconNames.Sad)
pins.servoWritePin(AnalogPin.P0, 25)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        basic.showIcon(IconNames.Happy)
        pins.servoWritePin(AnalogPin.P0, 140)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P0, 25)
        basic.pause(1000)
        basic.showIcon(IconNames.Sad)
    }
})
