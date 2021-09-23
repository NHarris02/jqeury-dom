let btn = document.createElement("button")
let text = document.createTextNode(`Submit`)
btn.className = `some button`
btn.appendChild(text)
document.body.appendChild(btn)
btn.addEventListener("click", function(){
 alert("a cool person clicked this button")
})
let btn2 = document.getElementById('2ndButton')
let txt = document.getElementById(`textbox`)
btn2.addEventListener("click", function(){
    alert(txt.value)
})
let div1 = document.getElementById(`testdiv`)
div1.addEventListener(`mouseover`, function(){
    this.style.backgroundColor = "green"
})
div1.addEventListener(`mouseout`, function(){
this.style.backgroundColor = "white"
})
let paragraph = document.createElement(`p`)
let ptext = document.createTextNode("this is a paragraph")
paragraph.appendChild(ptext)
document.body.appendChild(paragraph)
paragraph.addEventListener("click", function(){
paragraph.style.color = createRandomColor()
})

 function createRandomColor(){
    const hexParts = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i ++) {
        color+= hexParts[Math.floor(Math.random() * 16)];
    }
    return color;
}
let button = document.getElementById(`btn3`)
let spandiv = document.getElementById(`div2`)
btn3.addEventListener("click", function(){
let span = document.createElement("span")
span.appendChild(document.createTextNode("Nathan"))
 spandiv.appendChild(span)
})

let button4 = document.getElementById(`btn4`)
let ul = document.getElementById(`ulist`)
let friends = ['thimothy', 'kile', 'kenny', 'garrett', 'nick', 'nathan', 'parker', 'kam', 'cole', 'joe']
let counter = 0
button4.addEventListener(`click`, function(){
// for (let i = 0; i < friends.length; i++) {
    let li = document.createElement('li')
    let name = document.createTextNode(friends[counter])
    li.appendChild(name)
    ul.appendChild(li)
    counter++
// }


})

