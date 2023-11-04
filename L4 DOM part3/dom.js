///////////////////////////////////////////////////////////////
/////////// <--><--><--> Event Listners <--><--><-->///////////
///////////////////////////////////////////////////////////////

//lets make a button in the HTML file and add some events on that button line:34
// function buttonClick(){
//     console.log('button Clicked once');
// }
//this was old method

//line38
// var btn = document.getElementById('button').addEventListener('click', function(e){
//     console.log('button 1,2,3'); // instead of declaring function here we can also call a function from here
//     document.getElementById('header-title').textContent = 'Changed';
//     document.getElementById('main').style.backgroundColor = 'olive';
//     console.log(e);
// });


                      // OR \\

// var btn = document.getElementById('button').addEventListener('click', clickKiya);

//  function clickKiya(e) {
//     console.log('button 1,2,3');
//     document.getElementById('header-title').textContent = 'Changed';
//     document.getElementById('main').style.backgroundColor = 'olive';
//     console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // var out = document.getElementById('output');
    // out.innerHTML = '<h3>'+e.target.id+'</h3>';

    // console.log(e.type);
    // console.log(e.clientX);
    // console.log(e.clientY);

//     console.log(e.altKey);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);
//  }


// var btn = document.getElementById('button');
// btn.addEventListener('click', runEvent);
// btn.addEventListener('dblclick', runEvent);
// btn.addEventListener('mousedown', runEvent);
// btn.addEventListener('mouseup', runEvent);

// function runEvent(e) {
//     console.log('EVENT YTPE: '+e.type);
// }

// var bx = document.getElementById('box');
// bx.addEventListener('mouseenter', runEvent);
// bx.addEventListener('mouseleave', runEvent);

// bx.addEventListener('mouseover', runEvent);
// bx.addEventListener('mouseout', runEvent);

// x.addEventListener('mousemove', runEvent);

// function runEvent(e) {
//     console.log('EVENT TYPE: '+e.type);

    // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3> <h3>MouseY: '+e.offsetY+'</h3>';
    //bx.style.backgroundColor = "rgb(40,"+e.offsetX+","+e.offsetY+")";
//     document.body.style.backgroundColor = "rgb(40,"+e.offsetX+","+e.offsetY+")";
// }

var itemInput = document.querySelector('input[type="text"]');
var fm = document.querySelector('form');

// itemInput.addEventListener('keyup', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

itemInput.addEventListener('cut', runEvent);
itemInput.addEventListener('paste', runEvent);

function runEvent(e) {
    console.log('EVENT TYPE: '+e.type);
    

//     console.log(e.target.value);
//     document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
    // document.body.style.display = 'none';
}



// bs 4 min ki video bachi hui thi or bs thore se or types ke events btaye the same tarike se to kabhi jarurat pde to google kr sakte hai ya fir video dekh sakte hai koi dikkat wali baat nhi hai