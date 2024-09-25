var user=document.getElementById("user");
var pwd=document.getElementById("pwd");
var btn = document.getElementById("btn");
var err1 = document.getElementById("err1");

// function validate(){
// if (user.value.trim()=="" || pwd.value.trim()==""){
//     alert("field cannot be empty");
//     return false;

// }else if(pwd.value.length<5){
//       //  alert("password should be greater than 5")
//       pwd.style.border="2px solid red"
//       err1.textContent="password should be greater than 5"
//         return false;
//     }

// else {
//       return true;
//santo.@gmail.com
function validate(){
let regex = / ^([a-zA-z0-9.-]+)@([a-zA-z0-9\-]+)\.([a-z]{2,3})? $/
if(regex.test(user.value)){
    return true
}else{
    alert("Email is invalid")
}
}
