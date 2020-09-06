//Create class that imitates rain
class Circle {
    constructor(cx, cy, diameter, color) {
        this.x = cx;
        this.y = cy;
        this.diameter = diameter;
        this.color = color;
        this.speed = 1 + Math.random() * 2;
    }

    //Draws rain to screen
    update() {
        this.y = this.y + this.speed;
        fill(this.color);
        circle(this.x, this.y, this.diameter);
    
    }

}

//Create class that imitates ground
class Rectangle {
    constructor(rx, ry, width, height, color) {
        this.x =rx;
        this.y =ry;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    

    //Draws rectangle to screen
    update() {
        fill(this.color);
        rectangle(this.x, this.y, this.width, this.height);
    }
}

//Ground object
var ground = new Rectangle (400, 50, 450, 200, [138, 102, 48]);
console.log(ground);

//Raindrop objects
var myRaindrops = [];
myRaindrops[0] = new Circle(100, 10, 15, [5, 8, 232]);
myRaindrops[1] = new Circle(250, 10, 15, [5, 8, 232]);
myRaindrops[2] = new Circle(300, 10, 15, [5, 8, 232]);
myRaindrops[3] = new Circle(650, 10, 15, [5, 8, 232]);
myRaindrops[4] = new Circle(700, 10, 15, [5, 8, 232]);
myRaindrops[5] = new Circle(500, 10, 15, [5, 8, 232]);
console.log(myRaindrops);


function setup() {
    createCanvas(800,400);
    
}

//Updates our workspace to show the rain falling to the ground
function draw() {
     background(132, 144, 163);

   myRaindrops[0].update();
   myRaindrops[1].update();
   myRaindrops[2].update();
   myRaindrops[3].update();
   myRaindrops[4].update();
   myRaindrops[5].update();

   
}