function checkPassword() {
    let password = prompt("Please enter a password:");
    let isValid = true;
    let minLength = 8;
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;
    let hasSpecialChar = false;

    if (password.length < minLength) {
        alert("Password must be at least " + minLength + " characters long.");
        isValid = false;
    }

    for (let i = 0; i < password.length; i++) {
        if (password.charAt(i) >= 'A' && password.charAt(i) <= 'Z') {
            hasUpperCase = true;
        }
        if (password.charAt(i) >= 'a' && password.charAt(i) <= 'z') {
            hasLowerCase = true;
        }
        if (password.charAt(i) >= '0' && password.charAt(i) <= '9') {
            hasNumber = true;
        }
        if (password.charAt(i) == '!')
        {
            hasSpecialChar = true;
        }

        if(password.charAt(i) == '@')
        {
            hasSpecialChar = true;
        }

        if( password.charAt(i) == '#')
        {
            hasSpecialChar = true;
        }

        if(password.charAt(i) == '$')
        {
            hasSpecialChar = true;
        }

        if(password.charAt(i) == '%')
        {
            hasSpecialChar = true;
        }

        if(password.charAt(i) == '^')
        {
            hasSpecialChar = true;
        }

        if(password.charAt(i) == '^' )
        {
            hasSpecialChar = true;
        }

        if(password.charAt(i) == '&')
        {
            hasSpecialChar = true;
        }

        if(password.charAt(i) == '*')
        {
            hasSpecialChar = true;
        }
    }

    if (!hasUpperCase) {
        alert("Password must contain at least one uppercase letter.");
        isValid = false;
    }
    if (!hasLowerCase) {
        alert("Password must contain at least one lowercase letter.");
        isValid = false;
    }
    if (!hasNumber) {
        alert("Password must contain at least one number.");
        isValid = false;
    }
    if (!hasSpecialChar) {
        alert("Password must contain at least one special character.");
        isValid = false;
    }

    if (isValid) {
        alert("Password is valid!");
    }
}
