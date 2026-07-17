export class Player {
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 100;
    }


    update(){
    }
    draw(context) {
    context.fillStyle = 'red'; // Set the color of your square
    context.fillRect(this.x, this.y, this.width, this.height); // Draws a 100x100 square
    }
}
