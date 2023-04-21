class Block {
    constructor(ctx, posY, w, h, color, speed) {
        this.ctx = ctx
        this.posX = Math.random() * (400 - 0) + 0
        this.posY = posY
        this.sizeW = w
        this.sizeH = h
        this.color = color
        this.speed = speed



        this.init()
    }

    init() {

    }

    draw(posCarX) {

        this.move(posCarX)

        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.posX, this.posY, this.sizeW, this.sizeH)



    }

    move(posCarX) {

        console.log(posCarX)
        if (posCarX < this.posX + this.sizeW &&
            posCarX + 50 > this.posX &&
            500 < this.posY + this.sizeH &&
            50 + 500 > this.posY) {
            alert("Game Over! My friend")


        } else {


        }
        this.posY += this.speed

    }



}