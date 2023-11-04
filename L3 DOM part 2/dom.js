// no new HTML, CSS file is created, continued from hwere the lecture 2 ended.


//*********** TRAVERSING THE DOM **************//
//var itemList = document.querySelector('#items');


//--- parentNode property

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'teal';
// console.log(itemList.parentNode.parentNode);


//--- parentElement property

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'teal';
// console.log(itemList.parentElement.parentElement.parentElement); // it also does the exact same thing that the parent Node does


//---childNodes property
//console.log(itemList.childNodes);
//console.log(itemList.children); // always use this(children) instead of childNode as it omits the line break
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow';


//--- firstChild property
// this gives the first child node of the function generally it give '#text' as output, that is because of linebreak as first child node is linebreak
//console.log(itemList.firstChild); //so instead of this use firstElementChild as follows

//--- firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello jiiiiiiiii';


//--- lastChild property
// this gives the last child node of the function generally it give '#text' as output, that is because of linebreak as first child node is linebreak
//console.log(itemList.firstChild); //so instead of this use firstElementChild as follows

//--- firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello jiiiiiiiii';

//--- nextSibling
// console.log(itemList.nextSibling);  // use nextElementSibling instead of nextSibling for the same reason
// console.log(itemList.nextElementSibling);  // it is showing Null because it doesnt have any sibling

//--- previousSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// console.log(itemList.previousElementSibling.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';



// now we will learn that how can we create element and insert them, till now we were only selecting them and altering them via Selectors, but now we will create them

//<--><--><--><-->//-------- createElement ----------//<--><--><-->\\

//create a div...
// var newDiv = document.createElement('div');
// console.log(newDiv);

// // Adding class to it
// newDiv.className = 'Sagar-Sen';
// console.log(newDiv);

// // Adding a id to it
// newDiv.id = 'Hello-Sagar';
// console.log(newDiv);

// // Add Attribute
// newDiv.setAttribute('title', 'Hello Div'); // it will create a new attribute named as 'title' and place the value "hello Div" in it.
// console.log(newDiv);

// //enter some text content in it

// // step-1: create a new text Node
// var newDivText = document.createTextNode('Hello Sagar Sir');

// // step-2: now Append(ADD) this node in the newDiv
// newDiv.appendChild(newDivText);
// console.log(newDiv);

// // as of now this newDiv is still in javaScript not in the DOM. So to Insert it to the DOM we have to perform the following function.

// // here i am going to insert it at right below the div having class 'container' and having the parent element as 'header' line:12 & 13 in index.html
// var cont = document.querySelector('header .container');
// var x = document.querySelector('header h1');
// cont.insertBefore(newDiv,x);

// newDiv.style.fontSize = '30px';