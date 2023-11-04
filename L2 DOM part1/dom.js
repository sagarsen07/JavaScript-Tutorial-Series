// DOM: stands for DOCUMENT OBJECT MODEL
// It is basically a structured representation of your HTML document
//   (i) tree of nodes/elements created by the browser
//   (ii) javascript can be used to manipulate the DOM and its elements
//   (iii) it has Object oriented Representation: that means each node has its own properties and methods

//to examine the document object or to view the DOM model of the object
//console.dir(document);

//now we can access any element of the DOM shown by the above function as follows
// console.log(document.domain);  // we can use things other than domain like document.compatMode
// console.log(document.compatMode);
// console.log(document.URL);
// console.log(document.title);
// //not only read and view we can also alter the values of elements
// document.title = "Sagar Sen";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);
// console.log(document.images);

//////////// SELECTORS//////////////
//------    getElementById  ------//
// console.log(document.getElementById('header-title') );  
//                 //or
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = "Hello"; // it ignores the styling of the text content done in the HTML file and display the content ignoring the styling part
// headerTitle.innerText = 'GoodBye'; // but it pays attention to the styling of the text file and display according to the applied styling
// headerTitle.innerHTML = '<h3>Sagar Sen</h3>';
// headerTitle.style.borderBottom = 'solid 3px black';
// var header = document.getElementById('main-header');
// header.style.borderBottom = '3px solid black';

//------- getElementsByClassName --------//
// var items = document.getElementsByClassName('list-group-items');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = ("Hello Sagar");
// items[0].style.fontStyle = 'italic';
// items[0].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'aqua';

// //items.style.backgrounfColor = 'yellow'; // this will not work because in order to apply changes to all the selected items we have to use the loops as follows
// for (var i=0; i < items.length; i++){
//     items[i].style.backgroundColor = 'orange';
// }


//--------- getElementsByTagName ----------//
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = ("Hello Sagar");
// li[0].style.fontStyle = 'italic';
// li[0].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'aqua';

// //items.style.backgrounfColor = 'yellow'; // this will not work because in order to apply changes to all the selected items we have to use the loops as follows
// for (var i=0; i < li.length; i++){
//     li[i].style.backgroundColor = 'orange';
// }

//----------- querySelector ------------// 
//The querySelector() method returns the first element that matches a CSS selector. To return all matches (not only the first), use the querySelectorAll() instead.Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid.

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 5px blue';

// var inp = document.querySelector('input');
// inp.value = 'hello world!';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Bhej do';

// var item = document.querySelector('.list-group-items');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-items:last-child');
// lastItem.style.color = 'orange';

// var secondItem = document.querySelector('.list-group-items:nth-child(2)');
// secondItem.style.color = 'olive';


//------------- quertSelectorAll -------------//
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'hello ji';

// var oddSelector = document.querySelectorAll('li:nth-child(odd)');
// for(var i =0; i< oddSelector.length; i++){
//     oddSelector[i].style.backgroundColor = 'grey'
// }

// var evenSelector = document.querySelectorAll('li:nth-child(even)');
// for(var i =0; i< evenSelector.length; i++){
//     evenSelector[i].style.backgroundColor = 'brown'
// }