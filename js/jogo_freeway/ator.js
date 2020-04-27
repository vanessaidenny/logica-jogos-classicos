        
    var yAtor = 367
    var xAtor = 125
    var colisao = false
    var pontos = 0

    function mostraAtor(){
        image(imgAtor, xAtor, yAtor, 40, 30)
    }
    
    function movimentaAtor(){
        if(keyIsDown(UP_ARROW)){
            yAtor-=3
        }
        if(keyIsDown(DOWN_ARROW)){
            if (yAtor<367){
                yAtor+=3
            }
        }
        if (keyIsDown(LEFT_ARROW)){
            if (xAtor>0){
                xAtor-=3;
            }            
        }
        if (keyIsDown(RIGHT_ARROW)){
            if(xAtor<570){
                xAtor+=3;
            }
        }
    }

    function verificaColisao(){
        for(var i=0;i<imgPlanetas.length;i++){
            colisao = collideRectCircle(xPlanetas[i], yPlanetas[i], comprPlanetas[i], altPlaneta, xAtor, yAtor, 15)
            if (colisao){
                posicaoInicial()
                somColisao.play()
                if (pontos>0){
                pontos--
                }
            }
        }
    }

    function posicaoInicial(){
        yAtor = 367
        xAtor = 125
    }

    function pontuacao(){
        fill(color(95,158,160))
        rect(470, 4, 118, 28)
        textAlign(CENTER)  
        fill(color(0,0,139))
        textSize(18)
        text("SCORE: ", 515, 25)
        textAlign(CENTER)        
        fill(color(0,0,139))
        textSize(23)
        text(color(0))
        text(pontos, 575, 27)
    }

    function marcaPontos(){
        if(yAtor<15){
            pontos++
            somPonto.play()
            posicaoInicial()
        }
    }