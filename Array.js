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
