class Pipes {
    constructor(game) {
        this.game = game

        this.type = 'pipes'
        this.pipes = []
        this.column = 3
        // 每列水管间距
        this.margin = 200
        // 同一列水管间距
        this.space = 100
        this.speed = 5

        for (var i = 0; i < this.column; i++) {
            var p1 = new GuaImage('pipe_down', game)
            p1.x = 400 + this.margin * i

            var p2 = new GuaImage('pipe_up', game)
            p2.x = p1.x

            this.resetPositon(p1, p2)

            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }

    resetPositon(p1, p2) {
        p1.y = random(-200, 0)
        p2.y = p1.y + p1.h + this.space
    }

    draw() {
        for (var p of this.pipes) {
            p.draw()
        }
    }

    update() {
        for (var p of this.pipes) {
            p.x -= 5
            if (p.x < -100) {
                p.x += this.margin * this.column
            }
        }
    }
}

class BeginScene extends BaseScene {
    constructor(game) {
        super(game)

        // bg
        var bg = new GuaImage('bg', game)
        bg.w = 500
        bg.h = 500
        this.addElemet(bg)

        // 水管
        var pipes = new Pipes(game)
        this.addElemet(pipes)

        // 循环移动的地面
        this.grounds = []
        for (var i = 0; i < 30; i++) {
            var g = new GuaImage('ground', game)
            g.x = i * 19
            g.y = 460
            this.addElemet(g)
            this.grounds.push(g)
        }
        // 无限滚动
        this.skipCount = 5

        // 小鸟
        var animate = new GuaAnimate(game)
        animate.x = 100
        animate.y = 100
        this.addElemet(animate)
    }

    update() {
        super.update()

        var offset = -5
        this.skipCount--
        if (this.skipCount == 0) {
            this.skipCount = 5
            offset = 20
        }

        for (var i = 0; i < 30; i++) {
            var g = this.grounds[i]
            g.x += offset
        }
    }
}