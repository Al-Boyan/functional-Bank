function getInputValue(inputIdName) {
    const inputFeild = document.getElementById(inputIdName);
    const inputText = inputFeild.value;
    const inputAmount = parseFloat(inputText);
    inputFeild.value = '';
    return inputAmount;
}


function updateTotalFeild(totalFeildId, depositAmount) {
    const totalElement = document.getElementById(totalFeildId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = depositAmount + previousTotal;
}

function getCurrentBalance() {
    const amount = document.getElementById('balance-total');
    const previousAmountText = amount.innerText;
    const prebalanceTotal = parseFloat(previousAmountText);
    return prebalanceTotal;
}

function updateBalance(depositAmount, isAdd) {
    const amount = document.getElementById('balance-total');
    /*     const previousAmountText = amount.innerText;
        const prebalanceTotal = parseFloat(previousAmountText); */
    const prebalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        amount.innerText = prebalanceTotal + depositAmount;
    }
    else {
        amount.innerText = prebalanceTotal - depositAmount;
    }

}


document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalFeild('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }



});

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalFeild('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        alert('No, that is not possible sir. :(')
    }

});