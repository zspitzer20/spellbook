var spellName = []
var spellDescript = []

const app = {
    init: function(){
        const button1 = document.querySelector('button')
        const form = document.querySelector('form')
        button1.addEventListener('click', this.differ)
        form.addEventListener('submit', (ev) =>{
            ev.preventDefault()
            this.submission(ev)
    })
        //form.addEventListener('keydown', this.keypress(event))
        //this.submission(ev)
    },

    differ: function(){
        const submit = document.querySelector('#dontChange')
        submit.textContent = "Spitzer's Spellbook of Special Spiffy Spells"
    },

    submission: function(ev){
        const x = ev.target
        if(x.Spell.value == ""){
            window.alert("Error: Spell Name needed")
        }
        else{
            const heading = this.headAppend(x)
            const deletion = this.deleteAppend(x)
            heading.appendChild(deletion)
            const paragraph = this.descriptAppend(x)
            const listSet = this.listAppend(x, heading, paragraph)
        x.reset()
        x.Spell.focus()
        }
    },

    headAppend: function(x){
        const heading = document.createElement('h2')
        const title = document.createTextNode(x.Spell.value)
        spellName.push(x.Spell.value)
        heading.appendChild(title)
        return heading
    },

    deleteAppend: function(x){
        // const item = this.template.cloneNode(true)
        // 
        // const properties = Object.keys(spell)

        // properties.forEach(property =>{
        //     const el = item.querySelector(`.${property}`)
        //     el.textContent = spell[property]

        // })
        const erase = document.createElement('button')
        erase.setAttribute("type", "submit")
        erase.setAttribute("class", "erase")
        erase.setAttribute("value", "Delete")
        const phrase = document.createTextNode('Delete')
        erase.appendChild(phrase)
        erase.addEventListener('click', function(ev){
            const button = ev.target
            const par = button.closest('#Div')
            par.parentNode.removeChild(par)

            const i = spellName.indexOf(x.Spell.value)
            spellName.splice(i,1)
        })
        return erase
    },

    descriptAppend: function(x){
        const paragraph = document.createElement('p')
        const description = document.createTextNode(x.Descript.value)
        paragraph.appendChild(description)
        spellDescript.push(x.Descript.value)
        return paragraph
    },

    listAppend: function(x, heading, paragraph){
        const listSet = document.querySelector('#Div')
        listSet.appendChild(heading)
        listSet.appendChild(paragraph)
        return listSet
    },
}

app.init()