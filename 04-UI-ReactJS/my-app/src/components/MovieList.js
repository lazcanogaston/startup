import React,{ Component } from 'react';
import Movie from './Movie';
import '../css/movieList.css';
class MovieList extends Component{
  constructor(props){
    super();
    this.renderDynamic = this.renderDynamic.bind(this);
  }
  renderDynamic(movies){
    return movies.map(movie => (
        <Movie key = {movie.title} title = {movie.title} year = {movie.year} duration = {movie.duration} removeMovie = {this.props.removeMovie}/>
      ));
  }
  render(){
    return(
      <div className = 'Wrapper'>
            {this.renderDynamic(this.props.movies)}
      </div>
      );
  }
}

export default MovieList;