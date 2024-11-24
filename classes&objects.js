// student = {
//     fullName : "Suryansh Gupta",
//     marks :420,
//     age : 20,
//     printMarks : function(){
//         console.log("marks=",marks)
//     }
// }

// const employee ={
//     calctax () {
//         console.log("tax rate is 10%")
//     } 

// }

// const suryansh = {
//     salary : 50000,
// }

// suryansh.__proto__ =employee;

// const employe ={
//     calctax () {
//         console.log("tax rate is 10%")
//     } 

// }

// const Sachin = {
//     salary : 50000,
//     calctax () {
//         console.log("tax rate is 20%")
//     } 
// }
//  sachin.__proto__ =employe;

// class Tatacar {
//     Start () {
//         console.log("start");
//     }

//     Stop (){
//         console.log("stop");
//     }
//     setBrand(Brand){
//         this.brand = brand;
//     }
//  }

//   let fortuner = new Tatacar();
//   fortuner.setBrand = "fortuner";
//   let Suzuki = new Tatacar();
//   Suzuki.setBrand = "Suzuki";


//   class Tatacar {
//     constructor(brand,milege) {
//         console.log("creating new object");
//         this.brand = brand;
//         this.milege = milege;
//     }
//     Start () {
//         console.log("start");
//     }

//     Stop (){
//         console.log("stop");
//     }
    
//  }

//   let fortuner = new Tatacar("fortuner",14);
//   let Suzuki = new Tatacar("suzuki",16);

  class Person {
    constructor(name){
        this.species =  "homo species";
        this.name = name
        console.log("enter parent constructor")
    }
    eat(){
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    breath(){
        console.log("breath");
    }
    work(){
        console.log("do nothing");
    }
  }

  class Engineer extends Person {
    constructor(branch,name){
        console.log("enter child constructor")

      super(name)
    //    to invoke the parent
        this.branch = branch
        console.log("exit child constructor")

    }
    work(){
        super.eat()
        console.log("solve problem");
    }
  } 
  class doctor extends Person {
    work(){
        console.log("treate the patient");
    }
  } 


  let enggobj = new Engineer("mechanical engineer","suryansh");
  let doctobj = new doctor();


  Data = "secret information"
  class user {
    constructor(name,email){
      this.name = name;
      this.email = email;
    }
    viewData(){
      console.log("data =",Data)
    }
  }

  class Admin extends user {
    constructor(name,email){
      super(name,email)
    }

    editData() {
      Data = "some new data"
    }
  }

  let student1 = new user("suryansh","suryansh@gmail.com")
  let student2 = new user("sachin","sachin@gmail.com")

  let teacher1 = new user("dean","dean@gmail.com")

  let Admin1 = new Admin("suryansh","abc2gmail.com")