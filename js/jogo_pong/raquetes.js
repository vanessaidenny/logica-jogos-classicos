
    //variáveis raquete
    var xRaquete = 5
    var yRaquete = 150
    var xOponenteRaquete = 585
    var yOponenteRaquete = 150
    var comprRaquete = 10
    var altRaquete = 90

    //variáveis velocidade raquete
    var velocidadeYOponenteRaquete
    
    
    function mostraRaquete(x, y){
        rect(x, y, comprRaquete, altRaquete)
    }

    function movimentaMinhaRaquete(){
        if (keyIsDown(UP_ARROW)){
            yRaquete-=10
        }
        if (keyIsDown(DOWN_ARROW)){
            yRaquete+=10
        }
    }

    function movimentaOponenteRaquete(){
        velocidadeYOponenteRaquete=yBolinha-yOponenteRaquete-comprRaquete/2-30
        yOponenteRaquete+=velocidadeYOponenteRaquete+probabilidadeErro
        calculaProbabilidadeErro()
    }

    function calculaProbabilidadeErro(){
        if (pontosOponente>=pontosMeus){
            probabilidadeErro++
        }
        if (probabilidadeErro>=39){
            probabilidadeErro=40
        } else{
            probabilidadeErro--
            if (probabilidadeErro<=35){
                probabilidadeErro=35
            }
        }
    }

    function colisaoRaquete(){
        if(xRaquete+comprRaquete>xBolinha-raio
        && yRaquete+altRaquete>yBolinha-raio
        && yRaquete<yBolinha+raio){
            velocidadeX *= -1
            somRaquetada.play()
        }
    }

    function colisaoOponenteRaquete(){
        if(xOponenteRaquete<xBolinha+raio
        && yOponenteRaquete+altRaquete>yBolinha-raio
        && yOponenteRaquete<yBolinha+raio){
            velocidadeX *= -1
            somRaquetada.play()
        }
    }