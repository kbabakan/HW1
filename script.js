// take the name of the user and return it on the site

function SumValue(){
    var variable1 = +document.getElementById("input1").value;
    var variable2 = +document.getElementById("input2").value;
    var ifoper = document.getElementById("operation").value;
    var sign = "";

    if(ifoper == "Addition"){
        document.getElementById('Results').innerText = variable1+variable2;}
    else if(ifoper == "Multiplication"){
        document.getElementById('Results').innerText = variable1*variable2;}
    else if(ifoper == "Subtraction"){
        document.getElementById('Results').innerText = variable1-variable2;}    
    else if(ifoper == "Division"){
        document.getElementById('Results').innerText = variable1/variable2;}
    
    if(ifoper == "Addition"){sign = ("+");}
    else if(ifoper == "Multiplication"){
        sign = ("x")}
    else if(ifoper == "Subtraction"){
        sign = ("-")}    
    else if(ifoper == "Division"){
        sign = ("/");}
   
        console.log(variable1+" "+sign+" "+variable2+" = "+document.getElementById('Results').innerText);
        var log = [variable1, sign, variable2]
        console.log(log)
    }

var count = 0

function newFunction() {
    var arr = [];
    arr.push(document.getElementById("operation").innerText);
    console.log(arr);
}

function counter(){
    count += 1; 
    document.getElementById('counteroutput').innerText = count;
}

const x =  function SumValue(){
    var variable1 = +document.getElementById("input1").value;
    var variable2 = +document.getElementById("input2").value;
    var ifoper = document.getElementById("operation").value;

    if(ifoper == "Addition"){
        document.getElementById('Results').innerText = variable1+variable2;}
    else if(ifoper == "Multiplication"){
        document.getElementById('Results').innerText = variable1*variable2;}
    else if(ifoper == "Subtraction"){
        document.getElementById('Results').innerText = variable1-variable2;}    
    else if(ifoper == "Division"){
        document.getElementById('Results').innerText = variable1/variable2;}
        
}