const COLUMNS = 4
const ROWS = 4

var test = () => {
      return "hi"
} 
class Position {
      constructor(x,y) {
            if (x >= 0 && x < COLUMNS){
                  this.x = x
            }
            else return

            if (y >= 0 && y < ROWS){
                  this.y = y
            }
            else return
      }

      get_x = () => {
            return this.x
      }
      get_y = () => {
            return this.y
      }
};

function get_randomPosition(){
      let x = Math.floor(Math.random() * COLUMNS)
      let y = Math.floor(Math.random() * ROWS)

      return new Position(x,y)
}

function get_randomTilevalue() {
      let factor = Math.floor(Math.random()*7)

      if (factor == 2 || factor == 5)
            return 4
      else return 2
}

class Board {
      constructor() {
            this.isGameOver = false
      }

      get_gameOver = () => {
            return this.gameOver
      }

      set_gameOver = function(value) {
            this.gameOver = value
      }

      get_dataAtPosition = (position) => {
            return this.data[position.get_x()][position.get_y()]
      }

      set_dataAtPosition = (position, number) => {
            this.data[position.get_x()][position.get_y()] = number
      }

      is_dataZero = (position) => {
            return (this.get_dataAtPosition(position) == 0)
      }

      get_htmlTileID = (position) => {
            return document.getElementById(toString(position.get_x()) + '-' + toString(position.get_y()))
      }

      set_htmlTileID = (position, value) => {
            let tile = this.get_htmlTileID(position)
            tile.textContent = toString(value)
      }

      set_htmlTileClassStyle = (position, style) => {
            let tile = this.get_htmlTileID(position)
            tile.classList.add(text)
      }

      draw = () => {
            for (let r=0; r < ROWS; ++r){
                  for (let c = 0; c < COLUMNS; ++c) {
                        let div = document.createElement('div')
                        div.id = r.toString() + '_' + c.toString()
                        div.textContent = ""
                        div.classList.value = ""
                        div.classList.add('tile')

                        if (this.data[r][c] > 0){ 
                              div.textContent = this.data[r][c]
                              div.classList.add('sprite-' + this.data[r][c].toString())
                        }
                        document.getElementById('board').append(div)
                  }
            }
      }

      run = () => {
            this.generator()
            document.addEventListener('keyup', (e) => {
                  switch(e.code){
                        case 'ArrowsLeft':
                              this.slide('Left')
                              break;

                        case 'ArrowsRight':
                              this.slide('Right')
                              break;

                        case 'ArrowsDown':
                              this.slide('Down')                        
                              break;
                        
                        case 'ArrowsUp':
                              this.slide('Up')                        
                              break;                              
                  }
            })
            this.draw()
      }

      slide = function(direction) {
            switch(direction){
                  case 'Up':
                        break;
                  
                  case 'Down':
                        break;

                  case 'Left':
                        break;
                        
                  case 'Right':
                        break;

            }
      }

      generator = () => {
            var pos = get_randomPosition()
            var value = get_randomTilevalue()
            
            while(!this.is_dataZero(pos)){
                  pos = get_randomPosition()   
            }

            this.set_dataAtPosition(pos, value)
      }

      data = [
                  [0, 0, 0, 0],
                  [0, 2, 0, 0],
                  [0, 0, 8, 4],
                  [0, 0, 0, 0]
            ]
};

var game = new Board
game.run()