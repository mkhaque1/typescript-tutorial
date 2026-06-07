let name: string = 'karim'; // type annotation
let number: number = 25; // type annotation
let isActive: boolean = true;

// let city: string = 25; // Type 'number' is not assignable to type 'string'. // wrong example

let city = 'Dhaka'; // Type Inference
let score = 20; // Type Inference

// any type

let data: any = 'hello'; // avoid any

data = 42;
data = true;

// union type

let userId: string | number = 'user-01';
userId = 42;

// null and undefined (be carefull)

let email: string | null = null;
email = 'test@gmail.com';

// null related crush web apps e most common
