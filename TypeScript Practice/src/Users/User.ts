export interface UserDetails {
  name: string;
  age: number;
  id: string;
  lastName: string;
  firstName: string;
  password?: string;
}

export class User {
  userDetails: UserDetails;

  constructor(userDetail: UserDetails) {
    this.userDetails = new Proxy(userDetail, {
      get(target, prop) {
        if (prop === "password") {
          return "You don't have permission";
        } else {
          if (prop in target) {
            return target[prop as keyof UserDetails];
          }
        }
      }
    });
  }

  public set passward(passward:string){
    throw new Error("You can't update password")
  }

  public get passward(): never{
    throw new Error("You don't have permission.")
  }

  public set name(name: string) {
    this.userDetails.name = name;
  }

  public get name(): string {
    return this.userDetails.name;
  }
}
