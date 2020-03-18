// ---          JavaScript DOM crash course on youtube          ---
// We can take HTML elements and put them in to variables and work with them
//console.log(window);     // this is parrent object of the browser

/*
window.alert(1);
alert(2);
*/

//  ---          Single element selectors           ---
//console.log(document.getElementById('my-form'));      // this is main
//const form = document.getElementById('my-form');

//console.log(document.querySelector('.container'));    // this is main

// ---          Multiple elements selectors         ---
//console.log(document.querySelectorAll('.item'));       // this is main


//console.log(document.getElementsByClassName('item'));
// if you want to use Array methods on it you should convert it to Array

//console.log(document.getElementsByTagName('li'));

//  ---         Loop            ---
//const items = document.querySelectorAll('.item');
//items.forEach((item) => console.log(item));

//  ---         Manipulationg the DOM, changing         ---

const ul = document.querySelector('.item');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Oleg';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red'
