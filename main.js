const modal = document.getElementById("modal");
const button = document.getElementById("button");
const close = document.getElementById("close");

button.addEventListener("click",function(){
    modal.style.display="block";
})

close.addEventListener("click",function(){
    modal.style.display="none";
})