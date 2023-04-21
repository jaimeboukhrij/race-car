const basicShapesApp = {
    appName: "My first VideoGame",
    author: "Jaime Boukhrij",
    version: "1.0.0",
    ctx: undefined,
    canvasSize: {
        w: "754 px",
        h: "1556 px"
    },
    carInstance: undefined,
    carSpecs: {
        pos: { x: 100, y: 500 },
        size: { w: 50, h: 50 }
    },
    blocks: [],
    framesIndex: 0,
    countTime: 0,
    init() {
        this.setContext()
        this.setImageInstance()
        this.setEventListeners()
        this.createBlock()
        this.start()

    },
    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++
            this.countTime += 50
        }, 50)
    },
    drawRoad() {
        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(0, 0, 500, 1556)
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(465, 0, 35, 1556)
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(0, 0, 35, 1556)
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(50, 0, 15, 1556)
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(435, 0, 15, 1556)

        this.ctx.beginPath()
        this.ctx.strokeStyle = "white"
        this.ctx.lineWidth = 5
        this.ctx.setLineDash([30, 20])
        this.ctx.moveTo(250, 7)
        this.ctx.lineTo(250, 1556,)
        this.ctx.stroke()
        this.ctx.closePath()



    },
    drawCar() {
        this.ctx.drawImage(
            this.carInstance,
            this.carSpecs.pos.x,
            this.carSpecs.pos.y,
            this.carSpecs.size.w,
            this.carSpecs.size.h
        )
    },
    drawBlock() {
        this.blocks.forEach(elm => elm.draw(this.carSpecs.pos.x))
        if (this.framesIndex % 90 === 0) this.createBlock()
        if (this.countTime > 5000 && this.countTime < 10000) {
            if (this.framesIndex % 80 === 0) this.createBlock()
            console.log("dentro1")
        } else if (this.countTime > 10000 && this.countTime < 20000) {
            if (this.framesIndex % 70 === 0) this.createBlock()
            console.log("dentro2")
        } else if (this.countTime > 20000 && this.countTime < 30000) {
            if (this.framesIndex % 60 === 0) this.createBlock()
            console.log("dentro3")
        } else if (this.countTime > 30000 && this.countTime < 50000) {
            if (this.framesIndex % 50 === 0) this.createBlock()
            console.log("dentro14")
        } else if (this.countTime > 50000) {
            if (this.framesIndex % 30 === 0) this.createBlock()
            console.log("dentro5")
        }
    },
    drawText() {
        this.ctx.font = '50px arial'
        this.ctx.fillText("Score: ", 100, 100)

    },



    drawAll() {
        this.drawRoad()
        this.drawCar()
        this.drawBlock()
        this.drawText()

    },
    setEventListeners() {
        document.onkeyup = event => {

            const { key } = event

            if (key == 'ArrowLeft') {
                this.carSpecs.pos.x -= 30
            }

            if (key == 'ArrowRight') {
                this.carSpecs.pos.x += 30
            }
        }
    },

    setImageInstance() {
        this.carInstance = new Image()
        this.carInstance.src = "./images/car.png"
    },

    createBlock() {
        console.log(this.speed)
        this.blocks.push(
            new Block(this.ctx,
                0,
                Math.random() * (300 - 50) + 50,
                50,
                "red",
                4),




        )
    },

    clearAll() {
        this.ctx.clearRect(0,
            0,
            this.canvasSize.w,
            this.canvasSize.h,
            this.carSpecs)

    }



}