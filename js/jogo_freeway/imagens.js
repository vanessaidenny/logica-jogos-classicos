    //imagens
    var imgCenario
    var imgAtor
    var imgPlaneta
    var imgPlaneta2
    var imgPlaneta3

    //sons
    var somTrilha
    var somColisao
    var somPonto

    function preload() {
        imgCenario = loadImage("../img/jogo_freeway/espaco.png")
        imgAtor = loadImage("../img/jogo_freeway/ator-1.png")
        imgPlaneta = loadImage("../img/jogo_freeway/planeta-1.png")
        imgPlaneta2 = loadImage("../img/jogo_freeway/planeta-2.png")
        imgPlaneta3 = loadImage("../img/jogo_freeway/planeta-3.png")
        imgPlaneta4 = loadImage("../img/jogo_freeway/planeta-4.png")
        imgPlaneta5 = loadImage("../img/jogo_freeway/planeta-5.png")
        imgPlanetas = [imgPlaneta, imgPlaneta2, imgPlaneta3, imgPlaneta4, imgPlaneta5]

        somTrilha = loadSound("../sons/jogo_freeway/matrix.wav")
        somColisao = loadSound("../sons/jogo_freeway/colidiu.mp3")
        somPonto = loadSound("../sons/jogo_freeway/pontos.wav")
        }