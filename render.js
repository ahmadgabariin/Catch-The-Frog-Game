const Render = function () {
    let colors = ["red","green","yellow","aqua","pink","blue","lightblue"]

    const gameOver = function () {
        let footer = $(`#footer`)
        let bodyDiv = $(`#body-div`)
        let footerButtons = $(`.footer-buttons`)
        bodyDiv.empty()
        footer.children().eq(2).text(`Level -`)
        footer.children().eq(0).text(`${bodyDiv.children().length} Frogs Left`)
        footerButtons.closest(`#footer`).children().eq(1).text(`Start`)
        bodyDiv.append(`<div class="loser-text" >no more froggies for you</div>`)
        footerButtons.closest(`#footer`).children().eq(1).on(`click`,render.startTheGame)
        $(`#header`).find(`span`).first().text(`- Seconds Left`)
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    const removeFrog = function () {
        $(this).remove()
        $(`#footer`).children().eq(0).text(`${$(`#body-div`).children().length} Frogs Left`)
    }

    const startTheGame = function () {
        let footerButtons = $(`.footer-buttons`)
        let span = $(`span`)
        footerButtons.closest(`#footer`).children().eq(1).off(`click`)
        $(`#body-div`).empty()
        footerButtons.closest(`#footer`).children().eq(1).text(`Catch the frogs!`)
        span.closest(`#header`).find(`span`).css(`color`,`yellow`)
        setTimeout(() => span.closest(`#header`).find(`span`).css(`color`,`black`),500)
        loadFrogs(frogGame.getLevel())
        span.closest(`#header`).find(`span`).first().text(`${frogGame.getSeconds()} Seconds Left`)
        $(`#footer`).children().eq(2).text(`Level ${frogGame.getLevel()}`)
        Timer()
    }

    const loadElements = function () {
        let body = $(`body`)
        let containerDiv = $(`<div></div>`)
        containerDiv.attr(`id`,`container`)
        body.append(containerDiv)

        let secondsDiv = $(`<div id ="header"></div>`)
        let secondsSpan = $(`<span id="seconds-text">- Seconds Left</span>`)
        secondsDiv.append(secondsSpan)
        containerDiv.append(secondsDiv)

        let bodyGameDiv = $(`<div id="body-div" ></div>`)
        bodyGameDiv.on("click",".frog",removeFrog)
        //bodyGameDiv.append(`<div class ="frogs ">Testh</div>`)
        containerDiv.append(bodyGameDiv)

        let footerDiv = $(`<div id="footer"></div>`)

        let frogsLeftDiv = $(`<div></div>`)
        frogsLeftDiv.attr(`class`,`footer-buttons`)
        frogsLeftDiv.text(`0 Frogs Left`)

        let startDiv = $(`<div></div>`)
        startDiv.attr(`class`,`footer-buttons`)
        startDiv.text(`Start`)
        startDiv.on(`click` ,startTheGame )

        let levelDiv = $(`<div></div>`)
        levelDiv.addClass(`footer-buttons`)
        levelDiv.text(`Level -`)

        footerDiv.append(frogsLeftDiv,startDiv,levelDiv)
        containerDiv.append(footerDiv)
    }

    const loadFrogs = function (level ) {
        let bodyDiv = $(`#body-div`)
        
        for(let i = 0 ; i < level ; i++ ) {
            let myFrog = $(`<i class="fa-solid fa-frog "></i>`)
            let myFrogDiv = $(`<div></div>`)
            myFrogDiv.addClass(`frog`)
            myFrogDiv.css(`display`,`inline-block`)
            myFrogDiv.css(`position`,`sticky`)
            bodyDiv.append(myFrogDiv)
            myFrogDiv.append(myFrog)
            myFrogDiv.css(`color`,`${colors[getRandomInt(colors.length)] }`)
            let bodyDivWidth = bodyDiv.width()
            let bodyDivHeight = bodyDiv.height()
            let randomWidth = getRandomInt(bodyDivWidth  )
            let randomHeight = getRandomInt(bodyDivHeight  )
            myFrogDiv.css(`left`,`${randomWidth}px`)
            myFrogDiv.css(`top`,`${randomHeight}px`)
            myFrogDiv.css("font-size",`${ ( randomHeight / 7) + 20 }px`)   
        }
        $(`#footer`).children().eq(0).text(`${$(`#body-div`).children().length} Frogs Left`)
    }

    return{
        loadElements,
        loadFrogs,
        startTheGame,
        gameOver ,
    }
}