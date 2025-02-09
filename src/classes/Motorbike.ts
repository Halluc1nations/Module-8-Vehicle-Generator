// TODO: The Motorbike class should extend the Vehicle class
// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Motorbike class extending Vehicle
class Motorbike extends Vehicle {
  // Constructor
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
  ) {
    // Call parent constructor
    super(vin, color, make, model, year, weight, topSpeed, wheels);

    // Ensure the motorbike has exactly 2 wheels
    if (this.wheels.length !== 2) {
      this.wheels = [new Wheel(17, 'Default'), new Wheel(17, 'Default')];
    }
  }

  // Implement the wheelie method
  wheelie() {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Override printDetails method from Vehicle class
  override printDetails() {
    // Call parent method
    super.printDetails();

    // Log Motorbike-specific details
    console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.size}-inch ${wheel.brand}`).join(', ')}`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;

  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])

  // TODO: Create a constructor that accepts the properties of the Motorbike class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not

  // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"

  // TODO: Override the printDetails method from the Vehicle class
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels


