/**
 * Created by geekduan on 2017/12/7.
 */

var __main = function() {
    var paths = {
        bg: 'img/bg_day.png',
        ground: 'img/ground.png',
        b1: 'img/bird0_0.png',
        b2: 'img/bird0_1.png',
        b3: 'img/bird0_2.png',
        pipe_down: 'img/pipe_down.png',
        pipe_up: 'img/pipe_up.png',
    }

    var game = Game.instance(30, paths, function () { // image 加载完回调
         // var scene = new Scene(game)
        var scene = new BeginScene(game)
        game.runWithScene(scene)
    })

}