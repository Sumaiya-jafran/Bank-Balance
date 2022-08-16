//step-1: add click handler with  the submit btn

document.getElementById('submit-btn').addEventListener('click',function(){
    //step:2 Get the email and password input field
    const emailField = document.getElementById('email-field');
    const passwordField = document.getElementById('password-field');
    const email = emailField.value;
    const password = passwordField.value;
    // console.log(email,password)
    if(email === "ami@gmail.com" && password === "itsme"){
        console.log('valid User');
        window.location.href = 'bank.html'
    }
    else {
        console.log(`invalid`)
        alert(`email:  ami@gmail.com  pass: itsme`);
    }
    
})