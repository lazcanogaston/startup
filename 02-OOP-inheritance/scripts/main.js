


class EventEmitter{
    constructor(){
        this.events= {};
    }

    on(eventName, callback){

        if (!this.events[eventName]) {
            this.events[eventName] = []; //if there is not an event´s listener array, it creates it.
        }
        this.events[eventName].push(callback); 
        }
    

    emit(eventName){
        if(this.events[eventName]){
            this.events[eventName].forEach( function(fn) {  
                //this add the event name to the logged.log function(for example when i call play function 
                // play, it calls emit('play') it search in the events array, the play event wich has as callback the logged.log and fn(eventName) does logged.log('play')) 
                fn(eventName);
            } )
        }
    }
   

    off(eventName, callback){
        if(this.events[eventName]){
            this.events[eventName].delete(callback);
        }
    }
}






class Movie extends EventEmitter{
    
    constructor (title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.actors= [];
    }
    play(){
        this.emit('play');
    }
    pause(){
        this.emit('pause');
    }
    resume(){
       this.emit('resume');
    }
    addCast(cast){   //recives an array
        
        cast.forEach(act => {   //for each element in the array, if it's an actor and if it's not in this.actors, add it
            if(act instanceof(Actor) && !this.actors.includes(act))
            {
                this.actors.push(act);
            }
            
        
        } )
    }
}


class Actor{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
}

class Logger{
    constructor(){}
    log(event){
        console.log('The '+ event +' event has been emited');
    }
}

var a= new Actor("Arnold", 50);
var a1= new Actor("Will Smith", 45);
var a2= new Actor("Brad Pitt", 51);


var array= [];

array.push(a);
array.push(a1);
array.push(a2);
array.push(a2);

var film = new Movie("Piratas", 2005, 110);


film.addCast(array);

//console.log(film.actors);

var logged = new Logger();

film.on('play', logged.log);
film.play();

film.on("resume", logged.log);
film.resume();










