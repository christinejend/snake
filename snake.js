( function() {
    "use strict";

    var Snake;



    //GAME MANAGER

    Snake = function( oApp ){
            
                var game = this,
                canvas = document.getElementById("game"),
                context = canvas.getContext("2d"),
                score = 0,
                frameGame = 500,
                dir,
                block = 10,
                snakeArray = [],
                i
                this.app = oApp;

          this.snake = {

                "x": 250,
                "y": 250,
                "height" : 20,
                "width": 20,

              "draw": function(){

              context.beginPath();
              context.fillStyle = "black";
              context.fillRect( this.x, this.y, this.width, this.height);

              window.onkeydown = function(e) {
                  var key = e.keyCode || e.which;
              

                   
                    switch(key) {

                        case 38 : case 122 : case 90 :  // Flèche haut, z, w, Z, W
                           console.log('up');
                           
                            dir = "up";
                            break;

                        case 40 : case 115 : case 83 : // Flèche bas, s, S
                           console.log('down');
                            
                            dir = "down";
                            break;

                        case 37 : case 113 : case 81 : // Flèche gauche, q, a, Q, A
                            console.log('left');
                            
                            dir = "left";   
                            break;

                        case 39 : case 100 : case 68 : // Flèche droite, d, D
                           console.log('right');
                            
                            dir = "right";
                              
                            break;

                        default :
                            
                                                         return true;
                    }
                    e.stopPropagation();
                    e.preventDefault(); 
              };
             
            },


            "update":  function(){ 
                     console.log( "Snake  doit manger" + this.x, this.y);

                      //MANGER
                      if( this.x == (game.fruit.x_fruit) && this.y == (game.fruit.y_fruit)){

                       context.clearRect(0, 0, canvas.width, canvas.height);
                       game.wall.draw();
                       game.fruit.draw(); 
                        score++;
                        console.log('manger');                     
                        };



                        //CHECK COLLISION
                        //position des murs

                        if( this.x == (game.wall.x_wall) || this.y == (game.wall.y_wall) ){
                       
                       console.log("BIIIM le mur !");
                      
                        };

                  
                },
           
        };

        this.fruit = {
            "width": 10,
            "height": 10,
            "x_fruit": 250,/*Math.round(Math.random()*(game.app.width-10)/2), */
            "y_fruit": 170,/*Math.round(Math.random()*(game.app.height-10)/2),*/
            
            "draw": function(){
                context.beginPath();
                context.fillStyle = 'red';
                context.arc( this.x_fruit, this.y_fruit, 10,0, Math.PI * 2, true );
               /*context.rect(this.x_fruit, this.y_fruit, this.width, this.height);*/
                console.log('fruit ' + this.x_fruit, this.y_fruit);
                context.fill();
            },
        };

        this.wall = {
            "x_wall": Math.round(Math.random()*(game.app.width-10)/2),
            "y_wall": Math.round(Math.random()*(game.app.height-10)/2),
            "width": 150,
            "height": 40,


          "draw": function() {
                context.beginPath();
                context.rect(this.x_wall, this.y_wall,this.width,this.height);
                context.stroke();
            },  
        };

        this.init = function(){
          console.log('yo');

          this.animate();
            //snakeScore();

            //game_loop();

        };

        this.animate = function(){

           this.fruit.draw();         
           this.wall.draw();
           game_loop();

        };
        function game_loop(){
           game.app.context.clearRect(game.snake.x, game.snake.y, game.snake.width, game.snake.height); 

                 if(dir == "left"){ 
                    
                      game.snake.x -= 20;   
                }
                else if(dir == "right"){
                    
                     game.snake.x += 20;
                }
                 else if(dir == "up"){
                    
                     game.snake.y -= 20;
                }
                 else if(dir == "down"){
                    
                    game.snake.y += 20;
                }
            game.snake.draw();
            game.snake.update();
            snakeScore();
           /* snakeScore();*/        
            setTimeout(game_loop, frameGame); //LOOP

        };

          function snakeScore(){
            context.font = "30px serif";
            context.fillStyle = "#DBEAF9";
            context.fillText("Score : " + score, 420, 530);
        };



              // Utils
        this._drawSpriteFromFrame = function( oFrame ) {
            this.app.context.drawImage(
                this.spriteSheet,
                oFrame.sx,
                oFrame.sy,
                oFrame.sw,
                oFrame.sh,
                oFrame.dx,
                oFrame.dy,
                oFrame.dw,
                oFrame.dh
            );
        };

        addEventListener( "load", this.init.bind( this ) );






    };
    window.Snake = Snake;
} )();