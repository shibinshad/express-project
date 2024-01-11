function validateForm2 (){
 let mail=document.getElementById('inputemail').value
 let pass=document.getElementById('inputpassword').value
 const passwordPattern2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;
 
 Userdetails.find((user)=>{
    user.email == mail
 })

}
