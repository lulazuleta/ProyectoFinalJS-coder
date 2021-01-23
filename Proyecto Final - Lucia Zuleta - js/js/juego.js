var canvas;
var ctx;
var FPS=50;
var altoCuadro=50;
var anchoCuadro=50;
var fondo1='#FF5733';
var fondo2='#FFB233';
var fondo3='#000000';


var escenario = [
    [0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,0],
    [0,1,2,2,2,2,1,0],
    [0,1,2,2,2,2,1,0],
    [0,1,2,2,2,2,1,0],
    [0,1,2,2,2,2,1,0],    
    [0,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0]
];


//Asigna el color a cada uno de los cuadros del escenario

function dibujaEscenario (){

    var color;

    for (y=0; y<12; y++) {
        for (x=0; x<8; x++){
            if(escenario[y][x]==0){
                color=fondo1;
                
            }
            if(escenario[y][x]==1){
                color=fondo2;
                
            }
            if(escenario[y][x]==2){
                color=fondo3;
            }

            ctx.fillStyle=color;
            ctx.fillRect(x*anchoCuadro, y*altoCuadro, anchoCuadro, altoCuadro);
            

            
        }


    }




}


//Inicializa el juego


function inicializa(){

canvas = document.getElementById('canvas');
ctx= canvas.getContext('2d');




setInterval(function(){
    principal();


},1000/FPS);
}


function borraCanvas (){

    canvas.width=400;
    canvas.lenght=400;
}


//creacion de los personajes
var personaje= function (x,y) {

    this.x=x;
    this.y=y;
}




function principal (){

    borraCanvas();
    dibujaEscenario();
    
}