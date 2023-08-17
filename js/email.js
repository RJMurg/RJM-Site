var fields = {};

document.addEventListener("DOMContentLoaded", function() {
    fields.name = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.inquiry = document.getElementById('inquiry');
    fields.message = document.getElementById('message');
})

function isNotEmpty(value){
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
}

function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.name, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.message, isNotEmpty);
   
    return valid;
}

class User {
    constructor(name, email, inquiry, message) {
        this.name = name;
        this.email = email;
        this.inquiry = inquiry;
        this.message = message;
    }
}

function sendContact(){
    if(isValid()){
        let usr = new User(name.value, email.value, inquiry.value, message.value);

        alert("Thank you for your inquiry, " + usr.name + ". We will get back to you shortly.");

    }
    else{
        alert("Please fill out all fields correctly.");
    }
}