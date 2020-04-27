
    var xPlanetas = [700, 700, 700, 700, 700]
    var yPlanetas = [61, 115, 170, 225, 290]
    var velocidadePlanetas = [4, 3, 2.5, 5, 3.3, 2.3]
    var comprPlanetas = [55, 55, 85, 55, 55]
    var altPlaneta = 51
    
    function mostraPlaneta(){
        for(var i=0;i<imgPlanetas.length;i++){
            image(imgPlanetas[i], xPlanetas[i], yPlanetas[i], comprPlanetas[i], altPlaneta)
        }
    }

    function movimentaPlaneta(){
        for(var i=0;i<imgPlanetas.length;i++){
            xPlanetas[i]-=velocidadePlanetas[i]
        }
    }

    function posicaoPlaneta(){
        for(var i=0;i<imgPlanetas.length;i++)
            if(xPlanetas[i]<-50){
                xPlanetas[i]=600
            }
    }

    