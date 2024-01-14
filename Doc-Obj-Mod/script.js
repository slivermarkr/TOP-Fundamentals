const container = document.querySelector("#container");

const content = document.createElement("div");
const para = document.createElement("p");
const headerThree = document.createElement("h3");
const div = document.createElement("div");
const headerDiv = document.createElement("div");
const paraDiv = document.createElement("para");


content.classList.add("content");

content.textContent = "This is the glorious text-content!";
para.textContent = "Hey I'm red!";
para.style.color = "red";
headerThree.textContent = "I'm a blue h3!";
headerThree.style.color = "blue";

div.style.border = "2px solid black";
div.style['background-color'] = "pink"
headerDiv.textContent = "I'm in a div";
paraDiv.textContent = "ME TOO!";



container.appendChild(content);
container.appendChild(para);
container.appendChild(headerThree);
container.appendChild(div);
div.appendChild(headerDiv);
div.appendChild(paraDiv);