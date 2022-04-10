import React, { useState, useEffect } from "react";
import { fetchData } from "../axios";

import "./Banner.css";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData(fetchUrl)
      .then(res =>
        setMovie(
          res.data[
            Math.floor(Math.random() * res.data.length - 1)
          ]
        )
      )
      .catch(err => console.log(err));
  }, []);

  function truncate(str, n) {
    return str && str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    //   Background image
    <header
      className="banner"
      style={
        movie && {
          backgroundSize: "cover",
          backgroundImage: `url(
            ${movie.poster}
        )`,
          backgroundPosition: "center center"
        }
      }
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {(movie && movie.title)}
        </h1>

        <h1 className="banner__description">
          {movie && truncate(movie.global_description, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
