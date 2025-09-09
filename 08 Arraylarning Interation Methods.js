//  for Each, map, filter

const list = [1, 4, 5, 3, 7, 8];

const newList = list.map((ele, index) => {
  return ele === 4 ? ele : null;
});
console.log("newList:", newList);

console.log("========");

const newList2 = list.filter((ele, index) => {
  return ele !== 4 ? ele : null;
});
console.log("newList2:", newList2);
console.log("list:", list);

// reduce, some, every
const numbers = [2, 4, 5, 3, 8];

/* 
 const result = numbers.reduce((total, curValue, curIndex) =>{
  console.log(`${curIndex} ${curValue}`);
  return total + curValue;
}, 0);
console.log("result:", result);         */

console.log("-------------");

// numbers.some((ele, index) => {
//   console.log(`${index}: ${ele}`);
//   return ele === 5
// });
const result = numbers./*some*/ every((ele, index) => {
  console.log(`${index}: ${ele}`);
  return ele === 4;
});

console.log("result:", result);
