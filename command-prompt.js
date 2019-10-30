calc = prompt('How can I help you?').split(' ')


let bill = Number(calc[0])
let tipPercentage = Number(calc[1])
let numberOfSplits = Number(calc[2])



const result = billSplitCalc(bill, tipPercentage, numberOfSplits);
document.querySelector('#result').innerText = result;

