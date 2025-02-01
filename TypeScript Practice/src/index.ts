import { User } from "./Users/User";
import { UsersHandler } from "./Users/UsersHandler";

function getUserDetails<Type>(user: Type[]): Type {
  return user[0];
}

let arr: string[] = ["Piyush", "Arjun"];
const data: string = getUserDetails(arr);
let numberArr: number[] = [1, 2, 3, 4, 5, 67];
let number: number = getUserDetails(numberArr);

if (number < 10) {
  number += 50;
}

console.log(data, number);

class Solution {
  color: number = 0;

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

let user: [number, string] = [1, "Piyush"];

user.push(2);

console.log(user);

enum Size {
  Small,
  Medium,
  Large,
}
console.log(Size);
const a: number = Size.Small;
console.log(a);

const userHanlder = new UsersHandler();

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
  password:'Aasaswdwkbh',
  id: crypto.randomUUID(),
});

try {
    let password:string="";
  userHanlder.getUser().forEach((user: User) => {
    if (user.name == "Satoshi") {
          password = user.passward;
    }
  });
  console.log(password)
} catch (error) {
  console.log(error);
}


