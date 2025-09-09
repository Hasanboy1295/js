// JAvascriptning 1 muhiti brauzerdagi ishlashi
//  malum bir manzilni nomlanishi
// Browser, Server (Node.js), Mobile/Desktop
// agar letni oldiga CONSTni qoyganimizda xato bolar edi chunki qiymati 1 martta beriladi agar qiymat 1 martta berilsa CONST  kop martta uchun LET dan foydalanamiz
let a = 12;
console.log("a value:", a);
let b = 32;
console.log("b value:", b);
a = 20;
console.log("a ", a);
a = 566;
console.log("a ", a);

let c = 34;
console.log("c", c);

//  FUNCTION
// Fujnction 2 qisimga bolinadi 1. define(qurib olish) 2. call (ishlatish jarayoni.)
// define
function greeting() {
  console.log("Hello World !");
}
// call
greeting();

// Function criteria: Structure & Returning & Execution
//  Structure: Regular & Expression & Auto invoke functions
// Regular function
function greeting() {
  console.log("Hello World Regular");
}
greeting();
//  Anonim (Expression )Function
const abc = function () {
  console.log("hello world Anonymous");
};
abc();
// Arrow functionconst
const xyz = () => {
  console.log("i bougnht new monitor Arrow");
};
xyz();

abc();
xyz();
greeting();
// Auto invoke function
(function () {
  console.log("hello world from Auto invoke");
})();

//     Returning function  bular qiymat qaytaradi
function calculate() {
  const a = 23;
  const b = 30;

  return a + b;
}
const result = calculate();
console.log("result:", result);

// void function  bu hich qacon qiymat qaytarmaydi
function calculateVoid() {
  const a = 20;
  const b = 566;
  console.log("result:", a + b);
}
calculateVoid();

// Execution: Asynchrouns & Synchrouns function
// tepadda foydalanilgan barchasi SYNCHROUNS BOLADI
// Kelajakda ASYNCHROUNS dan foydalanishimiz mumkin

// Define
function calculate() {
  const a = 222;
  const b = 44;
  return a + b;
}
//  CALL (Argument)
const resulT = calculate();
console.log("result", resulT);

// Function Priority (scope)
// const a = 50
function calculate(a, b) {
  a = 50;
  return a + b;
}
const resuLT = calculate(10, 20);
console.log("result:", result);
