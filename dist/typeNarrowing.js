// type narrowing
// union type input: string | number
// toUpperCase() string method
// typeof keyword
function process(input) {
    // type input string
    if (typeof input === 'string') {
        console.log(input.toUpperCase());
    }
    else {
        // type input number
        console.log(input.toFixed(2));
    }
}
process('jhkvk');
function makesound(animal) {
    if ('meow' in animal) {
        animal.meow(); // typecript understand cat
    }
    else {
        animal.bark(); // typescript understand now its dog
    }
}
const kitty = {
    meow() {
        console.log('meow');
    },
};
makesound(kitty);
export {};
//# sourceMappingURL=typeNarrowing.js.map