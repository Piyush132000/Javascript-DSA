"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userDetail) {
        this.userDetails = new Proxy(userDetail, {
            get(target, prop) {
                if (prop === "password") {
                    return "You don't have permission";
                }
                else {
                    if (prop in target) {
                        return target[prop];
                    }
                }
            }
        });
    }
    set passward(passward) {
        throw new Error("You can't update password");
    }
    get passward() {
        throw new Error("You don't have permission.");
    }
    set name(name) {
        this.userDetails.name = name;
    }
    get name() {
        return this.userDetails.name;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map