import React from 'react';
import moviesList from './movies.json';
import Card from './Card.js';
function RenderMovies(props){
     
    let movies = moviesList.series.map((data) => {
        return <Card img={data.cover} title={data.title}></Card>
    })
    return(
        <>{movies}</>
    );
}
export default RenderMovies;