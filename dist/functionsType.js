// functions & Type safety
function greet(name) {
    return ` hello ${name} !`;
}
// Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(greet(25));
console.log(greet('MK'));
// when nothing return use :void
function logMessage(msg) {
    console.log(msg);
}
// optional parameter
function introduce(name, age) {
    // ? OPTIONAL
    if (age) {
        return `${name} , age is ${age}`;
    }
    return name;
}
console.log(introduce('Khairul'));
// default value
function createUser(name, role = 'developer') {
    return `${name} , role is ${role}`;
}
console.log(createUser('Karim'));
// arrow function
const add = (a, b) => a + b;
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(5, 10));
export {};
//# sourceMappingURL=functionsType.js.map