//Bill Spit Calculator


function billSplitCalc(bill, tipPercentage, numberOfSplits) {
    if (tipPercentage > 0) {
        let withTip = bill * (1+tipConverter(tipPercentage));
        
        return '$' + (total = withTip / splitConverter(numberOfSplits)) + reaction(bill , splitConverter(numberOfSplits));

    } else {
        return `$${total = bill / splitConverter(numberOfSplits)} each`;
    }}


function tipConverter(tipPercentage){
    if (tipPercentage>1){
    return tipPercentage/100;}
    else if (tipPercentage===undefined){
        return 0;
}else {
    return tipPercentage;
}
}


function reaction(bill, numberOfSplits) {
    if (bill >200 && numberOfSplits > 1){
        return (" per person. Daaaamn, you have expensive friends!")
        }else if (bill<5 && numberOfSplits > 1){
            return (" per person. Be the hero and just cover the whole thing.")
        } else if (isNaN(bill)){
            return ('Numbers are hard');
        } 
        else
        {
            return (" per person.");
        }
}


function splitConverter(numberOfSplits){
    if (numberOfSplits === undefined || numberOfSplits===0){
    return 1;
}else {
    return numberOfSplits;
}
}



// function billSplitCalc(bill, tipPercentage, numberOfSplits) {
//     if (tipPercentage > 0) {
//         let withTip = bill + tipPercentage * bill / 100;
//         return `$${total = withTip / numberOfSplits} each`;

//     } else {
//         return `$${total = bill / numberOfSplits} each`;
//     }
// }