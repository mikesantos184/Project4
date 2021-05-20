
const name = document.getElementById('firstname')
const laname = document.getElementById('lastname')
const form = document.getElementById('myForm')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const org = document.getElementById('org')
const password = document.getElementById('password')
const errorElement = document.getElementById('formErrors')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkErrors ();
})

function checkErrors() {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const orgValue = org.value.trim();
   /* const passwordValue = password.value.trim() for some reason this code doesnt work*/

    if(firstnameValue ==='') {
        document.getElementById("errors").innerHTML = " * Please enter your Firstname";
        document.getElementById('formErrors').style.borderColor ='red';
        document.getElementById('firstname').style.borderColor = 'red';
    } 
    
    else if (lastnameValue ==='') {
        document.getElementById("errors").innerHTML = " * Please enter your Lastname";
        document.getElementById('formErrors').style.borderColor ='red';
        document.getElementById('lastname').style.borderColor = 'red';
        }
/**/
    else if (emailValue ==='') {
        document.getElementById("errors").innerHTML = " * Please enter your E-mail";
        document.getElementById('formErrors').style.borderColor ='red';
        document.getElementById('email').style.borderColor = 'red';
        }

    else if (phoneValue.length <= '9') {
            document.getElementById("errors").innerHTML = " * Please enter your 10 digit Phone Number";
            document.getElementById('formErrors').style.borderColor ='red';
            document.getElementById('phone').style.borderColor = 'red';
            }

    else if (orgValue ==='') {
            document.getElementById("errors").innerHTML = " * Please enter your Organization";
            document.getElementById('formErrors').style.borderColor ='red';
            document.getElementById('org').style.borderColor = 'red';
                }
/*        ****  For some reason this code doesnt work ****
    else if (passwordValue ===''){
            document.getElementById("errors").innerHTML = " * Your Password must contain 20 Characters";
            document,getElementById('formErrors').style.borderColor ='red';
            document.getElementById('password').style.borderColor = 'red';
    }
    */
    else {
        document.getElementById('firstname').style.borderColor = 'green';
        document.getElementById('lastname').style.borderColor = 'green';
        document.getElementById('email').style.borderColor = 'green';
        document.getElementById('phone').style.borderColor = 'green';
        document.getElementById('org').style.borderColor = 'green';
    }

}
/* 
form.getElementsByClassName("red").addEventListener('submit', (passwordvalidation))

addEventListener('keyup', (e) => {
    e.preventDefault();

    formvalidation ();
    emailvalidation ();
})


document.getElementById('myForm').addEventListener("submit", passwordvalidation)
*/
form.addEventListener('submit', (e) => {
    e.preventDefault();

    passwordvalidation();
})



function passwordvalidation(){
    if (passwordValue.length <= '19'){
            document.getElementById("errors").innerHTML = " * Your Password must contain 20 Characters";
            document.getElementById('formErrors').style.borderColor ='red';
            document.getElementById('password').style.borderColor = 'red';
    }
    else { 
        document.getElementById('firstname').style.borderColor = 'green';
}

}

function doesContainNumbers(text){
    if ((text.indexof("9") >=0) || (text.indexof("8")>= 0)
    || (text.indexof("7") >=0) || (text.indexof("6")>= 0)
    || (text.indexof("5") >=0) || (text.indexof("4")>= 0)
    || (text.indexof("3") >=0) || (text.indexof("2")>= 0)
    || (text.indexof("1") >=0) || (text.indexof("0")>= 0))
    {
    return true;
    }
    else {return false;
    }
  }

/*

function confirmpw(){
    if 
}
*/


function formvalidation(){
    alert ("we are validating your form")
    console.log ("firstname" +'' + "lastname");
    }

function emailvalidation(){
    if (emailValue === '[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]'){
        document.getElementById('email').style.bordercolor = 'green'
    } 
    else { document.getElementById("errors").innerHTML = " -Please enter a valid E-mail";
    }
        }

        document.getElementById('submit').addEventListener("onsubmit", formvalidation);

        function formvalidation(){
            let firstname = document.getElementById("firstname").value;
            let lastname = document.getElementById("lastname").value;
            console.log (firstname, lastname)
        }

/*  FOR SOME REASON MY FUNCTIONS ARE NOT WORKING 

function setErrorFor (input, message)
    const myForm = input.parentElement; 
    const small = myForm.querySelector('small');
    small.innerText = message;

    myForm.classname = 'error'

/*
document.getElementById("myForm").addEventListener("submit", formvalidation());

form.addEventListener('submit', (e) => {
    let messages = []
    if (firstname.value === '' || lastname.value == null) {
        messages.push('name is required')
    }
    if (messages.length > 0) {
     e.preventDefault()
     errorElement.innerText = messages.join(', ')
    }
    
})


*/
/* 


function checkforblank() {
    if (document.getElementById('firstname').value ==""){
        alert ('please enter your first name');
        

        return false;
    }
}


*/
