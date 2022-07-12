document.addEventListener("DOMContentLoaded", init, false);

function init() {
  const todoInput = document.getElementById("todo-input");
  const todoBTN = document.getElementById("add-todo-btn");
  const todoList = document.getElementById("todo-list");

  todoBTN.addEventListener("click", function () {
    // console.log("btn click");
    // console.log(todoList);
    const listRow = document.createElement("div");
    const todoLabel = document.createElement("label");
    const todoDelete = document.createElement("button");

    // const checkbox = document.createElement("input");
    // checkbox.type = "checkbox";

    todoLabel.innerText = todoInput.value;
    todoLabel.classList.add("todo-label");
    todoLabel.setAttribute("id", "todo-label");
    todoInput.value = "";

    todoDelete.innerHTML = '<i class="fas fa-trash"></i>';
    todoDelete.classList.add("delete-btn");
    listRow.classList.add("todo-item");
    listRow.setAttribute("id", "todo-item");

    // listRow.appendChild(checkbox);
    listRow.appendChild(todoLabel);
    listRow.appendChild(todoDelete);
    todoList.appendChild(listRow);
  });

  todoList.addEventListener("click", function (e) {
    const item = e.target;
    const pbtn = item.parentElement;

    // console.log(item.classList);

    if (
      item.classList.contains("todo-item") ||
      item.classList.contains("todo-label")
    ) {
      let todoItem, todoLabel;
      if (item.classList.contains("todo-item")) {
        todoItem = item;
        todoLabel = item.querySelector("#todo-label");
      } else {
        todoLabel = item;
        todoItem = item.parentElement;
      }

      if (todoItem.classList.contains("todo-complete")) {
        todoItem.classList.remove("todo-complete");
      } else if (todoLabel.classList.contains("todo-complete")) {
        todoLabel.classList.remove("todo-complete");
      } else {
        item.classList.add("todo-complete");
      }
    } else if (item.classList.contains("delete-btn")) {
      const todo = item.parentElement;
      todo.remove();
    } else if (pbtn.classList.contains("delete-btn")) {
      const todo = pbtn.parentElement;
      todo.remove();
    }
  });

  todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("add-todo-btn").click();
    }
  });
}
