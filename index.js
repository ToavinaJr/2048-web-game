const ROWS = 4
const COLUMNS = 4

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
                  console.error("Out of bound")
            }
      }

      get_x = () => { return this.x}  
      get_y = () => { return this.y}
}

/* ********************************************************* */

function get_randomPosition(){
      let x = Math.floor(Math.random()*4)
      let y = Math.floor(Math.random()*4)
      return new Position(x, y)
}


/* *********************************************************
 ********          B  O  A  R  D           *****************
 ******************************************************** */
class Board{
      constructor(){
            this.emptyCase = 16
      }

      get_dataAtPosition = (pos) => {
            return this.data[ pos.get_x() ] [ pos.get_y() ]
      }

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

      set_dataAtPosition = (pos, value) => {
            this.data[ pos.get_x() ] [ pos.get_y() ] = value
      }
      
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