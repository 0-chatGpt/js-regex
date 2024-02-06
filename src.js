// Credit Card Regex.
/**
 * \d  Any digit character
\w  An alphanumeric character (“word character”)
\s  Any whitespace character (space, tab, newline, and similar)
\D  A character that is not a digit
\W  A nonalphanumeric character
\S  A nonwhitespace character
.  Any character except for newline
 */
const luhnAlgo = function (Number) {
  let sum = [...Number]
    .reverse()
    .map((value, i) => {
      if (i % 2 == 0) {
        if (value * 2 > 9) {
          return value * 2 - 9;
        }
        return value * 2;
      }
      return value * 1;
    })
    .reduce((acc, value) => (acc += value), 0);
  console.log(sum);
  return Number[Number.length - 1] == 10 - (sum % 10);
};


function validateCreditCardNumber(creditCardNumber) {
  // 1 check if the length of the numbers falls between range 13-16
  let cardNumber = String(creditCardNumber);
  cardNumber = cardNumber.replace(/[-, ]/g, "");
  if (!/^\d{13,16}$/.test(cardNumber)) {
    return false;
  }

  if (/^4\d{15}$/.test(cardNumber)) {
    console.log(" VISA CARD ");
    luhnAlgo(cardNumber)
      ? console.log("Credit Card Number is valid")
      : console.log("Credit Card Number Not valid");
  } else if (/^(5061|5062|5063|5043|5078)/.test(cardNumber)) {
    console.log(" VERVE ");
    luhnAlgo(cardNumber)
      ? console.log("Credit Card Number is valid")
      : console.log("Credit Card Number Not valid");
  } else if (/^5\d{15}$/.test(cardNumber)) {
    console.log(" MASTERCARD ");
    luhnAlgo(cardNumber)
      ? console.log("Credit Card Number is valid")
      : console.log("Credit Card Number Not valid");
  } else if (/^3[47]\d{13}$/.test(cardNumber)) {
    console.log(" AMERICAN EXPRESS AMEX ");
    luhnAlgo(cardNumber)
      ? console.log("Credit Card Number is valid")
      : console.log("Credit Card Number Not valid");
  } else if (/^6\d{15}$/.test(cardNumber)) {
    console.log(" DISCOVER ");
    luhnAlgo(cardNumber)
      ? console.log("Credit Card Number is valid")
      : console.log("Credit Card Number Not valid");
  }
}

validateCreditCardNumber("6500041060857469");
// console.log(luhnAlgo(""));
