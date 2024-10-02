const inputTask = document.getElementById('inputTask');
const listTasks = document.getElementById('Tasks');

function addTask(){
  if(inputTask.value === ''){
    alert("Você precisa escrever uma tarefa!");
  }else{
    const li = document.createElement('li');
    li.innerHTML = inputTask.value;
    listTasks.appendChild(li);

    const span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
 
  inputTask.value = '';
 
  saveData();
}

listTasks.addEventListener("click", function(x){
  if(x.target.tagName === "LI"){

    x.target.classList.toggle("checked");
    saveData();
    
  }else if(x.target.tagName === "SPAN"){

    x.target.parentElement.remove();
    saveData();
  }
  
}, false);


function saveData(){
  localStorage.setItem("data", listTasks.innerHTML);
}


function showTask(){
  listTasks.innerHTML = localStorage.getItem("data");
}

showTask();


function clearTasks() {

  localStorage.clear();

  while (listTasks.firstChild) {
    listTasks.removeChild(listTasks.firstChild);
  }
}


function checkEnter(event){
  if (event.key === "Enter"){
    addTask();
  }
}

