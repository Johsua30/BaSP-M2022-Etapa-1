window.onload = function() {
    // Put all form fields in variables
    var name = document.getElementById('signup-name-field');
    var lastName = document.getElementById('signup-last-name-field');
    var dni = document.getElementById('signup-dni-field');
    var dateOfBirth = document.getElementById('signup-date-of-birth-field');
    var phoneNumber = document.getElementById('signup-phone-number-field');
    var adress = document.getElementById('signup-adress-field');
    var city = document.getElementById('signup-city-field');
    var postalCode = document.getElementById('signup-postal-code-field');
    var email = document.getElementById('signup-email-field');
    var password = document.getElementById('signup-password-field');
    var passwordRepeat = document.getElementById('signup-password-repeat-field');
    var signupButton = document.querySelector('.signup-create');

    // Put "Create" button in a variable
    var signupButton = document.querySelector('.signup-create');

    // Put all warning text in variables
    var nameWarning = document.getElementById('signup-name-warning');
    var lastNameWarning = document.getElementById('signup-last-name-warning');
    var dniWarning = document.getElementById('signup-dni-warning');
    var dateOfBirthWarning = document.getElementById('signup-date-of-birth-warning');
    var phoneNumberWarning = document.getElementById('signup-phone-number-warning');
    var adressWarning = document.getElementById('signup-adress-warning');
    var cityWarning = document.getElementById('signup-city-warning');
    var postalCodeWarning = document.getElementById('signup-postal-code-warning');
    var emailWarning = document.getElementById('signup-email-warning');
    var passwordWarning = document.getElementById('signup-password-warning');
    var passwordRepeatWarning = document.getElementById('signup-password-repeat-warning');

    // Regex for email
    var emailRegEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;


    // Functions to help in validation


    // Validates if all characters are only numbers
    function validateNumbers(stringToValidate) {
        for (var i = 0; i < stringToValidate.length; i++) {
        arrayOfString = stringToValidate.split('');
            if (arrayOfString[i] == ' ') {
                return true;
            } else {
                return (isNaN(stringToValidate));
            }
        }
    }

    // Validates if all characters on a string are letters
    function validateLetter(stringToValidate) {
        var stringValidator1 = true;
        for (var i = 0; i < stringToValidate.length; i++) {
            arrayOfString = stringToValidate.split('');
            stringValidator1 = stringValidator1 && (arrayOfString[i].toLowerCase() !== arrayOfString[i].toUpperCase());
        }
        return stringValidator1;
    }

    // Validates that the characters in the string are not simbols
    function validateLetterNumber(stringToValidate) {
        var stringValidator2 = true;
        for (var i = 0; i < stringToValidate.length; i++) {
            arrayOfString = stringToValidate.split('');
            if (arrayOfString[i] == ' ') {
                stringValidator2 = false;
            } else {
                stringValidator2 = stringValidator2 && (!(isNaN(arrayOfString[i])) || 
                (arrayOfString[i].toLowerCase() !== arrayOfString[i].toUpperCase())); 
            }
        }
        return stringValidator2;
    }

    // Separates a string leaving the space out and validates it has numbers or letters
    function separateAndValidate(stringToValidate) {
        var firstHalf = '';
        var secondHalf = '';
        firstHalf = stringToValidate.substring(0, (stringToValidate.indexOf(' ')))
        secondHalf = stringToValidate.substring((stringToValidate.indexOf(' ') + 1), stringToValidate.length)
        if (validateLetterNumber(firstHalf) && validateLetterNumber(secondHalf)) {
            return true;
        } else {
            return false;
        }
    }

    // Validates the exsitence of only a space and that it's in the middle
    function validateSpace(stringToValidate) {
        if (stringToValidate.indexOf(' ') == stringToValidate.lastIndexOf(' ')) {
            if ((stringToValidate.indexOf(' ') > 0) &&
            (stringToValidate.indexOf(' ') < (stringToValidate.length - 1))) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    // Validates that the characters in the string are not simbols and can have a space
    function validateLetterNumberSpace(stringToValidate) {
        var stringValidator3 = true;
        for (var i = 0; i < stringToValidate.length; i++) {
            arrayOfString = stringToValidate.split('');
            stringValidator3 = stringValidator3 && (!(isNaN(arrayOfString[i])) ||
            (arrayOfString[i].toLowerCase() !== arrayOfString[i].toUpperCase()) ||
            arrayOfString[i] == ' '); 
        }
            return stringValidator3;
    }

    // Validates the mail
    function validateEmail(emailToValidate) {
        if (emailRegEx.test(emailToValidate.value)) {
            return false;
        } else {
            return true;
        }
    }

    // Functions that trigger on blur
    function nameCheckBlur() {
        if (name.value == '') {
            nameWarning.textContent = 'Name field cannot be empty';
            return ('Error: Name field is empty');
        } else if (validateLetter(name.value)) {
            if (name.value.length > 3) {
                nameWarning.textContent = '';
                return (name.value);
            } else {
                nameWarning.textContent = 'Name is too short';
                return ('Error: Name is too short');
            }
        } else {
            nameWarning.textContent = 'Name can\'t have non letter characters';
            return ('Error: Name has characters that are not letters');
        }
    }

    function lastNameCheckBlur() {
        if (lastName.value == '') {
            lastNameWarning.textContent = 'Last name field cannot be empty';
            return ('Error: Last name field is empty');
        } else if (validateLetter(lastName.value)) {
            if (lastName.value.length > 3) {
                lastNameWarning.textContent = '';
                return (lastName.value);
            } else {
                lastNameWarning.textContent = 'last name is too short';
                return ('Error: Last name is too short');
            }
        } else {
            lastNameWarning.textContent = 'Name can\'t have non letter characters';
            return ('Error: Name has characters that are not letters');
        }
    }

    function dniCheckBlur() {
        if (dni.value == '') {
            dniWarning.textContent = 'DNI field cannot be empty';
            return ('Error: DNI field is empty');
        } else if (validateNumbers(dni.value)) {
            dniWarning.textContent = 'DNI field can only contain numbers';
            return ('Error: DNI contains non number characters');
        } else if (dni.value.length > 7) {
            dniWarning.textContent = '';
            return (dni.value);
        } else {
            dniWarning.textContent = 'DNI is too short';
            return ('Error: DNI is too short');
        }
    }

    function dateOfBirthCheckBlur() {
        if (dateOfBirth.value == '') {
            dateOfBirthWarning.textContent = 'Please select date of birth';
            return ('Error: Date of birth not selected');
        } else if (Date.parse(dateOfBirth.value) > Date.now()) {
            dateOfBirthWarning.textContent = 'Date of birth is not in the past';
            return ('Error: Date of birth is not in the past');
        } else {
            dateOfBirth.textContent = '';
            return (dateOfBirth.value);
        }
    }

    function phoneNumberCheckBlur() {
        if (phoneNumber.value == '') {
            phoneNumberWarning.textContent = 'Phone number field cannot be empty';
            return ('Error: Phone number field is empty');
        } else if (validateNumbers(phoneNumber.value)) {
            phoneNumberWarning.textContent = 'Phone number field can only contain numbers';
            return ('Error: Phone number contains non number characters');
        } else if (phoneNumber.value.length == 10) {
            phoneNumberWarning.textContent = '';
            return (phoneNumber.value);
        } else if (phoneNumber.value.length < 10) {
            phoneNumberWarning.textContent = 'Phone number is too short';
            return ('Error: Phone number is too short');
        } else {
            phoneNumberWarning.textContent = 'Phone number is too long';
            return ('Error: Phone number is too long');
        }
    }

    function adressCheckBlur() {
        if (adress.value == '') {
            adressWarning.textContent = 'Adress field cannot be empty';
            return ('Error: Adress field is empty');
        } else if (validateSpace(adress.value) == false) {
            adressWarning.textContent = 'Adress does not have a space\nor space is in the wrong position';
            return ('Error: Adress does not have a space or space is in the wrong position');
        } else if (separateAndValidate(adress.value)) {
            adressWarning.textContent = '';
            return (adress.value);
        } else {
            adressWarning.textContent = 'Adress field can only have letters and numbers';
            return ('Error: Adress has simbols');
        }
    }

    function cityCheckBlur() {
        if (city.value == '') {
            cityWarning.textContent = 'City field cannot be empty';
            return ('Error: City field is empty');
        } else if (validateLetterNumberSpace(city.value)) {
            if (city.value.length > 3) {
                cityWarning.textContent = '';
                return (city.value);
            } else {
                cityWarning.textContent = 'City name is too short';
                return ('Error: City name is too short');
            }
        } else {
            cityWarning.textContent = 'City field can only have letters, numbers and spaces';
            return ('Error: City field has simbols');
        }
    }

    function postalCodeCheckBlur() {
        if (postalCode.value == '') {
            postalCodeWarning.textContent = 'Postal code field cannot be empty';
            return ('Error: Postal code field is empty');
        } else if (validateNumbers(postalCode.value)) {
            postalCodeWarning.textContent = 'Postal code field can only contain numbers';
            return ('Error: Postal code contains non number characters');
        } else if (postalCode.value.length < 4) {
            postalCodeWarning.textContent = 'Postal code is too short';
            return ('Error: Postal code is too short');
        } else if (postalCode.value.length > 5) {
            postalCodeWarning.textContent = 'Postal code is too long';
            return ('Error: Postal code is too long');
        } else {
            postalCodeWarning.textContent = '';
            return (postalCode.value);
        }
    }

    function emailCheckBlur() {
        if (email.value == '') {
            emailWarning.textContent = 'Email field cannot be empty';
            return ('Error: Email field is empty');
        } else {
            if (validateEmail(email)) {
                emailWarning.textContent = 'Inputted text is not a valid email';
                return ('Error: Inputted text is not a valid email');
            } else {
                emailWarning.textContent = '';
                return (email.value)
            }
        }
    }

    function passwordCheckBlur() {
        if (password.value == '') {
            passwordWarning.textContent = 'Password field cannot be empty';
            return ('Error: Password field is empty');
        } else if (validateLetterNumber(password.value) == false) {
            passwordWarning.textContent = 'Inputted password is not valid';
            return ('Error: Inputted password is not valid');
        } else if (password.value.length < 8) {
            passwordWarning.textContent = 'Inputted password is too short';
            return ('Error: Inputted password is too short');
        } else {
            passwordWarning.textContent = '';
            return (password.value);
        }
    }

    function passwordRepeatCheckBlur() {
        if (password.value == passwordRepeat.value) {
            passwordRepeatWarning.textContent = '';
            return (passwordRepeat.value);
        } else {
            passwordRepeatWarning.textContent = 'Passwords do not match';
            return ('Error: Passwords do not match');
        }
    }


    // Functions that trigger on focus
    function nameCheckFocus() {
        if (name.value === '') {
            nameWarning.textContent = '';
        } else {
            nameWarning.textContent = '';
        }
    }

    function lastNameCheckFocus() {
        if (lastName.value === '') {
            lastNameWarning.textContent = '';
        } else {
            lastNameWarning.textContent = '';
        }
    }

    function dniCheckFocus() {
        if (dni.value === '') {
            dniWarning.textContent = '';
        } else {
            dniWarning.textContent = '';
        }
    }

    function dateOfBirthCheckFocus() {
        if (dateOfBirth.value === '') {
            dateOfBirthWarning.textContent = '';
        } else {
            dateOfBirthWarning.textContent = '';
        }
    }

    function phoneNumberCheckFocus() {
        if (phoneNumber.value === '') {
            phoneNumberWarning.textContent = '';
        } else {
            phoneNumberWarning.textContent = '';
        }
    }

    function adressCheckFocus() {
        if (adress.value === '') {
            adressWarning.textContent = '';
        } else {
            adressWarning.textContent = '';
        }
    }

    function cityCheckfocus() {
        if (city.value === '') {
            cityWarning.textContent = '';
        } else {
            cityWarning.textContent = '';
        }
    }

    function postalCodeCheckFocus() {
        if (postalCode.value === '') {
            postalCodeWarning.textContent = '';
        } else {
            postalCodeWarning.textContent = '';
        }
    }

    function emailCheckFocus() {
        if (email.value === '') {
            emailWarning.textContent = '';
        } else {
            emailWarning.textContent = '';
        }
    }

    function passwordCheckFocus() {
        if (password.value === '') {
            passwordWarning.textContent = '';
        } else {
            passwordWarning.textContent = '';
        }
    }

    function passwordRepeatCheckFocus() {
        if (passwordRepeat.value === '') {
            passwordRepeatWarning.textContent = '';
        } else {
            passwordRepeatWarning.textContent = '';
        }
    }

    // Submit function

    function submitMessage() {
        alert('Name: ' + nameCheckBlur() +
        '\nLast name: ' + lastNameCheckBlur() +
        '\nDNI: ' + dniCheckBlur() +
        '\nDate of birth: ' + dateOfBirthCheckBlur() +
        '\nPhone number: ' + phoneNumberCheckBlur() +
        '\nAdress: ' + adressCheckBlur() +
        '\nCity: ' + cityCheckBlur() +
        '\nPostal code: ' + postalCodeCheckBlur() +
        '\nEmail: ' + emailCheckBlur() +
        '\nPassword: ' + passwordCheckBlur() +
        '\nRepeat password: ' + passwordRepeatCheckBlur());
    }



    // Events for the functions
    name.addEventListener("blur", nameCheckBlur);
    name.addEventListener("focus", nameCheckFocus);

    lastName.addEventListener("blur", lastNameCheckBlur);
    lastName.addEventListener("focus", lastNameCheckFocus);

    dni.addEventListener("blur", dniCheckBlur);
    dni.addEventListener("focus", dniCheckFocus);

    dateOfBirth.addEventListener("blur", dateOfBirthCheckBlur);
    dateOfBirth.addEventListener("focus", dateOfBirthCheckFocus);

    phoneNumber.addEventListener("blur", phoneNumberCheckBlur);
    phoneNumber.addEventListener("focus", phoneNumberCheckFocus);

    adress.addEventListener("blur", adressCheckBlur);
    adress.addEventListener("focus", adressCheckFocus);

    city.addEventListener("blur", cityCheckBlur);
    city.addEventListener("focus", cityCheckfocus);

    postalCode.addEventListener("blur", postalCodeCheckBlur);
    postalCode.addEventListener("focus", postalCodeCheckFocus);

    email.addEventListener("blur", emailCheckBlur);
    email.addEventListener("focus", emailCheckFocus);

    password.addEventListener("blur", passwordCheckBlur);
    password.addEventListener("focus", passwordCheckFocus);

    passwordRepeat.addEventListener("blur", passwordRepeatCheckBlur);
    passwordRepeat.addEventListener("focus", passwordRepeatCheckFocus);

    signupButton.addEventListener("click", submitMessage);

}