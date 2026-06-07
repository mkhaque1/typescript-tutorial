// object

// user object , product object , order object

let user: { name: string; age: number } = {
  name: 'rahim',
  age: 25,
};

// interface

interface User {
  name: string;
  age: number;
  email?: string; // optional type
}

let user1: User = { name: 'Rakim', age: 25 };

let user2: User = { name: 'Rakim', age: 25, email: 'test@gmail.com' };

// interface extend :

interface Admin extends User {
  // extends keyword
  role: string;
  permission: string[];
}

const admin: Admin = {
  name: 'MK',
  age: 30,
  role: 'developer',
  permission: ['read', 'write'],
};

// type alias

type Product = {
  name: string;
  price: number;
};

// union type
// tpye ID = string | number;

// is object alawys use interface, Union or complex type - type alias
