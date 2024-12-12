import Phaser from 'phaser';
import MainScene from './scenes/MainScene';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        },
    },
    scene: [MainScene],
};

const game = new Phaser.Game(config);
export default game;