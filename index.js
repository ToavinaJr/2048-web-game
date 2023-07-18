const COLUMNS = 4
const ROWS = 4

class Position{
      constructor(x,y){
            if (x >= 0 && x < COLUMNS){
                  this.x = x
            }
            else return

            if (y >= 0 && y < ROWS){
                  this.y = y
            }
            else return
      }

      get_x = function(){
            return this.x
      }
      get_y = function(){
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

      get_gameOver = function() {
            return this.gameOver
      }

      set_gameOver = function(value) {
            this.gameOver = value
      }

      get_dataAtPosition = function(position) {
            return this.data[position.get_x()][position.get_y()]
      }

      set_dataAtPosition = function(position, number) {
            this.data[position.get_x()][position.get_y()] = number
      }

      is_dataZero = function(position) {
            return (this.get_dataAtPosition(position) == 0)
      }

      get_htmlTileID = function(position) {
            return document.getElementById(toString(position.get_x()) + '-' + toString(position.get_y()))
      }

      set_htmlTileID = function(position, value) {
            let tile = this.get_htmlTileID(position)
            tile.textContent = toString(value)
      }

      set_htmlTileClassStyle = function(position, style) {
            let tile = this.get_htmlTileID(position)
            tile.classList.add(text)
      }

      data = [
                  [7, 0, 0, 0],
                  [0, 0, 0, 0],
                  [0, 0, 0, 0],
                  [0, 0, 0, 0]
            ]
};

let p = get_randomPosition()
let board = new Board()

console.log(p.get_x(), p.get_y(), get_randomTilevalue(), board.is_dataZero(p))