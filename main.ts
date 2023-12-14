turtle.setPosition(0, 4)
led.setBrightness(200)
turtle.pen(TurtlePenMode.Down)
for (let index = 0; index < 4; index++) {
    turtle.turnRight()
    turtle.forward(1)
    turtle.turnLeft()
    turtle.forward(1)
}
