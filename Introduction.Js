console.log("Hello World!!!")
console.log("Suryansh")

 var num =2+2
console.log(num)
console.log(num+2+3)

let radius=5
const pi=3.14
radius=6
area= pi*radius*radius
console.log(area)

let hight=12
let base=15
area=1/2*hight*base
console.log(area)

let userName= "Suryansh"
//  this variable shows camel casing rule
console.log(userName)

let user_name= "Abhishek"
//  this variable shows snake casing rule
console.log(user_name)

console.log("Suryansh's account")

let numb=34
console.log(numb)
console.log(typeof numb)

let bol=6>4
console.log(bol)
bol=7>9
console.log(bol)
console.log(typeof bol)

let firstName="Suryansh"
let lastName="Gupta"
let user= firstName+lastName
console.log(user)
console.log
user=firstName+" "+lastName
console.log(user)
user='Suryansh Gupta "Inadia" '
console.log(user)
user="Suryansh Gupta \"India\" "
console.log(user)
user='Sury\tansh Gupta "India" '
console.log(user)
user='Suryansh Gupta "In\ndia" '
console.log(user)
user='Sury\bansh Gupta "India" '
console.log(user)
flo=9.5
console.log(flo)
console.log(typeof flo)

FirstNum=12
SecondNum=15
sum= FirstNum+ SecondNum
Mul=FirstNum*SecondNum
div=SecondNum/FirstNum
sub=SecondNum-FirstNum
console.log(sum)
console.log(Mul)
console.log(div)
console.log(sub)


//  Type Conversion
let nm=4
console.log(nm)
console.log(nm,typeof nm)
nm="4"
console.log(nm,typeof nm)
nm=Number("4")
console.log(nm, typeof nm )

// type coercion
// string+String=String
// string+number=String
// string-number=number

let x=6
 console.log(x,typeof x)
 x= x+" "
 console.log(x,typeof x)
 x= x-2
 console.log(x,typeof x)
 x= +x+2
 console.log(x,typeof x)

 

 x=!x
 console.log(x,typeof x);

//  All the integers are true Boolean except 0
console.log(Boolean(5))
console.log(Boolean(-9))
console.log(Boolean(0))

 x = Number("367 suryansh")
console.log(x)
x = parseInt("367 suryansh")
console.log(x)

y= " Vishal Soni"
console.log(y)
console.log(typeof y)
console.log(typeof y,y)

// Arithmatic Operators
let num1=8
num2=6
result=num1+num2
console.log(result)
result=num1-num2
console.log(result)
result=num1*num2
console.log(result)
result=num1/num2
console.log(result)
result=num1%num2
console.log(result)

result=num1+2
console.log(result)
// num1 =num1+3
num1 +=3
console.log(num1)
num1+=1
console.log(num1)
num1++
// incriment
// ++num1 pre incriment
// num1++ post incriment
console.log(num1)
++num1
console.log(num1)
num2-=1
console.log(num2)
num1--
// decriment
console.log(num1)

num3 =true
num4 =true
result=num3+num4
console.log(result)

for (let i = 0; i <= 10; i+=2) {
    // text += cars[i] + "<br>";
    console.log("value of i",i)
  }
  for (let i =1; i <= 10; i+=2) {
    // text += cars[i] + "<br>";
    console.log("value of i",i)
  }

  let c=0

  for (let i =1; i <= 10; i+=2) {
    // text += cars[i] + "<br>";
    c = c+i
    // console.log("value of i",i)
  }

  console.log(" sum of i",c)

let m=4
  let n = ++m
  // pre increment first it will increment then it will asign the value
console.log(m,n)
n = m++        
// post increment means first it will fetch the value and then assign the value
// first assign the value then increment
console.log(m,n)

result = m*m*m
console.log(result)
result = Math.pow(6,3)
console.log(result)
result = m**3
console.log(result)

let data = 8 >= 8
console.log(data)

let d = "Bat"
let g = "Batter"
result = d > g
console.log(result)
result = d < g
console.log(result)

let p = 3
let h = "6"
result = p > h
console.log(result)
result = p < h
console.log(result)

let f = 1 
let r = "6"
result = f = r
console.log(result,typeof result)
result = f == r
console.log(result)
result = f === r
console.log(result)

var a = 10
console.log(a)
var a = "ten"
console.log(a)
let str = 5
str = 100
console.log(str)
const cd = 10
console.log(cd)
// cd = 11
// console.log(cd)
// var can be redclared and reassign 
// let can not be redeclare but can be reassigned
// const can not be redeclare and reassigned
console.log(Date())

// Logical Operator 
var numa =5
var numc =8
var numd = 9
result = numa < numc && numd > numc
// && denotes AND operator here 
console.log(result)
result = numa > numd || numc < numa
// || denotes OR operator here
console.log(result)
res = !result
// ! denotes OR operator here
console.log(res,result)

// Conditional Statement
