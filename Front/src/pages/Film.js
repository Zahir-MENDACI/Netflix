import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import { fetchData } from '../axios';
import { useParams } from "react-router-dom";

function Film() {
    const [movie, setMovie] = useState("");
    const params = useParams()
    useEffect(() => {
        fetchData(`http://localhost:7070/films/${params.id}`)
            .then(res => {
                console.log(res)
                setMovie(res.data)
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <div className='Film'>
            {
                movie && (
                    <>
                        <ReactPlayer url={movie.url} width={"1000px"} height="600px" />
                        <h1>{movie.title}</h1>
                        <p>Categorie : {movie.category}</p>
                        <p>Année de sortie : {movie.released_date.substring(0,4)}</p>
                        <p>{movie.global_description}</p>
                    </>
                )
            }
        </div>
    );
};

export default Film;