var wallpaper;
var wallpaperImage;
var rocket;
var rocketImage
var obstacle, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5;
var gamestate = "play"
var obstaclesGroup

function preload() {
    wallpaperImage = loadImage("spacebackground.jpg")
    rocketImage = loadImage("rocket-removebg-preview.png")
    obstacle1 = loadImage("jupiter-removebg-preview.png")
    obstacle2 = loadImage("venus-removebg-preview.png")
    obstacle3 = loadImage("mars-removebg-preview.png")
    obstacle4 = loadImage("neptune-removebg-preview.png")
    obstacle5 = loadImage("mercury-removebg-preview.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    wallpaper = createSprite(windowWidth / 2, windowHeight / 2, windowWidth + 500, windowHeight + 50)
    wallpaper.addImage(wallpaperImage)
    wallpaper.scale = 1.4
    wallpaper.velocityX = -2

    rocket = createSprite(70, windowHeight / 2, 10, 15)
    rocket.addImage("rocket", rocketImage)
    rocket.scale = 0.25

    obstaclesGroup = createGroup()
}

function draw() {


    background("black");
    //image(wallpaper,0,0,windowWidth+100,windowHeight+50)
    if (gamestate === "play") {
        if (wallpaper.x < 600) {
            wallpaper.x = windowWidth / 2

        }
        if (keyDown(UP_ARROW)) {
            rocket.velocityY = -3
        }

        if (keyDown(DOWN_ARROW)) {
            rocket.velocityY = 3

        }

        if (keyDown(RIGHT_ARROW)) {
            rocket.velocityX = 1
        }

        spawnObstacles()
        if (obstaclesGroup.isTouching(rocket)) {
            gamestate = "end"
        }

    }
    else if (gamestate === "end") {
        wallpaper.velocityX = 0
        obstaclesGroup.setVelocityXEach(0)
        obstaclesGroup.setLifetimeEach(-1)
        rocket.velocityX = 0
        rocket.velocityY = 0
    }



    drawSprites()

}

function spawnObstacles() {
    if (frameCount % 120 === 0) {
        var obstacle = createSprite(windowWidth - 25, Math.round(random(50, windowHeight - 50)), 50, 50)
        obstacle.velocityX = -2
        var rand = Math.round(random(1, 5))
        switch (rand) {
            case 1: obstacle.addImage(obstacle1)
                break
            case 2: obstacle.addImage(obstacle2)
                break
            case 3: obstacle.addImage(obstacle3)
                break
            case 4: obstacle.addImage(obstacle4)
                break
            case 5: obstacle.addImage(obstacle5)
                break
        }
        obstacle.scale = 0.35
        obstacle.lifetime = 800
        obstaclesGroup.add(obstacle)

        
    }

}
function spawnrewards(){
    if(frameCount% 300 === 0 ){
        var reward = createSprite(windowWidth - 25, Math.round(random(50, windowHeight - 50)), 50, 50)
        var rand = Math.round(random(1,2))
        switch(rand){
            case 1: 
            )
        }
    }
}
