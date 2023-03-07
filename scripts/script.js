var typed = new Typed(".multitext",{
	strings:["Web Developer","Student","Youtuber","Student"],
	typeSpeed:70,
   backSpeed:70,
   backDelay:500,
   loop:true  
})


var menu  = document.getElementById("menu");

function openmenu() {
   menu.style.right = "0";
}

function closemenu(){
   menu.style.right ="-200px";
}