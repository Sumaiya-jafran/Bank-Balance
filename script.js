//step-1: add click handler with  the submit btn

document.getElementById('submit-btn').addEventListener('click',function(event){
    //step:2 Get the email and password input field
    const emailField = document.getElementById('email-field');
    const passwordField = document.getElementById('password-field');
    const email = emailField.value;
    const password = passwordField.value;
    // console.log(email,password)
    if(email === "ami@gmail.com" && password === "tumi"){
        console.log('valid User');
        window.location.href = 'bank.html'
    }
    else
    alart("Invalid User")
})