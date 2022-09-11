// --F-- operation functions
let add = (a,b) => {return a+b;}
let subtract = (a,b) => {return a-b;}
let multiply = (a,b) =>  {return a*b;}
let divide = (a,b) => {return a/b;}

function operate(operator, num1, num2) {
    let op = operator(num1,num2);

    return (op);
}

// --F-- clear & error functions
function ifClearResult(clearResult) {
    if (display.textContent == clearResult || display.textContent == "Math ERROR") {
        display.textContent = "";
    }
}

function operatorDuplicate(string) {
    const pattern = /([+,-,*,/])\1+/g;
    trueOrFalse = string.match(pattern);

    if (trueOrFalse == null) {
        return false;
    } else {return true;}
}

function operatorNextToEachother(s) {

}

// --F-- event listener functions
function buttonEvents() {

    let calculation = "";
    let clearResult;

    //click equal
    document.getElementById("grid=").addEventListener("click", function() {
                  
        let calculationArray = calculation.split(/(\D)/);
        let initialArray = calculation.split("");
        const opDup = operatorDuplicate(calculation);
        const opNexToEach = operatorNextToEachother(calculation);
        console.log();

        if (opDup == true || opNexToEach == true) {
            display.textContent = "Math ERROR";
        } else {
            switch (initialArray[0] && initialArray[initialArray.length - 1]) {
                case "+":  
                    display.textContent = "Math ERROR";
                    break;
                case "-":
                    display.textContent = "Math ERROR";
                    break;
                case "*":
                    display.textContent = "Math ERROR";
                    break;
                case "/":
                    display.textContent = "Math ERROR";
                    break;
                default:
                    display.textContent = "result";
                    clearResult = display.textContent;
                    break;
            }
        }

        calculation = "";
    });

    //click clear
    document.getElementById("gridc").addEventListener("click", function(){
        display.textContent = "";
        calculation = "";
    });

    //  operator buttons
    //click plus
    document.getElementById("grid+").addEventListener("click", function(){
        ifClearResult(clearResult);
        display.textContent += "+";
        calculation += "+";
    });

    //click minus
    document.getElementById("grid-").addEventListener("click", function(){
        ifClearResult(clearResult);
        display.textContent += "-";
        calculation += "-";
    });

    //click multiply
    document.getElementById("grid*").addEventListener("click", function(){
        ifClearResult(clearResult);
        display.textContent += "*";
        calculation += "*";
    });

    //click divide
    document.getElementById("grid/").addEventListener("click", function(){
        ifClearResult(clearResult);
        display.textContent += "/";
        calculation += "/";
    });
    /*
    document.getElementById("").addEventListener("click", function(){
        
    });
    */

    //  number buttons
    //click one
    document.getElementById("grid1").addEventListener("click", function() {
        ifClearResult(clearResult);
        display.textContent += "1";
        calculation += "1";
    });
    
    
}

//  global variables
let display = document.getElementById("display-text");

//  calling functions
buttonEvents();
