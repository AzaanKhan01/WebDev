function add(a , b){
    let res=a +b;
    return res;
}
console.log(add(2,5));

//Another way of write same above code
const addi = function(a , b){
    let res=a + b;
    return res;
};
console.log(addi(5,5));

//Same code using arrow function
const addition = (a , b)=>{
    let res=a + b;
    return res;
};
console.log(addition(5,15));


//Hence we can apply the same logic for other arithemetic
//operations also.

//Implemetaion for multiplication
function multiply(a,b){
    let ans=a * b;
    return ans;
}
console.log(multiply(2,2));

//Another method

let multi= function(a, b){
    let ans=a * b;
    return ans;
};
console.log(multi(5,5));

//Using arrow function

let product = (a,b)=>{
    let ans=a * b;
    return ans;
};
console.log(product(6,6));
