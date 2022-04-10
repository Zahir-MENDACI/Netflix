import React from 'react';
import Banner from '../components/Banner';
import Row from '../components/Row';

function Home () {
    return (
        <div>
            <Banner fetchUrl="http://localhost:7070/films" />
            <Row
                title="Films"
                fetchUrl="http://localhost:7070/films"
                isLargeRow
            />
            <Row
                title="Series"
                fetchUrl="http://localhost:7070/series"
                isLargeRow
            />
        </div>
    );
};

export default Home;