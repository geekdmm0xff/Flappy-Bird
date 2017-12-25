class GuaAnimate {
    constructor(game) {
        this.game = game
        this.type = 'animation'

        // loads
        this.animations = {
            walk:[],
        }
        // hard code
        for (var i = 1; i < 4; i++) {
            var name = `b${i}`
            var f = game.textureByName(name)
            this.animations['walk'].push(f)
        }

        this.animationName = 'walk'
        this.texture = this.frames()[0]
        this.frameInterval = 3
        this.frameIndex = 0

        this.flipX = false

        this.w = this.texture.width
        this.h = this.texture.height
    }

    frames() {
        return this.animations[this.animationName]
    }

    update() {
        this.frameInterval--
        if (this.frameInterval == 0) {
            var frames = this.frames()
            this.frameInterval = 3
            this.frameIndex = (this.frameIndex + 1) % frames.length
            this.texture = frames[this.frameIndex]
        }
    }

    draw() {
        if (this.flipX) {
            var ctx = this.game.context
            ctx.save()

            var x = this.x + this.w / 2
            ctx.translate(x, 0)
            ctx.scale(-1, 1)
            ctx.translate(-x, 0)

            ctx.drawImage(this.texture, this.x, this.y, this.w, this.h)

            ctx.restore()
        } else {
            this.game.drawImage(this)
        }
    }

    changeAnimate(name) {
        this.animationName = name
    }

    move(state, x) {

    }
}