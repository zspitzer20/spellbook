const button1 = document.querySelector('button')
const form = document.querySelector('form')

function differ(){
    const submit = document.querySelector('#dontChange')
    submit.textContent = "Still a spellbook"
}

const submission = function(ev){
    ev.preventDefault()
    const heading = document.querySelector('#Change')
    const title = document.querySelector('input[name="Spell"]').value
    const paragraph = document.querySelector('#Body')
    const description = document.querySelector('input[name="Descript"]').value
    heading.textContent = title
    paragraph.textContent = description
}

function keypress(event){
    if(event.keyCode == 13) submission
}
button1.addEventListener('click', differ)
form.addEventListener('submit', submission)
form.addEventListener('keydown', keypress(event))