  let form = document.getElementById('addForm');
  let itemList = document.getElementById('items');
  let filter = document.getElementById('filter');


  itemList.addEventListener('click',deleteItem);
  form.addEventListener('submit',addItem);
  filter.addEventListener('keyup',filterItems);
  
  function addItem(e){
    e.preventDefault();

   let inputItem = document.querySelector("#item").value;

   let li = document.createElement('li');
   let butn = document.createElement('button');

   li.className = "list-group-item";
   butn.className = "btn btn-danger btn-sm float-right delete"

   butn.textContent = "X";

   li.appendChild(document.createTextNode(`${inputItem} `));
   li.appendChild(butn);

   itemList.appendChild(li);
  }

  function deleteItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;


            itemList.removeChild(li);
        }
    }
  }

  function filterItems(e) {
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
  }