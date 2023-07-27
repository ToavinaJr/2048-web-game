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
            this.score = 0
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

                  while(this.get_dataAtPosition(pos) !== 0){
                        x = Math.floor(Math.random()*COLUMNS)
                        y = Math.floor(Math.random()*ROWS)
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
                        result.push( this.data[ r ] [ column ])
                  }
                  return result
            }
      }

      /* ********************************************************* */

      get_row = (row) => {
            if (row >= 0 && row < ROWS){
                  return this.data[row]
            }
      }

      /* ********************************************************* */

      set_dataAtPosition = (pos, value) => {
            if (this.get_dataAtPosition(pos) === 0){
                  this.emptyCase--
                  this.data[ pos.get_x() ] [ pos.get_y() ] = value
            }
      }

      /* ********************************************************* */

      generator = () => {
            if (this.emptyCase >= 0){
                  let pos = this.get_positionEmpty()
                  let value = generateValue()

                  if (this.get_dataAtPosition(pos) === 0){
                        this.set_dataAtPosition(pos, value)                  
                  }

                  console.log(this.emptyCase, pos.x, pos.y, value)
            }
      }

      /* ********************************************************* */

      slide = (e) => {
            switch(e.code){
                  case 'ArrowUp':
                        this.slideUp()
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
            this.generator()
      }

      /* ********************************************************* */

      slideLeft = () => {
            for (let r=0; r < ROWS; ++r) {
                  let rows = this.get_row(r)
                  rows = removeZero(rows)

                  for (let x=0; x < rows.length - 1; ++x) {
                        if (rows[x] === rows[x+1]){
                              rows[x] *= 2
                              rows[x+1] = 0
                              this.emptyCase++
                              this.score += rows[x]
                        }
                  }

                  rows = removeZero(rows)

                  while( rows.length < 4){
                        rows.push(0)
                  }
                  
                  this.data[r] = rows
            }
            // console.table(this.data)
      }
      
      
      /* ********************************************************* */

      slideDown = () => {
            for (let c=0; c < COLUMNS; ++c) {
                  let columns = this.get_column(c)
                  columns = removeZero(columns)
                  columns.reverse()

                  for (let x=0; x < columns.length - 1; ++x) {
                        if (columns[x] === columns[x+1]){
                              columns[x] *= 2
                              columns[x+1] = 0
                              this.emptyCase++
                              this.score += columns[x]
                        }
                  }

                  columns = removeZero(columns)

                  while( columns.length < ROWS){
                        columns.push(0)
                  }
                  
                  columns.reverse()

                  for (let j=0; j < COLUMNS; ++j){
                        this.data[j][c] = columns[j]
                  }
            }
      }

      /* ********************************************************* */

      slideUp = () => {
            for (let c=0; c < COLUMNS; ++c) {
                  let columns = this.get_column(c)
                  columns = removeZero(columns)

                  for (let x=0; x < columns.length - 1; ++x) {
                        if (columns[x] === columns[x+1]){
                              columns[x] *= 2
                              columns[x+1] = 0
                              this.emptyCase++
                              this.score += columns[x]
                        }
                  }

                  columns = removeZero(columns)

                  while( columns.length < ROWS){
                        columns.push(0)
                  }
                  
                  for (let j=0; j < COLUMNS; ++j){
                        this.data[j][c] = columns[j]
                  }
            }
      }

      /* ********************************************************* */

      slideRight = () => {
            for (let r=0; r < ROWS; ++r) {
                  let rows = this.get_row(r)
                  rows = removeZero(rows)
                  rows.reverse()

                  for (let x=0; x < rows.length ; ++x) {
                        if (rows[x] === rows[x+1]){
                              rows[x] *= 2
                              rows[x+1] = 0
                              this.emptyCase++
                              this.score += rows[x]
                        }
                  }
                  
                  rows = removeZero(rows)

                  while( rows.length < 4){
                        rows.push(0)
                  }
                  rows.reverse()
                  this.data[r] = rows
            }
            // console.table(this.data)
      }

      /* ********************************************************* */

      data = 
            [
                  [0, 0, 0, 0], 
                  [0, 0, 0, 0],
                  [0, 0, 0, 0],
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
            this.render.draw(this.board.data)
      }
}

let game = new Game
game.run()
document.addEventListener('keyup', (e) => {
      let root = document.querySelector("#board")
      root.innerHTML = ""

      let scoreText = document.querySelector("#score")
      scoreText.innerHTML = ""
      scoreText.innerHTML = game.board.score

      game.board.slide(e)
      game.run()
})