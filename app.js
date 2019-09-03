const submit = document.querySelector('#submit');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const title = document.querySelector('#title');
const message = document.querySelector('#message');
const nameError = document.querySelector('.name-error');
const emailError = document.querySelector('.email-error');
const titleError = document.querySelector('.title-error');
const messageError = document.querySelector('.message-error');
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,10})$/;

name.addEventListener('keyup', () => {
    const nameLength = name.value.length;
    const errorMessage = nameLength < 4 ? 'Name should be above 4 characters' : '';
    nameError.innerHTML = errorMessage;
});

email.addEventListener('keyup', () => {
    const emailValue = email.value;

    if (!emailRegex.test(emailValue)) {
        emailError.innerHTML = 'please enter a valid email';
    } else {
        emailError.innerHTML = '';
    }
});

title.addEventListener('keyup', () => {
    const titleLength = title.value.length;
    const errorMessage = titleLength < 2 ? 'Title should be above 2 characters' : '';
    titleError.innerHTML = errorMessage;
});

message.addEventListener('keyup', () => {
    const messageLength = message.value.length;
    const errorMessage = messageLength < 20 ? 'Message should be above 20 characters' : '';
    messageError.innerHTML = errorMessage;
});

submit.addEventListener('click', (event) => {
    event.preventDefault();;
    const n1 = name.value;
    const a1 = email.value;
    const p1 = title.value;
    const o1 = message.value;

    if (
        n1 !== '' &&
        a1 !== '' &&
        p1 !== '' &&
        o1 !== ''
    ) {
        console.log(n1, a1, p1, o1)
    } else {
        console.log('something went wrong!!!')
    }
})