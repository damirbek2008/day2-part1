// arrow function = a concise way to write function expressions 
                    // good for simple functions that you use only once
                    // (parametres) => some code                       

    // const numbers = [1,2,3,4,5,6,7]

    // const squares = numbers.map((element)=> Math.pow(element, 2))
    // const cubss = numbers.map((element)=> Math.pow(element,3))
    // const evenNums =numbers.filter((element)=> element %2===0)
    // const oddNums =numbers.filter((element)=> element %2!==0)
    // const total = numbers.reduce((element, index)=> element+index)



    // console.log(squares);
    // console.log(cubss);
    // console.log(evenNums);
    // console.log(oddNums);
    // console.log(total);

 




    //   object = A collection of related proerties and/or methodth
    //               Can represet real world objects (people, products, places)
    //            object = {key:value,
//                       function()}



// const person = {
//     fisrtName:"Spongebob",
//     lastName:"Squarepants",
//     age:30,
//     isEmpload: true,
//     sayHello: function(){console.log("Hi there"); }
// }

// const person1 = {
//     firtName:"Damir",
//     lastName:"Kamoliddinov",
//     age:16,
//     isEmpload: false
// }

// person.sayHello();



// console.log(person.fisrtName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.isEmpload);
// // console.log(person.sayHello());





// console.log(person1.firtName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmpload);























// this = reference to the  object where THIS is used
//         (the object depends on the immediate context)
//          person.name = this.name






// const person = {
//     name:"SpongeBob",
//     surname:"bob",
//     age:12,
//     sayHello:function(){console.log(`Hello ${this.name}`);},
//     fullNName: function(){console.log(`Hello ${this.name} and your surname is ${this.surname}`);}
// }




// const person1 = {
//     name:"Mathew",
//     surname:"Reylei",
//     age:40,
//     sayHello:function(){console.log(`Hello ${this.name}`);},
//     fullNName: function(){console.log(`Hello ${this.name} and your surname is ${this.surname} then your age is ${this.age}`);}
// }


// person.sayHello()
// person.fullNName()


// person1.sayHello()
// person1.fullNName()




























// constructor = special method for defining the 
//               properties and methods of objects



// function car (make, model, year, color){
//         this.make=make,
//         this.model=model,
//         this.year=year,
//         this.color=color,
//         this.drive=function(){console.log(`You drive ${model}`);}
// }

// const car1=new car("Ford", "Mustang", 2024, "white")
// const car2=new car("Chevrolet","Camaro",2025,"red")
// const car3=new car ("Tayato","Supra",2010,"gray")

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// car1.drive()


// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);
// car2.drive()



// console.log(car3.make);
// console.log(car3.model);
// console.log(car3.year);
// console.log(car3.color);
// car3.drive()








// class = (ES6 feature) provides a more structured and cleaner way to
//         work with object compared to tradional constructed function
//         ex. static keyword, encapsulation, inheritance
// 





// class Product{
//         constructor(name, price){
//                 this.name=name;
//                 this.price=price;
//         }


//         displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price.toFixed(2)}`);
//         }

//         calculateTotal(salesTax){
//                 return this.price+(this.price*salesTax)
//         }

// }


// const salesTax=0.05;

// const product1=new Product("Shirt", 19,99)
// const product2= new Product("underwear",10)
// product2.displayProduct()
// const total=product1.calculateTotal(salesTax);
// console.log(`Total price (with tax):$${total.toFixed(2)}`);













// Static = keyword that defines properties or methods that belong
//          to a class itself rather then the objects created
//          from that class (class owns anything static, not the objects)











// let arr=["olcha",'qizil olcha', 'yashil olcha']
// let len1=arr.map((string)=>string)
// let len2=arr.map((string)=>string.length  )


// let len=arr.map((string)=> `${string} :`+`${string.length}` )





// console.log(`${len1}` + `${len2}`);
// console.log(`${string} :` )
// console.log(len);