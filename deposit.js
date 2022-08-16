document.getElementById('deposit-btn').addEventListener('click',function(){
    // deposite update
    const depositeField = document.getElementById('deposit-amt');
    const depositeAmt = parseFloat(depositeField.value);
    depositeField.value = '';
    if(isNaN(depositeAmt)){
        alert('please enter a valid amount of money!');
        return;
    }

    const depositTotalField = document.getElementById('deposit-total');
    const previusDepositAmt = parseFloat(depositTotalField.innerText);
    
    const currentDepositAmt =previusDepositAmt + depositeAmt;
    depositTotalField.innerText = currentDepositAmt;
    
    // Balance Update
    const balanceField = document.getElementById('balance-total');
    const previousBalanceAmt = parseFloat(balanceField.innerText);
    const currentBalanceAmt = previousBalanceAmt + depositeAmt;
    balanceField.innerText = currentBalanceAmt;

    
    
})