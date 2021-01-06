class Form {

    constructor() {

        this.title = createElement('h2')
        this.input = createInput("Enter Your Name")
        this.button = createButton('play')
        this.greeting = createElement('h3')
        this.reset = createButton('reset')
    }

    hide()  {

        this.greeting.hide()
        this.button.hide()
        this.input.hide()
        this.title.hide()
    }
     
    display() {

        this.title.html("WELCOME TO CAR RACING GAME")
        this.title.position(displayWidth/2-150,0)
        this.input.position(displayWidth/2-50,displayHeight/2-80)
        this.button.position(displayWidth/2+20,displayHeight/2)
        this.reset.position(displayWidth-100,20)
        this.button.mousePressed(()=> {

            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount+=1
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("Welcome Waiting For Other Players "+player.name) 
            this.greeting.position(displayWidth/2-80,displayHeight/4)
            
        })

        this.reset.mousePressed(()=>{

            player.updateCount(0)
            game.update(0)
            Player.updateRank(0)
        })
    }

}











