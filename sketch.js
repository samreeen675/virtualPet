var dog,sadDog,happyDog,feed,addFood,food1,fs,foodS;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  database = firebase.database()
  console.log(database)
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  food1 = new Food()

  var ref = database.ref("foodStock")
  ref.on("value", function(data){
    fs = data.val()
    console.log(fs)
    food1.updateFoodStock(fs)
  })

  feed = createButton("Feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)

  addFood = createButton("Add Food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)

}

function draw() {
  background(46,139,87);

  food1.display()

  drawSprites();
}

function feedDog (){
  dog.addImage(happyDog)

  

  if(food1.getFoodStock()<= 0){
    food1.updateFoodStock(0)
   
  }
  else{
    food1.updateFoodStock(food1.getFoodStock()-1)
  
  }
}




function addFoods (){
  fs++
  food1.updateFoodStock(fs)
  
}

  