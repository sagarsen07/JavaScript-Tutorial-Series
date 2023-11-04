// console.log("hello world");
// console.error("this is an error");
// console.warn("this is a warning");

// let score;
// score = 50;
// console.log(score);

// const win = 10;
// //win = 45;
// console.log(win);

//#Data Types :-
// (a) string  (b) number   (c) boolean   (d)null  (e)undefined   (f)symbols

//const name = "Sagar";
//const age = 22;
// const isCool = true;
// const rating = 9.5;
// const x = null;
// const y = undefined;
// let z ;


// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isCool);
// console.log(typeof rating);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);


//console.log("my name is " + name + " and i am " + age + " years old");

//another way of doing this is 
//console.log(`my name is ${name} and i am ${age} years old`);
// (`) this is not single quote...

//another way of doing the same thing
//const hello = `my name is ${name} and i am ${age} years old`;
//console.log(hello);

// const s = 'Hello World!';

// console.log( s.length );
// console.log( s.toUpperCase() );
// console.log( s.toLowerCase() );
// console.log( s.substring(0,5) );
// console.log( s.substring(0,5).toUpperCase() );
// console.log( s.split(''));

// const a = 'computer, IT, code, Technology';
// console.log(a.split(', ') )


/* ARRAYS*/
//Arrays:- arrays are the variables that holds multiple values.

//How to create an array
//there are multiple ways to create an array

// //(1)
// const num1 = new Array(1,2,3,4,5);
// console.log(num1);

// //(2)
// const num2 = [1,2,3,4,5];
// console.log(num2);

// //(3)
// const fruits = ['apples' , 'mango' , 'pears' , 'banana'];
// console.log(fruits);

// //in javascript an array can hold variables of multiple datatypes
// const x = ['apple' , 10 , true];
// console.log(x);

// const fruits = ['apple' , 'mango' , 'pears'];
// console.log(fruits);

// fruits.push('papaya');
// console.log(fruits);

// fruits.unshift('berries');
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// console.log(Array.isArray(fruits));

// console.log(fruits.indexOf('mango'));




// //OBJECT LITERALS

// const person= {
//     firstName: 'Sagar' ,
//     lastName: 'Sen' ,
//     age: 22 ,
//     hobbies: ['music', 'coding', 'videos'],

//     address: {
//         street: '1, shivalik enclave',
//         house : '7' ,
//         city: 'chhapraula, GB Nagar',
//         state: 'UP'
//     }
// }

// console.log(person.firstName, person.lastName, person.age, person.address, person.hobbies);

// //to access the datamembers of a object we have to pull out the data members out of the object
// const{firstName , lastName, age, address:{street, city} } = person;

// console.log(firstName);
// console.log(lastName);
// console.log(city);

// person.email = 'sagar@gmail.com';
// console.log(person);





///////////////////////LOOPS/////////////////////////
// const todos = [
//     {
//         id: 1,
//         work: 'Take out Trash',
//         isCompleted: true
//     },

//     {
//         id: 2,
//         work: 'Meeting with boss',
//         isCompleted: true
//     },

//     {
//         id: 3,
//         work: 'Dentist appointment',
//         isCompleted: false
//     }
// ];

// //////FOR LOOP
// for (let i = 0 ; i < 10 ; i++){
//     console.log(`for loop iteration number ${i}`);
// }
// console.log('\n  \n  \n');
// //////WHILE LOOP
// let j = 0;
// while (j < 10){
//     console.log(`while loop iteration number ${j}`);
//     j++;
// }

// //////loop the above created array

// for (let i = 0 ; i < todos.length ; i++){
//     console.log(todos[i].work);
// }

// console.log('\n\n\n');

// //Another method to apply FOR loop

// for (let x of todos){
//     console.log(x.id);
//     console.log(x.work);
// }


// /////////FOREACH  LOOP
// todos.forEach(function(x) {
//     console.log(x.work);
// });


// console.log('\n\n\n');
// /////////MAP..........
// const y = todos.map(function(x){
//     return x.work;
// });
// console.log(y);

// console.log('\n\n\n');
// ////////FILTER
// const y = todos.filter(function(x){
//     return x.isCompleted === true;
// });
// console.log(y);


// ////We can combine these high order array methods to get a powerful output like given below:
// const y = todos.filter(function(x){
//     return x.isCompleted === true;
// }).map(function(x){
//     return x.work;
// });
// console.log(y);/// it is a very powerful programming methodology




///////CONDITIONALS.................
/// (1) if-else are same as c++
/// (2) Ternary

// const x = 10;

// const color= x>  10 ? 'Red' : 'Blue';
// console.log(color);

/// (3) Switch statements

// const color = 'green';

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;

//     case 'blue':
//         console.log('color is blue');
//         break;

