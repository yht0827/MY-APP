import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';


const movies = [
  {
    title: "Matrix",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg"   
  },
  {
    title: "Full Metal Jacket",
    poster: "data:image/webp;base64,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"
  },
  {
    title: "Oldboy",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg"
  },
  {
    title: "Star Wars",
    poster: "http://moonhak.co.kr/home/wp-content/uploads/bookcover/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88-%EC%94%A8%EB%84%A4%EC%95%84%ED%8A%B84_%ED%91%9C1_web-300x374.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
      {movies.map(movie => {
        return <Movie title={movie.title} poster={movie.poster} /> 
      })}  
      </div>
    );
  }
}

export default App;