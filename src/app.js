import 'phaser'

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade'
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

const game = new Phaser.Game(config)
let car,
  cursors,
  speed = 0

function preload() {
    this.load.image('car', 'assets/car.png')
}

function create() {
    car = this.physics.add.image(400, 400, 'car')

    car.setAngle(-90)
    car.setCollideWorldBounds(true)
    car.setDrag(300)
    car.setAngularDrag(3000)
    car.setMaxVelocity(600)

    cursors = this.input.keyboard.createCursorKeys()
}

function update(time, delta) {
    if (cursors.left.isDown) {
        car.setAngularVelocity(-150)
    } else if (cursors.right.isDown) {
        car.setAngularVelocity(150)
    } else {
        car.setAngularVelocity(0)
    }

    if (cursors.up.isDown) {
        speed += 10
        speed = Math.min(speed, 300)
    } else {
        speed -= 10
        speed = Math.max(speed, 0)
    }
    this.physics.velocityFromRotation(car.rotation, speed, car.body.velocity)
}
