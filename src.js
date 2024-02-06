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
  let sum;
  let digits = [...Number];
  for (let i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] *= 2;
    if (digits[i] > 9) {
      digits[i] -= 9;
    }
  }

  sum = digits.reduce((acc, digit) => acc + digit, 0);
  return sum % 10 === 0;
};
console.log(luhnAlgo("6500041060857469"));

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

// validateCreditCardNumber("5061 1234 5678 9012");
