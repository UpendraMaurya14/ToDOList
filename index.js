let todoItems = document.getElementById('todoContainer');
let mainContainer = document.getElementById('main-container');
let newitem = document.getElementById('todoContainer');
let newVal = document.getElementById('input');
let listItems = document.getElementById('list-items')



document.addEventListener('keyup',pressEnter);
document.addEventListener('dblclick', deleteItem);
document.addEventListener('click', doneItem);


function pressEnter(event)
{
    if(event.key == "Enter")
    {
        const node = document.createTextNode(newVal.value);
        const item = document.createElement('li');
        item.appendChild(node);
        listItems.appendChild(item);
        newVal.value = '';
    }
}


function deleteItem(event)
{
    const delElement = document.querySelector('li');
    delElement.remove();
}


function doneItem(event)
{
    const doneTask = document.querySelector('li');
    doneTask.style.textDecoration = ' line-through';
}