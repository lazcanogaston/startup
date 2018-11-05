import React, {Component} from 'react';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import './App.css';

export default class App extends Component{
  constructor (){
    super();
    this.state = { 
      movies: [
        {title:"Fast and Furious",year:"2007", duration:"130"},
        {title:"Fast and Furious 2",year:"2008",duration:"145"}        
      ],

    };
    this.addMovie = this.addMovie.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
  }
  
 
  removeMovie(toDelete){
    let list = this.state.movies.filter(film => {
      if(film.title !== toDelete.title){
        return film;
      }
    });
    this.setState(
      { 
        movies: list
      })
  }



  addMovie(new_movie){
      this.setState({
        movies : [...this.state.movies, new_movie]
      });
  }

	render(){
    return (
   <div className='App'>
      <h1 className='Header'>MY FAVOURITE MOVIES APP</h1>
      <AddMovieForm addMovie={this.addMovie}/>
      <MovieList movies = {this.state.movies} removeMovie = {this.removeMovie}  />
    </div>
    );
  }
}
