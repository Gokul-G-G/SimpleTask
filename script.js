let addTask = document.getElementById("addTask");
let removeTask = document.getElementById("removeTask");
let input = document.getElementById("inputTask");
let listItem = document.getElementById("listItem");
const listArray = [];

//  Add Task
addTask.addEventListener("click", () => {
  const task = input.value.trim();
  if (task) {
    listArray.push(task);
    input.value = "";
    render();
  } else {
    alert("Enter a Value to Continue");
  }
});

// Remove Last Task
removeTask.addEventListener("click", () => {
  listArray.pop();
  render();
});

// Functon to Render Task
function render() {
  listItem.innerHTML = "";
  listArray.forEach((task, index) => {
    const list = document.createElement("li");
    list.classList.add("list-group-item");
    list.textContent = task;
    listItem.appendChild(list);
  });
}
