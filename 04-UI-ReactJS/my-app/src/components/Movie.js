import React, { Component }from 'react';
import '../css/movie.css';
export default class Movie extends Component{
  constructor(props){
    super(props);
    this.removeMovie = this.removeMovie.bind(this);
  }
  removeMovie(){
    this.props.removeMovie(this.props);
  }
  
  render(props){
    return(
      <div className="movie">
        <h2>Title:{this.props.title}</h2>
        <p>Year: {this.props.year}</p>
        <p>Duration: {this.props.duration}</p>
        <button className="btn" onClick = {this.removeMovie}>delete</button>   
      </div>
    );
  }
}