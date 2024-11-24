console.log("hello")
console.dir(document)
console.dir(document.body)
document.body.style.background="blue"
console.dir(document.body.childNodes[0])

let heading = document.getElementById("myid");
console.log(heading)
console.dir(heading)

let div = document.getElementsByClassName("myclass");
console.dir(div)

let tag = document.getElementsByTagName("div");
console.dir(tag)

let firstEl= document.querySelector("div");
// it will print only first div inside body tag
console.dir(firstEl)

allEl = document.querySelectorAll("div");
/* it will return a nodelist
 ("#myid/.myclass/tag")*/
console.dir(allEl)

heading = document.querySelector("h1")
console.dir(heading)

div = document.querySelector("div")
console.dir(div)

heading = document.querySelector("h2")
// console.dir(heading.innerText)

h2 = document.querySelector("h2")
console.dir(h2.innerText)
h2.innerText = h2.innerText +" " +"from apna college students"

divs = document.querySelectorAll(".box")
console.dir(divs[0].innerText);
console.dir(divs[1].innerText);
console.dir(divs[2].innerText);

divs[0].innerText = divs[0].innerText +" "+ "Suryansh"
divs[1].innerText = divs[1].innerText +" "+ "Kushagra"
divs[2].innerText = divs[2].innerText +" "+ "Devansh"

divs = document.querySelectorAll("div")
console.log(divs)
console.log(divs.getAttribute("class"))

console.log(divs.setAttribute("class","newclass"))

divs.style.background ="green"
div.style.fontSize = "130px"

div = document.querySelector("div")
console.log(div)

div.innerText ="suryansh"
div.style.fontSize = "10px"
div.style.backgroundColor = "yellow"

let newbtn = document.createElement("button")
newbtn.innerText = "click me!"
newbtn.style.backgroundColor ="red"
newbtn.style.color = "white"
body = document.querySelector("body")
body.prepend(newbtn)

para = document.querySelector("p")

