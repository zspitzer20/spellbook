const button1 = document.querySelector('button')
const form = document.querySelector('form')
var spellName = []
var spellDescript = []

function differ(){
    const submit = document.querySelector('#dontChange')
    submit.textContent = "Spitzer's Spellbook of Special Spiffy Spells"
}

const submission = function(ev){
    ev.preventDefault()
    const x = ev.target
    if(x.Spell.value == ""){
        window.alert("Error: Spell Name needed")
    }
    else{
        const heading = headAppend(x)
        const deletion = deleteAppend(heading)
        const paragraph = descriptAppend(x)
        const listSet = listAppend(x, heading, paragraph)
    x.reset()
    }
}

function headAppend(x){
    const heading = document.createElement('h2')
    const title = document.createTextNode(x.Spell.value)
    spellName.push(x.Spell.value)
    heading.appendChild(title)
    return heading
}

function deleteAppend(heading){
    const erase = document.createElement('button')
    erase.setAttribute("type", "submit")
    erase.setAttribute("class", "erase")
    erase.setAttribute("id", spellName.length - 1)
    const phrase = document.createTextNode('Delete')
    erase.appendChild(phrase)
    heading.appendChild(erase)
    return heading
}
function descriptAppend(x){
    const paragraph = document.createElement('p')
    const description = document.createTextNode(x.Descript.value)
    paragraph.appendChild(description)
    spellDescript.push(x.Descript.value)
    return paragraph
}

function listAppend(x, heading, paragraph){
    const listSet = document.querySelector('#Div')
    listSet.appendChild(heading)
    listSet.appendChild(paragraph)
    return listSet
}

function keypress(event){
    if(event.keyCode == 13) submission
}
button1.addEventListener('click', differ)
form.addEventListener('submit', submission)
form.addEventListener('keydown', keypress(event))