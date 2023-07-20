document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount=getInputValueById('withdraw-field');
    const prewithdraw=getElementValueById('Withdraw-total');
    const preBalance=getElementValueById('Balance-total');
    if(newWithdrawAmount>preBalance){
        alart('You enter a big amount');
        return;
    }
    const currentWithdraw=newWithdrawAmount+prewithdraw;
    setTheCurrentValue('Withdraw-total',currentWithdraw);

    const currentBalance=preBalance-newWithdrawAmount;
    setTheCurrentValue('Balance-total',currentBalance);
})