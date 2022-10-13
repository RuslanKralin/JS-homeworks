window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');//нашли форму
    const input = document.querySelector('#new-task-input');//нашли инпут
    const list_el = document.querySelector('#tasks');//нашли элемент задачи
   console.log(list_el)
   //делаем форму отправки
    form.addEventListener('submit', (e) => {
        e.preventDefault(); //от обновления страницы
        
        const task = input.value;//писваиваем точному значению инпут

        if(!task){
            alert('Please fill out the task');
            return;//чтоб ничего ещё не произошло нужно вернуться
        } 

       const task_el = document.createElement('div');//создаём эелмент задачи
       task_el.classList.add('task');

       const task_content_el = document.createElement('div');//сдоздаём элем.содержимого задачи
       task_content_el.classList.add('content');
       task_content_el.innerText = task;//введённое в инпут сверху отображается в новом диве

       task_el.appendChild(task_content_el);//добавляем содержимое элемента в элем.задачи

       list_el.appendChild(task_el);//в элем.задачи добавили содержимое и теперь будет появляться новый div с задачей  

       const task_input_el = document.createElement('input');//создаём инпут в кот.можно чтото менять по задаче содержимому
       task_input_el.type = 'text';
       task_input_el.classList.add('text');
       
       
       task_input_el.setAttribute("readonly", "readonly" );//атрибут только для чтения
       

       task_content_el.appendChild(task_input_el);//говорим содержимое задачи добавить в инпут

       const task_actions_el = document.createElement('div');
       task_actions_el.classList.add('actions');

       const task_edit_el = document.createElement('button');
       task_edit_el.classList.add('edit');
       task_edit_el.innerText = 'Edit'

       const task_delete_el = document.createElement('button');
       task_delete_el.classList.add('delete');
       task_delete_el.innerText = ('Delete');

       task_actions_el.appendChild(task_edit_el);
       task_actions_el.appendChild(task_delete_el);

       task_el.appendChild(task_actions_el);

       input.value = '';

       task_edit_el.addEventListener('click', () => {
              if(task_edit_el.innerText.toLowerCase() == 'edit'){
                    task_input_el.removeAttribute("readonly");
                    task_input_el.focus();
                    task_edit_el.innerText = 'Save';
              } else {
                   task_input_el.setAttribute("readonly", "readonly");
                   task_edit_el.innerText = "Edit";
              }


       });
        task_delete_el.addEventListener('click', () => {
              list_el.removeChild(task_el);
        });

    })
})
