// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
// define the Cli class
class Cli {
    // TODO: Update the constructor to accept Truck and Motorbike objects as well
    constructor(vehicles) {
        this.exit = false;
        this.vehicles = vehicles;
    }
    // static method to generate a vin
    static generateVin() {
        // return a random string
        return (Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15));
    }
    // method to choose a vehicle from existing vehicles
    chooseVehicle() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'selectedVehicleVin',
                message: 'Select a vehicle to perform an action on',
                choices: this.vehicles.map((vehicle) => {
                    return {
                        name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                        value: vehicle.vin,
                    };
                }),
            },
        ])
            .then((answers) => {
            // set the selectedVehicleVin to the vin of the selected vehicle
            this.selectedVehicleVin = answers.selectedVehicleVin;
            // perform actions on the selected vehicle
            this.performActions();
        });
    }
    // method to create a vehicle
    createVehicle() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'vehicleType',
                message: 'Select a vehicle type',
                // TODO: Update the choices array to include Truck and Motorbike
                choices: ['Car', 'Truck', 'Motorbike'],
            },
        ])
            .then((answers) => {
            if (answers.vehicleType === 'Car') {
                // create a car
                this.createCar();
            }
            else if (answers.vehicleType === 'Truck') {
                // create a truck
                this.createTruck();
            }
            else {
                // create a motorbike
                this.createMotorbike();
            }
            // TODO: add statements to create a truck or motorbike if the user selects the respective vehicle type
        });
    }
    // method to create a car
    createCar() {
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
        ])
            .then((answers) => {
            const car = new Car(
            // TODO: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!
            Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), []);
            // push the car to the vehicles array
            this.vehicles.push(car);
            // set the selectedVehicleVin to the vin of the car
            this.selectedVehicleVin = car.vin;
            // perform actions on the car
            this.performActions();
        });
    }
    // method to create a truck
    createTruck() {
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
            {
                type: 'input',
                name: 'towingCapacity',
                message: 'Enter Towing Capacity',
            },
        ])
            .then((answers) => {
            // TODO: Use the answers object to pass the required properties to the Truck constructor
            // TODO: push the truck to the vehicles array
            // TODO: set the selectedVehicleVin to the vin of the truck
            // TODO: perform actions on the truck 
            const truck = new Truck(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), [], answers.towingCapacity);
            // push the truck to the vehicles array
            this.vehicles.push(truck);
            // set the selectedVehicleVin to the vin of the Truck
            this.selectedVehicleVin = truck.vin;
            // perform actions on the truck
            this.performActions();
        });
    }
    // method to create a motorbike
    createMotorbike() {
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
            {
                type: 'input',
                name: 'frontWheelDiameter',
                message: 'Enter Front Wheel Diameter',
            },
            {
                type: 'input',
                name: 'frontWheelBrand',
                message: 'Enter Front Wheel Brand',
            },
            {
                type: 'input',
                name: 'rearWheelDiameter',
                message: 'Enter Rear Wheel Diameter',
            },
            {
                type: 'input',
                name: 'rearWheelBrand',
                message: 'Enter Rear Wheel Brand',
            },
        ])
            .then((answers) => {
            // TODO: Use the answers object to pass the required properties to the Motorbike constructor
            // TODO: push the motorbike to the vehicles array
            // TODO: set the selectedVehicleVin to the vin of the motorbike
            // TODO: perform actions on the motorbike
            const motorbike = new Motorbike(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), []);
            // push the truck to the vehicles array
            this.vehicles.push(motorbike);
            // set the selectedVehicleVin to the vin of the Truck
            this.selectedVehicleVin = motorbike.vin;
            // perform actions on the truck
            this.performActions();
        });
    }
    // method to find a vehicle to tow
    // TODO: add a parameter to accept a truck object
    findVehicleToTow(truck) {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'vehicleToTow',
                message: 'Select a vehicle to tow',
                choices: this.vehicles.map((vehicle) => {
                    return {
                        name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                        value: vehicle,
                    };
                }),
            },
        ])
            .then((answers) => {
            // check if the selected vehicle is the same as the truck
            if (answers.vehicleToTow === truck.vin) {
                console.log('Truck cannot tow itself');
                this.performActions();
            }
            else {
                truck.tow(answers.vehicleToTow);
                this.performActions();
            }
        });
    }
    // method to perform actions on a vehicle
    performActions() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Select an action',
                // TODO: add options to tow and wheelie
                choices: [
                    'Print details',
                    'Start vehicle',
                    'Accelerate 5 MPH',
                    'Decelerate 5 MPH',
                    'Stop vehicle',
                    'Turn right',
                    'Turn left',
                    'Reverse',
                    'Tow',
                    'Wheelie',
                    'Select or create another vehicle',
                    'Exit',
                ],
            },
        ])
            .then((answers) => {
            // perform the selected action
            if (answers.action === 'Print details') {
                // find the selected vehicle and print its details
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].printDetails();
                    }
                }
            }
            else if (answers.action === 'Start vehicle') {
                // find the selected vehicle and start it
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].start();
                    }
                }
            }
            else if (answers.action === 'Accelerate 5 MPH') {
                // find the selected vehicle and accelerate it by 5 MPH
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].accelerate(5);
                    }
                }
            }
            else if (answers.action === 'Decelerate 5 MPH') {
                // find the selected vehicle and decelerate it by 5 MPH
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].decelerate(5);
                    }
                }
            }
            else if (answers.action === 'Stop vehicle') {
                // find the selected vehicle and stop it
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].stop();
                    }
                }
            }
            else if (answers.action === 'Turn right') {
                // find the selected vehicle and turn it right
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].turn('right');
                    }
                }
            }
            else if (answers.action === 'Turn left') {
                // find the selected vehicle and turn it left
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].turn('left');
                    }
                }
            }
            else if (answers.action === 'Reverse') {
                // find the selected vehicle and reverse it
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        this.vehicles[i].reverse();
                    }
                }
            }
            else if (answers.action === 'Tow') {
                // find the selected vehicle and tow another vehicle
                let truck;
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        truck = this.vehicles[i];
                    }
                }
                if (truck) {
                    this.findVehicleToTow(truck);
                    return;
                }
                else {
                    console.log('Vehicle is not a truck');
                }
            }
            else if (answers.action === 'Wheelie') {
                let motorbike;
                for (let i = 0; i < this.vehicles.length; i++) {
                    if (this.vehicles[i].vin === this.selectedVehicleVin) {
                        motorbike = this.vehicles[i];
                    }
                }
                if (motorbike) {
                    motorbike.wheelie();
                }
                else {
                    console.log('Vehicle is not a motorbike');
                }
            }
            else if (answers.action === 'Select or create another vehicle') {
                // start the cli to return to the initial prompt if the user wants to select or create another vehicle
                this.startCli();
                return;
            }
            else {
                // exit the cli if the user selects exit
                this.exit = true;
            }
            if (!this.exit) {
                // if the user does not want to exit, perform actions on the selected vehicle
                this.performActions();
            }
        });
    }
    // method to start the cli
    startCli() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'CreateOrSelect',
                message: 'Would you like to create a new vehicle or perform an action on an existing vehicle?',
                choices: ['Create a new vehicle', 'Select an existing vehicle'],
            },
        ])
            .then((answers) => {
            // check if the user wants to create a new vehicle or select an existing vehicle
            if (answers.CreateOrSelect === 'Create a new vehicle') {
                this.createVehicle();
            }
            else {
                this.chooseVehicle();
            }
        });
    }
}
// export the Cli class
export default Cli;
