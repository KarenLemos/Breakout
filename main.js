var bola, raquete;
var blocosVermelhos, blocosLaranjas, blocosVerdes, blocosAmarelos;
var pontuacao = 0;
var paredeEsquerda, paredeDireita, paredeCima;
var blocoVermelho, blocoLaranja, blocoVerde, blocoAmarelo;

function setup(){
    createCanvas(600,550);

    bola = createSprite(300,300,10,10);
    bola.shapeColor = "#ffffff";

    raquete = createSprite(300,520,40,10);
    raquete.shapeColor = "#06B9FF";

    paredeEsquerda = createSprite(50,275,10,550);
    paredeEsquerda.shapeColor = "#ffffff";

    paredeDireita = createSprite(550,275,10,550);
    paredeDireita.shapeColor = "#ffffff";

    paredeCima = createSprite(300,10,500,30);
    paredeCima.shapeColor = "#ffffff";

    blocosVermelhos = createGroup();
    blocosLaranjas = createGroup();
    blocosVerdes = createGroup();
    blocosAmarelos = createGroup();

    criarBlocos("#F70304", 99, 120, blocosVermelhos, blocoVermelho);
    criarBlocos("#FFAC00", 126, 147, blocosLaranjas, blocoLaranja);
    criarBlocos("#04FF37", 153, 174, blocosVerdes, blocoVerde);
    criarBlocos("#EAFC1B", 180, 201, blocosAmarelos, blocoAmarelo);

    bola.velocityX = 2;
    bola.velocityY = 3;

}

function draw(){
    background("black");

    raquete.x = mouseX;    

    if(raquete.x <= 75){
        raquete.x = 75;
    }

    if(raquete.x >= 525){
        raquete.x = 525;
    }    

    bola.bounceOff(raquete);
    bola.bounceOff(paredeEsquerda);
    bola.bounceOff(paredeDireita);
    bola.bounceOff(paredeCima);

    drawSprites();
}

function criarBlocos(cor, numInicial, numFinal, grupo, bloco){
    for(var y=numInicial; y<=numFinal; y+=13){
        for(var x=0; x<=13; x++){
            bloco = createSprite(70+(35*x),y,30,10);
            bloco.shapeColor = cor;
            grupo.add(bloco);
        }
    }
}