//Let's code a simple character counter using js
//An application where users can input text,text
//length is displayed,coverted to UC or LC ,Sliced
//or replaces parts of the text

 function character(text){
    let len=text.length;
    return len;
 }
 const count=character("JavaScript");
 console.log(count);

 //coversion to lowercase
 const lower=(text)=>{
    let lc=text.toLowerCase();
    return lc;
}
console.log(lower('AZAAN'));

//conversion to uppercase
const upper=(text)=>{
    let uc=text.toUpperCase();
    return uc;
}
console.log(upper('khan'));

//slicing
const sliceText = (txt ,start, end)=>{
    let sliced=txt.slice(start,end);
    return sliced;
}
console.log(sliceText('JavaScript',4,10));