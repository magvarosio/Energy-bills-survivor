function init() {

  // ! SETUP
  // ? CREATE THE GRID

  // * element

  const grid = document.querySelector('.grid')
  // console.log(grid)


  // * grid variables

  const width = 10
  const heigth = 10
  const cellCount = width * heigth
  const cells = []




  // * character variables

  const startingPosition = 0
  let currentPosition = startingPosition



  //* Invaders variables


  function createGrid() {
    //for loop 
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // console.log(cell)
      cell.dataset.index = i
      grid.appendChild(cell)
      cells.push(cell)
    }

    addPlayer(startingPosition)
  }
  createGrid()


  // ! EXECUTIONS

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
    const up = 38
    const down = 40
    const left = 37
    const right = 39

    removePlayer(currentPosition)
    console.log(`current position -> ${currentPosition}`) //current position value check

    if (key === right && currentPosition % width !== width - 1) {
      console.log('RIGHT')
      currentPosition++
    } else if (key === left && currentPosition % width !== 0) {
      console.log('LEFT')
      currentPosition--
    } else if (key === up && currentPosition >= width) {
      console.log('UP')
      currentPosition -= width
    } else if (key === down && currentPosition < cellCount - width) {
      console.log('DOWN')
      currentPosition += width
    }



    console.log('remainder from currentPosition % width', currentPosition % width)

    addPlayer(currentPosition)
  }




  // * Character Shooter function 
  // * Add Invaders function
  // * Remove Invaders function
  // * Moving Invaders function
  // * Game Over function
  // * Check if win function


  // ! EVENTS
  document.addEventListener('keydown', movePlayer)

}

window.addEventListener('DOMContentLoaded', init)