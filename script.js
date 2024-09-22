function add(){
    let num1 = +(document.getElementById('num1').value);
    let num2 = +(document.getElementById('num2').value);

    let sum;

    if (num1 != "" && num2 !=""){
        sum = num1 + num2;
        document.getElementById('result').innerHTML = `${sum}`;
    }
    else{
        document.getElementById('result').innerHTML = `Please Enter both numbers`;
    }

}

function add(){
    let num1 = +(document.getElementById('num1').value);
    let num2 = +(document.getElementById('num2').value);

    let sum;

    if (num1 != "" && num2 !=""){
        sum = num1 + num2;
        document.getElementById('result').innerHTML = `${sum}`;
    }
    else if (num1 == "0" || num2 !=""){
        sum = num1 + num2;
        document.getElementById('result').innerHTML = `${sum}`;
    }
    else if (num1 != "" || num2 =="0"){
        sum = num1 + num2;
        document.getElementById('result').innerHTML = `${sum}`;
    }
    else{
        document.getElementById('result').innerHTML = `Please Enter both numbers`;
    }

}

function sub(){
    let num1 = +(document.getElementById('num1').value);
    let num2 = +(document.getElementById('num2').value);

    let diff;

    if (num1 != "" && num2 !=""){
        diff = num1 - num2;
        document.getElementById('result').innerHTML = `${diff}`;
    }

    else if (num1 == "0" || num2 !=""){
        diff = num1 - num2;
        document.getElementById('result').innerHTML = `${diff}`;
    }
    else if (num1 != "" || num2 =="0"){
        diff = num1 - num2;
        document.getElementById('result').innerHTML = `${diff}`;
    }
    else{
        document.getElementById('result').innerHTML = `Please Enter both numbers`;
    }

}

function multiply(){
    let num1 = +(document.getElementById('num1').value);
    let num2 = +(document.getElementById('num2').value);

    let product;

    if (num1 != "" && num2 !=""){
        product = num1 * num2;
        document.getElementById('result').innerHTML = `${product}`;
    }
    else if (num1 == "0" || num2 !=""){
        product = num1 * num2;
        document.getElementById('result').innerHTML = `${product}`;
    }
    else if (num1 != "" || num2 =="0"){
        product = num1 * num2;
        document.getElementById('result').innerHTML = `${product}`;
    }
   
    else {
        document.getElementById('result').innerHTML = `Please Enter both numbers`;
    }

}

function divide(){
    let num1 = +(document.getElementById('num1').value);
    let num2 = +(document.getElementById('num2').value);

    let div;

    if (num1 != "" && num2 !=""){
        div = num1 / num2;
        document.getElementById('result').innerHTML = `${div}`;
    }
    else if (num1 == "0" || num2 !=""){
        div = num1 / num2;
        document.getElementById('result').innerHTML = `${div}`;
    }
    else if (num1 != "" || num2 =="0"){
        div = num1 / num2;
        document.getElementById('result').innerHTML = `${div}`;
    }
    else{
        document.getElementById('result').innerHTML = `Please Enter both numbers`;
    }

}

function reset(){

    document.getElementById('num1').value="";
    document.getElementById('num2').value="";

    document.getElementById('result').innerHTML="";

}