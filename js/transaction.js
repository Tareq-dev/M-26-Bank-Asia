const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click',function() {
     // handle deposit
     const inputDeposit = document.getElementById('input-deposit').value;
     const inputNumber = parseFloat(inputDeposit);
     //this function is called from below line no -
     updateSpanText('currentDeposit', inputNumber);
     document.getElementById('input-deposit').value = '';
     // handle Balance and this function is called from below line no -26
     updateSpanText('currentBalance', inputNumber);
})
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click',function() {
     console.log('click')
     // handle withdraw
     const inputWithdraw = document.getElementById('input-withdraw').value;
     const inputNumber = parseFloat(inputWithdraw);

     //this function is called from below line no -26
     updateSpanText('currentWithdraw', inputNumber);
     document.getElementById('input-withdraw').value = '';

     // handle balance and this function is called from below line no -26
     updateSpanText('currentBalance', -1*inputNumber);
});
function updateSpanText(id ,inputNumber){
     const current = document.getElementById(id).innerText;
     const currentNumber = parseFloat(current);
     const totalBalance = currentNumber + inputNumber;
     document.getElementById(id).innerText = totalBalance;
     }
// that function hard copy here

      // const currentDeposit = document.getElementById('currentDeposit').innerText;
     // const currentDepositNumber = parseFloat(currentDeposit);
     // const totalDeposit = currentDepositNumber + inputDepositNumber;
     // document.getElementById('currentDeposit').innerText = totalDeposit;