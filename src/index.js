document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    addToDo(e.target.taskDescription.value)
    form.reset()
  })
});

function addToDo(todo) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'X'
  li.textContent = `${todo} `
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#list').appendChild(li)

}

function handleDelete(e){
  e.target.parentNode.remove()
}
