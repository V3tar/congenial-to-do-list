let form = document.querySelector('.list-form');
let warning = document.querySelector('.alert h5');
let input = document.querySelector('#item-input');
let list_div = document.querySelector('.list-items');

form.addEventListener('submit',(e) => {
    //prvent submission by default
    e.preventDefault();
    //get the value
    let input_value = input.value;
    //create new div
    let new_div = document.createElement('div');
    new_div.innerHTML = `<li>${input_value}</li>
    <div class="btn-container">
        <button class="btn btn-edit">Edit</button>
        <button class="btn btn-delete">Delete</button>
    </div>`
    list_div.appendChild(new_div);
    set_default();
    warning_alert(`item added`,`green`);
    //if input value is empty
    if (input_value ==='') {
        warning_alert (`please add item`,`red`);
        new_div.style.display ='none';
    }
    //select delete btn 
    let del_btn = new_div.querySelector('.btn-delete');
    del_btn.addEventListener('click',delete_item);
});
//functions
function set_default () {
    input.value = '';
}
function delete_item (e) {
    let element = e.currentTarget.parentElement.parentElement;
    list_div.removeChild(element);
    warning_alert (`item deleted`,`red`);
}

function warning_alert (text,action) {
    warning.textContent = text;
    warning.parentElement.classList.add(`alert-${action}`);
    setTimeout(function (){
        warning.textContent = text;
        warning.parentElement.classList.remove(`alert-${action}`);
    },2000)
}