document.addEventListener("DOMContentLoaded", (e) => {
  // your code here
  e.preventDefault()

  let subBtn = document.getElementById('addTask')
  let toDo = document.getElementById("tasks")

  subBtn.addEventListener("click",addItems)

  



});

let addItems = (e)=>{
  e.preventDefault()
  let taskDesc = document.getElementById("new-task-description").value  
  let appendList = document.querySelector("#tasks")
  let listItem = `${taskDesc}`

  let createList = document.createElement('li')
  createList.textContent = listItem
  appendList.append(createList)







}

