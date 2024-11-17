console.log("Hello Suryansh")

function myFunction(){
    console.log("India is a great country!")
    console.log("India is a developing country!")
}
myFunction()

 function newFunction(msg,num){
    //   msg ,num are parameters 
    console.log(msg,num);
}
newFunction("hello",65)
// "hello",65 are argument 
 
function sum(x,y){
    console.log(x+y);
}
sum(7,6)

function sub(x,y){
    console.log(x-y);
}
sub(7,6)

function mul(x,y){
    console.log(x*y);
}
mul(7,6)

function sum(x,y){
    s = x+y;
    return s;
}
let res = sum(40,70)
console.log(res)

function mul(x,y){
    // x,y are local var  they have block scope
    m =x*y;
    return m;
    // any code written after return is not exicute
}
res = mul(6,7);
console.log(res)

const arrowsum = (a,b) => {
    console.log(a+b);
}
arrowsum(4,5)

const arrowmul =(a,b)=>{
    console.log(a*b);
}
arrowmul(6,9)

const arrowsub = (a,b)=> {
    return a-b;
}
sub = arrowsub(8,6);
console.log(sub)

const print= ()=>{
    console.log("Abhishek Chauhan")
}
print()

function countvowels(str){
    let count = 0;
    for(const char of str){
        console.log(char);
    if(char=== "a"||char==="e"||char==="i"||char==="o"||char==="u"){
        count++;
    }
    }
    console.log(count)
}
countvowels("aniket")

const returnvowels=(str)=>{
    let count = 0;
    for(const char of str){
        console.log(char);
    if(char=== "a"||char==="e"||char==="i"||char==="o"||char==="u"){
        count++;
    }
    }
    console.log(count);
}
returnvowels("abecidogu")

// foreach loop is used only for arrays
arr = [ 1,2,3,4,5,6]
arr.forEach(function printval(val) {
    // value at each index   enternal callback function will take every value of array and print it
    console.log(val);
}
)
arr.forEach((val)=>{
    console.log(val);
})
    
let states =["uttar pradesh","rajsthan","maharastra","goa"]
arr.forEach((val,idx)=>{
    console.log(val,idx,states);

}

)
// a functionwhich takes another function as argument(callbackfunction) aand return any val is called Higher Order Function

 num = [1,2,4,6,8]
 arr.forEach((val)=>{
    square = val**2;
    console.log(val,square);
 })

 nums = [1,2,4,6,8]
 arr.forEach((num)=>{
    console.log(num**2)
 })
 let calcsquare =(num)=>{
    console.log(num**2);
 }

 arr.forEach(calcsquare)

 nums=[2,4,6,8]
 nums.map((val)=>{
    console.log(val)
 }
)

newarr =  nums.map((val)=>{
    return val;
 }
)
console.log(newarr)


newarr =  nums.map((val)=>{
    return val+3;
 }
)
console.log(newarr)

nums =[1,2,34,5,6,8,9]
evenArr = nums.filter((val)=>{
    return val%2===0;
})
console.log(evenArr)

nums =[1,2,34,5,6,8,9]
newArr = nums.filter((val)=>{
    return val>5;
})
console.log(newArr)

nums =[1,3,5,7]
 output =nums.reduce((pre,curr)=>{
    return pre+curr;
})
console.log(output)

largval = nums.reduce((pre,curr)=>{
    return pre>curr ? pre:curr;
})
console.log(largval)

marks = [80,76,67,91,94,84,89,95]
 output =marks.filter((val)=>{
    return val>90
})
console.log(output)

usernum = prompt("Enter a number")
arr =[]
for (let i=1;i<=usernum;i++){
    arr[i-1]=i;
}
console.log(arr)
 sum = arr.reduce((pre,curr)=>{
    return pre+curr;
 })
 console.log(sum)

 mul = arr.reduce((pre,curr)=>{
    return pre*curr;
 })
 console.log(mul)
