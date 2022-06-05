const FrogGame = function () {

    let seconds = 2
    let level = 1
    let frogs = [ {frogId : 1} , {frongId : 2} ]

    const addFrog = function () {
        frogs.push({frogId : (frogs.length + 1) })
    }
    
    const removeFrog = function (myFrogId) {
        frogs.length = 0
        frogs.push(... frogs.filter(frog => frog.frogId !== myFrogId))
    }

    const getFrogs = () => frogs

    const getSeconds = () =>  seconds + level

    const getLevel = () => level

    const increaseLevel = () => level++

    const decreaseSeconds = () => seconds--

    const secondsReset = () => seconds = 2
    
    const levelReset = () => level = 1
    
    const Resetvalues = () => {
        level = 1
        seconds = 2
    }
    
    return {
        addFrog ,
        removeFrog ,
        getFrogs ,
        getSeconds ,
        getLevel ,
        increaseLevel ,
        decreaseSeconds ,
        secondsReset,
        levelReset,
        gameReset : Resetvalues ,

    }
}