
document.getElementById('withdraw-btn').addEventListener('click',function(){

    // withdraw field update
    const withdrawField = document.getElementById('withdraw-amt');
    const withdrawAmt = parseFloat(withdrawField.value);
    withdrawField.value = "";
    if(isNaN(withdrawAmt)){
        alert("please input a valid amount of money!");
        return;
    }

    const previousWithdrawField = document.getElementById('withdraw-total');
    const previousWithrawAmt = parseFloat(previousWithdrawField.innerText);




// balance update
    const balanceField = document.getElementById('balance-total');
    const balanceAmt = parseFloat(balanceField.innerText);
     if(balanceAmt>= withdrawAmt){
        const currentBalanceAmt = balanceAmt- withdrawAmt;
        balanceField.innerText = currentBalanceAmt;
     }
     else{
        alert('You do not have sufficient amount of money!!');
        return;
     }
    // wirhdraw amount update addition
    const currentWithdrawTotal = withdrawAmt + previousWithrawAmt;
    previousWithdrawField.innerText = currentWithdrawTotal;




})

