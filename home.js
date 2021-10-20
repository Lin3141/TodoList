window.onload = function(){
    let newTaskInput = document.querySelector('.new-task input');
    newTaskInput.onkeydown = function(event){
        if(event.keyCode == 13){
            let newTaskText = newTaskInput.value;
            let template = document.querySelector(".todo-template");
            let newTaskContainer = template.cloneNode(true)
            let newTaskNode = newTaskContainer.querySelector(".todo-item");
            newTaskNode.querySelector(".todo-text").innerText = newTaskText;
            let firstTodo = document.querySelector(".todo-list .todo-item");
            document.querySelector('.todo-list').insertBefore(newTaskNode, firstTodo);
            newTaskInput.value = "";

            //add delete function to the newly-added tasks
            let itemIcon = newTaskNode.querySelector(".todo-icon");
            itemIcon.onclick = function(event){
                itemIcon.setAttribute("src", "circle1.png");
                let text = itemIcon.parentElement.querySelector(".todo-text");
                text.style.textDecoration = "line-through";
            }
            //add star function to the newly-addded tasks
            let starIcon = newTaskNode.querySelector(".star-icon");
            starIcon.onclick = function(event){
                starIcon.setAttribute("src", "solid_star.png");
            }
        }
    }
    let todoItemIcons = document.querySelectorAll(".todo-list .todo-icon");
    todoItemIcons.forEach(function(todoItemIcon){
        todoItemIcon.onclick = function(event){
            todoItemIcon.setAttribute("src", "circle1.png");
            let todoText = todoItemIcon.parentElement.querySelector('.todo-text');
            todoText.style.textDecoration = "line-through";                   
        }
    })

    let todoStarIcons = document.querySelectorAll(".todo-list .star-icon");
    todoStarIcons.forEach(function(todoStarIcon){
        todoStarIcon.onclick = function(event){
            todoStarIcon.setAttribute("src", "solid_star.png");
        }
    })

}