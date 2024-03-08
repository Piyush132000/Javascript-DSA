
// var user3 = {
//     firstName:""
// }

// let user = {
//     firstName:"Piyush",
//     lastName:"Agarwal",
  
// }

// let   printFullName =function(homeTown , state){
//     console.log(this.firstName + " " , this.lastName +" "+ homeTown +" "+ state);
// }


// const user2 ={
//     firstName:'Jai',
//     lastName:'Shree Ram'
// }



// printFullName.call(user2,"Kosi Kalan" , "UP");


// printFullName.apply(user2 , ["Kosi Kalan" , "Mathura"])


// let printName2 = printFullName.bind(user2 , "Kosi Kalan", "Mathura");


// let printName = function(homeTown, country) {
//     console.log( this.firstName+ " ", this.lastName +" "+homeTown+"  "+country);
// }


// Function.prototype.myBind = function(...args){
//     let obj = this,
//     params  = args.slice(1);
//     return function(...args2){
//         obj.apply(args[0], [...params , ...args2])
//     }

// }


// let printCountry = printName.myBind(user , "kosi kalan");

// printCountry("India");


const STATE = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
  }

class Promise {

    constructor(callBack){
        this.state = STATE.PENDING;
        this.value = undefined;
        this.handler = [];

        try{
            callBack(this._resolev , this._reject);
        }catch (err){
            this._reject(err);
        }
    }


    _reject =(error)=>{};

    _resolev =(value)=>{};

    then(onSuccess, onFail) {
    }
    
    catch(onFail) {
    }
    
    finally(callback) {
    }

}

function a(){
  user=10;

}
a();
console.log(user);