let newTodo = {}
let currentNumber = 1
let localArray = []
let assistant;
let x;
let y;
if(localStorage.getItem('yourTodos') == null){
    localStorage.setItem('yourTodos', JSON.stringify([{
        number: 1,
        name: 'Advertisement',
        info: 'Recommend this site to your friends!'
    }]))
}
$('.add-window').hide()
$('.add-todo').click(function(){
    $('.add-window').toggle()
})
$('.close').click(function(){
    $('.add-window').hide()
})
function updateSite(){
    $('.todos').html('')
    if(localStorage.getItem('yourTodos') != ''){
        for(let i of JSON.parse(localStorage.getItem('yourTodos'))){
            document.querySelector('.todos').innerHTML += `        <div class="todo" id="${i.number}">
            <div class="todo-name">${i.name}</div>
            <div class="todo-info">${i.info}</div>
            <div class="actions">
                <button class="edit" id="${i.number}e">Edit</button>
                <button class="delete" id="${i.number}d">Delete</button>
            </div>
        </div>`
            currentNumber = +(i.number)
        }
    }else{
        currentNumber = 0
    }
    $('input').val('')
}
updateSite()
$('.add').click(function(){
    currentNumber++
    newTodo = {
        number: currentNumber,
        name: $('.enter-name').val() == '' ? 'Without name' : $('.enter-name').val(),
        info: $('.enter-info').val() == '' ? 'Without info' : $('.enter-info').val()
    }
    if(localStorage.getItem('yourTodos') != ''){
        localArray = JSON.parse(localStorage.getItem('yourTodos'))
        localArray[localArray.length] = newTodo
        localStorage.setItem('yourTodos', JSON.stringify(localArray))
    }else{
        localArray = []
        localArray[localArray.length] = newTodo
        localStorage.setItem('yourTodos', JSON.stringify(localArray))
    }
    updateSite()
})
document.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        localArray = JSON.parse(localStorage.getItem('yourTodos'))
        localArray.filter(a => a.number != parseInt(e.target.id))
        assistant = []
        for(let i of localArray){
            if(i.number != parseInt(e.target.id)){
                assistant[assistant.length] = i
            }
        }
        localArray = assistant
        localStorage.setItem('yourTodos', JSON.stringify(localArray))
        updateSite()
    }
    if(e.target.className == 'edit'){
        localArray = JSON.parse(localStorage.getItem('yourTodos'))
        for(let i in localArray){
            if(localArray[i].number == parseInt(e.target.id)){
                assistant = i
            }
        }
        x = prompt('Enter name:')
        y = prompt('Enter info:')
        if(x != null && x != ''){
            localArray[assistant].name = x
        }
        if(y != null && y != ''){
            localArray[assistant].info = y
        }
        localStorage.setItem('yourTodos', JSON.stringify(localArray))
        updateSite()
    }
})


















































//Для того чтобы тестирование было быстрее
function reset(){
    localStorage.setItem('yourTodos', JSON.stringify([{
        number: 1,
        name: 'Advertisement',
        info: 'Recommend this site to your friends!'
    }]))
    updateSite()
}