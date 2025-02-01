import { User, UserDetails } from "./User";

export class UsersHandler {
    private userList:User[] =[];
    constructor(){}

    addUser(user: User){
        this.userList.push(user);
    }
    createUser(userDetails:UserDetails){
        const user = new User(userDetails);
        this.userList.push(user);
    }

    getUser():User[]{
        return this.userList;
    }
}