const inputTask = document.getElementById('inputTask');
const listTasks = document.getElementById('Tasks');

function addTask(){
  if(inputTask.value === ''){
    alert("Você precisa escrever uma tarefa!");
  }else{
    /* Criando item da lista de Tarefa */
    const li = document.createElement('li');
    li.innerHTML = inputTask.value;
    listTasks.appendChild(li);

    /* Botão para remover tarefa */
    const span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  /* Limpa input depois que task for enviada */
  inputTask.value = '';
  /* Salva item no localStorage (quando a pagina é recarregada o item continua lá) */
  saveData();
}

listTasks.addEventListener("click", function(x){
  if(x.target.tagName === "LI"){
    /* Cria a funcionalidade de checar a a tarefa */
    x.target.classList.toggle("checked");
    saveData();
  }else if(x.target.tagName === "SPAN"){
    /* Remove item quando usuario interage com o botão */
    x.target.parentElement.remove();
    saveData();
  }
  
}, false);

/* Função colocar item da lista e coloca no localStorage */
function saveData(){
  localStorage.setItem("data", listTasks.innerHTML);
}

/* Função mostra itens que foram adicionados ao localStorage */
function showTask(){
  listTasks.innerHTML = localStorage.getItem("data");
}
/* Ativa a função anterior */
showTask();

/* Função limpa todas as tasks */
function clearTasks() {
  /* Limpa itens que foram adicionados ao localStorage */
  localStorage.clear();
  /* Limpa Tasks do HTML com um loop */
  while (listTasks.firstChild) {
    listTasks.removeChild(listTasks.firstChild);
  }
}

// função para adicionar a tarefa com o enter
function checkEnter(event){
  if (event.key === "Enter"){
    addTask();
  }
}

