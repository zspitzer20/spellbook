const button1 = document.querySelector('button')
const form = document.querySelector('form')

function differ(){
    const submit = document.querySelector('#dontChange')
    submit.textContent = "Spitzer's Spellbook of Sweet Savvy Spells"
}

const submission = function(ev){
    ev.preventDefault()
    const x = ev.target

    const heading = document.createElement('h2')
    const title = document.createTextNode(x.Spell.value)
    heading.appendChild(title)

    const paragraph = document.createElement('p')
    const description = document.createTextNode(x.Descript.value)
    paragraph.appendChild(description)

    const listSet = document.querySelector('#Div')
    listSet.appendChild(heading)
    listSet.appendChild(paragraph)

    x.reset()
}

function keypress(event){
    if(event.keyCode == 13) submission
}
button1.addEventListener('click', differ)
form.addEventListener('submit', submission)
form.addEventListener('keydown', keypress(event))