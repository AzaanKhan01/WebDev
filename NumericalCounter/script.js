//count value
let count=0;
//Selecting Elements
const counterEL= document.getElementById("counter");
//counterEL.innerHTML = '100';



//Event Listeners
//Increment By 1
document.getElementById('increasebtn').addEventListener('click',function(){
        count++;
        counterEL.textContent = count;
        
});

document.getElementById('decreasebtn').addEventListener('click',function(){
        count--;
        counterEL.textContent = count;
        
});

document.getElementById('increaseby10').addEventListener('click',function(){
        count += 10;
        counterEL.textContent = count;
        
});

document.getElementById('Reset').addEventListener('click',function(){
        count = 0;
        counterEL.textContent = count;
        
});