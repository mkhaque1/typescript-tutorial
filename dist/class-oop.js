// class
class Product {
    // same like javascript but only type used in property
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getInfo() {
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
    owner; // by default public
    balance;
    id;
    constructor(owner, balance, id) {
        this.owner = owner;
        this.balance = balance;
        this.id = id;
    }
    getBalance() {
        return this.balance;
    }
}
const myBalance = new BankAccount('Mk Haque', 5000, '1');
console.log(myBalance.getBalance());
// console.log(myBalance.balance); // encapsulation example
// constructor shorthand
class User {
    name;
    age;
    id;
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}
class Invoice {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    print() {
        console.log(`Invoice: ${this.amount} BDT`);
    }
}
const i = new Invoice(9000);
console.log(i.amount);
export {};
//# sourceMappingURL=class-oop.js.map