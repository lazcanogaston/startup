//exercise 1

function showSection(id){
    var element = document.getElementById(id);
 
    element.classList.add("loaded");
 };
 
 window.addEventListener("load", function(){showSection("hidden")});
 
 //exercise 2

function displayAlert(){
    window.alert("WELCOME!");
}
