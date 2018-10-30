//EXERCISE 1

//localStorage

document.getElementById('btn').addEventListener("click", function(){persistData()});
document.getElementById('btnClear').addEventListener("click", function(){clearStorage()});

function storageAvailable(type) {  //type = sessionStorage or localStorage
    try {
        var storage = window[type],
            x = '__storage_avaiable__';
        storage.setItem(x, x); //check if there is enough space to add 'x' 
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}



function persistData(){
    var text = document.getElementById('text').value;
    if (storageAvailable('localStorage')) {
        var data = window.localStorage.setItem(data, text);
       // var content = localStorage.getItem(data); //check if it's working
       // console.log(content);
        console.log('Saved!');
    }
    else {
        console.log('Sorry!, there isn\'t enough localStorage');
     }
}

function clearStorage(){
    window.localStorage.clear();
}




//indexDb
var db; //global
window.addEventListener("load", init, false);
document.getElementById('btnClear').addEventListener("click", function(){deleteDb()});

function init(){
    saveButton= document.getElementById('btn');
    saveButton.addEventListener('click', addObj, false);

    var request = indexedDB.open('dataBase'); //create database with name 'dataBase
    request.onsuccess = function(e){
        db = e.target.result;
    }

    request.onupgradeneeded = function(e){ //this is executed just the first time
        db = e.target.result;
        db.createObjectStore('randomData', {keyPath: 'data'});  //(Store name, primary key (can not be repeted))
    }
}


function addObj(){
    var text = document.getElementById('text').value;
    var trans = db.transaction(['randomData'], 'readwrite');
    var store = trans.objectStore('randomData');
    var add = store.add({data: text});   // this add in the database randomData, a field name data, and there add te text
    document.getElementById("text").value =""; // clear the text area
}

function deleteDb(){
    var transaction = db.transaction(['randomData'], "readwrite");

    var store = transaction.objectStore('randomData');

    var request = store.clear();

    request.onsuccess = event => {      
      console.log('Cleared!!');
    }  
}


//EXERCISE 2

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; 
    var reader = new FileReader();  
    reader.onload = function(event) {            
         document.getElementById('text').value = event.target.result;
    }        
    reader.readAsText(files[0],"UTF-8");
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; 
  }

  var dropZone = document.getElementById('text');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);