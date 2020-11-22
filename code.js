var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["caff7a03-54ed-4201-bcd3-1775fac35122","7f796c3d-7813-4f17-b0e0-1e4753cadf35","b45b2ca8-9fe8-4572-864b-e0e8876feb58","5e499f75-ec41-43e1-96e7-9de6842a2e38","6bfb519c-8eee-491f-b59f-8f23d6d4021c","f81c50c4-5b45-4f1c-bf3b-dcbfe41246e0","3a20c4c6-813a-4729-90de-1888e4f7c0c7","8afab658-3956-4f96-bcde-9b79d4e68dd5"],"propsByKey":{"caff7a03-54ed-4201-bcd3-1775fac35122":{"name":"box2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/rSi6TWymkzpYURs_m79xAXPiSd5Bhw.m/category_characters/box2.png","frameSize":{"x":200,"y":73},"frameCount":3,"looping":true,"frameDelay":2,"version":"rSi6TWymkzpYURs_m79xAXPiSd5Bhw.m","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":219},"rootRelativePath":"assets/api/v1/animation-library/gamelab/rSi6TWymkzpYURs_m79xAXPiSd5Bhw.m/category_characters/box2.png"},"7f796c3d-7813-4f17-b0e0-1e4753cadf35":{"name":"parrot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/72gCrCMBuLOBhyKb0tcnLycY7YL4JIbY/category_animals/parrot.png","frameSize":{"x":256,"y":257},"frameCount":1,"looping":true,"frameDelay":2,"version":"72gCrCMBuLOBhyKb0tcnLycY7YL4JIbY","loadedFromSource":true,"saved":true,"sourceSize":{"x":256,"y":257},"rootRelativePath":"assets/api/v1/animation-library/gamelab/72gCrCMBuLOBhyKb0tcnLycY7YL4JIbY/category_animals/parrot.png"},"b45b2ca8-9fe8-4572-864b-e0e8876feb58":{"name":"kid_12_1","sourceUrl":"assets/api/v1/animation-library/gamelab/yQDY_sxzOClThPeYzj5dWKKyTz2drdZY/category_characters/kid_12.png","frameSize":{"x":242,"y":339},"frameCount":1,"looping":true,"frameDelay":2,"version":"yQDY_sxzOClThPeYzj5dWKKyTz2drdZY","loadedFromSource":true,"saved":true,"sourceSize":{"x":242,"y":339},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yQDY_sxzOClThPeYzj5dWKKyTz2drdZY/category_characters/kid_12.png"},"5e499f75-ec41-43e1-96e7-9de6842a2e38":{"name":"jetpack_1","sourceUrl":"assets/api/v1/animation-library/gamelab/u1HXl_LIxx8nPixboCUDt7Eh5KHkTb7J/category_vehicles/jetpack.png","frameSize":{"x":133,"y":160},"frameCount":1,"looping":true,"frameDelay":2,"version":"u1HXl_LIxx8nPixboCUDt7Eh5KHkTb7J","loadedFromSource":true,"saved":true,"sourceSize":{"x":133,"y":160},"rootRelativePath":"assets/api/v1/animation-library/gamelab/u1HXl_LIxx8nPixboCUDt7Eh5KHkTb7J/category_vehicles/jetpack.png"},"6bfb519c-8eee-491f-b59f-8f23d6d4021c":{"name":"soccer_field_1","sourceUrl":"assets/api/v1/animation-library/gamelab/IMVhpJ7DFSNGFqXB3d71gf6CyWortR5Z/category_backgrounds/soccer_field.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IMVhpJ7DFSNGFqXB3d71gf6CyWortR5Z","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IMVhpJ7DFSNGFqXB3d71gf6CyWortR5Z/category_backgrounds/soccer_field.png"},"f81c50c4-5b45-4f1c-bf3b-dcbfe41246e0":{"name":"cardBack_red2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ZaqJ8JNF73y0f8zg7sZkty4pQ1XYsEj6/category_gameplay/cardBack_red2.png","frameSize":{"x":140,"y":190},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZaqJ8JNF73y0f8zg7sZkty4pQ1XYsEj6","loadedFromSource":true,"saved":true,"sourceSize":{"x":140,"y":190},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZaqJ8JNF73y0f8zg7sZkty4pQ1XYsEj6/category_gameplay/cardBack_red2.png"},"3a20c4c6-813a-4729-90de-1888e4f7c0c7":{"name":"ufoBlue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T0CBjWHIQsAN4upUHC2WntNdyzWhON48/category_gameplay/ufoBlue.png","frameSize":{"x":91,"y":91},"frameCount":1,"looping":true,"frameDelay":2,"version":"T0CBjWHIQsAN4upUHC2WntNdyzWhON48","loadedFromSource":true,"saved":true,"sourceSize":{"x":91,"y":91},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T0CBjWHIQsAN4upUHC2WntNdyzWhON48/category_gameplay/ufoBlue.png"},"8afab658-3956-4f96-bcde-9b79d4e68dd5":{"name":"spring_1","sourceUrl":"assets/api/v1/animation-library/gamelab/plnp_BDH.0W5ueJocbfGDdRWr5wiSJqb/category_obstacles/spring.png","frameSize":{"x":145,"y":77},"frameCount":1,"looping":true,"frameDelay":2,"version":"plnp_BDH.0W5ueJocbfGDdRWr5wiSJqb","loadedFromSource":true,"saved":true,"sourceSize":{"x":145,"y":77},"rootRelativePath":"assets/api/v1/animation-library/gamelab/plnp_BDH.0W5ueJocbfGDdRWr5wiSJqb/category_obstacles/spring.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//create the ball, playerPaddle and computerPaddle as sprite objects
var ball = createSprite(200,200,10,10);
ball.setAnimation("ufoBlue_1");
var playerPaddle = createSprite(200,380,10,70);
playerPaddle.setAnimation("spring_1");
var computerPaddle = createSprite(200,25,10,70);
computerPaddle.setAnimation("box2_1");
computerPaddle.velocityX=5;
computerPaddle.velocityY=0;

//variable to store different state of game
var gameState = "serve";

//variables to keep the score
var compScore = 0;
var playerScore = 0;




function draw() {
  //clear the screen
  background("pink");
  
  if(ball.isTouching(computerPaddle) || ball.isTouching(playerPaddle)) {
   playSound("assets/category_bell/bells_win.mp3");
  }
  createEdgeSprites();
  if(ball.isTouching(topEdge)||ball.isTouching(bottomEdge)) {
  playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3");
  }
  
 
  
 
  //place info text in the center
  if (gameState === "serve") {
    text("Press Space to Start",150,180);
  }
  
  createEdgeSprites()
  computerPaddle.bounceOff(leftEdge)
  computerPaddle.bounceOff(rightEdge)
   
  //display scores
  text(compScore, 350,200);
  text(playerScore,350,300);
  
  //make the player paddle move with the mouse's y position
  playerPaddle.x = World.mouseX;
  

  
  //draw line at the centre
  for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  } 
  
  
  //create edge boundaries
  //make the ball bounce with the top and the bottom edges
  createEdgeSprites();
  ball.bounceOff(leftEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
 
  
  //serve the ball when space is pressed
  if (keyDown("space") &&  gameState === "serve") {
    playerPaddle.setAnimation("spring_1");
    serve();
    gameState = "play";
    
  }
  
 
  //reset the ball to the centre if it crosses the screen
  if(ball.x > 400 || ball.x <0) {
    playSound("assets/category_explosion/air_explode_bonus_5.mp3");
    
    
     
    
    if(ball.y < 0) {
      playerScore = playerScore + 1;
    }
    
     if(ball.y>400) {
      compScore = compScore + 1;
    }
    
    
    reset();
    gameState = "serve";
  }
  
  if (playerScore === 5){
    gameState = "you won  ";
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
  
   if (compScore === 5){
    gameState = "over";
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
  
  
  
  if (keyDown("r") && gameState === "over") {
    gameState = "serve";
    compScore = 0;
    playerScore = 0;
  }
  
  drawSprites();
}

function serve() {
  ball.velocityX = 5;
  ball.velocityY = 4;
}

function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
