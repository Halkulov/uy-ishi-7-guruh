// =================== var let const
// var name = "Tom";
// var name = "Jack";
// name = 'Tom'

// console.log(name);

// console.log(name);

// let age = 56;
// let age = 100;
// age = 101

// const year = 2018;
// console.log(year);

// for (let i = 1; i <= 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }

/* ================= arrow function */
// function sayHello() {
//   console.log("Hello");
// }

// const sayHello2 = () => {
//   console.log("Hello");
// };

// const sayHello2 = () => console.log("Hello");

// const sayHello2 = (name) => console.log("Hello " + name);

// const sayHello2 = name => console.log("Hello " + name);

// const sayHello2 = (name, age) => console.log("Hello " + name + " " + age);

// sayHello2("Tom", 50);

// function context() {
//   // Object
//   console.log("function:  ", this);
//   return this;
// }

// const contextArrow = () => {
//   // {}
//   console.log("======>: ", this);
//   return this;
// };

// const f = function () {
//   // Object
//   console.log("f>>>>>: ", this);
// };

// const first = context();
// const second = contextArrow();
// f();
// console.log(first === second);
//////////////////////////////// ======= spread rest
// const arr = [1, 2, 3, 4, 5, 6];

// function sum(a, b, c, ...rest) {
//   console.log(rest);
//   return a + b + c;
// }
// // console.log(...arr);
// console.log(sum(...arr));

// const person = {
//   age: 415,
//   name: "sad",
//   id: "as45asd57qwe7qw8e7",
//   surname: "asdsad",
// };

// console.log({ ...person });

/* // function eqwe(){
// let x = 7
// let y = 15

// log('x = ', x) => x = 15
// log('y = ', y) => y = 7
} */







// function swap (x, y) {

//     let a = 5;
//     let b = 11;


//     console.log("a = ", a);
//     console.log("b = ", b);

//     console.log("Swaping...");
//     a = a;
//     b = b;

//     console.log("a = ", b);
//     console.log("b = ", a);
// }

// swap (5, 11);



function r (x,y){
    let a = 5
    let b =11
    console.log("a= ",a)
    console.log("b= ",b)
    console. log("r.......")
    a= a
    b= b
    console.log("a=", b)
    console.log("b=", a)

}
r (5, 11);