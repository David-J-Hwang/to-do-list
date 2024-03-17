const inputBox = document.getElementById('input-box')
const listContainer= document.getElementById('list-container')

// 할 일 추가하기
function addTask() {
  // input box에 입력한 값이 없는 경우
  if(inputBox.value === ''){
    alert("You must write something!")
  } 
  else {
    let li = document.createElement('li')
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    let span = document.createElement('span')
    span.innerHTML = '\u00d7'
    li.appendChild(span)
  }
  // input box 초기화
  inputBox.value = ''
  // localStorage에 저장
  saveData()
}

listContainer.addEventListener('click', (e) => {
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
    saveData()
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
    saveData()
  }
}, false)

// 엔터키 누를 경우 마찬가지로 할 일 목록에 넣기
document.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    addTask()
  }
})

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML)
}

// localStorage에 저장된 할 일 불러오기
function showTask() {
  listContainer.innerHTML = localStorage.getItem('data')
}

showTask()