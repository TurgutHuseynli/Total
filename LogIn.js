let reg = false
$('button').click(function(){
    reg = false
    if($('#nick').val().length >= 2 && $('#psw').val().length >= 2){
        for(let i of JSON.parse(localStorage.getItem('users'))){
            if(i.nick == $('#nick').val() && i.password == $('#psw').val()){
                reg = true
            }
        }
        if(!reg){
            alert('This account is not in the list of registered accounts.')
        }else{
            for(let i of JSON.parse(localStorage.getItem('users'))){
                if(i.nick == $('#nick').val()){
                    localStorage.setItem('currentUser', JSON.stringify(i))
                }
            }
            alert('Successfully logged in!')
            // location.href = "../45 (7). Practics 5/Jk.html"
        }
    }else{
        alert('This account could not be registered because of our rules.')
    }
})