
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung
2. Auswahl Rechenart
3. Fkt. Grundrechenarten
4. Ausgabe in Konsole
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