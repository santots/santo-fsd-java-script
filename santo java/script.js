var head = document.getElementById("head1");
console.log(head);
head.style.color ="grey";
head.textContent="Cristiano Ronaldo "
head.innerHTML ="<h6>Lionel messi</h6>"

var C =document.getElementsByClassName("list");
for(let i=0;i<C.length;i++){
C[i].style.backgroundColor="yellow"
}
 
var t =document.getElementsByTagName("li");
t[1].style.color="red"

//using query selector
let val =document.querySelector("input")
val.value="name"
//query selector using id
var savebtn =document.querySelector("#savebtn");
savebtn.style.backgroundColor="green"