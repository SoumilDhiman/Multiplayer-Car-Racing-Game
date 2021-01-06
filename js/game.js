class Game {

    constructor() {
    }

    getState() {

        database.ref('gameState').on("value",function(data){

         gameState = data.val()
        })
    }

   update(state) {

    database.ref('/').update({

        gameState:state
    })
   }
    async start() {

        if(gameState === 0) {

            player = new Player()
            var playerCountref = await database.ref('playerCount').once("value")
            if(playerCountref.exists()) {

                playerCount = playerCountref.val()
                player.getCount()
            }
            form = new Form()
            form.display();
        }

        car1 = createSprite(100,200);
        car1.addImage("car1Im",car1Image);
        car2 = createSprite(300,200);
        car2.addImage("car2Im",car2Image);
        car3 = createSprite(500,200);
        car3.addImage("car3Im",car3Image);
        car4 = createSprite(700,200);
        car4.addImage("car4Im",car4Image);

        cars = [car1,car2,car3,car4];
    }

    play() {

       form.hide()

       Player.getPlayerInfo()
       player.getRank()
       if(allPlayers !== undefined) {
           background(ground) 
           image(track,0,-displayHeight*6,displayWidth,displayHeight*7)
        //var displayPosition = 130
        var index = 0
        var x = 170
        var y 
        for(var plr in allPlayers) {
            if(index<=4) {
            index = index+1
            x = x+200
            y = displayHeight-allPlayers[plr].distance
            cars[index-1].x = x
            cars[index-1].y = y
            if(index === player.index) {
                fill("red")
                ellipse(x,y,70,70)
                cars[index-1].shapeColor = "red"
                camera.position.x = displayWidth/2
                camera.position.y = cars[index-1].y 
            }
            }
        
       }
       }

       if(keyIsDown(UP_ARROW) && player.index !== null) {

        player.distance +=35
        player.update()
       }
       if(player.distance>5175) {

         gameState = 2
         player.rank = player.rank+1
         Player.updateRank(player.rank)
         alert("Game Over Your Rank Is"+player.rank)
       }
       drawSprites()
    }

    end() {

      
    }
}







