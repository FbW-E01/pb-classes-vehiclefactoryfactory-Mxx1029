function factoryFactory(type) {
    // very short which just gives Factory as Class (?), hint by Joel
    return function Factory(make, model) {
        this.type = type;
        this.make = make;
        this.model = model;
    };

    // very long version which creates different Class (names)    
    // if (type === "bicycle") {
    //     return function Bike (make, model) {
    //         this.type = type;
    //         this.make = make;
    //         this.model = model;
            
    //     };
    // } else if (type === "car") {
    //     return function Car (make, model) {
    //         this.type = type;
    //         this.make = make;
    //         this.model = model;
            
    //     };
    // } else if (type === "boat") {
    //     return function Boat (make, model) {
    //         this.type = type;
    //         this.make = make;
    //         this.model = model;
            
    //     };
    // } else if (type === "blimp") {
    //     return function Blimp (make, model) {
    //         this.type = type;
    //         this.make = make;
    //         this.model = model;
            
    //     };
    // } else if (type === "train") {
    //     return function Train (make, model) {
    //         this.type = type;
    //         this.make = make;
    //         this.model = model;
            
    //     };
    // } else {
    //     return `Not a valid type. Choose one out of "bicycle", "car", "boat", "blimp" and "train".`
    // };

    
};


// following 2 lines where a hint by Joel, without them I would have never had an idea even
const Bike = factoryFactory("bicycle");
const myBike1 = new Bike("Cannondale", "Cujo");
// console.log(myBike1);

const Car = factoryFactory("car");
const Boat = factoryFactory("boat");
const Blimp = factoryFactory("blimp");
const Train = factoryFactory("train");

const arrayOfVehicles = [];

const myCar1 = new Car("Toyota", "Prius");
const myBoat1 = new Boat("Costa", "Concordia");
const myBlimp1 = new Blimp("BlinkyDinky", "2");
const myTrain1 = new Train("Orient", "Express");

arrayOfVehicles.push(myBike1, myCar1, myBoat1, myBlimp1, myTrain1);

arrayOfVehicles.forEach(vehicle => console.log(vehicle));
console.log(typeof factoryFactory);
console.log(typeof Factory);
console.log(typeof Bike);
console.log(typeof myBike1);
// factories are functions
// the created objects are objects, as can be seen above