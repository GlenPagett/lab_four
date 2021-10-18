import React, { Component } from 'react';

class Create extends Component 
{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    handleSubmit(event) {
        console.log("Button clicked - Name: "+this.state.Title+ "Year: "+this.state.Year+ "Poster: "+this.state.Poster);
        event.preventDefault();  
    }

    onChangeMovieName(event){
        this.setState({
            Title: event.target.value
        })
    }

    onChangeMovieYear(event){
        this.setState({
            Year: event.target.value
        })
    }

    onChangeMoviePoster(event){
        this.setState({
            Year: event.target.value
        })
    }

    render(){
        return(
            <div>
                <h1>This is my Create Component.</h1>

                <div className="form-group">
                    <label>Add Movie Name: </label>
                    <input type="text"
                    className="form-control"
                    value={this.state.Title}
                    onChange={this.onChangeMovieName}>
                    </input>
                </div>

                <div className="form-group">
                    <label>Add Movie Year: </label>
                    <input type="text"
                    className="form-control"
                    value={this.state.Year}
                    onChange={this.onChangeMovieYear}>
                    </input>
                </div>

                <div className="form-group">
                    <label>Add Movie Poster: </label>
                    <textarea type="text"
                    className="form-control"
                    value={this.state.Poster}
                    onChange={this.onChangeMoviePoster}>
                    </textarea>
                </div>

                <div className='form-group'>
                    <input type="submit" value="add movie" className="btn btn-primary"></input>
                </div>
            </div>
        );
    }
}
export default Create;