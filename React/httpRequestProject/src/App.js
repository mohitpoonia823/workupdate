import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [showMovies, setShowMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

 

 const fetchMovieHandler = useCallback( async()=> {
    setIsLoading(true);
    setErrors(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const transformMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releasedDate: movieData.released_date,
        };
      });
      setShowMovies(transformMovies);
      setIsLoading(false);
    } catch (error) {
      setErrors(error.message);
    }
    setIsLoading(false);
  },[]);

  useEffect(()=>{
    fetchMovieHandler();
  },[fetchMovieHandler])

  let content = <p>Found no movies.</p>;
  if (showMovies.length > 0) {
    content = <MoviesList movies={showMovies} />;
  }

  if (errors) {
    content = <p>{errors}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
