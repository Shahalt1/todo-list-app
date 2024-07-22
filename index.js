const todoList = [
  { name: "shahal", due: "2020-2-22" },
  { name: "sourav", due: "2020-2-23" },
  { name: "prakash", due: "2020-2-24" },
];
function renderTodoList() {
  let todolistHTML = "";
  todoList.forEach(function (todoObject, index) {
    const { name, due } = todoObject;
    const html = `<div>${name}</div>
    <div>${due}</div>
    <div>
    <button onClick="todoList.splice(${index}, 1);
        renderTodoList();" class="delete-todo-button">
        Delete
    </button>
    </div>`;
    todolistHTML += html;
  });
  document.querySelector(".js-todo-list").innerHTML = todolistHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const inputDueElement = document.querySelector(".js-due-input");
  const name = inputElement.value;
  const due = inputDueElement.value;
  todoList.push({ name, due });
  inputElement.value = "";
  renderTodoList();
}
