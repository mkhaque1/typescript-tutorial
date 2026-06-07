// class

class Product {
  // same like javascript but only type used in property
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getInfo(): string {
    return `${this.name}: ${this.price} BDT`;
  }
}

const p = new Product('samsung', 20000);
console.log(p.getInfo());

// access modifer : public , private, readonly

// public : everyone can access
// private : only accessible inside class
// readonly : if you set one time , you can not chnage

class BankAccount {
  public owner: string; // by default public
  private balance: number;
  readonly id: string;

  constructor(owner: string, balance: number, id: string) {
    this.owner = owner;
    this.balance = balance;
    this.id = id;
  }

  getBalance(): number {
    return this.balance;
  }
}

const myBalance = new BankAccount('Mk Haque', 5000, '1');

console.log(myBalance.getBalance());

// console.log(myBalance.balance); // encapsulation example

// constructor shorthand

class User {
  constructor(
    public name: string,
    private age: number,
    readonly id: string, // only one time can change
  ) {}
}

// interface implements

interface Printable {
  print(): void;
}

class Invoice implements Printable {
  constructor(public amount: number) {}

  print(): void {
    console.log(`Invoice: ${this.amount} BDT`);
  }
}
const i = new Invoice(9000);

console.log(i.amount);
