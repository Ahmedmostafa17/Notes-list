//selector
const todoinput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption =document.querySelector('.todo-filter');


todoButton.addEventListener('click', function(e){
  e.preventDefault();
  if(todoinput.value== '')
  {
    alert('Write A Notes');

  }
  else
  {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');
    // Li
    const todoLi = document.createElement('li');
    todoLi.innerText = todoinput.value ;
    todoDiv.classList.add('todo-item');
    todoDiv.appendChild(todoLi);
    saveLocalTodo(todoinput.value);
    // check mark button
    const completeButton =document.createElement('button');
    completeButton.innerHTML = '<i class=" fa fa-check"> </i>'
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    // trash mark button
    const trashButton =document.createElement('button');
    trashButton.innerHTML = '<i class=" fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // append to todo-list
    todoList.appendChild(todoDiv);
    todoinput.value = '';
  
  }

  
} );



   


    

//prevent 
  


// eventListener 
document.addEventListener("DOMContentLoaded",getTodo);
todoList.addEventListener('click', deleteCheked);

// filterOption.addEventListener('click',filter);



//fubnction



  
// } 

////
function deleteCheked(e)
{
 const item = e.target;
 if(item.classList[0]==='trash-btn')
 {
const todo = item.parentElement;
todo.classList.add("fall");
removeLocalStorage(todo);
todo.addEventListener('transitionend',function(){

todo.remove();
});

 }

 if(item.classList[0]==='complete-btn')
 {
const todo = item.parentElement;
todo.classList.add('completed')
 }
}
////
// function filter(e){
//   const todos =todoList.childNodes;
//     todos.forEach(function(ahmed){

//       switch(e.target.value)
//       {
//         case "All":
//          ahmed.style='display:flex';
//         break;
//         case "uncomplated":
//         if(!ahmed.classList.contains('completed'))
//         {
//            todo.style='display:flex';
//         }       
//         else
//         {
//           alert('error');
//         }
//     break;


//       }






//     });
// };
function saveLocalTodo(item)
{

  //check -- hey do I already have thing in there?
  let items;

  if(localStorage.getItem('items')=== null)
  {
  items= [];
  }
  else{
    items =JSON.parse(localStorage.getItem('items'));
  }
  items.push(item);
  localStorage.setItem('items',JSON.stringify(items));
}






function getTodo()
{

  let items;
  if(localStorage.getItem('items')===null)
  {
  items=[];
  }
  else{
    items =JSON.parse(localStorage.getItem('items'));
  }
  items.forEach(function(todo){


    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');
    // Li
    const todoLi = document.createElement('li');
     todoLi.innerText = todo ;
    todoDiv.classList.add('todo-item');
    todoDiv.appendChild(todoLi);

    // check mark button
    const completeButton =document.createElement('button');
    completeButton.innerHTML = '<i class=" fa fa-check"> </i>'
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    // trash mark button
    const trashButton =document.createElement('button');
    trashButton.innerHTML = '<i class=" fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // append to todo-list
    todoList.appendChild(todoDiv);

  });
}

function removeLocalStorage(todo)
{
  let items;
  if(localStorage.getItem('items')===null)
  {
  items=[];
  }
  else{
    items =JSON.parse(localStorage.getItem('items'));
  } 
  const todoIndex =todo.children[0].innerText;
  items.splice(items.indexOf(todoIndex),1)
  localStorage.setItem("items",JSON.stringify(items));

}
