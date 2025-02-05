"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersHandler = void 0;
const User_1 = require("./User");
class UsersHandler {
    constructor() {
        this.userList = [];
    }
    addUser(user) {
        this.userList.push(user);
    }
    createUser(userDetails) {
        const user = new User_1.User(userDetails);
        this.userList.push(user);
    }
    getUser() {
        return this.userList;
    }
}
exports.UsersHandler = UsersHandler;
//# sourceMappingURL=UsersHandler.js.map