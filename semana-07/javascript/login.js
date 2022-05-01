window.onload = function() {
    var email = document.getElementById('login-email-field');
    var emailWarning = document.getElementById('login-email-warning');
    var password = document.getElementById('login-password-field');
    var passwordWarning = document.getElementById('login-password-warning');
    var loginButton = document.querySelector('.login-submit');

    var arrayFinalValidation = [false, false];

    var emailRegEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;

    function validateEmail(emailToValidate) {
        if (emailRegEx.test(emailToValidate.value)) {
            return false;
        } else {
            return true;
        }
    }

    function validateAlphaNum(stringToValidate) {
        var stringValidator = true;
        var existNumber = false;
        var existLetter = false;
        for (var i = 0; i < stringToValidate.length; i++) {
            arrayOfString = stringToValidate.split('');
            if (arrayOfString[i] == ' ') {
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

    function emailCheckBlur() {
        if (email.value == '') {
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

    function passwordCheckBlur() {
        if (password.value == '') {
            passwordWarning.textContent = 'Password field cannot be empty';
            arrayFinalValidation[1] = false;
            return ('Error: Password field is empty');
        } else if (validateAlphaNum(password.value) == false) {
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

    function submitMessage() {
        alert('Email: ' + emailCheckBlur() + '\nPassword: ' + passwordCheckBlur());
    }

    function submitLogin(event) {
        event.preventDefault()
        if ((arrayFinalValidation[0] === true) && (arrayFinalValidation[1] === true)) {
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + email.value + '&password=' + password.value)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonResponse) {
                console.log("json", jsonResponse);
                if (jsonResponse.success) {
                    console.log("Good", jsonResponse);
                    alert('Email: ' + emailCheckBlur() + '\nPassword: ' + passwordCheckBlur()  + jsonResponse.msg);
                } else {
                    alert('Error\n' + responseJson.msg);
                    throw jsonResponse;
                }
            })
            .catch(function (error) {
                console.warn('Error', error);
                console.log('logica cuando slae mal');
            })
        } else {
            alert('Email: ' + emailCheckBlur() + '\nPassword: ' + passwordCheckBlur());
        }
    }

    email.addEventListener("blur", emailCheckBlur);
    email.addEventListener("focus", emailCheckFocus);
    password.addEventListener("blur", passwordCheckBlur);
    password.addEventListener("focus", passwordCheckFocus);
    loginButton.addEventListener("click", submitLogin);

}