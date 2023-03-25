import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';
const API_KEY = process.env.REACT_APP_KEY;

class Main extends React.Component {
    state = {
        movies: [],
    };
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=4afd2af9&s=the last of us')
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    }

    searchMovies = (str, type = 'all') => {
        fetch(
            `http://www.omdbapi.com/?apikey=4afd2af9&s=${str}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    };
    render() {
        const { movies } = this.state;

        return (
            <main className='container content'>
                <Search searchMovies={this.searchMovies} />
                {movies.lenght ? (
                    <Movies movies={this.state.movies} />
                ) : (
                    <Preloader />
                )}
            </main>
        );
    }
}

export { Main };
