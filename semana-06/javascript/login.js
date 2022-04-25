window.onload = function() {
    var email = document.getElementById('login-email-field');
    var emailWarning = document.getElementById('login-email-warning');
    var password = document.getElementById('login-password-field');
    var passwordWarning = document.getElementById('login-password-warning');
    var loginButton = document.querySelector('.login-submit');

    var emailRegEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;
    var passwordRegEx = /[^a-z0-9]/gi;

    function validateEmail(emailToValidate) {
        if (emailRegEx.test(emailToValidate.value)) {
            return false;
        } else {
            return true;
        }
    }

    function validatePassword(passwordToValidate) {
        if (passwordRegEx.test(passwordToValidate.value)) {
            return true;
        } else {
            return false;
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
        } else {
            if (validatePassword(password)) {
                passwordWarning.textContent = 'Inputted password is not valid';
                return ('Error: Inputted password is not valid');
            } else {
                passwordWarning.textContent = '';
                return (password.value);
            }
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

    email.addEventListener("blur", emailCheckBlur);
    email.addEventListener("focus", emailCheckFocus);
    password.addEventListener("blur", passwordCheckBlur);
    password.addEventListener("focus", passwordCheckFocus);
    loginButton.addEventListener("click", submitMessage);

}