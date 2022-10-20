function init() {

  // ! SETUP
  // ? CREATE THE GRID

  // * element

  const grid = document.querySelector('.grid')
  // console.log(grid)

  // ************= VARIABLES =**********
  const scoreDisplay = document.querySelector('#score')
  let score = 0


  // * Grid Variables

  const width = 10
  const heigth = 10
  const cellCount = width * heigth
  const cells = []



  // * Player Variables

  const startingPosition = cellCount - (width / 2)
  let currentPosition = startingPosition // currentPosition of the player


  // * Invaders Variables

  const invadersArray = [2, 3, 4, 5, 6, 7, 12, 13, 14, 15, 16, 17, 22, 23, 24, 25, 26, 27]
  const startingPositionInvaders = cellCount / 2
  let currentPositionInvaders = startingPositionInvaders
  let invaderTimer
  let checkDirection = 1
  let right = true
  let killInvadersArray = []



  // ************ THE GRID ***************

  function createGrid() {
    //for loop 
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.dataset.index = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addPlayer(startingPosition)
    addInvaders()
  }
  createGrid()


  // ! EXECUTIONS


  // ************** PLAYER ********************

  // * addPlayer()
  function addPlayer(position) {
    cells[position].classList.add('player')
  }

  // * removePlayer()
  function removePlayer(position) {
    cells[position].classList.remove('player')
  }


  // * movePlayer
  function movePlayer(event) {
    // console.log(event.keyCode)

    const key = event.keyCode

    const left = 37
    const right = 39
    const spaceBar = 32

    removePlayer(currentPosition)

    // console.log(`current position Player -> ${currentPosition}`) //current position value check


    if (key === right && currentPosition % width !== width - 1) {
      // console.log('RIGHT')
      currentPosition++
    } else if (key === left && currentPosition % width !== 0) {
      // console.log('LEFT')
      currentPosition--
    } else if (key === spaceBar) {
      moveLaser()

    }
    // console.log('remainder from currentPosition % width', currentPosition % width)

    addPlayer(currentPosition)
  }


  // ************** LASER *****************

  function addLaser(position) {
    cells[position].classList.add('laser')
    // console.log('add laser ', position)
  }

  function removeLaser(position) {
    cells[position].classList.remove('laser')
    // console.log('remove laser', position)
  }


  function moveLaser() {
    // console.log("moveLaser function")
    let positionLaser = currentPosition

    // console.log('SPARA!')
    const laserTimer = setInterval(() => {
      // console.log('position laser ', positionLaser)

      if (positionLaser >= width) {
        removeLaser(positionLaser)
        positionLaser -= 10

        addLaser(positionLaser)

        if (cells[positionLaser].classList.contains('invader')) {
          cells[positionLaser].classList.remove('invader')
          cells[positionLaser].classList.remove('laser')
          cells[positionLaser].classList.add('explosion')


          // remove explosion
          setTimeout(() => {
            cells[positionLaser].classList.remove('explosion')

            const killInvader = invadersArray.indexOf(positionLaser)
            killInvadersArray.push(killInvader)
            score += 100
            scoreDisplay.innerHTML = score
            // console.log(killInvadersArray)
            console.log(score)


          }, 80)
          clearInterval(laserTimer)
        }
      } else {
        clearInterval(laserTimer)
      }
    }, 100)
  }



  // ***************** INVADERS *********************  

  // * Add Invaders function


  function addInvaders() {

    for (let i = 0; i < invadersArray.length; i++) {
      if (!killInvadersArray.includes(i)) {
        cells[invadersArray[i]].classList.add('invader')
      }
      // console.log(invadersArray[i]) // INVADERS ARRAY

    }
  }



  // * Remove Invaders function

  function removeInvaders() {
    for (let i = 0; i < invadersArray.length; i++) {
      cells[invadersArray[i]].classList.remove('invader')
    }
  }



  // * Move Invaders function

  function moveInvaders() {

    invaderTimer = setInterval(() => {
      const leftStop = invadersArray[0] % width === 0 // return a boolean 
      const rightStop = invadersArray[invadersArray.length - 1] % width === width - 1
      removeInvaders()
      if (right && rightStop) {
        for (let i = 0; i < invadersArray.length; i++) {
          invadersArray[i] += width + 1
          checkDirection = -1
          right = false
        }
      }
      if (!right && leftStop) {
        for (let i = 0; i < invadersArray.length; i++) {
          invadersArray[i] += width - 1
          checkDirection = 1
          right = true
        }
      }
      for (let i = 0; i < invadersArray.length; i++) {
        // if (invadersArray[i] % width !== 0) {
        invadersArray[i] += checkDirection
        // }
      }
      // console.log(invadersArray) // ! UTILE PER CHECK INVADERS ARRAY
      // console.log('current position ', currentPosition)
      // console.log('current position invaders ', currentPositionInvaders)
      addInvaders()



      // **** GAME OVER ** 

      if (invadersArray.some((invader) => invader >= cells.length - width)) {
        // scoreDisplay.innerHTML = 'GAME OVER'
        alert('GAME OVER')
        clearInterval(invaderTimer)
      }

      // **** GAME WON ** 

      if (killInvadersArray.length === invadersArray.length) {
        // scoreDisplay.innerHTML = 'YOU WIN!'
        alert(`YOU WON, YOUR SCORE IS ${score}`)
        clearInterval(invaderTimer)
      }

    }, 1000)

  }
  moveInvaders()




  // ! EVENTS
  document.addEventListener('keydown', movePlayer)


}

window.addEventListener('DOMContentLoaded', init)