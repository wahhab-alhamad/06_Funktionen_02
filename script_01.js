
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/
// function add(x,y)
// {
//     return y + x;   
// }
// output(add(2,7));
// output(sub(2,7));
// output(multi(2,7));
// output(divid(112,7));
// function sub(x,y)
// {
//     return x - y;   
// }
// function multi(x,y)
// {
//     return x * y;    
// }
// function divid(x,y)
// {
//     if (y == 0)
//     {
//         return "ERROR, Division auf 0 kann nicht ausgeführt sein";
//     }
//     else 
//     return x / y;
//     // oder :
//     const cond = true;
//     switch(cond)
//     {
//         case (y != 0):
//         return x/y;
//         break;
//     case (y == 0):
//         return "ERROR, Division auf 0 kann nicht ausgeführt sein";
//     }
    
// }
function output(outputData)
{
    console.log(outputData)
} 
output(calc(2,2,"+"));
output(calc(2,2,"-"));
output(calc(2,2,"*"));
output(calc(2,2,":"));
output(calc(2,0,":"));
output(calc(2,0,"#!"));
function calc(x,y,oper)
{
    switch(oper)
    {
        case "+":
            return x+y;
        case "-":
            return x-y;
        case "*":
            return x*y;
        case ":":
            if (y==0)
            return "ERROR, Division auf 0 kann nicht ausgeführt sein";
            else
            return x/y;
        default:
            "etwas ist schief gelaufen";
    }
}

/* output(getOp());
function getOp() {
    let op = prompt("Bitte Operator eingeben")
    return op;  
}
 */






// application / App
startApp();
function startApp() {
    output(calculator(getNumber("1"),getNumber("2"),getOp()));
}

// module: data input | test:
// output(getNumber(("1"));
function getNumber(numTxt){

    const displayStr = "Eingabe Zahl " + numTxt + ":";
    let inputStr = prompt(displayStr);
    let num = parseInt(inputStr);

    // if num is NOT valid AND user DIDN'T click at Abbrechen
    while (isNaN(num) && (inputStr !== null)) {
        inputStr =  prompt(displayStr);
        num = parseInt(inputStr); 
    }

    return num;
}


// module: input operator | Test:
// output(getOp());
function getOp() {

    const displayStr = "Bitte korrekten Operator (+ | - | * | :) eingeben";
    let op = prompt(displayStr);

    // if op is NOT valid AND user DIDN'T click at Abbrechen
     while (!isOpValid(op) && (op !== null)) {
        op = prompt(displayStr);
    }

    return op;
}

// module: check operator | Test:
// agreement : "+","-","*",":"
// output(isOpValid("+"));
// output(isOpValid("-"));
// output(isOpValid("*"));
// output(isOpValid(":"));
// output(isOpValid("#?#"));
// output(isOpValid(""));
function isOpValid(op) {

    //1st variant
    switch (op) {
        case "+":
        case "-":
        case "*":
        case ":":
            return true;    
        default:
            return false;
    }

    // 2nd variant
    // return op == "+" || op == "-" || op == "*" || op == ":";
}

// module: calculator | tests:
// agreement : "+","-","*",":"
// output(calculator(2,2,"+"));
// output(calculator(2,2,"-"));
// output(calculator(2,2,"*"));
// output(calculator(2,2,":"));
// output(calculator(2,0,":"));
// output(calculator(2,0,"#!"));
function calculator(a,b,op) {
    // a,b --> Operanden / Operatoren: +,- ..
    switch (op) {
        case "+": // addition 
            return add(a,b);
        case "-": // subtraction
            return subtract(a,b);
        case "*": // multiplication
            return multiply(a,b);
        case ":": // division
            return divide(a,b);
        default:
            return "Something went wrong!"
    }
}

// module: division a / b |  test:
// output(divide(10,2));
// output(divide(5,5));
// output(divide(0,2));
// output(divide(2,0));
function divide(a,b) {

    if (b==0) {  // Ausnahme
        return "Division by 0 not possible!";
    } 
        
    return a/b; // Regel
}

// module: multiplication a * b |  test:
// output(multiply(3,3));
// output(multiply(-3,2));
// output(multiply(0,100));
function multiply(a,b) {
    return a*b;
}

// module: subtraction a - b |  test:
// output(subtract(2,10));
// output(subtract(2,1));
// output(subtract(2.1,1.1));
function subtract(a,b) {
    return a-b;
}

// module: addition a + b |  test:
// output(add(2,3));
// output(add(2,-3));
// output(add(2.1,1.1));
function add(a,b) {
   return a+b; 
}

// module: console output | test:
// output("Hello");
// output(20);
function output(outputData) {
    if (typeof outputData == "number") {
        console.log("The result is: " + outputData);
    } else {
        console.log("ERROR: " + outputData);
    }
}



/*** Späßle *****/

/*
 Heute bleibt die Küche kalt ...
 wir gehen in den Wienerwald. 
*/

/*
 servieren(anrichten(gemuesekoch(),saucenkoch()));

function servieren(teller) {
    console.log("Einmal einen " + teller +  ", Bitte sehr!")
}

function anrichten(kartoffeln,soße) {
    return "Teller mit: "+ kartoffeln + " " + soße;
}

function gemuesekoch(){
    return "gekochte Kartoffeln";
 }
 
 function saucenkoch() {
     return "lecker Sauce";
 }
 */