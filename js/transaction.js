
 function getInputvalue (inputId) {
     const inputField = document.getElementById(inputId).value;
     const inputNumber = parseFloat(inputField);
     // clear input
     document.getElementById(inputId).value = '';
     return inputNumber;
}
function updateSpanText(id ,inputNumber){
     const current = document.getElementById(id).innerText;
     const currentNumber = parseFloat(current);
     const totalBalance = currentNumber + inputNumber;
     document.getElementById(id).innerText = totalBalance;
     }

const depositBtn = document.getElementById('deposit-btn').addEventListener('click',function() {
     // handle deposit
     const inputNumber = getInputvalue("input-deposit");
     if(inputNumber>0){
          updateSpanText('currentDeposit', inputNumber);
          updateSpanText('currentBalance', inputNumber);
     }
})
const withdrawBtn = document.getElementById('withdraw-btn').addEventListener('click',function() {
     // handle withdraw
     const inputNumber = getInputvalue("input-withdraw");
     const currentBalance = document.getElementById("currentBalance").innerText;
     const currentBalanceNumber = parseFloat(currentBalance);

   if(inputNumber > 0 && inputNumber < currentBalanceNumber ){
     updateSpanText('currentWithdraw', inputNumber);
     updateSpanText('currentBalance', -1* inputNumber);
   }
   if(inputNumber > currentBalanceNumber ){
     alert('You can not withdraw more than what you have in your account.');   
   }
});
