// Seletores do DOM

2 const taskForm = document.getElementById('taskForm');

3 const taskInput document.getElementById('taskInput');

4 const tasklist document.getElementById('taskList');

5

6 // Função que cria um <li> com texto e botão "Remover"

7 function createTaskItem(text) {

8 const li document.createElement('li');

9 const span document.createElement('span');

10 span.textContent text;

11 const deleteBtn document.createElement('button');

12 deleteBtn.textContent 'Remover';

13 deleteßtn.className = 'delete-btn';

14 deleteBtn.type = 'button';

15 li.appendChild(span);

16 li.appendChild(deleteBtn);

17 return li;

18 }

19

20 // Captura do submit

21 taskForm.addEventListener('submit', function(e) {

22 e.preventDefault();

23 const text taskInput.value.trim();

24 if (!text) return;

25 const li createTaskItem (text);

26 taskList.appendChild(li);

27 taskInput.value = "";

28 taskInput.focus();

29 1);
