window.onload = function() {
    var email = document.getElementById('login-email-field');
    var emailWarning = document.getElementById('login-email-warning');
    var password = document.getElementById('login-password-field');
    var passwordWarning = document.getElementById('login-password-warning');
    var loginButton = document.querySelector('.loginsubmit');

    var emailRegEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;

    // function validateEmail(emailToValidate) {
    //     if ((emailToValidate.value).indexOf('@') == (-1) || (emailToValidate.value).indexOf('.') == (-1)) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    function validateEmail(emailToValidate) {
        if (emailRegEx.test(emailToValidate.value)) {
            return false;
        } else {
            return true;
        }
    }

    function emailCheckBlur() {
        if (email.value == '') {
            emailWarning.textContent = 'Email field cannot be empty';
        } else {
            if (validateEmail(email)) {
                emailWarning.textContent = 'Inputted text is not a valid email';
            } else {
                emailWarning.textContent = '';
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

    function passwordCheckBlur() {
        if (password.value == '') {
            passwordWarning.textContent = 'Password field cannot be empty';
        } else {
            passwordWarning.textContent = '';
        }
    }

    function passwordCheckFocus() {
        if (password.value === '') {
            passwordWarning.textContent = '';
        } else {
            passwordWarning.textContent = '';
        }
    }

    email.addEventListener("blur", emailCheckBlur);
    email.addEventListener("focus", emailCheckFocus);
    password.addEventListener("blur", passwordCheckBlur);
    password.addEventListener("focus", passwordCheckFocus);

}