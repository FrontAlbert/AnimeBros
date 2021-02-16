import React from "react";
import AnimeCard from "./AnimeCard";

const TopUpcoming = ({ topUpcoming }) => {
    return (
        <div>
            <div className="headerAnime">
                <h3>Most Hyped 5 Upcoming Animes!</h3>
                <div className="animerow">
                    {topUpcoming.map((x) => (
                        <AnimeCard anime={x} key={x.mal_id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopUpcoming;
