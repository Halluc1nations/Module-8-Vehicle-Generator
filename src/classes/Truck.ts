// Import necessary classes and interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// Truck class extending Vehicle and implementing AbleToTow
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    this.towingCapacity = towingCapacity;

    // Ensure the truck has exactly 4 wheels
    if (this.wheels.length !== 4) {
      this.wheels = [
        new Wheel(20, 'Default'),
        new Wheel(20, 'Default'),
        new Wheel(20, 'Default'),
        new Wheel(20, 'Default')
      ];
    }
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    const { make, model, weight } = vehicle;

    if (weight <= this.towingCapacity) {
      console.log(`Towing ${make} ${model}...`);
    } else {
      console.log(`${make} ${model} is too heavy to be towed!`);
    }
  }

  // Override printDetails method from Vehicle class
 override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.getDiameter}-inch ${wheel.getTireBrand}`).join(', ')}`);
  }
}

// Export the Truck class as the default export
export default Truck;
