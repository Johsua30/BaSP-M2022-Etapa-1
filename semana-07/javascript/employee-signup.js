window.onload = function() {
    // Put all form fields in variables
    var name = document.getElementById('signup-name-field');
    var lastName = document.getElementById('signup-last-name-field');
    var dni = document.getElementById('signup-dni-field');
    var dateOfBirth = document.getElementById('signup-date-of-birth-field');
    var phoneNumber = document.getElementById('signup-phone-number-field');
    var address = document.getElementById('signup-address-field');
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
    var lastNWarning = document.getElementById('signup-last-name-warning');
    var dniWarning = document.getElementById('signup-dni-warning');
    var dateOfBirthWarning = document.getElementById('signup-date-of-birth-warning');
    var phoneNumWarning = document.getElementById('signup-phone-number-warning');
    var addressWarning = document.getElementById('signup-address-warning');
    var cityWarning = document.getElementById('signup-city-warning');
    var postalCodeWarning = document.getElementById('signup-postal-code-warning');
    var emailWarning = document.getElementById('signup-email-warning');
    var passwordWarning = document.getElementById('signup-password-warning');
    var passwordRepWarning = document.getElementById('signup-password-repeat-warning');

    // Regex for email
    var emailRegEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;

    // Array with the result of the validations
    var arrayFinalValidation = [false, false, false, false, false, false, false, false, false, false, false];
    

    // Functions to help in validation


    // Validates if all characters are only numbers
    function validateNumbers(stringToValidate) {
        arrayOfString = stringToValidate.split('');
        var valid = true;
        for (var i = 0; i < stringToValidate.length; i++) {
            if (arrayOfString[i] == ' ') {
                valid = valid && true;
            } else {
                valid = valid && (isNaN(stringToValidate));
            }
        }
        return valid;
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

    // Transforms from date input field to MM/DD/YYYY
    function transformDateRequest(date) {
        var dateTransformed = date.substring(5, 7) + '/' + date.substring(8, date.length) + '/' + date.substring(0, 4);
        return dateTransformed;
    }

    // Transforms from MM/DD/YYYY to YYYY-MM-DD
    function transformDateForm(date) {
        var dateTransformed = date.substring(6, date.length) + '-' + date.substring(0, 2) + '-' + date.substring(3, 5);
        return dateTransformed;
    }

    // Saves data from the server into the local storage

    function saveLocalStorage(response) {
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('lastName', response.data.lastName);
        localStorage.setItem('dni', response.data.dni);
        localStorage.setItem('dob', response.data.dob);
        localStorage.setItem('phone', response.data.phone);
        localStorage.setItem('address', response.data.address);
        localStorage.setItem('city', response.data.city);
        localStorage.setItem('postalCode', response.data.zip);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('password', response.data.password);
        localStorage.setItem('passwordRepeat', response.data.password);
    }

    // 
    // acereje = localStorage.getItem('name');
    // document.getElementById('signup-name-field').value = acereje;
    // document.getElementById('signup-date-of-birth-field').value = ('2002-08-09');
    // console.log(transformDateRequest(document.getElementById('signup-date-of-birth-field').value))

    function loadLocalStorage() {
        document.getElementById('signup-name-field') = localStorage.getItem('name');
        document.getElementById('signup-last-name-field') = localStorage.getItem('lastName');
        document.getElementById('signup-dni-field') = localStorage.getItem('dni');
        document.getElementById('signup-date-of-birth-field') = transformDateForm(localStorage.getItem('dob'));
        document.getElementById('signup-phone-number-field') = localStorage.getItem('phone');
        document.getElementById('signup-address-field') = localStorage.getItem('address');
        document.getElementById('signup-city-field') = localStorage.getItem('city');
        document.getElementById('signup-postal-code-field') = localStorage.getItem('postalCode');
        document.getElementById('signup-email-field') = localStorage.getItem('email');
        document.getElementById('signup-password-field') = localStorage.getItem('password');
        document.getElementById('signup-password-repeat-field') = localStorage.getItem('passwordRepeat');
    }

    // Functions that trigger on blur
    function nameCheck() {
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

    function lastnameCheck() {
        if (lastName.value == '') {
            lastNWarning.textContent = 'Last name field cannot be empty';
            return ('Error: Last name field is empty');
        } else if (validateLetter(lastName.value)) {
            if (lastName.value.length > 3) {
                lastNWarning.textContent = '';
                return (lastName.value);
            } else {
                lastNWarning.textContent = 'last name is too short';
                return ('Error: Last name is too short');
            }
        } else {
            lastNWarning.textContent = 'Name can\'t have non letter characters';
            return ('Error: Name has characters that are not letters');
        }
    }

    function dniCheck() {
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

    function dateBirthCheck() {
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

    function phoneNumberCheck() {
        if (phoneNumber.value == '') {
            phoneNumWarning.textContent = 'Phone number field cannot be empty';
            return ('Error: Phone number field is empty');
        } else if (validateNumbers(phoneNumber.value)) {
            phoneNumWarning.textContent = 'Phone number field can only contain numbers';
            return ('Error: Phone number contains non number characters');
        } else if (phoneNumber.value.length == 10) {
            phoneNumWarning.textContent = '';
            return (phoneNumber.value);
        } else if (phoneNumber.value.length < 10) {
            phoneNumWarning.textContent = 'Phone number is too short';
            return ('Error: Phone number is too short');
        } else {
            phoneNumWarning.textContent = 'Phone number is too long';
            return ('Error: Phone number is too long');
        }
    }

    function addressCheck() {
        if (address.value == '') {
            addressWarning.textContent = 'address field cannot be empty';
            return ('Error: address field is empty');
        } else if (validateSpace(address.value) == false) {
            addressWarning.textContent = 'address does not have a space\nor space is in the wrong position';
            return ('Error: address does not have a space or space is in the wrong position');
        } else if (separateAndValidate(address.value)) {
            addressWarning.textContent = '';
            return (address.value);
        } else {
            addressWarning.textContent = 'address field can only have letters and numbers';
            return ('Error: address has simbols');
        }
    }

    function cityCheck() {
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

    function postalCodeCheck() {
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

    function emailCheck() {
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

    function passwordCheck() {
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

    function passwordRepCheck() {
        if (password.value == ''){
            passwordRepWarning.textContent = 'Password field cannot be empty';
            return ('Error: Repeat password field is empty');
        } else {
            if (password.value == passwordRepeat.value) {
                passwordRepWarning.textContent = '';
                return (passwordRepeat.value);
            } else {
                passwordRepWarning.textContent = 'Passwords do not match';
                return ('Error: Passwords do not match');
            }
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
            lastNWarning.textContent = '';
        } else {
            lastNWarning.textContent = '';
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
            phoneNumWarning.textContent = '';
        } else {
            phoneNumWarning.textContent = '';
        }
    }

    function addressCheckFocus() {
        if (address.value === '') {
            addressWarning.textContent = '';
        } else {
            addressWarning.textContent = '';
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

    function passwordRepCheck() {
        if (passwordRepeat.value === '') {
            passwordRepWarning.textContent = '';
        } else {
            passwordRepWarning.textContent = '';
        }
    }

    // Submit function

    function submitMessage() {
        alert('Name: ' + nameCheck() +
        '\nLast name: ' + lastnameCheck() +
        '\nDNI: ' + dniCheck() +
        '\nDate of birth: ' + dateBirthCheck() +
        '\nPhone number: ' + phoneNumberCheck() +
        '\naddress: ' + addressCheck() +
        '\nCity: ' + cityCheck() +
        '\nPostal code: ' + postalCodeCheck() +
        '\nEmail: ' + emailCheck() +
        '\nPassword: ' + passwordCheck() +
        '\nRepeat password: ' + passwordRepCheck());
    }

    // Function to send data to the api and handle the errors or successes
    function submitSignup(event) {
        event.preventDefault();
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup';
        if (true) {
            fetch(url + '?name=Jack&lastName=Nowak&dni=38540163&dob=03/30/1995&phone=1234567890&address=Lorenzo 1385&city=Rosario&zip=2000&email=hola@hola.com&password=qwe123qwe')
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonResponse) {
                console.log("json", jsonResponse);
                if (jsonResponse.success) {
                    console.log("Good", jsonResponse);
                    saveLocalStorage(jsonResponse);
                    alert(jsonResponse.msg);
                } else {
                    alert('Error\n' + jsonResponse.msg);
                    throw jsonResponse;
                }
            })
            .catch(function (error) {
                console.warn('Error', error);
                alert('Wrong');
            })
            } else {
            alert('Invalid');
        }
    }


    // Events for the functions
    name.addEventListener("blur", nameCheck);
    name.addEventListener("focus", nameCheckFocus);

    lastName.addEventListener("blur", lastnameCheck);
    lastName.addEventListener("focus", lastNameCheckFocus);

    dni.addEventListener("blur", dniCheck);
    dni.addEventListener("focus", dniCheckFocus);

    dateOfBirth.addEventListener("blur", dateBirthCheck);
    dateOfBirth.addEventListener("focus", dateOfBirthCheckFocus);

    phoneNumber.addEventListener("blur", phoneNumberCheck);
    phoneNumber.addEventListener("focus", phoneNumberCheckFocus);

    address.addEventListener("blur", addressCheck);
    address.addEventListener("focus", addressCheckFocus);

    city.addEventListener("blur", cityCheck);
    city.addEventListener("focus", cityCheckfocus);

    postalCode.addEventListener("blur", postalCodeCheck);
    postalCode.addEventListener("focus", postalCodeCheckFocus);

    email.addEventListener("blur", emailCheck);
    email.addEventListener("focus", emailCheckFocus);

    password.addEventListener("blur", passwordCheck);
    password.addEventListener("focus", passwordCheckFocus);

    passwordRepeat.addEventListener("blur", passwordRepCheck);
    passwordRepeat.addEventListener("focus", passwordRepCheck);

    signupButton.addEventListener("click", submitSignup);

}