import React from "react";
import AnimeCard from "./AnimeCard";

const TopAiring = ({ topAiringAnimes }) => {
    return (
        <div className="headerAnime">
            <h3>Top 5 Airing Animes At the Moment!</h3>
            <div className="animerow">
                {topAiringAnimes.map((x) => (
                    <AnimeCard anime={x} key={x.mal_id} />
                ))}
            </div>
        </div>
    );
};

export default TopAiring;
