
var user3 = {
    firstName:""
}

let user = {
    firstName:"Piyush",
    lastName:"Agarwal",
  
}

let   printFullName =function(homeTown , state){
    console.log(this.firstName + " " , this.lastName +" "+ homeTown +" "+ state);
}


const user2 ={
    firstName:'Jai',
    lastName:'Shree Ram'
}



printFullName.call(user2,"Kosi Kalan" , "UP");


printFullName.apply(user2 , ["Kosi Kalan" , "Mathura"])


let printName2 = printFullName.bind(user2 , "Kosi Kalan", "Mathura");


let printName = function(homeTown, country) {
    console.log( this.firstName+ " ", this.lastName +" "+homeTown+"  "+country);
}


Function.prototype.myBind = function(...args){
    let obj = this,
    params  = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [...params , ...args2])
    }

}


let printCountry = printName.myBind(user , "kosi kalan");

printCountry("India");