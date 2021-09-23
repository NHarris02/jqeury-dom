let btn = $("<button> Cool Button </button>")
btn.appendTo($("body"))
btn.click(function(){
    alert("A cool person clicked the button")
})
let button2 = $("#btn2")
button2.click(function(){
    alert($("#textbox").val())   
})
let div2 = $("#testdiv")
div2.mouseover(function () {
    div2.css("borderRadius", "5px")
    div2.css("backgroundColor", "pink")
})
div2.mouseout(function () {
    div2.css("borderRadius", "0px")
    div2.css("backgroundColor", "white")
})
let para = $("<p>this is a paragraph</p>")
var colors = ['red', 'blue', 'green', 'grey', `yellow`]
para.appendTo($("body"))
para.click(function () {
    var randColor;
    randColor = colors[Math.floor(Math.random() * colors.length)];
    para.css('color', randColor);
    color = randColor;
})
let button3 = $("#btn3")
let diviso = $("#iso")
 button3.click(function(){
     let span = $("<span>Nathan</span>")
     diviso.append(span)
 })
 let ul = $("#lul")
 let button4 = $("#button7up")
 let friends = ["gary",'bob','we','hi','felicia','robert','7up','fred','ribbit','hob']
 