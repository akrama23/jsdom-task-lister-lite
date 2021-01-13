document.addEventListener("DOMContentLoaded", () => {
  // your code here
   const main = document.querySelector("#main-content")
    console.log(main)

   const taskForm = document.querySelector("#create-task-form")
    console.log(taskForm)

   const taskList = document.querySelector("#tasks")
    console.log(taskForm)

   taskForm.addEventListener("submit", function(e) {
     e.preventDefault()

     const newTask = document.querySelector("#new-task-description").value
      // console.log(newTask)

      taskList.innerHTML += `
        <li> ${newTask}
          <button data-action="delete"> X </button>
          <button data-action="edit">Edit</button>
        </li>
      `
  
      // const taskItem = document.createElement("li")
      // taskItem.innerText = newTask
      // taskList.appendChild(taskItem)
      taskForm.reset()
   })
   
   taskList.addEventListener("click", function(e) {
     
    console.log(e.target)

    if (e.target.dataset.action === "delete") {
      e.target.parentElement.remove()
    }

   })


});
