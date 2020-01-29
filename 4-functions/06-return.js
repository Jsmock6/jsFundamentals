let name = () => {
    return 'James';
}

let myNameIs = name();
console.log(myNameIs);

//challenge

let tipCalculator = (total) => {
    let tip = total * .18;
    return tip;
}
let total = tipCalculator(30)
console.log(`you should tip ${total}`)

//example
function tipCalc(bill){
    let tip = bill *0.2;
    return tip.toFixed(2);
}
let totalTip = tipCalc(19.84) 
console.log (totalTip)

//example 2

let tipCalc = bill => (bill *.2).toFixed(2);
let totalTip = tipCalc(19.84);
console.log(totalTip)

