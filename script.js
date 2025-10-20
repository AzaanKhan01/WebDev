document.addEventListener("DOMContentLoaded", () => {

//Selecting the element
const calculatebtn = document.getElementById("calculateBtn");
const amountInput = document.getElementById("Amount");
const interestinput = document.getElementById("interest");
const year = document.getElementById("period");


//Summary/Results 

const monthly  = document.getElementById("monthly");
const totalpay = document.getElementById("total");
const intrate = document.getElementById("totalinterest");

function calculateLoan(){
    const principle = parseInt(amountInput.value);
    const rate = parseInt(interestinput.value) / 100 /12;
    const payments = parseInt(year.value);
    if(isNaN(principle) || isNaN(rate) || isNaN(payments)){
        alert("Enter valid details");
        return;
    }
    //calculate monthly payment
    const x = Math.pow(1 + rate, payments);
    const monthlyp = (principle * x * rate) / (x -1);
    if(isFinite(monthlyp)){
        //calculate total payment and interest
        const ctotal = monthlyp * payments;
        const totalint = ctotal - principle;

        //display the result 
        monthly.textContent = monthlyp.toFixed(2);
        totalpay.textContent = ctotal.toFixed(2);
        intrate.textContent = totalint.toFixed(2);

    }
    
    
    
}
calculatebtn.addEventListener("click",calculateLoan);
});
