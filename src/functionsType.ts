// functions & Type safety

function greet(name: string): string {
  return ` hello ${name} !`;
}
// Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(greet(25));
console.log(greet('MK'));

// when nothing return use :void

function logMessage(msg: string): void {
  console.log(msg);
}

// optional parameter

function introduce(name: string, age?: number): string {
  // ? OPTIONAL
  if (age) {
    return `${name} , age is ${age}`;
  }
  return name;
}

console.log(introduce('Khairul'));

// default value

function createUser(name: string, role: string = 'developer') {
  return `${name} , role is ${role}`;
}

console.log(createUser('Karim'));

// arrow function

const add = (a: number, b: number): number => a + b;

const multiply = (a: number, b: number): number => {
  return a * b;
};

console.log(multiply(5, 10));
