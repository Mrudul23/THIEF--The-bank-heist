class Theif{
    constructor(){
        this.sprite = createSprite(500,500,20,20);
        this.sprite.shapeColor = "red";
        this.sprite.scale = 0.25
        
        this.restart1 = loadImage("images/restart.png")
        this.stand = loadImage("images/move-top/1.png")
        
        this.right = loadImage("images/move-right/1.png")

        this.left = loadImage("images/move-left/1.png")
        
        this.top = loadImage("images/move-top/1.png")

        this.down = loadImage("images/move-down/1.png")

        this.sprite.addImage("stand",this.stand);
        this.sprite.addImage("top",this.top);
        this.sprite.addImage("right",this.right);
        this.sprite.addImage("down",this.down);
        this.sprite.addImage("left",this.left);
        this.theifLife = 5;
    }

    theifMovement(){
        this.sprite.collide(edges)
        if(keyDown(UP_ARROW)){
            this.sprite.y += - 5;
            this.sprite.changeImage("top",this.top)
        }
        if(keyWentUp(UP_ARROW)){
            this.sprite.changeImage("stand",this.stand)
        }
        
        
        if(keyDown(DOWN_ARROW)){
            this.sprite.y +=  5;
            this.sprite.changeImage("down",this.down)
        }
        if(keyWentUp(DOWN_ARROW)){
            this.sprite.changeImage("stand",this.stand)
        }

        if(keyDown(RIGHT_ARROW)){
            this.sprite.x +=  5;
            this.sprite.changeImage("right",this.right)
        }
        if(keyWentUp(RIGHT_ARROW)){
            this.sprite.changeImage("stand",this.stand)
        }

        if(keyDown(LEFT_ARROW)){
            this.sprite.x += - 5;
            this.sprite.changeImage("left",this.left)
        }

        if(keyWentUp(LEFT_ARROW)){
            this.sprite.changeImage("stand",this.stand)
        }

        if(this.theifLife == 0 && gameState === 1){
            gameState = "reset1";
            bgMusic1.stop();
            resetBgMusic.loop()
        }
    }

    theifMovementLast(){
        this.sprite.collide(edges)
        if(keyDown(UP_ARROW)){
            this.sprite.y += - 15;
            this.sprite.changeImage("top",this.top)
        }
        if(keyWentUp(UP_ARROW)){
            this.sprite.changeImage("stand",this.stand)
        }
        
        
        if(keyDown(DOWN_ARROW)){
            this.sprite.y +=  15;
            this.sprite.changeImage("down",this.down)
        }
        if(keyWentUp(DOWN_ARROW)){
            this.sprite.changeImage("stand",this.stand)
        }

        if(keyDown(RIGHT_ARROW)){
            this.sprite.x +=  15;
            this.sprite.changeImage("right",this.right)
        }
        if(keyWentUp(RIGHT_ARROW)){
            this.sprite.changeImage("stand",this.stand)
        }

        if(keyDown(LEFT_ARROW)){
            this.sprite.x += - 15;
            this.sprite.changeImage("left",this.left)
        }

        if(keyWentUp(LEFT_ARROW)){
            this.sprite.changeImage("stand",this.stand)
        }
    }

    
}