const container = document.querySelector('#container')

const colors = {
    green: '#B3EFB2',
    black: '#001A23',
    blue: '#4D7298',
    red: '#C16E70'
}

let currentColor = colors


//need a couple boxes that get assigned hex color backgrounds
//be able to click on the squares


makeCanvas()

function makeCanvas() {
    const canvas = document.createElement('div')
    canvas.id = 'canvas'
    canvas.style.width = '50vw'
    canvas.style.display = 'flex'
    canvas.style.flexWrap = 'wrap'
    canvas.style.margin = 'auto'
    canvas.style.marginTop = '3rem'
    makeColorBoxContainer()
    container.appendChild(canvas)
    makeBoxes(canvas)
}

function makeColorBoxContainer(){

    const container = document.createElement('div')
    container.style.display = 'flex'
    container.id = 'colorBoxContainer'
    makeColorOptions(container)
    document.querySelector('body').appendChild(container)
}

function makeColorOptions(container){
    for(let key in colors){
        const colorBox = document.createElement('div')
        colorBox.className = 'colorBox'
        colorBox.style.backgroundColor = colors[key]
        colorBox.addEventListener('click', changeColor)
        colorBox.id = key
        container.appendChild(colorBox)
    }
}

function changeColor(e){
    currentColor = colors[e.target.id]
}

function makeBoxes(canvas) {
    for(let i = 0; i < 4970; i++) {
        const box = document.createElement('div')
        box.classname = 'box'
        box.style.height = '10px'
        box.style.width = '10px'
        box.style.border = '.3px solid #333'
        box.addEventListener('click', colorBox)
        canvas.appendChild(box)
    }
}

function colorBox(e) {
    e.target.style.background = currentColor
}