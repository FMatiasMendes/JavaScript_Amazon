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




///////JS for last part of the exercise/////////

const todoList3 = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '22024-01-05'
}];

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
}