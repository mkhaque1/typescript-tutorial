"use strict";
// array types
Object.defineProperty(exports, "__esModule", { value: true });
let names = ['ggdgd', 'rahim', 'karim']; // array string types
let numbers = [1, 3, 5, 6, 7]; // array number types
// alternative syntax of array
let ids = [1, 2, 3];
let strings = ['rahim', 'kamal'];
// ids = ['rahim'] wrong array example
// tuples type
let person = ['rahim', 25]; // tuples type
// wrong example tuple type let tuples: [number, string] = ['rahim', 25];
// example basic usage : function [data, error] return
// Enums types
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["active"] = 0] = "active";
    UserStatus[UserStatus["pending"] = 1] = "pending";
    UserStatus[UserStatus["inactive"] = 2] = "inactive";
})(UserStatus || (UserStatus = {}));
let status = UserStatus.active;
console.log(status);
// string return from enums
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
})(Direction || (Direction = {}));
let getDirection = Direction.Down;
console.log(getDirection);
//# sourceMappingURL=arrayTuplesEnums.js.map