// Naming Standards:  Camel, Snake, Kebab, Pascal case
// Camel case 
/*  const yourName = "Martin";
function isPerson () {
  return true;
}
//  Snake case 
const your_name = "David";
function is_person () {
  return true;
}
//  Kebab case: your-name.ts asosan file larni nomlashda iwlatamiz

//   Pascal case: class => PersonGroup Classlarda ishlatiladi camel case ga oxshash 

/* const person1 = {
  name: "Martin",
  age: 33
}
const person2 = {
  name: "David",
  age: 30
} */

// State
class  Person {
    static serialNumber = 65;
    
  // Constructor
    constructor(name, age) {
       this.name = name;
      this.age = name;
    }
  //   Method 
      
    introduce() {
      console.log(`My name is ${this.name} i am ${this.age}`);
    }
    greet() {
      console.log(`hi how do you do!`);
    }
    
    static help() {  // Static Method 
      console.log('Hi i am Person class , how can i help you?');
    }
  }
  const person1 = new Person ('Martin',33);
  const person2 = new Person ('David',45);
  
  const person3 = new Person ('Albert',23);
  
  
  
  
  person1.greet();
  person1.introduce();
   
  person2.greet();
  person2.introduce();
  
  person3.greet();
  person3.introduce();
  
   Person.help(); //static method <=> class
  console.log("name", person1.name);  // Property objectdan caqirib olayabmiz
  const number1 = Person.serialNumber;
  console.log("number1", number1);   //Static property  