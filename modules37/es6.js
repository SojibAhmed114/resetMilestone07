// const numbers= [14,58,98,7,48,589,74];
// const students = {
//   names: 'sojib ahemd',
//   classes: 12
// };
// const info =`my name is ${students.names} . class roll ${numbers[3]}`;
// console.log(info);


// array methods 

const student = [
  {userName: 'sabina', age:23, mobileName: 'samsung'},
  {userName: 'sabiha', age:12, mobileName: 'iphone'},
  {userName: 'sojib', age:18, mobileName: 'redmi'},
  {userName: 'sabina', age:23, mobileName: 'samsung'}
];

const mobileName = student.map((stu) => stu.mobileName);
// console.log(mobileName);


// const products = [
//   {brandName: 'apple', price:145478, location: 'dhaka'},
//   {brandName: 'redmi', price:54876, location: 'pabna'},
//   {brandName: 'lenevo', price:98751, location: 'dhaka'},
// ];
// products.forEach(product => console.log(product));

// const filterName = products.filter(product => product.brandName.includes('d'));
// console.log(filterName);

//remove Item
const products = [
  {brandName: 'apple', price:145478, location: 'dhaka'},
  {brandName: 'redmi', price:54876, location: 'pabna'},
  {brandName: 'lenevo', price:98751, location: 'dhaka'},
];
const newArray = products.filter(p=> p.brandName !== 'apple')
console.log(newArray);

/* output
[
  {brandName: 'redmi', price:54876, location: 'pabna'},
  {brandName: 'lenevo', price:98751, location: 'dhaka'},
];
*/

//destructure methods
const obj ={
  price: 1457,
  bookItem: ['bangla','english', 'math'],
  totalItem: 3
};
const {price, bookItem, totalItem} =obj;
console.log(price); 


//Logical Operators
let isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

// leftSide && rightSide => if the leftSide is true  the rightSide will be executed.
isActive && showUser();
// leftSide && rightSide => if the leftSide is false then rightSide will be executed
isActive || hideUser()