
const generateRandomId = () => {
 return parseInt((Math.random() * 20000) + (Math.random() * 100) * 22)
}

alert(generateRandomId())
class Todo {
 status;
 id = generateRandomId();
 title;

 constructor(title) {
  this.title = title
 }

 get title() {
  return this.title
 }

 check() {
  this.status = true
 }
}

class TodoList {
 list = [];
 /**
  * 
  * @param {Todo} todo 
  */
 addToDo(todo) {
  this.list.append(todo)
 }

 delete(id) {
  this.list.forEach(element => {
   if (element.id === id) {
    this.list.splice(1, this.list.indexOf(element))
   }
  })
  // const place = this.list.findIndex(todo);
  // if (place !== -1) {
  //  this.list.splice(place - 1, place)
  // }
 }

 /**
  * 
  * @param {Array} todos
  */
 // addtoDos(todos) {
 //  todos.forEach(el => {
 //   this.addToDo(el)
 //  })
 // }

}
const list = document.querySelector('.list')

const fetcher = async () => {
 const data = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5', {
  method: 'GET'
 })

 const results = await data.json()

 console.log(results, typeof results, results[0]);
 if (data.status === 200) {
  list.innerHTML = ''

 }
 return results
}

const createHtmlElement = (tagName, content) => {
 const element = document.createElement(tagName)
 element.innerText = content
 console.log(content, 'in creator');
}

const createTodo = (content, id, status) => {
 const div = document.createElement('div');
 div.classList.add('task')
 const leftDiv = document.createElement('div');
 leftDiv.classList.add('list')
 let checkbox = document.createElement('input');
 checkbox.type = 'checkbox'
 checkbox.value = status ? 'checked' : ''
 leftDiv.append(checkbox)
 leftDiv.append(document.createElement('h3').innerText= content)
 const toTrash = document.createElement('p');
 const deleter = (id) =>{
  toTrash.addEventListener('click', ()=>{
   console.log(id, 'the id');
 })
 deleter(id)
 }
 toTrash.innerText = 'delete';
 div.append(leftDiv)
 div.append(toTrash);

 return div

 // console.log(div, 'in cee');

}

const getData = () => {
 fetcher().then(res=>{
  // Array.from(res).forEach(el=>{
  //  createTodo(el.)
  // })
  res.map(el=>{
   createTodo(el.title, el.id, false)
   console.log(el.title);
   list.append(createTodo(el.title, el.id, false))
   // list.append(`<br />`)
  })
 })
 // fetcher()
}

getData()