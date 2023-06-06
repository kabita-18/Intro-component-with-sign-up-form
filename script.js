
const submitBtn = document.querySelector("#submitbutton");

const formContainer = document.querySelector(".formcontainer")

const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

const firstNameError = document.getElementById("firstnameerror");

const lastNameError = document.getElementById("lastnameerror");

const emailError = document.getElementById("emailerror");

const passwordError = document.getElementById("passworderror");





submitBtn.addEventListener('click',(e)=>{
    let firstNameValue = firstName.value;
    if(firstNameValue === ""){
        firstNameError.style.display="block";
        firstName.classList.add("error");
        
    }

        
    if(lastName.value === ""){
        lastNameError.style.display="block";
        lastName.classList.add("error");
        
        
    }
    if(email.value === ""){
        emailError.style.display="block";
        email.classList.add("error")
    }

    if(password.value === ""){
        passwordError.style.display="block";
        password.classList.add("error");
        
    }

    
/* make 4 variables, 
    store input elemnts in it
    check each input element
        if value of element is empty
            show the error message

    if all input elements have some value, submit the form

*/


        
})

firstName.addEventListener('click',(e)=>{
    firstName.classList.remove("error")
    firstNameError.style.display="none";

})

lastName.addEventListener('click', (e)=>{
    lastName.classList.remove("error");
    lastNameError.style.display="none";
})

email.addEventListener('click',(e)=>{
    email.classList.remove("error");
    emailError.style.display("none");
})

password.addEventListener('click', (e) =>{
    password.classList.remove("error");
    passwordError.style.display="none";

})