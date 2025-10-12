document.getElementById("btn").addEventListener("click",function(){
    let temp = parseInt(document.getElementById("input").value);
    let type = document.getElementById("conversionType").value;
    let ans = document.getElementById("result");
    ans.innerHTML="";

    if(isNaN(temp)){
        ans.innerHTML="Please enter a valid number";
        return;
    }
    let convertedTemp = "";
    if(type === "toCelcius"){
        convertedTemp = (temp - 32) * (5/9);
        ans.innerHTML = `${temp}°F is equal to ${convertedTemp.toFixed(2)}°C`;
    }else if(type === "toFarenheit"){
        convertedTemp = (temp + 32) * (9/5);
        ans.innerHTML = `${temp}°C is equal to ${convertedTemp.toFixed(2)}°F`;
    }
    
    
});