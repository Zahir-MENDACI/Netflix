import React, { useState, useEffect } from "react";
import { fetchData } from "../axios";
import { useNavigate } from "react-router-dom"
import "./Row.css";

function Row(props) {
  const { title, fetchUrl, isLargeRow } = props;
  const [movies, setMovies] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    fetchData(fetchUrl)
      .then(res => {
          console.log(res)
          if (Array.isArray(res.data)){
              setMovies(res.data)
          }
      })
      .catch(err => console.log(err));
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie, i) => {
          return (
            <img
              key={i}
              // onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={movie.poster}
              alt={movie.title}
              onClick={()=> title === "Films" ? navigate(`film/${movie.id}`) : navigate(`serie/${movie.id}`)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
