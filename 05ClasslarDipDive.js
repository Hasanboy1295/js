class Account {
//   state
  #owner;   //private 
  #amount;
  currency;
//   Constructor 
   constructor(owner, amount, currency = 'usd') {
    this.#owner = owner;
    this.#amount = amount;
    this.currency = currency;
   }
//   method
   checkBalance() {
     console.log(`hi ${this.#owner}, your balance: ${this.#amount} ${this.currency} `);
     this.#test();
  }
    deposit(money) {
      this.#amount += money;
      
    }
  #test() {
    console.log('This is only obtainable inside class'); 
  }
}
// Encapsulation: public, private, protected
// Java:public, private, protected
// PHP: public, private, protected
// Phaython: , __, _
// JavaScript:  , #, _



const myAccount = new Account('David', 1000);
myAccount.checkBalance();

console.log("==========");

myAccount.deposit(7000);
myAccount.checkBalance();

myAccount.deposit(15000);
myAccount.checkBalance();

console.log("=====2 =====");
myAccount.owner = 'Martin'
console.log(myAccount.currency);
console.log(myAccount.owner);
myAccount.checkBalance();

console.log("======3===");
myAccount.owner = 'Albert'
myAccount.checkBalance(); 
  
// Inheritance
// Parent class
class Car {
 constructor(brand, model){
   this.brand = brand;
   this.model = model;
 }    
getDetails() {
 console.log(`${this.brand} ${this.model}`);
}
start(){
  console.log('start engine');
}
 stop(){
  console.log('stop engine');
 }
  maximizeSpeed() {
    console.log('Maximal speed is not provided');
  }
  
}

// Child class
class  Toyota extends Car {
  #fuel = 0;
  constructor(model, category, speed) {
    super('Toyota', model);
    this.category = category;
    this.speed = speed ;
  }
  
  fillUpGasoline(a) {
    this.#fuel += a;
  }
  maximizeSpeed(){
    console.log(`${this.model} ${this.speed} km/h`)
  }
}

class Tesla extends Car {
  #battery = 0;
  constructor(model, category, speed){
    super('Tesla', 'Model S', 330)
    this.category = category;
    this.speed = speed;
  }
  
 chargePower(b) {
    this.#battery += b;
  }
  maximizeSpeed(){
    console.log(`${this.model} ${this.speed} km/h`)
  }
 
}
const myCar = new Toyota('Camry', 'sedan', 220);
myCar.getDetails();
myCar.start();
myCar.stop ();
// myCar.fillUpGasoline(20);



// Child class
console.log("=========")
const yourCar = new Tesla('Model S','sedan', 330); 
yourCar.start();
yourCar.stop ();
yourCar.chargePower(50 );
yourCar.getDetails(); 
yourCar.getDetails();
// Polymorphism
yourCar.maximizeSpeed(); 
myCar.maximizeSpeed();