function updatePage(){
    if(localStorage.getItem('currentUser') == ''){
        $('.username').html('You are not in account yet')
        $('.password').html('')
        $('.tel').html('')
        $('.logout').css('display', 'none')
        $('.reg').css('display', 'inline-block')
        $('.login').css('display', 'inline-block')
    }else{
        $('.username').html('Username: ' + JSON.parse(localStorage.getItem('currentUser')).nick)
        $('.password').html('Password: ' + JSON.parse(localStorage.getItem('currentUser')).password)
        $('.tel').html('Telephone number: ' + JSON.parse(localStorage.getItem('currentUser')).phone)
        $('.logout').css('display', 'inline-block')
        $('.reg').css('display', 'none')
        $('.login').css('display', 'none')
    }
}
updatePage()
function logOut(){
    localStorage.setItem('currentUser', '')
    updatePage()
}
//Для того чтобы тестировать сайт было удобнее
function myFunc(a){
    localStorage.setItem('currentUser', JSON.stringify(a))
    updatePage()
}