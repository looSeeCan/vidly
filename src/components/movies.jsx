import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { getMovies } from './fakeMovieService';



class Movie extends Component {
    state = {
        movies: getMovies() ///  calls the getMovies function and returns the movies array of objects
    };

    handleDelete(movie) {
        console.table(movie);
        /// use setState and make an array with all the movies except for the one we delete
        // const movieArrayWithoutDeletedMovie = this.state.movies.filter(m => m._id !== movie._id);
        // this.setState({movies: movieArrayWithoutDeletedMovie});
        this.setState({movies: this.state.movies.filter(item => item._id !== movie._id)});
    };

    renderMovies() {
        console.log(this.state.movies);
        return <tbody>{this.state.movies.map(movie => 
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                )}</tbody>
    };

    render() {
        return (
           // {/* /// zen coding */}
            //{/* ///type the above zen coding and press enter to get the table below */}
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th>Delete</th>{/*add the delet button */}
                    </tr>
                </thead>
                {this.renderMovies()}{/*calling a method that does the same as below */}
                {/* <tbody>
                    {this.state.movies.map(movie => <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                    </tr> )}
                    
                </tbody> */}
            </table>

            
        )
    }
};

export {Movie};
