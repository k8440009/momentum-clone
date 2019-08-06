const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintToDo(text) {
  //console.log(text);
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌"; // charSet utf 8 필요
  const span = document.createElement("span");
  span.innerText = text;
  // 부모 안에 생성
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);

  if (toDos !== null) {
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();