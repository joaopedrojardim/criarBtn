const controles = document.getElementById('controles')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')


controles.addEventListener('change', handleChange)

function handleChange(event){
    const name = event.target.name
    const value = event.target.value
    handleStyle[name](value)
    saveValues(name, value)
    showCss()
}

const handleStyle ={
    element : btn, 
    backgroundColor(value){
        this.element.style.backgroundColor = value
    },
    height(value){
        this.element.style.height = value + 'px'
    },

    width(value){
        this.element.style.width = value + 'px'
    },

    border(value){
        this.element.style.border = value
    },

    texto(value){
        this.element.innerText = value
    },

    color(value){
        this.element.style.color = value
    },

    borderRadius(value){
        this.element.style.borderRadius = value + 'px'
    },

    fontSize(value){
        this.element.style.fontSize = value + 'px'
    },

    fontFamily(value){
        this.element.style.fontFamily = value
    }
}

function showCss(){
    cssText.innerHTML =  '<span>' + btn.style.cssText.split('; ').join(';</span><span>')
}

function setValues(){
    const properties = Object.keys(localStorage)
    properties.forEach(item =>{
        handleStyle[item](localStorage[item])
        controles.elements[item].value = localStorage[item]
    })
    showCss()
}

setValues()

function saveValues(name, value){
    localStorage[name] = value
}