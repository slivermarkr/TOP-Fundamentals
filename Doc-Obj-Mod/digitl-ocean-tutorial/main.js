const id = document.getElementById('demo');
const cl = document.getElementsByClassName('demo')
const tg = document.getElementsByTagName('article');
const qry = document.querySelector('#demo-query');
const qryAll = document.querySelectorAll('.demo-query');

console.log(id);
console.log(cl)
console.log(tg);
console.log(qry);
console.group(qryAll);


id.style.border = '3px solid purple';

for(let i = 0; i < cl.length; i++) {
    cl[i].style.border = '3px solid orange';
}

for(let i = 0; i < tg.length; i++) {
    tg[i].style.border = '3px solid blue'
}

qry.style.border = '3px solid red'

for(let i = 0; i < qryAll.length; i++) {
    qryAll[i].style.border = '3px solid yellow';
}

