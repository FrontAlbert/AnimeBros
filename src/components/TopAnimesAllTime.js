import React from "react";
import AnimeCard from "./AnimeCard";
import styled from "styled-components";

const TopAnimesAllTime = ({ recommended2 }) => {
    return (
        <div>
            <div className="headerAnime">
                <h3>Top Animes of All Time!</h3>
                <StyledAnimes>
                    {recommended2.map((x) => (
                        <AnimeCard anime={x} key={x.mal_id} />
                    ))}
                </StyledAnimes>
            </div>
        </div>
    );
};

const StyledAnimes = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default TopAnimesAllTime;
