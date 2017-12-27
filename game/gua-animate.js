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
        this.rotation = 0

        this.w = this.texture.width
        this.h = this.texture.height

        this.reset()

        this.setupInputs()

    }

    setupInputs() {
        this.game.registerAction('j', () => {
            this.reset()
            this.jump()
        })
    }

    jump() {
        this.y -= 10
        this.rotation = -45
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

        // 更新受力
        this.y += this.vy * 0.5
        this.vy += this.gy * 0.5
        if (this.y > 418) {
            this.y = 418
        }
        // 更新角度
        if (this.rotation < 45) {
            this.rotation += 5
        }
    }

    draw() {
        //this.game.drawImage(this)
        var context = this.game.context
        context.save()
        var x = this.x + this.w / 2
        var y = this.y + this.h / 2

        context.translate(x, y)


        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-x, -y)

        context.drawImage(this.texture, this.x, this.y, this.w, this.h)
        context.restore()
    }

}