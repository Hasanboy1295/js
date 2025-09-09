// const list = [1, 4, 5, 2, 4, 7, 9];
// const fruits = ['apple', 'banana', 'peach'];
// console.log("fruits:", fruits);

// //Value apple, banana, peach.
// //Index: 0, 1, 2, 3

// const fruit = fruits[0];
// console.log('fruit:', fruits);

/*
// Property
// Method: Regular Methods;
push(), pop(), unshift(), shift(), <= Mutable object objectni ozgartirib beradi ozgartirishga majbur qiladi;
sort(), reverce(), {includes(), indexOf(),} shu kkalasi imutable hisoblanadi. 
toString(), join(), 
slice(), splice(), concat():
*/

// Mutable=>push(), pop(), unshift(), shift(), sort(), reverce(), splice(),

//Immutable=>includes(), indexOf(), toString(), join(), slice(), concat():
/*
push(oxirgi listga qoshib beradi),
unshift(Boshiga qoshib beradi),
 pop( oxiridagi qirqib aloxida qilib korsatib beradi va ozini arraydan qiriqb oladi),
 shift( 0 boshidagini qirqib aloxida qilib korsatib beradi va ozini arraydan qiriqb oladi),
 console.log("=============")
 sort(sonlarni sort qilib beradi  1 2 3 4 ... xattoki textlarni ham sort qilish mumkin),
 reverce( malumotni teskari korinishda qilib beradi), cherry apple: apple cherry. 
 includes( malum bir qiymat bor yoqligini aniqlashtiradi),
 indexOf(agar malumot bolsa index raqamini qaytarib beradi 0 dan boshlab  bolmasa -1 ni qaytaradi.),
 console.log("=============")
 toString( qaysi typeda ekanligini korsatadi masalan:String;) ikkisida ham return bolayatgan qiymat string korinishida boladi
 join( deyarli string bn bir hil lekin qoshimcha shartlar berishimiz mumkin), 
 console.log("=============")
 splice(),
  concat(1ci arrayga 2 ci arrayni qoshib berdi lekin list 1 ni tekshirsak immutable qoladi):
*/
/*
 const list = ['apple', 'banana', 'cherry'];

console.log("before list:", list);
list[0] = 'melon';   

console.log("list:", list);

list[3] = "lemon",
  console.log("list:", list);
  */

  const lis = ["apple", "banana", "cherry"];

  // Property length
  const size = lis.length;
  // console.log('size', size); array orqali sizeni topishimiz mumkin
  console.log('size', size);
  
  // const list = ["apple", "banana", "cherry"];
  // list[list.leangth] = 'lemon';
  // console.log('list', list);
  const list = ["apple", "banana", "cherry"];
  
  console.log("before list:", list);
  list.push('lemon');
  console.log("after list:", list);
  
  list.unshift('melon');
  console.log("after list", list);
  
  const list = ["apple", "banana", "cherry"];
  const fruit = list.pop();
  console.log("after list:", list);
  
  const list = ["apple", "banana", "cherry"];
  const fruit = list.shift();
  console.log("after list:", list);
  
  
  const list2 = [5, 6, 7, 4, 6 ];
  
  console.log("before list2:", list2);
  list2.sort();
  // list2.reverse();
  console.log("after list2:", list2);
  
  
  const result = list.includes('cherry');
  // const result = list.indexOf('cherry');
  console.log("result:", result);
  
  
  const result= list.toString();
  console.log("result:", result);
  console.log(typeof result);

  const result2 = list.join("+"); // agar hich nima qoymasak to string kabi ishlayveradiekan
  console.log("result:", result2);
  console.log(typeOf result2);
  
  const newList = list.slice(0,2); //[0, 2]
  console.log("newList:", newList);
  
  list.splice(1, 1, 'lemon '); // appleni ochirib beradi, banana  va cherry ni saqlab beradi va agar istasak lemonni appleni orniga qoyadi
  console.log("list:", list);
  
  const list2 = [1, 3, 11];
  const newList = list.contact(list2);
  console.log(newList);
  console.log(list);
  
  
  
  
  