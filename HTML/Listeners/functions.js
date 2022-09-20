const passwordField = document.querySelector('#password');
const inlineError = document.querySelector('#error');
inlineError.style.visibility = "hidden";

passwordField.addEventListener('input', (event)=> {
    let value = event.target.value;
    if (value.length < 8){
        inlineError.style.visibility = "visible";
    }
    else if(value.length){
        inlineError.style.visibility = "hidden";
    }
})

passwordField.addEventListener('mouseenter', (event)=>{
    event.target.type = "text";
})

passwordField.addEventListener('mouseleave', (event)=>{
    event.target.type = "password";
})

