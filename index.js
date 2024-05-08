
// HANDLE SPOILER

const spoilers = document.querySelectorAll('.spoiler');

const revealAllSpoilers = () =>{
 document.querySelectorAll('.spoiler').forEach(s=>{
   s.classList.remove('spoiler');
 })
}
Array.from(spoilers).forEach((spoiler)=>{
 spoiler.addEventListener('click', revealAllSpoilers)
})


// GET DATA AND DISPLAY AFTER A LOADER
const fetcher = async () => {

 const data = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=15&_delay=6000', {
  method: 'GET'
 })

 const results = await data.json()

 console.log(results, typeof results, results[0]);
 if (data.status === 200) {
  posts.innerHTML = ''

 }
 return results
}
const posts = document.querySelector('#lastPosts')
const objects = []


const fin = fetcher().then(res => {
 console.log(res, 'resssss');

 const di = document.createElement('div');
 const title = document.createElement('h2');
 const content = document.createElement('p');
 res.map(re => {
  // title.innerText = re?.title;
  // content.innerText = re?.body;
  // di.append(title);
  // di.append(content)
  // console.log(di, 'dididi');
  // objects.push(di)
  // article(re?.title, re?.body) 

 });
 console.log(posts, objects, objects.length, 'finnnnnnn');

 objects.forEach(el => {
  posts.append('yoooo')
  posts
  console.log(el, objects.indexOf(el), 'indd');
 })
 // res.array.forEach(element => {
 //  console.log(element, 'inside');
 // });
})

function article(title, body){

 const div = document.createElement('div');
 const tit = document.createElement('h2');
 const content = document.createElement('p');


 tit.innerText = title;
 content.innerText = body;
 div.append(tit);
 div.append(content)

 posts.append(div)
 return div

}

// for (const el in objects) {
//  console.log(el, objects.indexOf(el), 'indd');
// }


//MANAGE DOM ELEMENT

const ul = document.querySelector('ul')
const il = ul.querySelector('li')

console.log(il.nextElementSibling);
console.log(ul.children);
// console.log(ul.forEach((el)=>{
//  el.classList.add('red')
//  console.log(getComputedStyle(el).color);
// }));

const link = document.createElement('a');
link.href = '/'
link.innerText = 'toGo';
console.log(link);
// document.body.prepend(link)

document.body.insertAdjacentElement('afterend', link)

// console.log(getComputedStyle(ul));