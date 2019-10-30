//Bill Spit Calculator


function billSplitCalc(bill, tipPercentage, numberOfSplits) {
    if (tipPercentage > 0) {
        let withTip = bill * (1+tipConverter(tipPercentage));
        
        return '$' + (total = withTip / numberOfSplits) + reaction(bill , numberOfSplits);

    } else {
        return `$${total = bill / numberOfSplits} each`;
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
        }else if (bill<5){
            return (" per person. Be the hero and just cover the whole thing.")
        } else if (isNaN(bill)){
            return ('Numbers are hard');
        } 
        else
        {
            return (" per person.");
        }
}


// function splitConverter(numberOfSplits){
//     if (numberOfSplits === undefined || numberOfSplits===0){
//     return 1;
// }else {
//     return numberOfSplits;
// }
// }

// function billSplitter(bill, tipPercentage, numberOfSplits){
//     const billTotal = bill * (1 + tipConverter(tipPercentage));
//     const perPersonTotal =  billTotal / splitConverter(numberOfSplits);
//     return (perPersonTotal);
//     }
   

// const personalBill = billSplitter(bill, tipPercentage, numberOfSplits);

// if (personalBill >200 && numberOfSplits > 1){
//     console.log('$' + personalBill + " per person. Daaaamn, you have expensive friends!")
// }else if (personalBill<5){
//     console.log('$' + personalBill + " per person. Be the hero and just cover the whole thing.")
// } else if (isNaN(personalBill)){
//     console.log('Numbers are hard');
// } 
// else
// {
//     console.log('$' + personalBill + " per person.");
// }

// }


// function billSplitCalc(bill, tipPercentage, numberOfSplits) {
//     if (tipPercentage > 0) {
//         let withTip = bill + tipPercentage * bill / 100;
//         return `$${total = withTip / numberOfSplits} each`;

//     } else {
//         return `$${total = bill / numberOfSplits} each`;
//     }
// }