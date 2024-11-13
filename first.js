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
 let array =["suryansh","kushagra","sachin","devansh"]
for(let val of array){
   console.log("val=",val)
}
// for in loop is used to iterate the keys of an object
let condidate ={
   name : "Aalok",
   marks:420,
   isPAss : true,
   age : 18
}
for(let key in condidate){
   console.log("key=",key , "val=",condidate[key])
}

str = "Rajkumar"
console.log(str.length)
console.log(str[2])
for(let i=0;i<=7;i++){
   console.log(str[i])
}

// Template literals
special_str = `this is a template literal`
console.log(special_str,typeof special_str)

obj={
   item : "book",
   price : 30,
   pages :150
}
console.log("the cost of",obj.item,"is",obj.price,"rupees")
console.log(`the cost of ${obj.item} is ${obj.price} rupees`)


var names="Suryansh"
 newname =names.toUpperCase(names);
 console.log(newname)
 newname =names.toLowerCase(names);
 console.log(newname)
 var name1 ="suryansh     "
 console.log("name1.length",name1.length)
 newname =name1.trim();
 console.log("newname.length",newname.length)

 console.log(newname)

 str1 ="Mahendra Singh Dhoni"
 str2 ="Sakshi Dhoni"
  console.log(str1.slice(1,5))
console.log(str1.concat(str2))
result = str2.replace("Sakshi","Jiva")
console.log(result)

str = "hello"
console.log(str.slice(0,3))
console.log(str.replace("h","y"))
console.log(str.replaceAll("l","r"))
console.log(str.charAt(4))

 var viewer = prompt("Enter your Name")
 var userName = "@" + viewer + fullName.length
console.log(userName)

// chapter 4

marks =[87,70,65,93,85]
console.log(marks,typeof marks)

movies =["Dilwale","Kgf","Puspa-the rise","Hum Sath Sath hai"]
console.log(movies)
 console.log(movies.length)
 console.log(marks[2])
 console.log(movies[1])

let j=0
while(j<=4){
   console.log(marks[j]);
   j++
}
for(let el of movies){
   console.log(el)

}

marks = [85,97,44,37,76,60]
let sum =0
for(let val of marks){
   sum=sum+val;
}

  average = sum/marks.length
console.log(`average marks of the class ${average}`)

price =[250,645,300,900,50]
// let k = 0
// for(let val of price){
//    let offer= val/10
//    price[k] = price[k] - offer
//    console.log(`value after offer= ${price[k]}`)
//    k++;
// }

for(let i=0; i<price.length;i++){
   let offer= price[i]/10;
   price[i] -= offer;

}
console.log(price)

cities = ["delhi", "uttar pradesh","maharastra","rajsthan","hyderabad"]
fruits =["apple","orange","mango","litchi","banana"]
console.log(cities)
 cities.push("pune")
 console.log(cities)
  deletedcity = cities.pop()
 console.log("deleted",deletedcity)
 console.log(cities)
 console.log(cities.toString())
 console.log(cities.concat(fruits))

 veg = ["potato","bringel","jackfruit"]
 veg.unshift("onion")
 console.log(veg)
  veg.unshift()
console.log(veg)
deletedfruit = fruits.shift()
 console.log("deleted",deletedfruit)

  console.log(veg.slice(0,2))

  num = [1,2,3,4,5,6]
    num.splice(2,0,8,9)
    num.splice(2,0,8,9)
console.log( num)
num.splice(4,2,9)
console.log(num)


companies =[ "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
companies.shift()
console.log(companies)
companies.splice(2,1,"Ola")
console.log(companies)
companies.push("Amazon")
console.log(companies)

// chapter 5
// functions in Js





















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



