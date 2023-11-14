

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit',addItem);
function addItem(e) {
    e.preventDefault();
    // console.log(1);

    // get input value
    var newItem = document.getElementById('item').value;
    // creating the new element and adding it to the list
    var elem = document.createElement('li');
    // now alloting this item the same class as other items in the list
    elem.className = 'list-group-item';
    // add text node with input value
    elem.appendChild(document.createTextNode(newItem) );
    
    // Add a delete button to it as other list itmen have
    var del_btn = document.createElement ('button');
    del_btn.className = 'btn btn-danger btn-sm float-right delete';
    del_btn.appendChild(document.createTextNode('X') );
    elem.appendChild(del_btn);
    
    
    itemList.appendChild(elem);
}



// Delete Event
itemList.addEventListener('click' , removeItem);

function removeItem (e) {
    if (e.target.classList.contains ('delete') ) {
        if (confirm ('Are yo SURE?') ) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems);

function filterItems (e) {
    // convert the text to loweercase
    var text = e.target.value.toLowerCase();

    //GET LIST
    var items = itemList.getElementsByTagName('li');
    // Conver to an array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });
}