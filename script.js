'use strict';

const vehicle = {
  type: 'Vehicle',
  speed: 0,
  maxSpeed: 50,
  accelerate() {
    if (this.speed + 10 <= this.maxSpeed) {
      this.speed += 10;
    } else {
      console.log('max speed');
    }
  },
  brake() {
    if (this.speed >= 10) {
      this.speed -= 10;
    } else if (this.speed > 0) {
      this.speed = 0;
    }
  },
  info() {
    const { type, speed, maxSpeed } = this;
    return `${type}: right now speed ${speed}/${maxSpeed}`;
  }
};

// Car object
const car = Object.create(vehicle);
car.fuelLevel = 100;
car.refuel = function() {
  if (this.fuelLevel < 100) {
    this.fuelLevel += 50;
    if (this.fuelLevel > 100) this.fuelLevel = 100;
  } else {
    console.log('max');
  }
};
car.accelerate = function() {
  this.fuelLevel -= 5;
  this.speed += 10;
  if (this.speed > this.maxSpeed) {
    this.speed = this.maxSpeed;
  }
};

// Create objects
const bike = Object.create(vehicle);
const myCar = Object.create(car);
const truck = Object.create(vehicle);

// Control
bike.accelerate();
bike.accelerate();
console.log(bike.info());

myCar.accelerate();
myCar.accelerate();
console.log(myCar.info());
console.log("Топливо:", myCar.fuelLevel);

myCar.refuel();
console.log("Топливо после заправки:", myCar.fuelLevel);

truck.brake();
truck.brake();
console.log(truck.info());