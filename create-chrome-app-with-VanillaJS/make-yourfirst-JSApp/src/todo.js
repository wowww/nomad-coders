const toDoFrom = document.querySelector(".js-toDoForm"),
  toDoInput = toDoFrom.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
};

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId
  }
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function something(toDo) {
  console.log(toDo.text);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos  = JSON.parse(loadedToDos);
    // console.log(parsedToDos); Object로 저장된 것을 확인 가능하다.
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    })

  }
}

function init() {
  loadToDos();
  toDoFrom.addEventListener("submit", handleSubmit);
}

init();