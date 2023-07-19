const ROWS = 4
const COLUMNS = 4

/* ********************************************************* */

function removeZero(array) {
      return array.filter(num => num != 0)
}

/* ********************************************************* */

function generateValue( ){
      let value = Math.floor(Math.random() * 8)

      if (value == 2  || value == 5)
            return 4

      return 2
}

/* *********************************************************
 ********         P O S I T I O N          *****************
 ******************************************************** */

class Position{
      constructor(x, y){
            if (x >= 0 && x < COLUMNS && y >= 0  && y < ROWS) {
                  this.x = x
                  this.y = y
            }
            else{
                  throw ("Invalide position")
            }
      }

      get_x = () => { return this.x}  
      get_y = () => { return this.y}
}

/* ********************************************************* */

function get_randomPosition(){
      let x = Math.floor(Math.random() * 4)
      let y = Math.floor(Math.random() * 4)

      return new Position(x, y)
}


/* *********************************************************
 ********          B  O  A  R  D           *****************
 ******************************************************** */
class Board{
      constructor(){
            this.emptyCase = 16
      }

      /* ********************************************************* */

      get_emptycase = () => {
            return this.emptyCase
      }

      /* ********************************************************* */

      get_dataAtPosition = (pos) => {
            return this.data[ pos.get_x() ] [ pos.get_y() ]
      }

      /* ********************************************************* */

      get_positionEmpty = ( ) => {
            if (this.emptyCase > 0){
                  let x = Math.floor(Math.random()*4)
                  let y = Math.floor(Math.random()*4)
                  let pos = new Position(x, y)

                  while(this.get_dataAtPosition(pos) != 0){
                        x = Math.floor(Math.random()*4)
                        y = Math.floor(Math.random()*4)
                        pos = new Position(x, y)
                  }
                  
                  return pos
            }
      }

      /* ********************************************************* */

      get_column = (column) => {
            if (column >= 0 && column < COLUMNS){
                  let result = new Array
                  for (let r=0; r < ROWS; ++r) {
                        result[r] = this.data[ r ] [ column ]
                  }
                  return result
            }
      }

      /* ********************************************************* */

      get_row = (row) => {
            if (row >= 0 && row < ROWS){
                  let result = new Array
                  for (let c=0; c < COLUMNS; ++c) {
                        result[r] = this.data[ row ] [ c ]
                  }
                  return result
            }
      }

      /* ********************************************************* */

      set_dataAtPosition = (pos, value) => {
            if (this.get_dataAtPosition(pos) == 0)
                  this.emptyCase--

            this.data[ pos.get_x() ] [ pos.get_y() ] = value
      }

      /* ********************************************************* */

      generator = () => {
            if (this.emptyCase > 0){
                  let pos = this.get_positionEmpty()
                  let value = generateValue()

                  this.set_dataAtPosition(pos, value)
            }
      }

      /* ********************************************************* */

      slide = (e) => {
            switch(e.code){
                  case 'ArrowUp':
                        console.log("up");
                        break

                  case 'ArrowDown':
                        this.slideDown()
                        break

                  case 'ArrowLeft':
                        this.slideLeft()
                        break

                  case 'ArrowRight':
                        this.slideRight()
                        break
            }
      }

      /* ********************************************************* */

      slideUp = () => {
            console.log("Up")
      }

      /* ********************************************************* */

      slideDown = () => {
            console.log("Down")
      }

      /* ********************************************************* */

      slideLeft = () => {
            console.log("left")
      }

      /* ********************************************************* */

      slideRight = () => {
            console.log("Right")
      }

      /* ********************************************************* */

      data = 
            [
                  [2, 0, 0, 0], 
                  [0, 512, 0, 0],
                  [0, 8192, 0, 0],
                  [0, 0, 0, 0]
            ]
}

/* ************************************************************
 ********          R   E  N  D  E  R           *****************
 ************************************************************ */
class Render{
      get_root = () => {
            return document.getElementById('board')
      }

      /* ********************************************************* */

      createTileID = (txt) => {
            let tile = document.createElement('div')
            tile.id = txt

            return tile
      }

      /* ********************************************************* */

      appendTileToRoot = (tile) => {
            this.get_root().append(tile)
      }

      /* ********************************************************* */

      updateTile = (tile, num) => {
            tile.textContent = ""
            tile.classList.value = ""
            tile.classList.add("tile")

            if (num > 0) {
                  tile.textContent = num
                  tile.classList.add("x-" + num.toString())
            }
      }

      /* ********************************************************* */

      draw = (data) => {
            for (let r=0; r < ROWS; ++r) {
                  for (let c = 0; c < COLUMNS; c++) {
                        let tile = this.createTileID(r.toString() + "-" + c.toString())
                        this.updateTile(tile, data[ r ] [ c ])
                        this.appendTileToRoot(tile)                        
                  }
            }
      }
}

class Game{
      constructor(){
            this.board = new Board
            this.render = new Render
      }

      run = () => {
            document.addEventListener('keyup', game.board.slide)
            this.render.draw(this.board.data)
      }
}

// let pos = new Position(-1, 5)


let game = new Game
game.run()