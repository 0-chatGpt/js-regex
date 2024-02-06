# Credit Card Validator
The Credit Card Number Validator functionality is restricted to only validate only these:
* Visa
* Verve
* Mastercard
* American Express(Amex)
* Discover

After checking the issuers using the regex, it uses the luhn algorithm for the final check.


Below are the regex patterns used;

## Regex patterns
For the **/^\d{13,16}$/** regex pattern it constrains its patterns to length of 13 to 16 all digits starting from beginning __'^'__ to end __'dollar_sign'__

For the varous credit card issuers: 

    Visa:
        Regex Pattern: ^4\d{15}$

    Verve:
        Regex Pattern: ^(5061|5062|5063|5043|5078)\d{12}$

    Mastercard:
        Regex Pattern: ^5\d{15}$

    American Express (Amex):
        Regex Pattern: ^3[47]\d{13}$

    Discover:
        Regex Pattern: ^6\d{15}$