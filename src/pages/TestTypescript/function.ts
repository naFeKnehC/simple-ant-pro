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

// function reverse(str: string): string;
// function reverse(arr: any[]): any[];
// function reverse(stringOrArray: string | any[]): string | any[] {
//   if (typeof stringOrArray === 'string') return stringOrArray.split('').reverse().join('');
//   else return stringOrArray.slice().reverse();
// }
//
// reverse([1, 2, 3]);

/**
 * 函数重载在 TypeScript 中主要是针对入参（参数类型）进行严格的类型校验。而对于出参（返回类型），TypeScript 只要求最终函数实现的返回类型和所有重载签名的返回类型兼容，但不会对每个重载签名的返回类型进行逐一强制验证。
 *
 * 具体说明：
 *
 *  1.	入参的校验
 *  •	TypeScript 在函数重载时，确保传入的参数类型必须匹配某个重载签名。例如，如果你有 f('a') 和 f('b') 两个不同的签名，那么调用 f('c') 就会触发编译错误，因为没有一个签名可以接受 'c' 作为参数。
 *  2.	出参的宽松处理
 *  •	当 TypeScript 检查函数实现时，它只会确保返回类型与函数实现的类型声明相兼容。对于重载签名的返回类型，TypeScript 不会逐个对照检查，只会验证返回的类型是否符合实现部分声明的返回类型。
 *  •	举个例子，在函数实现中声明返回类型为 number | string，那么不管哪个重载声明了什么返回类型，只要返回的类型是 number 或 string，TypeScript 就不会报错，哪怕重载声明中有些签名要求返回 string 而你实际返回了 number。
 */
// function f(x: 'a'): 1;
// function f(x: 'b'): string;
// function f(x: 2): number;
// function f(x: string): number;
// function f(x: string | number): string | number {
//   if (x === 'a') {
//     return 1;
//   } else if (x === 'b') {
//     return 2; // 虽然签名要求返回 string, 实际返回 number
//   } else if (x === 2) {
//     return 3;
//   } else {
//     return 4;
//   }
// }
//
// f(3); // 报错
// f('c');

/**
 * 对象表示
 */
// type createF = {
//   (x: 'a'): 1;
//   (x: 'b'): string;
//   (x: 2): number;
//   (x: string): number;
// };
//
// const f: createF = (x: 'a' | 'b' | 2 | string): any => {
//   if (x === 'a') {
//     return 1; // 符合重载签名，返回 1
//   } else if (x === 'b') {
//     return 'some string'; // 符合重载签名，返回 string
//   } else if (x === 2) {
//     return 3; // 符合重载签名，返回 number
//   } else {
//     return 4; // 符合重载签名，返回 number
//   }
// };
