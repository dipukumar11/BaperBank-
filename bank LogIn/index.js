document.getElementById('btn-submit').addEventListener('click', function(){
    const emailValue = document.getElementById('email-valu')
    const email = emailValue.value;
    
    const paswordValue = document.getElementById('ps-value')
    const password = paswordValue.value;
    console.log(email, password)

    if(email === 'dipukumar@gmail.com' && password === 'dipukumar'){
      window.location.href='../bank.html'
    }else{
        alert('plz provide the valid passwod')
    }
})