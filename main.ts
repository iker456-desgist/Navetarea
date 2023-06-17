controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Laser = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 . . . 8 . . . . 
        . 8 . . 8 . . . 9 . . . . . . . 
        . . . . . . . . . . . 6 . 9 . . 
        . . . . . . . . . . . . . . . . 
        . . . 8 . . . . . . . 8 . 9 . . 
        . 9 . 8 9 . . . . . 9 8 . . 8 . 
        . . . 8 9 9 . . . 9 9 8 . . . . 
        . . . . 8 9 9 . 9 9 8 . 8 . . . 
        . . . . . 8 9 . 9 8 . . . . . . 
        . . 9 . . . 8 9 8 . . . . 9 . . 
        . . . 9 . . 8 9 8 . . 9 9 . . . 
        . . . . . . . . . . 9 . . . . . 
        . . . . 9 9 . . . . . . . . . . 
        . . . . . . . 8 . . . . 8 . . . 
        . . . . . . . . . . . . . . . . 
        `, Nave, 0, -100)
})
let Laser: Sprite = null
let Nave: Sprite = null
Nave = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f 2 2 2 2 2 2 2 2 f . . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f f f f f f 1 1 f f f f f f . 
    . f f f f f f f f f f f f f f . 
    . f d 1 1 1 1 1 1 1 1 1 1 d f . 
    . . f d 1 1 1 1 1 1 1 1 d f . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . . f f f f f f f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Nave.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(Nave, 200, 200)
