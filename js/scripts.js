const form = document.getElementById('formCard');
const firstname = document.getElementById('firstName');
const lastname = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
     e.preventDefault();

     validateInputs();
});

const setError = (element,message) => {
     const inputGroup = element.parentElement;
     const errorDisplay = inputGroup.querySelector('.error');
     const errorIconDisplay = element.parentElement.children[1];

     errorDisplay.innerText = message;
     errorIconDisplay.style.setProperty('display','block');
     inputGroup.classList.add('error');
     inputGroup.classList.remove('success');
};

const setSuccess = element => {
     const inputGroup = element.parentElement;
     const errorDisplay = inputGroup.querySelector('.error');
     const errorIconDisplay = element.parentElement.children[1];

     errorDisplay.innerHTML = '';
     errorIconDisplay.style.setProperty('display','none');
     inputGroup.classList.add('success');
     inputGroup.classList.remove('error');
};

const isValidEmail = email => {
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
     const firstnameValue = firstname.value.trim();
     const lastnameValue = lastname.value.trim();
     const emailValue = email.value.trim();
     const passwordValue = password.value.trim();

     if (firstnameValue === '') {
          setError(firstname,'First Name cannot be empty');
     } else {
          setSuccess(firstname);
     }

     if (lastnameValue === '') {
          setError(lastname,'Last Name cannot be empty');
     } else {
          setSuccess(lastname);
     }

     if (emailValue === '') {
          setError(email,'Email Address cannot be empty');
     } else if (!isValidEmail(emailValue)){ 
          setError(email, 'Looks like this is not an email');
     } else {
          setSuccess(email);
     }

     if (passwordValue === '') {
          setError(password, 'Password cannot be empty');
     } else if (passwordValue.length < 8){
          setError(password,'Password must have at least 8 characters');
     } else {
          setSuccess(password);
     }
};
