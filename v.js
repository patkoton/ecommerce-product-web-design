//Object Literals
var myCar = {
  maxSpeed: 30,
  driver: "Shaun",
  drive: function(speed, time) {
    console.log(speed*time);
  },
  logDriver: function() {
    console.log("driver name is " + this.driver);
  }
};

//Constructor Function
var Car = function(maxSpeed, driver) {
  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.drive = function(speed, time) {
    console.log(speed*time);
  },
  this.logDriver = function() {
    console.log("driver name is " + this.driver);
  };
}

var myCar = new Car(70, "Shaun");
var myCar2 = new Car(60, "Jose");

myCar.drive(30, 5);
mycar2.logDriver();

var myDate = new Date();
console.log(myDate);