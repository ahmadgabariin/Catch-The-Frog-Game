const frogGame = FrogGame()
const render = Render()

render.loadElements()


const Timer = function () {

    const secondsCounter = function () {  // 2
        frogGame.decreaseSeconds()

        if(frogGame.getSeconds() <= 3  && frogGame.getSeconds() > 0) {
            $(`span`).closest(`#header`).find(`span`).css(`color`,`red`)
            setTimeout(() => $(`span`).closest(`#header`).find(`span`).css(`color`,`black`),500)
        }

        if(frogGame.getSeconds() >= 0) {
            $(`span`).closest(`#header`).find(`span`).first().text(`${frogGame.getSeconds()} Seconds Left`)
            $(`#footer`).children().eq(2).text(`Level ${frogGame.getLevel()}`)
        }

        if ( frogGame.getSeconds() >= 0 && $(`#body-div`).children().length === 0 ){
            clearInterval(timerinterval)
            frogGame.secondsReset()
            frogGame.increaseLevel()
            render.startTheGame()
        }
    
        else if (frogGame.getSeconds () < 0 && $(`#body-div`).children().length > 0 ){
            clearInterval(timerinterval)
            frogGame.gameReset()
            render.gameOver()
        }

        else if (frogGame.getSeconds() === -1) {
            clearInterval(timerinterval)
            frogGame.gameReset()
            render.gameOver()
        }
       
       
    }
    
    const timerinterval = setInterval(secondsCounter , 1000)

}





