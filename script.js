   const form = document.getElementById('form'),
       input = document.getElementById('todo-input'),
       btn = document.getElementById('todo-btn'),
       list = document.getElementById('todo-list');

   form.addEventListener('submit', (event) => {
       event.preventDefault();
   });

   btn.addEventListener('click', () => {
       let item = document.createElement('div');
       item.classList.add('todo-item');
       list.appendChild(item);
       item.innerText = input.value;
       input.value = '';

       item.addEventListener('click', () => {
           item.remove()
       })
   });