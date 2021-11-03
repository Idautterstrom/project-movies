import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MOVIES_URL } from '../utils/urls'

/* Styled component? 
Const Section = styled.section`

`; */

const List = ({ movie }) => {
  const [movies, setMovies] = useState([])

  useEffect (() => {
    fetch(MOVIES_URL).then((res) => res.json()).then((json) => {
      setMovies(json.results)
    });
  }, []);

  return (
<div className="mainPage">
{movies.map((movie) => (
  <Link key={movie.id} to={`/movies/${movie.id}`}>
    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />

    <div className="details">
      <h1>{movie.title}</h1>
      <p>Released {movie.release_date}</p>
    </div>
  </Link>
))}
</div>
  );
};

export default List;