const table = document.querySelector('table');
const todo = document.getElementById('todo');
const deadline = document.querySelector('input[type="date"]');
const submit = document.getElementById('submit');

submit.addEventListener('click', () =>{
    const item = {};
    item.todo = todo.value;
    item.deadline = deadline.value;
    item.done = false; 
    console.log(item);
    todo.value ='';
    deadline.value = '';
    const tr = document.createElement('tr'); 

for (const prop in item) {
  const td = document.createElement('td');
  td.textContent = item[prop];
  tr.appendChild(td);
}

table.append(tr);
});

for (const prop in item) {
  const td = document.createElement('td');
  td.textContent = item[prop];
  tr.appendChild(td);
}
for (const prop in item) {
  const td = document.createElement('td');
  if (prop == 'done') {
     const checkbox = document.createElement('input'); 
     checkbox.type = 'checkbox'; 
     checkbox.checked = item[prop]; 
     td.appendChild(checkbox);
  } else {
    td.textContent = item[prop];
  }
  tr.appendChild(td);
}