/* Programming Paradigms: Functional programming & OOP 
OOP BIG 4 Concepts: Abstraction & Encapsulation & Inheritance & Polymorphism
Obyektlarga Moslashtirilgan Dasturlash Paradigmasi */
// Object built via literal method 
// property
const person = {
   name: "David ",
   age: 56,
   nationality: "Australian",
   //   method
   greet() {
    console.log("hi how are you");
   },
    introduce() {
   console.log(` my name is ${this.name } and i am ${this.age} years old`)
  }
 };

// key: name, age, nationality
// value: "David", 23, "Australian"

const a = person.name;
console.log("a", a );
const b = person.nationality;
console.log("b", b );
person.greet();
person.introduce();
// ==================
const pressButton = document.getElementById("butt");

console.log("pressButton", pressButton);
  pressButton.addEventListener('click', function() {
  alert('You Pressed the button!');
});   
  
// Primitive Verable vs Object Verable 
// Primitive 
const A = "Davi"; //String 
const B = 30;  // Number 
const C = true;   //Boolean
 const D = null; // Null ....

/* let x = a ;
x = "ali";
console.log( "a", a ); */
//Object 
const Person = {
  name: "Robertee",
  age:32 
}
console.log("person's name:", Person.name);
const person2 = Person;
person2.name = "Frio";
console.log("person1's name:", person2.name);
console.log("Person's name:", Person.name);
// bitta referecega qaratilgan objectni bowqa objectga tenglasak uni yaratgan emas yangilagan bolamiz
Person.name =" hener";
console.log("person1's name:", person2.name);
console.log("Person's name:", Person.name);
// ==========
// spread operator
const person3= {...Person};
person3.name = "Daving";
console.log("person's name", Person.name);
console.log("person's name", person2.name);


// Object build via constructor

const obj = new Object();
obj.name = "Danser";
obj.age = 23;
obj.hobby = "football";
console.log(`My name is ${obj.name} , i am ${obj.age} and i love ${obj.hobby}`); 


const keys  = Object.keys(obj);
console.log(keys);

console.log("========")
const values = Object.values(obj);
console.log(values);



