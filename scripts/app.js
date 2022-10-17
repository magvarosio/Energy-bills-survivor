function init() {

  // ! SETUP
  // ? CREATE THE GRID

  // * element

  const grid = document.querySelector('.grid')
  // console.log(grid)


  // ************= GRID VARIABLES =**************

  const width = 10
  const heigth = 10
  const cellCount = width * heigth
  const cells = []
  const invadersArray = [2, 3, 4, 5]




  // ***********= PLAYER VARIABLES =***********

  const startingPosition = cellCount - (width / 2)
  let currentPosition = startingPosition


  // ***********= INVADERS VARIABLES =***********

  const startingPositionInvaders = cellCount / 2
  let currentPositionInvaders = startingPositionInvaders



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
    console.log(event.keyCode)

    const key = event.keyCode

    const left = 37
    const right = 39

    removePlayer(currentPosition)
    // console.log(`current position Player -> ${currentPosition}`) //current position value check


    if (key === right && currentPosition % width !== width - 1) {
      console.log('RIGHT')
      currentPosition++
    } else if (key === left && currentPosition % width !== 0) {
      console.log('LEFT')
      currentPosition--
    }

    console.log('remainder from currentPosition % width', currentPosition % width)

    addPlayer(currentPosition)
  }

  // * Character Shooter function 



  // ***************** INVADERS *********************  

  // * Add Invaders function


  function addInvaders() {
    for (let i = 0; i < invadersArray.length; i++) {
      cells[invadersArray[i]].classList.add('invader')
      console.log(invadersArray[i])

    }
  }


  // saved the invaders in a invadersArray (addInvaders)
  // console.log(invadersArray)


  // * Remove Invaders function

  function removeInvaders() {
    for (let i = 0; i < invadersArray.length; i++) {
      cells[invadersArray[i]].classList.remove('invader')
    }
  }

  // check remove

  // * Moving Invaders function !!!!!!!


  function moveInvaders() {
    removeInvaders()
    for (let i = 0; i < invadersArray.length; i++) {
      invadersArray[i]++

    }

    console.log(invadersArray)
    addInvaders()

  }


  moveInvaders()
  moveInvaders()
  moveInvaders()
  moveInvaders()






  // ************** END GAME AND CHECK ***************

  // * Check if win function
  // * End game function


  // ! EVENTS
  document.addEventListener('keydown', movePlayer)

}

window.addEventListener('DOMContentLoaded', init)