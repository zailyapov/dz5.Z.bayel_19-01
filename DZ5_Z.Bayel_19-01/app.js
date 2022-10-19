function add_item(){
    let item = document.getElementById('box');
    let list_item=document.getElementById('list_item');
    if (item.value !=''){
        let make_li = document.createElement('LI');
        make_li.appendChild(document.createTextNode(item.value));
        list_item.appendChild(make_li);
        item.value = '';
        make_li.onclick = function (){
            this.parentNode.removeChild(this);
        };
    }else {
        alert('Добавьте задачу!');
    }
}
function delete_item(){
    let list_item = document.getElementById('list_item');
    if (list_item.childNodes.length === 0){
        alert('Задач нету');
    }else {
        list_item.removeChild(list_item.lastChild);
    }
}


