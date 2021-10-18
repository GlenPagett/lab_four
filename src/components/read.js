import React, { Component } from 'react';

class Read extends Component 
{
    componentDidMount(){
        axios.get("https://jsonblob.com/api/jsonblob/8949445504570986496")
        .then((response)=>{
            this.setState({mymovies: response.data.movies})
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    state = {
        mymovies: []
    };

    render(){
        return(
            <div>
                <h1>This is my Read Component.</h1>
                <Movies films={this.state.mymovies}></Movies>
            </div>
        );
    }
}
export default Read;