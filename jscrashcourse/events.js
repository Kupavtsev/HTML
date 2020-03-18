//1:25:00
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {      //click, mouseover, mouseout
    e.preventDefault();
    //console.log(e);
    //console.log(e.target);
    //console.log(e.target.className);    // we can get any atributs of this object

    document.querySelector('#my-form').style.background = '#ccc';

    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('header').classList.add('center', 'categories')

    document.querySelector('.item').lastElementChild.innerHTML = '<h1>Hello</h1>';
});