//     case 'green':
//         console.log('color is green');
//         break;

//     default:
//         console.log('invalid Input');
//         break;
// }



////////////////FUNCTIONS///////////////
// function addNum (num1 , num2){
//     console.log (num1 + num2);
// }
// addNum (4,5);


//////// OR ////////
// function addNums (num1 = 1 , num2 = 1){
//     return num1+num2;
// }
// console.log(addNums(4,5) );

/////Another Method of Function
// const fun = (num1=1 , num2=1) => num1+num2;
// console.log(fun(9,2) );




////////// OOPs //////////////
// function Person (firstName , lastName , dob){ //Constructor Function: name of the constructor function always starts with the capital letter.
//     this.shruKaNaam = firstName;
//     this.surName = lastName;
//     this.janam = new Date(dob);
//     this.getBirthYear = function(){
//         return this.janam.getFullYear();
//     };
//     this.getName = function(){
//         return `${this.shruKaNaam} ${this.surName}`;
//     };
// }

// const person1 = new Person('Sagar', 'Sen', '6-16-2001');
// const person2 = new Person('Khushboo', 'Sen', '6-27-1999');

// console.log(person1);

// console.log(person2.janam)

// console.log(person2.janam.getFullYear());
// console.log(person1.getBirthYear());

// console.log(person1.getName());



///////as in the above code functions like "getBirthYear" and "getName" are declared in the constructor, however it is not the best way to define the functions in a constructors as in the output it also shows the function that doesnt look good, so to avoid these things there is an another way of defining function for a constructors and that is to define them outside the constructor but link it with the prototype keyword as shown below.

// function Person (firstName , lastName , dob){
//     this.shruKaNaam = firstName;
//     this.surName = lastName;
//     this.janam = new Date(dob);
// }

// Person.prototype.getBirthYear = function(){
//     return this.janam.getFullYear();
// };

// Person.prototype.getName = function(){
//     return `${this.shruKaNaam} ${this.surName}`;
// }

// const person1 = new Person('Sagar', 'Sen', '6-16-2001');
// const person2 = new Person('Khushboo', 'Sen', '6-27-1999');

// console.log(person1.getBirthYear() );
// console.log(person2.getName() );






//////ok the above shown code is of constructor and its functions but a standard way of doing all this is to do it with the help of class.

/////////////////////******CLASS******////////////////////
// class Person{
//     constructor(name, surname, date){
//         this.firstName = name;
//         this.lastName = surname;
//         this.dob = new Date(date);
//     }

//     getBirthYear(){
//         return this.dob.getFullYear();
//     }

//     getName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// const person1 = new Person ('Sagar', 'Sen', '6-16-2001');

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.dob);

// console.log(person1.getBirthYear());
// console.log(person1.getName());

// console.log(person1);
/////why? because class is much easier to implement and class is much organised .





//////////////////////// D.O.M ///////////////////////////

//DOM is a document object model basically the tree like structure of the whole html and css document.

//Selectors:- DOM Selectors, as the name suggests is used to select HTML elements within a document using JavaScript.

// There are mainly two categories of DOM selectors
// (1) Simple Selectors: used to select elements on the basis of name,  class,id.

//console.log(document.getElementById('my-form'));
////OR
//const form = document.getElementById('my-form');
//console.log(form);

//console.log(document.querySelector('h1')); //as it is a single element selector so it will only select that element that occur first.
//console.log(document.querySelector('div'));



// (2) Multiple Selectors: Select elements based on a specific relationship between them.

//console.log(document.querySelectorAll('.item'));
//console.log(document.querySelectorAll('div')); //it gives output as NodeList which is somewhat similar to the array. and hence we can perform array methods on the output of this selector.

// console.log(document.getElementsByClassName('item'));

//console.log(document.getElementsByTagName('li'));

//printing these items via forEach loop

// const items = document.querySelectorAll('.item');

// items.forEach(function(x){
//     console.log(x)
// });

//items.forEach( (item)  =>console.log(item) );


//////////////Methods on Selectors

//const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();// this removes the last child of the class

// we can also edit the content via seectors
// ul.firstElementChild.textContent="Hello sagar sen ji";
// ul.children[1].textContent='good morning Sagar Sen';
// ul.lastElementChild.innerHTML= '<h1>Ram Ram Sariya ne</h1>';

//we can also alter the Css property of any element by Selectors.

//const cssAlter = document.querySelector('.btn');
//cssAlter.style.background = 'red';
//more actions on the selectors can be done like eventlistner

// cssAlter.addEventListener ('click', (e)=>{
//     e.preventDefault();
//     console.log('click');
//     document.querySelector('#my-form').style.background='#ccc';
//     document.querySelector('body').classList.add('bg-dark');
// })