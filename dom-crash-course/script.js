// //console.dir(document);
// /*
// console.log(document.head)
// console.log(document.body);
// let items = document.getElementsByClassName('list-group-item');

// console.log(items);
// items[0].style.backgroundColor = 'yellow';
// items[1].style.backgroundColor = 'aqua';

// for(let item of items){
//     item.style.fontWeight = 'bold';
// }*/
// //let li = document.getElementsByTagName('li');
// //console.log(li)
// //console.log(li[0]);
// // let odd = document.querySelectorAll('li:nth-child(odd)');
// // let even = document.querySelectorAll('li:nth-child(even)');


// // for(let i = 0; i < odd.length; i++){
// //     odd[i].style.backgroundColor = '#f4f4f4';
// //     even[i].style.backgroundColor = '#ccc' ;
// // }


// let items = document.querySelector('#items');
// // // 
// // console.log(items.children);
// // items.children[1].style.backgroundColor = 'yellow';
// // // items.firstElemendChild.style.backgroundColor = 'red';

// // console.log(items.previousElementSibling);
// // console.log(items.nextElementSibling);

// // items.previousElementSibling.style.backgroundColor = 'red';
// const header = document.querySelector('header .container');
// const h1 = document.querySelector('header h1');

// let div = document.createElement('div');
// div.className = 'cont';
// div.id = "hello";

// div.setAttribute('title','hihello');

// let divText = document.createTextNode("Hello World");



// div.appendChild(divText);
// header.insertBefore(div,h1);

// div.style.fontSize = '30px'
// console.log(div);
const button = document.querySelector('#button');

button.addEventListener('click',clicked);


function clicked(){
    let header = document.querySelector('#header-title');
    header.textContent = "Hello Mom";
}