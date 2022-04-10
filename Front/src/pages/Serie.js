import React, { useEffect, useState } from 'react';
import { fetchData } from '../axios';
import { useParams } from "react-router-dom";

function Serie() {
    const [serie, setSerie] = useState("");
    const [episodes, setEpisodes] = useState([]);
    const params = useParams()
    useEffect(() => {
        fetchData(`http://localhost:7070/series/${params.id}`)
            .then(res => setSerie(res.data))
            .catch(err => console.log(err));
        fetchData(`http://localhost:7070/series/${params.id}/episodes?sort=["num", "asc"]`)
            .then(res => setEpisodes(res.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className='Serie'>
            {
                serie && (
                    <>
                        <h1>{serie.title}</h1>
                        <p>Categorie : {serie.category}</p>
                        <p>Année de sortie : {serie.released_date.substring(0,4)}</p>
                        <p>Episodes : {serie.nb_episodes}</p>
                        <p>{serie.global_description}</p>
                        <ul>
                            {
                                episodes && (
                                    episodes.map(episode => {
                                        return <li><a href={`${serie.id}/episode/${episode.id}`}>{episode.title}</a></li>
                                    })
                                )
                            }
                        </ul>
                    </>
                )
            }
        </div>
    );
};

export default Serie;