


var disableButton = false;

function throtling(fn, timer){
    debugger;
   
    return function(...args){
        if(!disableButton){
        disableButton = true;
        if(disableButton){
        setTimeout(()=>{
            fn()
        },timer)
     }
    }
    }
}

function getData1(){
    disableButton = false;
    console.log("throtling");
}


let callThrotling = this.throtling(getData1 , 5000);