import React from "react";
import styled from "styled-components";

const AnimeCard = ({ anime }) => {
    return (
        <StyledCard>
            <a href={anime.url} target="_blank" rel="noref">
                <StyledFigure>
                    <img src={anime.image_url} />
                    <h3>{anime.title}</h3>
                </StyledFigure>
            </a>
        </StyledCard>
    );
};

const StyledCard = styled.article`
    h3 {
        font-size: 1em;
        color: #b5c2c7;
        &:hover {
            color: #dfdbd8;
            font-size: 1.5em;
        }
    }
`;

const StyledFigure = styled.figure`
    width: 20rem;
    height: 50vh;

    img {
        width: 100%;
        max-height: 40vh;
    }
`;

export default AnimeCard;
