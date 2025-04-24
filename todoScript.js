// function addTodo(){
//     let input = document.getElementById('todo-input');
//     const todoText = input.value.trim();

//     if(todoText === ''){
//       alert("Please enter a task!");
//       return;
//     }

//     let li = document.createElement('li');
//     li.innerHTML = todoText;

//     const removeBtn = document.createElement('button');
//     removeBtn.textContent = "❌";
//     removeBtn.style.marginLeft = "10px";

//     removeBtn.onclick = function(){
//       li.remove();
//     };

//     // li.appendChild(removeBtn);
//     let target =  document.querySelector('.todo-list');
//     target.appendChild(li);

//     input.value = '';
//   }


// ANOTHER METHOD 


document.addEventListener('DOMContentLoaded', () => {
  let input = document.getElementById('todo-input');
  let addBtn = document.getElementById('add-btn');
  let list = document.getElementById('todo-list');


  addBtn.addEventListener('click' , () =>{
    let todoText = input.value.trim();
    if(todoText === ''){
      alert("Please enter a task!")
      return
    };

    let li = document.createElement('li');
    li.textContent = todoText;
    list.appendChild(li)

    let removeBtn = document.createElement('button')
    removeBtn.textContent = 'delete';
    removeBtn.style.padding= '5px'

    li.appendChild(removeBtn)

    removeBtn.addEventListener('click', () =>{
      li.remove();
      alert('Todo deleted successfully')
    })



    input.value = ''
  });






})

