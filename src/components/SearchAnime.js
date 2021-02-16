import React from "react";
import AnimeCard from "./AnimeCard";
import styled from "styled-components";

const SearchAnime = (props) => {
    return (
        <StyledSearch>
            <div>
                <form className="search-box" onSubmit={props.HandleSearch}>
                    <StyledSearchBar
                        type="search"
                        placeholder="Search for your next anime here.."
                        value={props.search}
                        onChange={(e) => props.setSearch(e.target.value)}
                    ></StyledSearchBar>
                </form>
            </div>
            <StyledAnimeList>
                {props.animeList.map((x) => (
                    <AnimeCard anime={x} key={x.mal_id} />
                ))}
            </StyledAnimeList>
        </StyledSearch>
    );
};

const StyledSearchBar = styled.input`
    margin: auto;
    border-radius: 500px;
    background-color: white;
    width: 60vh;
`;

const StyledSearch = styled.main``;

const StyledAnimeList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default SearchAnime;
