var bow 
var arrow, arrowHead
var bg
var target,target1,target2,target3
var point

function preload(){

bowImage=loadImage("assets/images.png")
arenaImage=loadImage("assets/arena.jpg")
arrowImage=loadImage("assets/NicePng_archery-png_385791.png")
targetImage=loadImage("assets/pngwing.com.png")
hitSound=loadSound("assets/hit.mp3")
targetGroup= createGroup()
target1Group= createGroup()
target2Group= createGroup()
target3Group=createGroup()

score=0 
}

function setup() {
  createCanvas(1500,900);
  
  bow=createSprite(200,600,10,10)
  

  bow.rotation=40
  bow.addImage(bowImage)
 
}


function draw() {
  background(arenaImage); 
  bow.y = mouseY
 
  Target();
  if(arrowHead!==undefined && target !==undefined){
    for (i=0; i< targetGroup.length; i++){
      if(arrowHead.isTouching(targetGroup[i])){
        //what should happen now?
        //targetshougldisapre
        targetGroup[i].destroy()
        score++
        hitSound.play()
      }
    }
    
  }
    if(arrowHead!==undefined && target1 !==undefined){
      for (j=0; j< target1Group.length; j++){
      if(arrowHead.isTouching(target1Group[j])){
        //what should happen now?
        //targetshougldisapre
        target1Group[j].destroy()
        score++
        hitSound.play()
      }
      }
    }
      if(arrowHead!==undefined && target2 !==undefined){
        for (k=0; k< target2Group.length; k++){
        if(arrowHead.isTouching(target2Group[k])){
          //what should happen now?
          //targetshougldisapre
          target2Group[k].destroy()
          score++
          hitSound.play()
        }
        }
      }
        if(arrowHead!==undefined && target3 !==undefined){
          for (l=0; l< target3Group.length; l++){
          if(arrowHead.isTouching(target3Group[l])){
            //what should happen now?
            //targetshougldisapre
            target3Group[l].destroy()
            score++
            hitSound.play()
          }
        }

  }
  drawSprites();
  textSize(24)
  fill('white')
  text("Score: "+score, width-200, 50)
}

 function keyPressed(){
  console.log('pressing the a key')
  //launch arrow if a key is pressed
  if(keyCode === 65){
    arrow=createSprite(200,bow.y,10,10)
    
    arrow.addImage(arrowImage)
   arrow.scale=.1
   arrow.rotation=46
    arrow.velocityX=10
    arrow.lifetime=200
    arrowHead=createSprite(200, bow.y, 5,5)
    arrowHead.x= arrow.x +((arrow.width/10)-27)
    arrowHead.lifetime=200
    arrowHead.invisible=false
    arrowHead.shapeColor='red'
    arrowHead.velocityX=arrow.velocityX
  }
  
}
function Target(){
  if(frameCount % 200 ===0 ){
  target=createSprite(550,10,100,100)
  target.addImage(targetImage)
  target.scale=.05
  target.lifetime=1000
  target.velocityY=10
  targetGroup.add(target)
  
  }
  if(frameCount % 150 === 0){
  target1=createSprite(850,10,100,100)
  target1.addImage(targetImage)
  target1.scale=.05
  target1.lifetime=200
  target1.velocityY=15
  target1Group.add(target1)
  }
if(frameCount % 190 === 0){
  target3=createSprite(1150,10,100,100)
  target3.addImage(targetImage)
  target3.scale=.05
  target3.lifetime=200
  target3.velocityY=5
  target3Group.add(target3)
}
if(frameCount % 60 === 0){
  target2=createSprite(1450,10,100,100)
  target2.addImage(targetImage)
  target2.scale=.03
  target2.lifetime=200
  target2.velocityY=20
  target2Group.add(target2)
}
}

