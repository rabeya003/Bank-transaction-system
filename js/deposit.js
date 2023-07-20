
document.getElementById('btn-deposit').addEventListener('click',function(){
    // get new depositAmmount
    const newAmount=getInputValueById('deposit-field');
    const previousDeposit=getElementValueById('deposit-total');
    const currentDeposit=newAmount+previousDeposit;
    setTheCurrentValue('deposit-total',currentDeposit);

    // get new balance
    const previousBalance=getElementValueById('Balance-total');
    const currentTottalBalance=previousBalance+newAmount;
    setTheCurrentValue('Balance-total',currentTottalBalance);

})

