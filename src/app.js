import 'phaser'

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
}

const game = new Phaser.Game(config)

function preload() {
    this.load.image('car', 'assets/car.png')
}

function create() {
    const car = this.physics.add.image(400, 400, 'car')
    car.setVelocity(400, 400)

    car.setBounce(1, 1)
    car.setCollideWorldBounds(true)
}
