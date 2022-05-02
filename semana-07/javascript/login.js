window.onload = function() {
    var email = document.getElementById('login-email-field');
    var emailWarning = document.getElementById('login-email-warning');
    var password = document.getElementById('login-password-field');
    var passwordWarning = document.getElementById('login-password-warning');
    var loginButton = document.querySelector('.login-submit');

    // Array with the result of the validation
    var arrayFinalValidation = [false, false];

    // Regular expression to validate email
    var emailRegEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;

    // Validate email using regular expression
    function validateEmail(emailToValidate) {
        if (emailRegEx.test(emailToValidate.value)) {
            return false;
        } else {
            return true;
        }
    }

    // Validate if a string has only numbers and letters and at least one of each
    function validateAlphaNum(stringToValidate) {
        var stringValidator = true;
        var existNumber = false;
        var existLetter = false;
        for (var i = 0; i < stringToValidate.length; i++) {
            arrayOfString = stringToValidate.split('');
            if (arrayOfString[i] === ' ') {
                stringValidator = false;
            } else {
                stringValidator = stringValidator && (!(isNaN(arrayOfString[i])) || 
                (arrayOfString[i].toLowerCase() !== arrayOfString[i].toUpperCase()));
                existNumber = existNumber || !(isNaN(arrayOfString[i]));
                existLetter = existLetter || (arrayOfString[i].toLowerCase() !== arrayOfString[i].toUpperCase());
            }
        }
        return (stringValidator && existNumber && existLetter);
    }

    // Functions that check if email and password are valid and return the error
    function emailCheck() {
        if (email.value === '') {
            emailWarning.textContent = 'Email field cannot be empty';
            arrayFinalValidation[0] = false;
            return ('Error: Email field is empty');
        } else {
            if (validateEmail(email)) {
                emailWarning.textContent = 'Inputted text is not a valid email';
                arrayFinalValidation[0] = false;
                return ('Error: Inputted text is not a valid email');
            } else {
                emailWarning.textContent = '';
                arrayFinalValidation[0] = true;
                return (email.value)
            }
        }
    }

    function passwordCheck() {
        if (password.value === '') {
            passwordWarning.textContent = 'Password field cannot be empty';
            arrayFinalValidation[1] = false;
            return ('Error: Password field is empty');
        } else if (validateAlphaNum(password.value) === false) {
            passwordWarning.textContent = 'Inputted password is not valid. Must contain letters and numbers';
            arrayFinalValidation[1] = false;
            return ('Error: Inputted password is not valid. Must contain letters and numbers');
        } else if (password.value.length < 8) {
            passwordWarning.textContent = 'Inputted password is too short';
            arrayFinalValidation[1] = false;
            return ('Error: Inputted password is too short');
        } else {
            passwordWarning.textContent = '';
            arrayFinalValidation[1] = true;
            return (password.value);
        }
    }

    // Functions to delete error text when editing the field
    function emailFocus() {
        if (email.value === '') {
            emailWarning.textContent = '';
        } else {
            emailWarning.textContent = '';
        }
    }

    function passwordFocus() {
        if (password.value === '') {
            passwordWarning.textContent = '';
        } else {
            passwordWarning.textContent = '';
        }
    }

    // Function to send data to the api and handle the errors or successes
    function submitLogin(event) {
        event.preventDefault();
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';
        if ((arrayFinalValidation[0] === true) && (arrayFinalValidation[1] === true)) {
            fetch(url + '?email=' + email.value + '&password=' + password.value)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonResponse) {
                //console.log("json", jsonResponse);
                if (jsonResponse.success) {
                    //console.log("Good", jsonResponse);
                    alert('Email: ' + emailCheck() + '\nPassword: ' + passwordCheck()  + '\n' + jsonResponse.msg);
                } else {
                    //alert('Error\n' + jsonResponse.msg);
                    throw jsonResponse;
                }
            })
            .catch(function (error) {
                //console.warn('Error', error);
                alert('Wrong email or password.' + '\n' + 'Email: ' + emailCheck() + '\nPassword: ' + passwordCheck());
            })
        } else {
            alert('Invalid email or password.' + '\n' + 'Email: ' + emailCheck() + '\nPassword: ' + passwordCheck());
        }
    }

    email.addEventListener("blur", emailCheck);
    email.addEventListener("focus", emailFocus);
    password.addEventListener("blur", passwordCheck);
    password.addEventListener("focus", passwordFocus);
    loginButton.addEventListener("click", submitLogin);

}