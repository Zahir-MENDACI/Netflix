import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import { fetchData } from '../axios';
import { useParams } from "react-router-dom";

function Episode() {
    const [episode, setEpisode] = useState("");
    const params = useParams()
    useEffect(() => {
        fetchData(`http://localhost:7070/series/${params.id}/episodes/${params.idEpisode}`)
            .then(res => setEpisode(res.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className='Episode'>
            {
                episode && (
                    <>
                        <ReactPlayer url={episode.url} width={"1000px"} height="600px" />
                        <h1>{episode.title}</h1>
                        <p>{episode.description}</p>
                    </>
                )
            }
        </div>
    );
};

export default Episode;