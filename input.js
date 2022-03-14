let Inputdirection = { x: 0, y: 0 }

window,addEventListener( 'keydown' , e => {
    switch (e.key) {
        case 'ArrowUp':
            Inputdirection = { x: 0, y: -1 }
            break
         case 'ArrowDown':
            Inputdirection = { x: 0, y: 1 }
            break
         case 'ArrowLeft':
            Inputdirection = { x: -1, y: 0 }
            break
         case 'ArrowRight':
            Inputdirection = { x: 1, y: 0}
            break
    }
})

export function Inputdirection() {
    return Inputdirection
}
