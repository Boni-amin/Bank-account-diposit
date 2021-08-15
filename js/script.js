document.getElementById('Login-submit').addEventListener('click', function(){

    // Get User Eamil
 userEmailFiled = document.getElementById('user-email').value;
    // Get User pass
 const userPassFlied = document.getElementById('user-pass').value;

//  Chaeck Email and pass 
 if (userEmailFiled == 'boniamin@gmail.com' && userPassFlied == 'admin') {
        // console.log('valid')
      window.location.href = "banking.html";
    }
})

