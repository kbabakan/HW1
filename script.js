// take the name of the user and return it on the site
 function SumValue(){
    var variable1 = +document.getElementById("input1").value;
    var variable2 = +document.getElementById("input2").value;
    var ifoper = document.getElementById("operation").value;
    console.log(ifoper);

    if(ifoper == "Addition"){
        document.getElementById('Results').innerText = variable1+variable2;}
    else if(ifoper == "Multiplication"){
        document.getElementById('Results').innerText = variable1*variable2;}
    else if(ifoper == "Subtraction"){
        document.getElementById('Results').innerText = variable1-variable2;}    
    else if(ifoper == "Division"){
        document.getElementById('Results').innerText = variable1/variable2;}
}

var count = 0

function counter(){
    count += 1; 
    console.log(count);
    document.getElementById('counteroutput').innerText = count;
}


const x =  function SumValue(){
    var variable1 = +document.getElementById("input1").value;
    var variable2 = +document.getElementById("input2").value;
    var ifoper = document.getElementById("operation").value;
    console.log(ifoper);

    if(ifoper == "Addition"){
        document.getElementById('Results').innerText = variable1+variable2;}
    else if(ifoper == "Multiplication"){
        document.getElementById('Results').innerText = variable1*variable2;}
    else if(ifoper == "Subtraction"){
        document.getElementById('Results').innerText = variable1-variable2;}    
    else if(ifoper == "Division"){
        document.getElementById('Results').innerText = variable1/variable2;}
    
        console.log(x)
}

