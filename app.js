
document.querySelector('.btn-confirm').addEventListener('click', () => {

    isNameEntered();
    isCardEntered();
    isMonthEntered();
    isYearEntered();
    isCvcEntered();

    if(isNameEntered() == true && isCardEntered() == true && isMonthEntered() == true && isYearEntered() == true && isCvcEntered() == true) {

      document.querySelector('.completed-state').classList.remove('hidden');
      document.querySelector('.credit-form').classList.add('hidden');
      changeCardDetails();

    } else {
      console.log('error')
    }
  })

  function isNameEntered() {
    const name = document.getElementById('myName');

    if(name.value !== '') {
      return true;
    } else {
      name.classList.add('error-red');
      document.querySelector('.name-error').classList.remove('hidden');
      document.querySelector('.name-error').innerHTML = "Can't be blank";
    }
  }
  function isCardEntered() {
    const card = document.getElementById('myCard');

    if(card.value.length == 19) {
      if(!isNaN(card.value)) {
        return true;
      } else {
        document.querySelector('.card-number-error').innerHTML = "Wrong format, numbers only";
        card.classList.add('error-red');
      }
    } else {
      card.classList.add('error-red');
      document.querySelector('.card-number-error').classList.remove('hidden');
      document.querySelector('.card-number-error').innerHTML = "Can't be blank";
    }
  }
  function isMonthEntered() {
    const month = document.getElementById('myExpireMonth');

    if(month.value.length == 2) {
        if(!isNaN(month.value)) {
          return true;
        } else {
          document.querySelector('.expire-date-error').innerHTML = "Wrong format, numbers only";
          month.classList.add('error-red');
        }
    } else {
      month.classList.add('error-red');
      document.querySelector('.expire-date-error').classList.remove('hidden');
      document.querySelector('.expire-date-error').innerHTML = "Can't be blank";
    }
  }
  function isYearEntered() {
    const year = document.getElementById('myExpireYear');

    if(year.value.length == 2) {
        if(!isNaN(year.value)) {
          return true;
        } else {
          document.querySelector('.expire-date-error').innerHTML = "Wrong format, numbers only";
          year.classList.add('error-red');
        }
    } else {
      year.classList.add('error-red');
      document.querySelector('.expire-date-error').classList.remove('hidden');
      document.querySelector('.expire-date-error').innerHTML = "Can't be blank";
    }
  }
  
  function isCvcEntered() {
    const cvc = document.getElementById('myCvc');

    if(cvc.value.length == 3) {
        if(!isNaN(cvc.value)) {
          return true;
        } else {
          document.querySelector('.cvc-error').innerHTML = "Wrong format, numbers only";
          cvc.classList.add('error-red');
        }
    } else {
      cvc.classList.add('error-red');
      document.querySelector('.cvc-error').classList.remove('hidden');
      document.querySelector('.cvc-error').innerHTML = "Can't be blank";
    }
   
  }

function changeCardDetails() {
    const inputName = document.getElementById("myName").value;
    const inputNumber = document.getElementById("myCard").value;
    const inputCvc = document.getElementById("myCvc").value;
    const inputMonth = document.getElementById("myExpireMonth").value;
    const inputYear = document.getElementById("myExpireYear").value;

    document.getElementById("cardName").innerHTML = inputName.toUpperCase();
    document.querySelector(".left-side__front-card_number").innerHTML = inputNumber;
    document.querySelector(".expireMonth").innerHTML = inputMonth;
    document.querySelector(".expireYear").innerHTML = inputYear;
    document.getElementById("cardCvc").innerHTML = inputCvc;
}


//Reset form 

document.querySelector('.btn-completed').addEventListener('click', () => {
  document.querySelector('.completed-state').classList.add('hidden');
  document.querySelector('.credit-form').classList.remove('hidden');

  document.getElementById("form").reset();
  document.getElementById("cardName").innerHTML = 'JANE APPLESEED';
  document.querySelector(".left-side__front-card_number").innerHTML = '0000 0000 0000 0000';
  document.querySelector(".expireMonth").innerHTML = 'MM';
  document.querySelector(".expireYear").innerHTML = 'YY';
  document.getElementById("cardCvc").innerHTML = '123';
  
})


