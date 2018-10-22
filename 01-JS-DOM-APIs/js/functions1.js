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

//exercise 3


document.getElementById("btn").addEventListener("click", function(){readApi()});
/*
function readApi(){
    
    fetch('http://api.icndb.com/jokes/random') //connection returns a promise
        .then(function(response) {
             console.log(response);
             return response.json(); //return as a json object
         })
        .then(function(myJson) { //i can choose any name to the parameter
            console.log(myJson);
            //var obj = JSON.parse(myJson);
            document.getElementById("joke").innerHTML=myJson.value.joke;
              
        });
       
}
*/



function readApi(){ 
    var request = new XMLHttpRequest();
    request.open("GET", "http://api.icndb.com/jokes/random", true);
    request.send();
    
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let obj = JSON.parse(request.responseText); //the xhttp.responseText returns a text in JSON format and JSON.parse create an object, 
            document.getElementById("joke").innerHTML = obj.value.joke;      
            document.getElementById("joke").classList.remove("error"); //if the conection failed and then, it returns, the background-color:red, disappear
        }
    };
    request.onerror = function() {
        console.log('There was an error!');
       
        document.getElementById("joke").innerHTML = 'there was an error';
        document.getElementById("joke").classList.add("error");
      };
   
}


//reusable function to perform ajax calls

//promise: it is an object that represents the termination or eventual failure of an asynchronous operation.

 function ajaxCall(url, method){
     var prom= new Promise(resolve, reject);
     var request = new XMLHttpRequest();
     request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = request.responseText;   
            resolve(request.response); // If successful, resolve the promise by passing back the request response
        } 
        else {
            reject(request.statusText);
        }
        
    };
    request.onerror = function() {
        console.log('There was an error!');
    };
    request.open(method, url, true);
    request.send();
    return prom;
 }


