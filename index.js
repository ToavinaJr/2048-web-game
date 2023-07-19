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
            if (x >= 0 && x < COLUMNS && y >= 0 && y >= 0 && y < ROWS) {
                  this.x = x
                  this.y = y
            }
            else{
                  throw("Invalide position")
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

      data = 
            [
                  [0, 0, 0, 0], 
                  [0, 0, 0, 0],
                  [0, 0, 0, 0],
                  [0, 0, 0, 0]
            ]
}

class Render{

}

class Handler{

}

class Game{

}

let pos = new Position(-1, 5)