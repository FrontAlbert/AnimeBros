import React from "react";
import AnimeCard from "./AnimeCard";

const TopRecommended = ({ recommended }) => {
    return (
        <div>
            <div className="headerAnime">
                <h3>Top 5 Must Watches!</h3>
                <div className="animerow">
                    {recommended.map((x) => (
                        <AnimeCard anime={x} key={x.mal_id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopRecommended;
