console.log("I am learning javasript")
console.log("I am learning javasript from apna college")
 var name ="Kushagra"
 console.log("name")
 console.log(name, typeof name)
 var age = 21
 console.log(age, typeof age)
  var canvote = true;
  console.log(canvote, typeof canvote)

//   javascript is dynamically typed
fullname = 36
console.log(fullname)

// varible names are case sensitive in js 
 var fullname = "Abhishek"
console.log(fullname)
 var fullName = "Aniket"  
console.log(fullName)

 var age123 = 23
console.log(age123)
full_name = "rahul"
console.log(full_name)
_fullName = "Abhay"
console.log(_fullName)
$fullName = "Rohit"
console.log($fullName)

var x= BigInt("264")
console.log(x,typeof x)
var y = Symbol("hello")
console.log(y, typeof y)

const student = {
   name : "Rajiv",
   age :18,
   marks : 443,
   isPass :  true
}
console.log(student)
console.log(student["age"])
console.log(student.marks)
student["age"]= student["age"] +2
console.log(student.age)
student.name = "Piyush"
console.log(student.name)

const product ={
   productName : "Ball Pen",
   price : 270,
   rating :4,
   isdeal : true ,
   offer : 10
}
console.log(product)

const profile = {
   userName : "Suryansh",
   isFollow : true,
   followers : 256,
   following : 4
}
console.log(profile, typeof profile)

console.log(typeof profile["isFollow"])

/* chapter 2 comments, conditional statements,
 operators in js*/
// this is a multiline comment
 
a = 6 
b = 4

a += 3 /* a= a+3*/
console.log(" a = " ,a)
b -= 2
console.log("b=", b)
a *=3
console.log("a=",a)
b/=2
console.log(b)
a**=2
console.log("a=",a)

console.log("a+b", a+b)
console.log("a-b", a-b)
console.log("a*b", a*b)
console.log("a/b", a/b)
console.log("a%b", a%b)
 
console.log("a=",a ,"& b=" , b)
console.log(b,++b)
console.log(b,b++)
console.log("b++ =", b++)
console.log("curr value of b", b)
console.log(a,--a)
console.log(a,a--)

var a=4
var b=7
console.log("a==b", a==b);
console.log( "a!=b",a!=b);

var a=5 
var b="8"
console.log("a===b", a===b)
console.log("a!==b", a!==b)
console.log("a>b", a>b);
console.log("a<b", a<b);
console.log("a>=b", a>=b);
console.log("a<=b", a<=b);

// logical operators
var  x=6;
var y=7;
var z=8;
cond1=x>y;
cond2= z>y
console.log(cond1 && cond2)
console.log(cond1 || cond2)
console.log(!(cond1))

// conditional statements
var age=12
if(age>18){
   console.log("you can drive")
}
else {
   console.log("you can not drive")
} 
 
var mode ="yellow"
var color;
if(mode==="dark"){
   color = "black"
}
else{
   color = "white"
}
console.log(color)
 
num = 7
if(num%2==0){
   console.log("num is even", num)
}
else{
   console.log("num is odd", num)
}

age = 34
if(age<18){
   console.log("junior");
}
else if(age>60){
   console.log("senior")
}
else{
   console.log("middle")
}

 var mode = "dark"
 var color;
 if(mode==="dark"){
   color= "black"
 }
 else if(mode==="red"){
   color="red"
 }
 else if(mode==="pink"){
   color="pink"
 }
  else if(mode==="yellow"){
   color="yellow"
 }
 else{
   color="white"
 }
console.log(color)

var age= 24
 let result =age>18 ? "adult" : "not adult";
console.log(result)

// lets practice

var usernum = prompt("Enter a number")
if(usernum%5==0){
   console.log("usernum is multiple of 5", usernum)
}
else{
   console.log("usernum is not multiple of 5", usernum)

}
 let  score = 72
if(100>=score &&score>=90  ){
   console.log("grade A", score)
}
else if(90>=score && score>=70){
   console.log("grade B", score)
}
else if(70>=score && score>=60){
   console.log("grade C", score)
}
else if(60>=score && score>=50){
   console.log("grade D", score)
}
else{
   console.log("grade E", score)
}

// chapter 3
for(let i=0; i<=20;i++){
   if(i%2===0){
   console.log(i)
} }
 
for ( let i=1; i<=10; i++) {
  console.log("I love India");
}

var  i=1;
while(i<=5){
   console.log("Suryansh");
   i++;
}
//  do while loop exicute at least one time
var i=1 
do{
   console.log("i=",i)
   i++;
}while(i<=10)

   /* for of loop is used to iterate every character of a word
for of loop is used for string and arrays */

let str = "Javascript"
let size=0
for(let val of str){
   console.log("val=",val);
   size++
}
console.log(size)



















//   let attempt = 1

// let gamenum=Math.floor(100*Math.random())
// let usernum=prompt("please enter a num")
// console.log("massage",usernum,typeof usernum,gamenum)
// while(usernum!=gamenum){
//  gamenum=Math.floor(100*Math.random())
//  usernum=prompt("please enter a num")
// console.log("massage",usernum,typeof usernum,gamenum)
// attempt++
// }
// if(usernum==gamenum){
//    // console.log("congratulations you have guess the right number")
//    alert("yes , this is attempt number",attempt)

// }
// else{
//    console.log("you have guess wrong number try again")
//    alert("no")

// }



