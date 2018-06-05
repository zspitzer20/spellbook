const button1 = document.querySelector('button')
const button2 = document.querySelector('input[value="Change second header"]')

function differ(){
    const submit = document.querySelector('#dontChange')
    submit.textContent = "This is different"
}

function submission(){
    const heading = document.querySelector('#Change')
    const text = document.querySelector('input[name="Input:"]').value
    heading.textContent = text
}

function keypress(event){
    if(event.keyCode == 13) submission
}
button1.addEventListener('click', differ)
button2.addEventListener('click', submission)
button2.addEventListener('keydown', keypress(event))