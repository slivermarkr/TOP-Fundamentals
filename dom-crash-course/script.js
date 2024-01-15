//console.dir(document);
/*
console.log(document.head)
console.log(document.body);
let items = document.getElementsByClassName('list-group-item');

console.log(items);
items[0].style.backgroundColor = 'yellow';
items[1].style.backgroundColor = 'aqua';

for(let item of items){
    item.style.fontWeight = 'bold';
}*/
//let li = document.getElementsByTagName('li');
//console.log(li)
//console.log(li[0]);
let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');


for(let i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc' ;
}