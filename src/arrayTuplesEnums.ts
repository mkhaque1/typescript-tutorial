// array types

let names: string[] = ['ggdgd', 'rahim', 'karim']; // array string types
let numbers: number[] = [1, 3, 5, 6, 7]; // array number types

// alternative syntax of array

let ids: Array<number> = [1, 2, 3];
let strings: Array<string> = ['rahim', 'kamal'];

// ids = ['rahim'] wrong array example

// tuples type

let person: [string, number] = ['rahim', 25]; // tuples type

// wrong example tuple type let tuples: [number, string] = ['rahim', 25];

// example basic usage : function [data, error] return

// Enums types

enum UserStatus {
  active,
  pending,
  inactive,
}

let status: UserStatus = UserStatus.active;

console.log(status);

// string return from enums

enum Direction {
  Up = 'up',
  Down = 'down',
}

let getDirection: Direction = Direction.Down;
console.log(getDirection);
