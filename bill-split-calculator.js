//Bill Spit Calculator

function billSplitCalc(bill, tipPercentage, numberOfSplits) {
    if (tipPercentage > 0) {
        let withTip = bill + tipPercentage * bill / 100;
        return `$${total = withTip / numberOfSplits} each`;
    } else {
        return `$${total = bill / numberOfSplits} each`;
    }
}





// function calculate (bill, tipPercentage, numberOfSplits){

// // const bill = calc[2];
// // const tipPercentage = calc [3];
// // const numberOfSplits = calc [4];
// // console.log(bill, tipPercentage, numberOfSplits)

// function tipConverter(tipPercentage){
//     if (tipPercentage>1){
//     return tipPercentage/100;}
//     else if (tipPercentage===undefined){
//         return 0;
// }else {
//     return tipPercentage;
// }
// }

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
