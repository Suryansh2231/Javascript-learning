// button = document.querySelector("button");
// button.onclick = ()=>{
//     console.log("BUTTON WAS  CLICKED")
// }

let button123 = document.querySelector("button"); // Declare and initialize 'button' properly
    body = document.querySelector("body")
    para = document.querySelector("p")
let currmode1 = "light"
button123.onclick = () => {
    console.log("BUTTON WAS CLICKED");

// button123.addEventListener("click",()=>{
  if(currmode1 === "light"){
    currmode1 ="dark"
    body.classList.add("dark")
    body.classList.remove("light")
    body.style.backgroundColor ="black"
    para.style.color = "white"

  }
  else{
    currmode1 = "light"
  body.classList.add("light")
  body.classList.remove("light")
  body.style.backgroundColor ="white"
  para.style.color = "black"

  }
  console.log(currmode1)

// })

};

div = document.querySelector("div")
div.onmouseover =()=>{
    console.log("you are inside the div")
}
para = document.querySelector("p")
para.ondblclick = (evt)=>{
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target)
  console.log(evt.clientX,evt.clientY)
}

button = document.querySelector("button")
button.addEventListener("click",()=>{
    console.log("button was clicked");
    console.log("button was  clicked - handler1")
   
})
handler2 =()=>{
    console.log("button was clicked");
        console.log("button was  clicked - handler2")   
}
   button.addEventListener("click",handler2)

button.addEventListener("click",()=>{
    console.log("button was clicked");
    console.log("button was  clicked - handler3")
   
})
button.addEventListener("click",()=>{
    console.log("button was clicked");
    console.log("button was  clicked - handler4")
   
})
button.removeEventListener("click",handler2)


let button = document.querySelector("button")
body = document.querySelector("body")
let currmode = "light"

button.addEventListener("click",()=>{
  if(currmode === "light"){
    currmode ="dark"
    body.classList.add("dark")
    body.classList.remove("light")
    body.style.backgroundColor ="black"

  }
  else{
    currmode = "light"
  body.classList.add("light")
  body.classList.remove("light")
  body.style.backgroundColor ="light"

  }
  console.log(currmode)

})
