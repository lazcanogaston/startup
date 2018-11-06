import React, { Component } from 'react';
import '../css/addMovieForm.css';
 class AddMovieForm extends Component{
	constructor(props){
		super(props);
		this.state = {
      title: '',
      year: '',
      duration: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
	}

  handleInput(e) {
    const {value, name} = e.target
    this.setState({
      [name]: value
    });
  }

  handleAddMovie(e){
    e.preventDefault();
    if(this.state.title!=='' && this.state.duration!=='' && this.state.year!==''){
      this.props.addMovie(this.state);
      this.setState({  //cleans the input once the movie is added
        title: '',
        year: '',
        duration: ''
      });
    }
   else{
     alert('All inputs must be completed!')
   }   
  }

  render(){
    return(
      <div className = 'AddMovieForm'>
        <h2>ADD MOVIE!</h2>
        <form >

        <label for="title"> Title: </label> 
          <input id="title" type = "text" name = "title"  value = {this.state.title} onChange = {this.handleInput} required/>
        <br/>

        <label for="year"> Year:  </label>
          <input id="year" type = "number" name = "year"  value = {this.state.year} onChange = {this.handleInput} required/>   
        <br/>

        <label for="duration"> Duration:  </label>
          <input id="duration" type = "number" name = "duration"  value = {this.state.duration} onChange = {this.handleInput} required/>
        <br/>

        <button className="Btn" type = "submit" onClick = {this.handleAddMovie}>Add-Movie</button>
        </form>
      </div>
      
    )
  }
}

export default AddMovieForm;