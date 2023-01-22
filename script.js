let getP = document.querySelector('p');

let btnResult = document.querySelector('#btnResult');
btnResult.disabled = true;

let btnPlus = document.querySelector('#btnPlus');
btnPlus.disabled = true;

let btnMultiple = document.querySelector('#btnMultiple');
btnMultiple.disabled = true;

let btndeleteOne = document.querySelector('#btndeleteOne');
btndeleteOne.disabled = true;

let btnLow = document.querySelector('#btnLow');
btnLow.disabled = true;

let num1 = document.querySelector("#num1");
num1.disabled = false;

let num2 = document.querySelector("#num2");
num2.disabled = false;

let num3 = document.querySelector("#num3");
num3.disabled = false;

let num4 = document.querySelector("#num4");
num4.disabled = false;

let num5 = document.querySelector("#num5");
num5.disabled = false;

let num6 = document.querySelector("#num6");
num6.disabled = false;

let num7 = document.querySelector("#num7");
num7.disabled = false;

let num8 = document.querySelector("#num8");
num8.disabled = false;

let num9 = document.querySelector("#num9");
num9.disabled = false;

let num0 = document.querySelector("#num0");
num0.disabled = false;

let stopNum = document.querySelector('p').innerHTML;

let counter = 0;

function getNumbers(n){

        btnLow.disabled = false;
        btnPlus.disabled = false;
        btnMultiple.disabled = false;
        btndeleteOne.disabled = false;
        btnResult.disabled = false;

   let getNumScreen = document.querySelector('p').innerHTML;
    getP.innerHTML = getNumScreen + n;

    counter++;
    console.log(counter);
    if(counter >= 14){
        num0.disabled = true;
        num1.disabled = true;
        num2.disabled = true;
        num3.disabled = true;
        num4.disabled = true;
        num5.disabled = true;
        num6.disabled = true;
        num7.disabled = true;
        num8.disabled = true;
        num9.disabled = true;

        btnLow.disabled = true;
        btnPlus.disabled = true;
        btnMultiple.disabled = true;
    }
    
}


btnResult.onclick = () => {

    btnResult.disabled = true;
    counter = 0;
    console.log(counter);
    if(counter <= 14){
        num0.disabled = false;
        num1.disabled = false;
        num2.disabled = false;
        num3.disabled = false;
        num4.disabled = false;
        num5.disabled = false;
        num6.disabled = false;
        num7.disabled = false;
        num8.disabled = false;
        num9.disabled = false;
 
        btnLow.disabled = false;
        btnPlus.disabled = false;
        btnMultiple.disabled = false;
        
        if(counter === 0){

            btndeleteOne.disabled = true;
        }
        
    }

    //console.log('OK');

    let getResult = document.querySelector('p').innerHTML;

    if(getResult.length === 0){
        getP.innerHTML = '';
    }else{

    if(getResult){
        document.querySelector('p').innerHTML = eval(getResult);
    }
    }
}
function btnDelete(){

    getP.innerHTML = '';

    counter = 0;
    console.log(counter);
    // if(counter <= 14){
        num0.disabled = false;
        num1.disabled = false;
        num2.disabled = false;
        num3.disabled = false;
        num4.disabled = false;
        num5.disabled = false;
        num6.disabled = false;
        num7.disabled = false;
        num8.disabled = false;
        num9.disabled = false;

        btnLow.disabled = true;
        btnPlus.disabled = true;
        btnMultiple.disabled = true;
        btndeleteOne.disabled = true;
        btnResult.disabled = true;
        
    // }
}

function btnDeleteOne(){

    counter--;
    console.log(counter);
    if(counter <= 14){
        num0.disabled = false;
        num1.disabled = false;
        num2.disabled = false;
        num3.disabled = false;
        num4.disabled = false;
        num5.disabled = false;
        num6.disabled = false;
        num7.disabled = false;
        num8.disabled = false;
        num9.disabled = false;

        btnLow.disabled = false;
        btnPlus.disabled = false;
        btnMultiple.disabled = false;
       
    }else{
        
        num0.disabled = true;
        num1.disabled = true;
        num2.disabled = true;
        num3.disabled = true;
        num4.disabled = true;
        num5.disabled = true;
        num6.disabled = true;
        num7.disabled = true;
        num8.disabled = true;
        num9.disabled = true;

        btnLow.disabled = true;
        btnPlus.disabled = true;
        btnMultiple.disabled = true;
    }

    if(counter === 0 || counter > 14){

        btndeleteOne.disabled = true;
    }

    let result = document.querySelector('p').innerHTML;

    document.querySelector('p').innerHTML = result.substring(0, result.length - 1); 
}