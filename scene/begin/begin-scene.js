class BeginScene extends BaseScene {
    constructor(game) {
        super(game)

        // bg
        var bg = new GuaImage('bg', game)
        bg.w = 400
        bg.h = 400
        this.addElemet(bg)

        // 循环移动的地面
        this.grounds = []
        for (var i = 0; i < 30; i++) {
            var g = new GuaImage('ground', game)
            g.x = i * 19
            g.y = 340
            this.addElemet(g)
            this.grounds.push(g)
        }
    }

    update() {
        super.update()
        for (var i = 0; i < 30; i++) {
            var g = this.grounds[i]
            g.x += -5
        }
    }
}