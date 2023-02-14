function updatePhone(isIncrease){
    const nmbrField = document.getElementById('phone-nmbr-field');
    const nmbrString = nmbrField.value;
    const previousNmbr = parseInt(nmbrString);
    let newNmbr;
    if(isIncrease === true){
       newNmbr = previousNmbr + 1;
    } else{
       newNmbr = previousNmbr - 1;
       if(newNmbr < 0){
          return 0;
       }
    }
    nmbrField.value = newNmbr;
    return newNmbr;
 }
 function updateCase(isDecrease){
    const nmbrField = document.getElementById('case-nmbr-field');
    const nmbrString = nmbrField.value;
    const previousNmbr = parseInt(nmbrString);
    let newNmbr;
    if(isDecrease === true){
       newNmbr = previousNmbr + 1;
    } else{
       newNmbr = previousNmbr - 1;
       if(newNmbr < 0){
          return 0;
       }
    }
    nmbrField.value = newNmbr;
    return newNmbr;
 }

 function updatePhoneTotalPrice(newPhoneNmbr){
    const phoneTotalPrice = newPhoneNmbr * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
 }

 function updateCaseTotalPrice(newCaseNmbr){
    const caseTotalPrice = newCaseNmbr * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
 }

 function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalString  = phoneTotalElement.innerText;
    const currentPhoneTotal =  parseInt(phoneTotalString);
    return currentPhoneTotal;
 }

 function setTaxElementByID(elementId, value){
    const subtotalElement = document.getElementById(elementId);
    subtotalElement.innerText = value;
 }

 function subtotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubtotal = currentCaseTotal + currentPhoneTotal;
    setTaxElementByID('subtotal', currentSubtotal);

    const taxAmmount = currentSubtotal * 0.1;
    setTaxElementByID('tax', taxAmmount);

    const totalAmmount = taxAmmount + currentSubtotal;
    setTaxElementByID('total', totalAmmount);
 }

 document.getElementById('phone-plus-btn').addEventListener('click', function(){
    const newPhoneNmbr = updatePhone(true);
    updatePhoneTotalPrice(newPhoneNmbr);
    subtotal();
 })
 document.getElementById('phone-minus-btn').addEventListener('click', function(){
    const newPhoneNmbr = updatePhone(false);
    updatePhoneTotalPrice(newPhoneNmbr);
    subtotal();
 })
 document.getElementById('case-plus-btn').addEventListener('click', function(){
   const newCaseNmbr = updateCase(true);
   updateCaseTotalPrice(newCaseNmbr);
   subtotal();
 })
 document.getElementById('case-minus-btn').addEventListener('click', function(){
    const newCaseNmbr = updateCase(false);
    updateCaseTotalPrice(newCaseNmbr);
    subtotal();
 })
 