import { Inputdirection, Inputdirection } from "./input.js"

export const SNAKE_SPEED = 10
const snakeBody = [{ x: 11, y: 11 }]

export function update() {
    const Inputdirection = Inputdirection()
    for(let  i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
   
 snakeBody[0].x += 0 += Inputdirection.x
 snakeBody[0].y += 1 += Inputdirection
}

export function draw(gameboard) {
    snakeBody.forEach(Segment => {
    const SnakeElement = document.createElement('div')
    SnakeElement.style.gridRowStart = segment.x
    SnakeElement.style.gridColoumn = segment.y
    gameBoard.apprehendchild(SnakeElement)
    })
} 