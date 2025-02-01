stash "use strict";
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
userHanlder.createUser({
    name: "Piyush",
    age: 20,
    lastName: "Agrawal",
    firstName: "Piyush",
    id: crypto.randomUUID(),
});
userHanlder.createUser({
    name: "Piyush",
    age: 20,
    lastName: "Agrawal",
    firstName: "Piyush",
    id: crypto.randomUUID(),
});
userHanlder.createUser({
    name: "Satoshi",
    age: 20,
    lastName: "Agrawal",
    firstName: "Piyush",
    password: 'Aasaswdwkbh',
    id: crypto.randomUUID(),
});
try {
    let password = "";
    userHanlder.getUser().forEach((user) => {
        if (user.name == "Satoshi") {
            password = user.passward;
        }
    });
    console.log(password);
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=index.js.map