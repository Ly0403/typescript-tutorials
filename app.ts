let messagge:string ="Hello World3";

let number12:string;
number12="";

// types:
let newArray:number[]=[1,2,3,4];// number array
let stringArray:string[]=['adfd','dfsdf'] // string array
let newObject:{
    name:string,
    age:number
}

//function type


let newFunction=function(param1:string){
    return param1;
}

let newFunction2:(param1:number[])=>string;
newFunction2=function(param:number[]){
    return "";
}

let newFunction3=(number1:number,number2?:number):number=>{
    if(number2){
        return number1+number2;        
    }
    return number1;
}

let functionWithRestParameters=(... numbers: number[])=>{
    let total=0;
    numbers.forEach(x=>total=total+x);
    return total;
}

console.log(functionWithRestParameters(3,5,6,56));