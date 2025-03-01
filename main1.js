// if variable make sure to avoid back ground mix
var arry = []

function down(element) {
  element.style.scale = '0.99'
}
function up(element) {
  element.style.scale = '1'
}
var i = 0
document.getElementById('section').innerHTML = localStorage.getItem("content")
// if( JSON.parse(localStorage.getItem("booon")) == null){
//   arry = []
// }else{
//   arry = JSON.parse(localStorage.getItem("booon")) 
// }

arry = JSON.parse(localStorage.getItem("booon")) ?? []
document.getElementById('butn').addEventListener('click', () => {

  let ntask = prompt("enter the new task")
  if (ntask != null) {
    // onmouseover='down(this)' onmouseleave='up(this)'
    document.getElementById('section').innerHTML +=
      (`  
      <div class='task' id='d${i}' >
          <span class="mession" id='s${i}'> ${ntask} </span>
          <div class="btncontainer">
          <button class='butn1 mar'  onmousedown='down(this), cek(this)' onmouseup='up(this)'>Mark</button>
          <button class='butn1'  onmousedown='down(this), edi(this)' onmouseup='up(this)'>Edit</button>
          <button class='butn1'  onmousedown='down(this), del(this)' onmouseup='up(this)'>Delete</button>
          </div>
          </div>
  `)

    save()
  }

  i += 1
})


function del(element) {
  if (confirm(`are you sure to delete${element.parentElement.parentElement.firstElementChild.innerHTML}`)) {
    element.parentElement.parentElement.outerHTML = ""
    save()
  }

}
function edi(element) {

  element.parentElement.parentElement.firstElementChild.innerHTML = prompt("enter the edit") ?? element.parentElement.parentElement.firstElementChild.innerHTML
  save()
}


function cek(element) {
  if (arry.includes(element.parentElement.parentElement.id)) {
    element.innerHTML = "mark"
    element.parentElement.parentElement.firstElementChild.style.cssText += `
     background: #ffcfcf;
     border-left: solid rgb(255, 0, 0) 7px;
    
    `
    element.style.backgroundColor = 'rgb(0, 255, 0,.7)'
    arry.splice(arry.indexOf(element.parentElement.parentElement.id), 1)
    save()
  } else {
    arry.push(element.parentElement.parentElement.id)
    element.parentElement.parentElement.firstElementChild.style.cssText += `
    background:rgba(0, 255, 0, 0.3);
    border-left: solid green 7px;
   
   `
    element.style.backgroundColor = 'rgb(255, 0, 0,.5)'
    element.innerHTML = "un mark"
    save()
  }

  // console.log(arry)
}
function save() {
  var con = document.getElementById('section').innerHTML
  localStorage.setItem("content", con)
  localStorage.setItem("booon", JSON.stringify(arry))


}


// function callfunction(element, func){
//     return element + func()

// }
// callfunction(5,()=>{
//   return 10;
// })
// console.log(callfunction(5,()=>{
//   return 10;
// }))

