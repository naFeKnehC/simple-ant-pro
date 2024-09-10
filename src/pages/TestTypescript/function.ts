// function hello(txt: string): void {
//   console.log("hello " + txt);
// }

// // 写法一
// const hello = function (txt: string) {
//   console.log("hello " + txt);
// };
//
// // 写法二
// const hello: (txt: string) => void = function (txt) {
//   console.log("hello " + txt);
// };

// type MyFunc = (txt: string) => string;
//
// // error Type number is not assignable to type string
// const hello: MyFunc = () => {
//   return 1;
// };

// function add(x: number, y: number) {
//   return x + y;
// }
//
// const myAdd: typeof add = function (x, y) {
//   return x + y;
// };

// let add: {
//   (x: number, y: number): number;
// };
//
// add = function (x, y) {
//   return x + y;
// };

// function f(x: number) {
//   console.log(x);
// }
//
// f.version = '1.0';

// function f(x: number) {
//   console.log(x);
// }
//
// f.version = '1.0';
//
// let foo: {
//   (x: number): void;
//   version: string;
// } = f;
//
// foo(1);

// interface myfn {
//   (a: number, b: number): number;
// }
//
// var add: myfn = (a, b) => a + b;

// type Person = { name: string };
//
// const people = ['alice', 'bob', 'jan'].map((name): Person => ({ name }));

// function createPoint(x: number = 1, y: number = 0): [number, number] {
//   return [x, y];
// }
//
// createPoint(); // [0, 0]

// // 报错
// function f(x?: number = 0) {
//   // ...
// }

// function f(x = 456) {
//   console.log(x);
// }
//
// f(undefined); // 456
// f(null); // null Argument of type null is not assignable to parameter of type number | undefined

// rest 参数为数组
// function joinNumbers(...nums: number[]) {
//   let a = nums[1];
// }
//
// // rest 参数为元组
// function f(...args: [boolean, ...number[]]) {
//   let a = args[1];
//   let b = args[0];
// }

// type ABC = { a: number; b: number; c: number };
//
// function sum({ a, ...rest }: ABC) {
//   let a1 = a;
//   let c = rest;
// }

// function neverReturns(): never {
//   throw new Error();
// }
//
// function f(x: string | undefined) {
//   if (x === undefined) {
//     neverReturns();
//   }
//
//   x; // 推断为 string
// }
