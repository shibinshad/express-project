function validateForm(){
let a=document.getElementById('inputpassword').value
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;
const nnn=passwordPattern.test(a)
console.log(a);
const errPass=document.getElementById('errPass')
if(!nnn){
    errPass.innerText='PASSWORD must have at least 8 characters with uppercase, lowercase, a number, and a special charector. '
}else{
    errPass.innerText=''
}

}


















































































