function getSecurePassword(passwordlength = 5) 
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*+?><:{}[]";


    var password = "";

    var array = new Uint8Array(passwordlength);


    window.crypto.getRandomValues(array);


    for ( var i = 0; i < passwordlength; i++) 
        password += chars[array[i] % chars.length];