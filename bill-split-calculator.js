//Bill Spit Calculator



const bill = process.argv[2];
const tipPercentage = process.argv[3];
const numberOfSplits = process.argv[4];
console.log(bill, tipPercentage, numberOfSplits)

function tipConverter(tipPercentage){
    if (tipPercentage>1){
    return tipPercentage/100;}
    else if (tipPercentage===undefined){
        return 0;
}else {
    return tipPercentage;
}
}

function splitConverter(numberOfSplits){
    if (numberOfSplits === undefined || numberOfSplits===0){
    return 1;
}else {
    return numberOfSplits;
}
}

function billSplitter(bill, tipPercentage, numberOfSplits){
    const billTotal = bill * (1 + tipConverter(tipPercentage));
    const perPersonTotal =  billTotal / splitConverter(numberOfSplits);
    return (perPersonTotal);
    }
   

const personalBill = billSplitter(bill, tipPercentage, numberOfSplits);

if (personalBill >200 && numberOfSplits > 1){
    console.log('$' + personalBill + " per person. Daaaamn, you have expensive friends!")
}else if (personalBill<5){
    console.log('$' + personalBill + " per person. Be the hero and just cover the whole thing.")
} else if (isNaN(personalBill)){
    console.log('Numbers are hard');
} 
else
{
    console.log('$' + personalBill + " per person.");
}


