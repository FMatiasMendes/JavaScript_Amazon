const todoList = [];
const todoList2 = [];

renderTodoList();

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');

    const name = inputElement.value;
    //console.log(name);

    todoList.push(name);
    console.log(todoList);

    //to reset the text in the input text box
    inputElement.value = '';

}

function renderTodoList(){

    let todoListHTML = '';

    for (let i = 0; i < todoList2.length; i++){

        const todo = todoList2 [i];
        const html = `<P>${todo}</p>`;
        todoListHTML += html;

    }

    document.querySelector('.js-todo-list2').innerHTML = todoListHTML;
    console.log(todoListHTML);
}


function addTodo2(){
    const inputElement2 = document.querySelector('.js-name-input-2');

    const name2 = inputElement2.value;
    //console.log(name2);

    todoList2.push(name2);
    console.log(todoList2);

    //to reset the text in the input text box
    inputElement2.value = '';

    renderTodoList();

}