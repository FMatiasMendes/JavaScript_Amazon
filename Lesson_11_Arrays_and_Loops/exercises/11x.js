const todoList3 = JSON.parse(localStorage.getItem('savedTodoList')) || [];

renderTodoList3();

function addTodo3(){
	const inputElement3 = document.querySelector('.js-name-input-3');

	const name3 = inputElement3.value;
	console.log(name3);
	const dateInputElement = document.querySelector('.js-due-date-input');
	const dueDate = dateInputElement.value;

	todoList3.push({
		name: name3,
		dueDate: dueDate
	});
	console.log(todoList3);

	//to reset the text in the input text box
	inputElement3.value = '';

	renderTodoList3();

}

function renderTodoList3(){

	let todoListHTML = '';

	for (let i = 0; i < todoList3.length; i++){

		const todoObject = todoList3 [i];

		const {name, dueDate} = todoObject;
		//same as: (because the variable and the property have the name)
		//const name = todoObject.name;
		//const dueDate = todoObject.dueData;

		const html = `
			<div>${name}</div>
			<div>${dueDate}</div>			 
			<button class="delete-todo-button" onclick="
				todoList3.splice(${i}, 1);
				renderTodoList3();
			">Delete</button>
		`;
		todoListHTML += html;

	}

	document.querySelector('.js-todo-list3').innerHTML = todoListHTML;
	console.log(todoListHTML);

	const storageTodoList3 = JSON.stringify(todoList3);

	localStorage.setItem('savedTodoList', storageTodoList3);

}