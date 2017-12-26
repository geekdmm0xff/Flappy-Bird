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

        this.w = this.texture.width
        this.h = this.texture.height

        this.reset()

        game.registerAction('j', () => {
            this.reset()
            this.y -= 10
        })
    }

    reset() {
        this.vy = 10
        this.gy = 1
    }

    frames() {
        return this.animations[this.animationName]
    }

    update() {
        // 动画
        this.frameInterval--
        if (this.frameInterval == 0) {
            var frames = this.frames()
            this.frameInterval = 3
            this.frameIndex = (this.frameIndex + 1) % frames.length
            this.texture = frames[this.frameIndex]
        }

        // 掉落
        this.y += this.vy * 0.5
        this.vy += this.gy * 0.5
        if (this.y > 305) {
            this.y = 305
        }
        if (this.y < 0) {
            this.y = 0
        }
    }

    draw() {
        this.game.drawImage(this)
    }

}