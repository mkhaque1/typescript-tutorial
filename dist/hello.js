"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = 'karim'; // type annotation
let number = 25; // type annotation
let isActive = true;
// let city: string = 25; // Type 'number' is not assignable to type 'string'. // wrong example
let city = 'Dhaka'; // Type Inference
let score = 20; // Type Inference
// any type
let data = 'hello'; // avoid any
data = 42;
data = true;
// union type
let userId = 'user-01';
userId = 42;
// null and undefined (be carefull)
let email = null;
email = 'test@gmail.com';
// null related crush web apps e most common
//# sourceMappingURL=hello.js.map