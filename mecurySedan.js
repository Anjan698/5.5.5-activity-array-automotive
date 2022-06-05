//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").Vehicle

class Car extends VehicleModule {
    constructor(make,model,year,color,mileage){
        super(make,model,year,color,milage);
        this.maxPassengers =5;
        this.passenger = 0;
        this.maximumSpeed = 160;
        this.numberOfWheels=4;
        this.fuel = 10;
        this.scheduleService = false;
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
 checkService(){
     if(this.milage > 30000){
         this.scheduleService=true
         return this.scheduleService;
     }
 }
 StaticRange()
     if(this.fuel >0){
         console.log("Engine has started.");
     }
     else {
         console.log("No Fuel!");
         return this.started = false;
     }
     
     loadPassenger(num){
         if(this.passenger < this.maxPassengers){
             this.passenger=num;
             return this.passenger;
         }
         else {
             console.log(this.model + "" + this.make + " not have enoguh space to take all passenger." );
         }
        }
       
    console.log(this.model + "" + this.make + " is full");
let myCar = new car ('Mercury', 'rad_Sedan', '2002', 'White', 50000);
     