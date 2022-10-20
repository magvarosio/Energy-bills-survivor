function init() {

  // ! SETUP
  // ? CREATE THE GRID

  // * element

  const grid = document.querySelector('.grid')
  // console.log(grid)

  // ************= VARIABLES =**************

  let invaderTimer

  // * Grid Variables

  const width = 10
  const heigth = 10
  const cellCount = width * heigth
  const cells = []
  const invadersArray = [2, 3, 4, 5, 6, 7, 12, 13, 14, 15, 16, 17, 22, 23, 24, 25, 26, 27]


  // * Player Variables

  const startingPosition = cellCount - (width / 2)
  let currentPosition = startingPosition // currentPosition of the player


  // * Invaders Variables

  const startingPositionInvaders = cellCount / 2
  let currentPositionInvaders = startingPositionInvaders



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
    let timer = setInterval(() => {
      console.log('position laser ', positionLaser)


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
          }, 80)
          clearInterval(timer)
        }
      } else {
        clearInterval(timer)
      }


    }, 100)
  }

  // moveLaser()


  // ***************** INVADERS *********************  

  // * Add Invaders function


  function addInvaders() {
    for (let i = 0; i < invadersArray.length; i++) {
      cells[invadersArray[i]].classList.add('invader')
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


    // if () { deve verificare che vada avanti e indietro (check numeri sulla console like 0 < width < width-1)

    // let left = invadersArray.some(invader => invader % width === 0) // return a boolean 
    // let right = invadersArray.some(invader => invader % width === width - 1)

    invaderTimer = setInterval(() => {
      removeInvaders()
      for (let i = 0; i < invadersArray.length; i++) {
        if (invadersArray[i] % width !== 0) {
          invadersArray[i]--
        } else {
          invadersArray[i]++
        }
      }


      // console.log(invadersArray) // ! UTILE PER CHECK INVADERS ARRAY
      addInvaders()

    }, 1000)
  }


  //limite dx e sx 
  // right && currentPosition % width !== width - 1)
  // left && currentPosition % width !== 0
  moveInvaders()


  // **********= COLLISION =*******************

  // quando trova un elemento nella stessa posizione, fai sparire un invader

  function collision() {

    console.log('collision function')
    if (cells[positionLaser].classList.contains('invader')) {

      cells[positionLaser].classList.remove('invader')
      cells[positionLaser].classList.remove('laser')
      cells[positionLaser].classList.add('explosion')



      // remove laser

      console.log("contiene invader")
      // add explosion
      // update score
      // remove explosion (timer) 


    }

  }



  // ************** END GAME AND CHECK ***************

  // * Check if win function
  // * End game function


  // ! EVENTS
  document.addEventListener('keydown', movePlayer)


}

window.addEventListener('DOMContentLoaded', init)