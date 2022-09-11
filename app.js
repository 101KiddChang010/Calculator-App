// --F-- operation function
function operate(func) {
    return new Function('return ' + func)();
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

// !!! code could be optimized better; but works
function operatorNextToEachother(s) {
    let trueOrFalse;
    let combination = {
        combination1: /[+][-]/,
        combination2: /[+][*]/,
        combination3: /[+][/]/,
        combination4: /[-][+]/,
        combination5: /[-][*]/,
        combination6: /[-][/]/,
        combination7: /[*][+]/,
        combination8: /[*][-]/,
        combination9: /[*][/]/,
        combination10: /[/][+]/,
        combination11: /[/][-]/,
        combination12: /[/][*]/,
    }

    Object.keys(combination).forEach(function(key) {
        if (combination[key].test(s) == true) {
            trueOrFalse = true;
        } 
     });

     if (trueOrFalse == true) {return true;}
     else {return false;}
}

// --F-- my assisted functions
function easySwitch(exp) {
    switch (exp) {
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
            const result = operate(display.textContent);
            display.textContent = result;
            clearResult = display.textContent;
            break;
    }
}

// --F-- event listener functions
function buttonEvents() {

    // --- delete/equal buttons
    // click equal
    document.getElementById("grid=").addEventListener("click", function() {
        let calculation = display.textContent;

        let calculationArray = calculation.split(/(\D)/);
        let initialArray = calculation.split("");
        
        const opDup = operatorDuplicate(calculation);
        const opNexToEach = operatorNextToEachother(calculation);
        
        if (opDup == true || opNexToEach == true) {
            display.textContent = "Math ERROR";
        } else if (initialArray[0] == "+" || initialArray[0] == "-" 
                || initialArray[0] == "*" || initialArray[0] == "/") {
            easySwitch(initialArray[0]);
        } else {
            easySwitch(initialArray[initialArray.length - 1]);
        }
    });

    // click clear
    document.getElementById("gridc").addEventListener("click", function(){
        display.textContent = "";
    });

    // click delete
    document.getElementById("griddel").addEventListener("click", function(){
        let displayInArray = display.textContent.split("");
        displayInArray = displayInArray.slice(0,-1);
        const newDisplay = displayInArray.join('')
        display.textContent = newDisplay;
    });

    // --- operator buttons
    // click plus
    document.getElementById("grid+").addEventListener("click", function(){
        ifClearResult(clearResult);
        display.textContent += "+";
    });

    // click minus
    document.getElementById("grid-").addEventListener("click", function(){
        ifClearResult(clearResult);
        display.textContent += "-";
    });

    // click multiply
    document.getElementById("grid*").addEventListener("click", function(){
        ifClearResult(clearResult);
        display.textContent += "*";
    });

    // click divide
    document.getElementById("grid/").addEventListener("click", function(){
        ifClearResult(clearResult);
        display.textContent += "/";
    });
    /*
    document.getElementById("").addEventListener("click", function(){
        
    });
    */

    // --- number buttons
    document.getElementById("gridpi").addEventListener("click", function(){
        if (clearResult == Math.PI.toString()) {
            clearResult = "";
        }
        ifClearResult(clearResult);
        display.textContent += Math.PI.toString();
    });

    document.getElementById("grid.").addEventListener("click", function(){
        if (clearResult == ".") {
            clearResult = "";
        }
        ifClearResult(clearResult);
        display.textContent += ".";
    });

    document.getElementById("grid0").addEventListener("click", function(){
        if (clearResult == "0") {
            clearResult = "";
        }
        ifClearResult(clearResult);
        display.textContent += "0";
    });

    document.getElementById("grid1").addEventListener("click", function() {
        if (clearResult == "1") {
            clearResult = "";
        }
        ifClearResult(clearResult);
        display.textContent += "1";
    });

    document.getElementById("grid2").addEventListener("click", function() {
        if (clearResult == "2") {
            clearResult = "";
        }
        ifClearResult(clearResult);
        display.textContent += "2";
    });
    
    document.getElementById("grid3").addEventListener("click", function(){
        if (clearResult == "3") {
            clearResult = "";
        }
        ifClearResult(clearResult);
        display.textContent += "3";
    });
    
    document.getElementById("grid4").addEventListener("click", function(){
        if (clearResult == "4") {
            clearResult = "";
        }
        ifClearResult(clearResult);
        display.textContent += "4";
    });

    document.getElementById("grid5").addEventListener("click", function(){
        if (clearResult == "5") {
            clearResult = "";
        }
        ifClearResult(clearResult);
        display.textContent += "5";
    });

    document.getElementById("grid6").addEventListener("click", function(){
        if (clearResult == "6") {
            clearResult = "";
        }
        ifClearResult(clearResult);
        display.textContent += "6";
    });

    document.getElementById("grid7").addEventListener("click", function(){
        if (clearResult == "7") {
            clearResult = "";
        }
        ifClearResult(clearResult);
        display.textContent += "7";
    });

    document.getElementById("grid8").addEventListener("click", function(){
        if (clearResult == "8") {
            clearResult = "";
        }
        ifClearResult(clearResult);
        display.textContent += "8";
    });

    document.getElementById("grid9").addEventListener("click", function(){
        if (clearResult == "9") {
            clearResult = "";
        }
        ifClearResult(clearResult);
        display.textContent += "9";
    });
}

// global variables
let display = document.getElementById("display-text");
let clearResult;

// calling functions
buttonEvents();
