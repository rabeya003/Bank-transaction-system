// For inputField
function getInputValueById(inputID){
    const inputField=document.getElementById(inputID);
    const newInputValueString=inputField.value;
    const newInputValue=parseFloat(newInputValueString);
    inputField.value='';
    return newInputValue;
}


// get the previous text from InnerText
function getElementValueById(element){
    const elementField=document.getElementById(element);
    const previousElementString=elementField.innerText;
    const previousElementValue=parseFloat(previousElementString);
    return previousElementValue;
}

// set the current value
function setTheCurrentValue(elementID,newammount){
    const setElementWithNewAmount=document.getElementById(elementID);
    setElementWithNewAmount.innerText=newammount;
}
