window.onload = function() {
    // Put all form fields in variables
    var name = document.getElementById('name-field');
    var lastName = document.getElementById('last-name-field');
    var dni = document.getElementById('dni-field');
    var dateOfBirth = document.getElementById('date-of-birth-field');
    var phoneNumber = document.getElementById('phone-number-field');
    var address = document.getElementById('address-field');
    var city = document.getElementById('city-field');
    var postalCode = document.getElementById('postal-code-field');
    var email = document.getElementById('email-field');
    var password = document.getElementById('password-field');
    var passwordRepeat = document.getElementById('password-repeat-field');
    var signupButton = document.querySelector('.signup-create');

    // Put "Create" button in a variable
    var signupButton = document.querySelector('.signup-create');

    // Put all warning text in variables
    var nameWarning = document.getElementById('name-warning');
    var lastNWarning = document.getElementById('last-name-warning');
    var dniWarning = document.getElementById('dni-warning');
    var dateOfBirthWarning = document.getElementById('date-of-birth-warning');
    var phoneNumWarning = document.getElementById('phone-number-warning');
    var addressWarning = document.getElementById('address-warning');
    var cityWarning = document.getElementById('city-warning');
    var postalCodeWarning = document.getElementById('postal-code-warning');
    var emailWarning = document.getElementById('email-warning');
    var passwordWarning = document.getElementById('password-warning');
    var passwordRepWarning = document.getElementById('password-repeat-warning');

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

    // Verify if the local storage is empty and if not, load the values on the form
    document.getElementById('name-field').value = (localStorage.getItem('name') !== null) ? localStorage.getItem('name') : '';
    document.getElementById('last-name-field').value = (localStorage.getItem('lastName') !== null) ? localStorage.getItem('lastName') : '';
    document.getElementById('dni-field').value = (localStorage.getItem('dni') !== null) ? localStorage.getItem('dni') : '';
    document.getElementById('date-of-birth-field').value = (localStorage.getItem('dob') !== null) ? transformDateForm(localStorage.getItem('dob')) : '';
    document.getElementById('phone-number-field').value = (localStorage.getItem('phone') !== null) ? localStorage.getItem('phone') : '';
    document.getElementById('address-field').value = (localStorage.getItem('address') !== null) ? localStorage.getItem('address') : '';
    document.getElementById('city-field').value = (localStorage.getItem('city') !== null) ? localStorage.getItem('city') : '';
    document.getElementById('postal-code-field').value = (localStorage.getItem('postalCode') !== null) ? localStorage.getItem('postalCode') : '';
    document.getElementById('email-field').value = (localStorage.getItem('email') !== null) ? localStorage.getItem('email') : '';
    document.getElementById('password-field').value = (localStorage.getItem('password') !== null) ? localStorage.getItem('password') : '';
    document.getElementById('password-repeat-field').value = (localStorage.getItem('passwordRepeat') !== null) ? localStorage.getItem('passwordRepeat') : '';

    // Functions that trigger on blur
    function nameCheck() {
        if (name.value === '') {
            nameWarning.textContent = 'Name field cannot be empty';
            arrayFinalValidation[0] = false;
            return ('Error: Name field is empty');
        } else if (validateLetter(name.value)) {
            if (name.value.length > 3) {
                nameWarning.textContent = '';
                arrayFinalValidation[0] = true;
                return (name.value);
            } else {
                nameWarning.textContent = 'Name is too short';
                arrayFinalValidation[0] = false;
                return ('Error: Name is too short');
            }
        } else {
            nameWarning.textContent = 'Name can\'t have non letter characters';
            arrayFinalValidation[0] = false;
            return ('Error: Name has characters that are not letters');
        }
    }

    function lastNameCheck() {
        if (lastName.value === '') {
            lastNWarning.textContent = 'Last name field cannot be empty';
            arrayFinalValidation[1] = false;
            return ('Error: Last name field is empty');
        } else if (validateLetter(lastName.value)) {
            if (lastName.value.length > 3) {
                lastNWarning.textContent = '';
                arrayFinalValidation[1] = true;
                return (lastName.value);
            } else {
                lastNWarning.textContent = 'last name is too short';
                arrayFinalValidation[1] = false;
                return ('Error: Last name is too short');
            }
        } else {
            lastNWarning.textContent = 'Name can\'t have non letter characters';
            arrayFinalValidation[1] = false;
            return ('Error: Name has characters that are not letters');
        }
    }

    function dniCheck() {
        if (dni.value === '') {
            dniWarning.textContent = 'DNI field cannot be empty and can only contain numbers';
            arrayFinalValidation[2] = false;
            return ('Error: DNI field is empty or contains non number characters');
        } else if (validateNumbers(dni.value)) {
            dniWarning.textContent = 'DNI field can only contain numbers';
            arrayFinalValidation[2] = false;
            return ('Error: DNI contains non number characters');
        } else if (dni.value.length > 8) {
            dniWarning.textContent = 'DNI is too long';
            arrayFinalValidation[2] = false;
            return ('Error: DNI is too long');
        } else if (dni.value.length > 6) {
            dniWarning.textContent = '';
            arrayFinalValidation[2] = true;
            return (dni.value);
        } else {
            dniWarning.textContent = 'DNI is too short';
            arrayFinalValidation[2] = false;
            return ('Error: DNI is too short');
        }
    }

    function dateBirthCheck() {
        if (dateOfBirth.value === '') {
            dateOfBirthWarning.textContent = 'Please select date of birth';
            arrayFinalValidation[3] = false;
            return ('Error: Date of birth not selected');
        } else if (Date.parse(dateOfBirth.value) > Date.now()) {
            dateOfBirthWarning.textContent = 'Date of birth is not in the past';
            arrayFinalValidation[3] = false;
            return ('Error: Date of birth is not in the past');
        } else {
            dateOfBirth.textContent = '';
            arrayFinalValidation[3] = true;
            return (dateOfBirth.value);
        }
    }

    function phoneNumberCheck() {
        if (phoneNumber.value === '') {
            phoneNumWarning.textContent = 'Phone number field cannot be empty and can only contain numbers';
            arrayFinalValidation[4] = false;
            return ('Error: Phone number field is empty or contains non number characters');
        } else if (validateNumbers(phoneNumber.value)) {
            phoneNumWarning.textContent = 'Phone number field can only contain numbers';
            arrayFinalValidation[4] = false;
            return ('Error: Phone number contains non number characters');
        } else if (phoneNumber.value.length == 10) {
            phoneNumWarning.textContent = '';
            arrayFinalValidation[4] = true;
            return (phoneNumber.value);
        } else if (phoneNumber.value.length < 10) {
            phoneNumWarning.textContent = 'Phone number is too short';
            arrayFinalValidation[4] = false;
            return ('Error: Phone number is too short');
        } else {
            phoneNumWarning.textContent = 'Phone number is too long';
            arrayFinalValidation[4] = false;
            return ('Error: Phone number is too long');
        }
    }

    function addressCheck() {
        if (address.value === '') {
            addressWarning.textContent = 'address field cannot be empty';
            arrayFinalValidation[5] = false;
            return ('Error: address field is empty');
        } else if (validateSpace(address.value) == false) {
            addressWarning.textContent = 'address does not have a space\nor space is in the wrong position';
            arrayFinalValidation[5] = false;
            return ('Error: address does not have a space or space is in the wrong position');
        } else if (separateAndValidate(address.value)) {
            addressWarning.textContent = '';
            arrayFinalValidation[5] = true;
            return (address.value);
        } else {
            addressWarning.textContent = 'address field can only have letters and numbers';
            arrayFinalValidation[5] = false;
            return ('Error: address has simbols');
        }
    }

    function cityCheck() {
        if (city.value === '') {
            cityWarning.textContent = 'City field cannot be empty';
            arrayFinalValidation[6] = false;
            return ('Error: City field is empty');
        } else if (validateLetterNumberSpace(city.value)) {
            if (city.value.length > 3) {
                cityWarning.textContent = '';
                arrayFinalValidation[6] = true;
                return (city.value);
            } else {
                cityWarning.textContent = 'City name is too short';
                arrayFinalValidation[6] = false;
                return ('Error: City name is too short');
            }
        } else {
            cityWarning.textContent = 'City field can only have letters, numbers and spaces';
            arrayFinalValidation[6] = false;
            return ('Error: City field has simbols');
        }
    }

    function postalCodeCheck() {
        if (postalCode.value === '') {
            postalCodeWarning.textContent = 'Postal code field cannot be empty and can only contain numbers';
            arrayFinalValidation[7] = false;
            return ('Error: Postal code field is empty or contains non number characters');
        } else if (validateNumbers(postalCode.value)) {
            postalCodeWarning.textContent = 'Postal code field can only contain numbers';
            arrayFinalValidation[7] = false;
            return ('Error: Postal code contains non number characters');
        } else if (postalCode.value.length < 4) {
            postalCodeWarning.textContent = 'Postal code is too short';
            arrayFinalValidation[7] = false;
            return ('Error: Postal code is too short');
        } else if (postalCode.value.length > 5) {
            postalCodeWarning.textContent = 'Postal code is too long';
            arrayFinalValidation[7] = false;
            return ('Error: Postal code is too long');
        } else {
            postalCodeWarning.textContent = '';
            arrayFinalValidation[7] = true;
            return (postalCode.value);
        }
    }

    function emailCheck() {
        if (email.value === '') {
            emailWarning.textContent = 'Email field cannot be empty';
            arrayFinalValidation[8] = false;
            return ('Error: Email field is empty');
        } else {
            if (validateEmail(email)) {
                emailWarning.textContent = 'Inputted text is not a valid email';
                arrayFinalValidation[8] = false;
                return ('Error: Inputted text is not a valid email');
            } else {
                emailWarning.textContent = '';
                arrayFinalValidation[8] = true;
                return (email.value)
            }
        }
    }

    function passwordCheck() {
        if (password.value === '') {
            passwordWarning.textContent = 'Password field cannot be empty';
            arrayFinalValidation[9] = false;
            return ('Error: Password field is empty');
        } else if (validateLetterNumber(password.value) == false) {
            passwordWarning.textContent = 'Inputted password is not valid';
            arrayFinalValidation[9] = false;
            return ('Error: Inputted password is not valid');
        } else if (password.value.length < 7) {
            passwordWarning.textContent = 'Inputted password is too short';
            arrayFinalValidation[9] = false;
            return ('Error: Inputted password is too short');
        } else {
            passwordWarning.textContent = '';
            arrayFinalValidation[9] = true;
            return (password.value);
        }
    }

    function passwordRepCheck() {
        if (passwordRepeat.value == ''){
            passwordRepWarning.textContent = 'Password field cannot be empty';
            arrayFinalValidation[10] = false;
            return ('Error: Repeat password field is empty');
        } else {
            if (password.value === passwordRepeat.value) {
                passwordRepWarning.textContent = '';
                arrayFinalValidation[10] = true;
                return (passwordRepeat.value);
            } else {
                passwordRepWarning.textContent = 'Passwords do not match';
                arrayFinalValidation[10] = false;
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

    function passwordRepCheckFocus() {
        if (passwordRepeat.value === '') {
            passwordRepWarning.textContent = '';
        } else {
            passwordRepWarning.textContent = '';
        }
    }

    // Function to show the request errors
    function reqErrors(response) {
        var message = '';
        for (var index = 0; index < response.errors.length; index++) {
            message = message + response.errors[index].msg + '\n';
        }
        return (message);
    }

    // Alert to show the success of the request and the data returned

    function alertSuccess(response) {
        alert(response.msg + 
        '\nName: ' + response.data.name +
        '\nLast name: ' + response.data.lastName +
        '\nDNI: ' + response.data.dni +
        '\nDate of birth: ' + response.data.dob +
        '\nPhone number: ' + response.data.phone +
        '\nAddress: ' + response.data.address +
        '\nCity: ' + response.data.city +
        '\nPostal code: ' + response.data.zip +
        '\nEmail: ' + response.data.email +
        '\nPassword: ' + response.data.password +
        '\nRepeat password: ' + response.data.password);
    }

    // Function to validate before sending the request
    function validationOnClick() {
        nameCheck();
        lastNameCheck();
        dniCheck();
        dateBirthCheck();
        phoneNumberCheck();
        addressCheck();
        cityCheck();
        postalCodeCheck();
        emailCheck();
        passwordCheck();
        passwordRepCheck();
        var resultClick = true;
        for (var x = 0; x < arrayFinalValidation.length; x++) {
            resultClick = resultClick && arrayFinalValidation[x];
        }
        return (resultClick);
    }

    // Function to send data to the api and handle the errors or successes
    function submitSignup(event) {
        event.preventDefault();
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup';
        if (validationOnClick() === true) {
            fetch(url + '?name=' + name.value + '&lastName=' + lastName.value + '&dni=' + dni.value + '&dob=' + transformDateRequest(dateOfBirth.value) + '&phone=' + phoneNumber.value + '&address=' + address.value + '&city=' + city.value + '&zip=' + postalCode.value + '&email=' + email.value + '&password=' + password.value)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonResponse) {
                // console.log("json", jsonResponse);
                if (jsonResponse.success) {
                    // console.log("Good", jsonResponse);
                    saveLocalStorage(jsonResponse);
                    alertSuccess(jsonResponse);
                } else {
                    alert('Error\n' + reqErrors(jsonResponse));
                    throw jsonResponse;
                }
            })
            .catch(function (error) {
                // console.warn('Error', error);
                alert('Wrong values sent to the request');
            })
            } else {
            alert('Some inputs are invalid');
        }
    }


    // Events for the functions
    name.addEventListener("blur", nameCheck);
    name.addEventListener("focus", nameCheckFocus);

    lastName.addEventListener("blur", lastNameCheck);
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
    passwordRepeat.addEventListener("focus", passwordRepCheckFocus);

    signupButton.addEventListener("click", submitSignup);

}