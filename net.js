
 let ALLDetails = [];

// Create User KA Liya
function CreateUser(){
     

    let CreateUser = {
        name:CreateName.value,
        lastName:CreateLastName.value,
        email:CreateEmail.value,
        pin:CreatePassword.value,
    }
    ALLDetails.push(CreateUser);
    event.preventDefault();
    console.log(ALLDetails);
}

// click pay Signup page hide kar ke login page Show KArwna 

function Remove(){
    SignUp.classList.add('hide');
    Login.classList.remove('hide');
}

// Check email And Password;

function LoginData(){

   event.preventDefault();
     let Searching  = ALLDetails.find(function(user){
       if(user.email == login_name.value && user.pin == login_pin.value){
        window.location.href = 'index.html';
        alert('yes iam in'); 
       }else{
        alert('not ')
       }
     })

    
}   