//EXERCISE 3

var ws;
  function webSocketPractice(){
    var message = document.getElementById('message').value; 
    ws = new WebSocket('wss://echo.websocket.org');
    
    ws.onopen = function (event) {
        ws.send(message); 
        console.log("connected");
    };

    ws.onmessage = function (event) {
        console.log("received: " + event.data);
        
    }

    ws.onclose = function(event){
        console.log("Disconnected!");
    }; 

     
}

  function disconnect(){
    if(ws instanceof WebSocket){
        ws.close();    
    }
    else{
        console.log("there isn't any connection open.")
    }
  }
 