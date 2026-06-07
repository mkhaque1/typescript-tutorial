// type narrowing

// union type input: string | number

// toUpperCase() string method

// typeof keyword

function process(input: string | number) {
  // type input string
  if (typeof input === 'string') {
    console.log(input.toUpperCase());
  } else {
    // type input number
    console.log(input.toFixed(2));
  }
}

process('jhkvk');

// In operation

interface Cat {
  meow(): void; // unique property
}

interface Dog {
  bark(): void;
}

function makesound(animal: Cat | Dog) {
  if ('meow' in animal) {
    animal.meow(); // typecript understand cat
  } else {
    animal.bark(); // typescript understand now its dog
  }
}

const kitty: Cat = {
  meow() {
    console.log('meow');
  },
};

makesound(kitty);
