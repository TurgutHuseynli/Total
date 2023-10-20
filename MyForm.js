let newUser = {}
let error = false
let people = []
if(localStorage.getItem('users') === null || localStorage.getItem('users') === ''){
    localStorage.setItem('users', '')
    people = []
}else{
    people = JSON.parse(localStorage.getItem('users'))
}
$('button').click(function(){
    // e.preventDefault()
    error = false
    if($('#nick').val().length >= 2 && $('#psw').val().length >= 2 && $('#phone').val().length >= 10 && $('#agree').is(':checked')){
        for(let i of people){
            if(i.nick == $('#nick').val()){
                error = true
            }
        }
        if(error){
            alert('A user with the same name already exists!')
        }else{
            newUser = {
                nick: $('#nick').val(),
                password: $('#psw').val(),
                phone: $('#phone').val()
            }
            people.push(newUser)
            localStorage.setItem('currentUser', JSON.stringify(newUser))
            localStorage.setItem('users', JSON.stringify(people))
            alert('Succesfully registered new user!')
            // location.href = "../45 (7). Practics 5/Jk.html"
        }
    }else{
        alert('Something went wrong. Please, check if you did all of the written above.')
    }
})
//Для того чтобы было быстрее тестировать страницы
function resetAll(){
    localStorage.clear()
    localStorage.setItem('users', '')
    localStorage.setItem('currentUser', '')
    people = []
}