
const container = document.getElementById("container")
const kuralNumber = document.getElementsByClassName("kuralNumber")[0]
const getThirukural = document.getElementsByClassName("getThirukural")[0]

getThirukural.addEventListener('click',generatekural)
let oldresp = 0
function randomcode(x){
    return Math.floor(Math.random()*x)
}

function randomcolor(){
    const r = randomcode(256)
    const g = randomcode(150)
    const b = randomcode(256)
    return `rgb(${r},${g},${b})`
}

async function generatekural(){
    try{
    if(oldresp!==kuralNumber.value){
    const data = await fetch(`https://getthirukkural.appspot.com/api/3.0/kural/${kuralNumber.value}?appid=0rgzqujowgure`)
    const response = await data.json()

    let rcolor = randomcolor()
    document.body.style.backgroundColor = rcolor
    
    container.style.color = rcolor
    document.getElementsByClassName("ThirukuralContainer")[0].style.border = `2px solid ${rcolor}`
    document.getElementById('ThirukuralLine1').textContent = (`${response.line1}`)
    document.getElementById('ThirukuralLine2').textContent = (`${response.line2}`)
    document.getElementById('meaning').innerText = (`பொருள்:\n
        ${response.urai1}`)
    document.getElementById('en-meaning').innerText = (`Meaning:\n
        ${response.en}`)
    oldresp = kuralNumber.value
    }
} catch(error){
    console.log(error)
}
}

