var myList = document.getElementsByTagName('ul')[0];

var lastItem = myList.lastElementChild;

// ADD NEW ITEM TO END OF LIST

var newItem = document.createElement("li");
var newText = document.createTextNode("cream");
newItem.appendChild(newText);

lastItem.insertAdjacentElement("afterend", newItem);

// ADD NEW ITEM START OF LIST

var firstItem = myList.firstElementChild;

newItem = document.createElement("li");
newText = document.createTextNode("kale");
newItem.appendChild(newText);

firstItem.insertAdjacentElement("beforebegin", newItem);

// ADD A CLASS OF COOL TO ALL LIST ITEMS

var listItems = document.getElementsByTagName('li');

for(var i = 0; i < listItems.length; i++) {
    listItems[i].setAttribute('class', 'cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var header = document.getElementsByTagName('h2')[0];

itemNumber = listItems.length;

header.innerHTML += '<span>' + itemNumber + '</span>';
