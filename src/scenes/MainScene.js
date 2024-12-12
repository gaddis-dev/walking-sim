import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    create() {
        // Create ground (background)
        this.ground = this.add.graphics();
        this.ground.fillStyle(0x87ceeb, 1); // Light blue color
        this.ground.fillRect(0, 0, 800, 600);

        // Create the player as a rectangle
        this.player = this.add.rectangle(400, 300, 32, 48, 0xff0000); // Red rectangle
        this.physics.add.existing(this.player); // Enable physics on the player

        // Set collision boundaries
        this.player.body.setCollideWorldBounds(true);

        // Input handling
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        // Reset player velocity
        this.player.body.setVelocity(0);

        // Movement logic
        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-150);
        } else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(150);
        }

        if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-150);
        } else if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(150);
        }
    }
}

export default MainScene;
