
// Select the section with an id of container without using querySelector.
document.getElementById('container');

// Select the section with an id of container using querySelector.
document.querySelector('#container');

// Select all of the list items with a class of “second”.
document.querySelectorAll('.second');

// Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector('ol .third');

// Give the section with an id of container the text “Hello!”.
const container = document.querySelector('#container');
//container.innerText = "Hello!"

// Add the class main to the div with a class of footer.
const mainClass = document.querySelector('.footer');
mainClass.classList.add('main');

// Remove the class main on the div with a class of footer.
mainClass.classList.remove('main');

// Create a new li element.
const ul = document.querySelector('ul');
const newLi = document.createElement('li');

// Give the li the text “four”.
newLi.innerText = 'four';

// Append the li to the ul element.
ul.append(newLi);
/* 
another solution:
let newLi = document.createElement("li");
newLi.innerText = "four"
let list = document.querySelector("ul");
list.appendChild(newLi);
 */

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
let liColor = document.querySelectorAll('ol li');
for (let i=0; i<liColor.length; i++) {
  liColor[i].style.backgroundColor = 'green';
}

// Remove the div with a class of footer
const footer = document.querySelector('.footer');
footer.remove();

