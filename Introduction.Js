console.log("Hello World!!!")
console.log("Suryansh")

 var num =2+2
console.log(num)
console.log(num+2+3)

var radius=5
const pi=3.14
radius=6
area= pi*radius*radius
console.log(area)

var hight=12
var base=15
area=1/2*hight*base
console.log(area)

var userName= "Suryansh"
//  this variable shows camel casing rule
console.log(userName)

var user_name= "Abhishek"
//  this variable shows snake casing rule
console.log(user_name)

console.log("Suryansh's account")

var numb=34
console.log(numb)
console.log(typeof numb)

var bol=6>4
console.log(bol)
bol=7>9
console.log(bol)
console.log(typeof bol)

var firstName="Suryansh"
var lastName="Gupta"
var user= firstName+lastName
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
var nm=4
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

var x=6
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
var num1=8
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

var m=4
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

var data = 8 >= 8
console.log(data)

var d = "Bat"
var g = "Batter"
result = d > g
console.log(result)
result = d < g
console.log(result)

var p = 3
var h = "6"
result = p > h
console.log(result)
result = p < h
console.log(result)

var f = 1 
var r = "6"
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
var num5 = 14;
var num6 = 12;
if (num5>num6)
    console.log("num5 is greater");
else{
    console.log("num6 is greater");
    console.log("yee..");
}
// when the number of lines more than one we use {}bracket

console.log("bye...");

var num5 = 8;
var num6 = 19;
var num7 = 10;
if (num5>num6 && num5>num7){
  console.log("num5 is greatest");
}
else if( num6>num7){
  console.log("num6 is greatest");
}
else {
  console.log("num7 is greatest");
}

// assignment
var num5 = 7;
var num6 = 8;
if (num5%2 ==0 && num6%2 ==0){
  console.log("both are even");
}
else if (num5%2 ==0){
  console.log("num5 is even");
}
else {
  console.log("num6 is even");
}

var num5 = 8;
if (num5%2===0)
      result = "Even"
else
      result = "Odd"
    console.log(result)

// Ternary Operator
result = num5%2===0 ? "Even" : "Odd"
    console.log(result);

    // Switch Statement
let day = "Holiday"

  switch(day){
    case "Monday" :
      console.log("4am");
      break;
    case "Tuesday" :
    case "Wednesday" :
      console.log("5am");
       break;
    case "Thursday" :
      console.log("6am");
       break;
    case "Friday" :
      console.log("8am");
       break;
    case "Saturday" :
      console.log("7am");
       break;
    case "Sunday" :
      console.log("9am");
      break;
    default :
     console.log("10am watch movies and have fun")

  }

  console.log("bye...")

  // Template Literal
  var num5 = 5
  var num6 = 8
  result = num5 + num6

  console.log(`The addition of ${num5} and ${num6} is ${result}`)
    // console.log("The addition of 5 and 8 is 13")
    // console.log("The addition of " + num5 + "and" + num6 + "is" + result)

    console.log("My name is \nSuryansh Gupta")
    console.log(`My name is
    Suryansh Gupta`)

    // While loop
        // initialize, condition , increment
        var i = 1;
  
        while(i<=6)
        {
          console.log("Suryansh",i);
          // i = i + 1
          i++;
        }
console.log(i)
       
var j = 6

while (j>=0)
{
  console.log("Suryansh",j)
  j--;
}
console.log(j)

var i = 1;

do
{
  console.log("Sahil",i);
  i++;
}while(i<=5)

  // For Loop

  
  for(let i=1;i<=5;i++)
  {
    console.log("Suryansh",i);
    for(let j=1;j<=5;j++)
      // Nested Loop
    console.log("Hello",j);
  }

  // when we have starting and ending point both in a loop then we will use For Loop
  for(var i=1;i<=100;i++)
  {
    if(i%2===1)
    console.log(i)
  }
  var num = 87645
  console.log(num%10)
  num = parseInt(num/10)
  console.log(num%10)
  num = parseInt(num/10)
  console.log(num%10)
  num = parseInt(num/10)
  console.log(num%10)
  num = parseInt(num/10)
  console.log(num%10)

  // when we do not know the ending point we use while loop
  var num = 87645
  while(num>0)
  {
    console.log(num%10)
    num = parseInt(num/10)
  }

  // Object

  var input = 'name'
  var alien = {
    name : 'Suryansh',
    tech : 'javascript',
    'work exp' : 4,
  }
  console.log(alien,typeof alien)
  console.log(alien.name)
  console.log(alien.tech)
  console.log(alien['name'])
  console.log(alien['tech'])
  console.log(alien['work exp'])

  console.log(alien[input]);

  var alien = {
    name : 'Suryansh',
    tech : 'javascript',
    laptop : { brand : 'Asus',
      ram : 4,
      cpu : 'i5'


    }
  }
  console.log(alien)
  console.log(alien.laptop)
  console.log(alien.laptop.cpu)
  console.log(alien.laptop.brand.length)
  console.log(alien.laptop?.brand?.length)

  delete alien.laptop
  console.log(alien);

  
  var alien = {
    name : 'Suryansh',
    tech : 'javascript',
    laptop : { brand : 'Asus',
      ram : 4,
      cpu : 'i5'


    }
  }

  for(let key in alien)
  {
    console.log(key,alien.tech)
  
  }
  
  for(let key in alien)
    {
      console.log(key,alien[key]);
    
    }

    // Function

    function greet()
    {
    console.log("Hello World");
    }
    greet();
    greet();
    console.log("Suryansh")
    greet();
    greet();

function greet()
{
  return "Hello World!!"
console.log(str);
}
var stri = greet();
console.log(stri);

function greet(user)
{
  return 'Hello ${user}!!'
}
user = 'Suryansh'
var stri = greet(user);
console.log(stri);


let heros = ["shaktiman" ,"ironman", "thor"]
console.log(heros)