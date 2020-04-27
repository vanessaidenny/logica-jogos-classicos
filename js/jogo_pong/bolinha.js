
    //variáveis bolinha    
    var xBolinha = 300
    var yBolinha = 200
    var diametro = 15
    var raio = diametro/2

    //variáveis velocidade bolinha
    var velocidadeX = 6
    var velocidadeY = 6

    //pontuação
    var pontosMeus = 0
    var pontosOponente = 0
    var probabilidadeErro = 0

    function mostraBolinha(){
        circle(xBolinha, yBolinha, diametro)
    }

    function movimentaBolinha(){
        xBolinha+=velocidadeX
        yBolinha+=velocidadeY
    }

    function colisaoBolinha(){        
        if(xBolinha+raio>600
        || xBolinha-raio<0){
            velocidadeX *= -1
        }
        if (yBolinha+raio>400
        || yBolinha-raio<0){
            velocidadeY *= -1
        }
    }

    //pontuacao
    function incluiPontos(){
        if(xBolinha>590){
            pontosMeus+=1
            somPonto.play()
        }
        if(xBolinha<10){
            pontosOponente+=1
            somPonto.play()
        }
    }
                
    function incluiPlacar(){
        textSize(18)
        stroke(255)
        fill(color(46,139,87))
        rect(185,20,40,20)
        fill(255)
        text(pontosMeus,200,36)
        stroke(255)
        fill(color(255,69,0))
        rect(385,20,40,20)
        fill(255)
        text(pontosOponente,400,36)
        textSize(18)
        stroke(0)
        text('PLACAR',270,20)
    }    