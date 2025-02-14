"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UsersHandler_1 = require("./Users/UsersHandler");
function getUserDetails(user) {
    return user[0];
}
let arr = ["Piyush", "Arjun"];
const data = getUserDetails(arr);
let numberArr = [1, 2, 3, 4, 5, 67];
let number = getUserDetails(numberArr);
if (number < 10) {
    number += 50;
}
console.log(data, number);
class Solution {
    constructor() {
        this.color = 0;
    }
    increment() {
        const self = this;
        setTimeout(function () {
            self.color++;
            console.log(self.color);
        }, 1000);
    }
}
const sol = new Solution();
sol.increment();
let user = [1, "Piyush"];
user.push(2);
console.log(user);
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
console.log(Size);
const a = Size.Small;
console.log(a);
const userHanlder = new UsersHandler_1.UsersHandler();
//# sourceMappingURL=index.js.map